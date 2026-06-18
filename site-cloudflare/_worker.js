// Kors Motion CMS Worker
// Handles /api/data (GET) and /api/save (POST)
// KV binding: KORSMOTION_DATA

const ADMIN_PASSWORD = 'korsmotion2026';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
};

const SKIP_EXTENSIONS = ['js', 'css', 'png', 'jpg', 'jpeg', 'gif', 'webp', 'ico', 'svg', 'woff', 'woff2', 'mp4', 'webm'];

const MIME_BY_EXT = {
  webm: 'video/webm',
  mp4: 'video/mp4',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
};

function mimeFromPath(path) {
  const ext = (path.split('.').pop() || '').toLowerCase();
  return MIME_BY_EXT[ext] || 'application/octet-stream';
}

function isMediaPath(path) {
  const ext = (path.split('.').pop() || '').toLowerCase();
  return ext in MIME_BY_EXT;
}

function normalizeFilePath(path) {
  return String(path || '')
    .replace(/^site-cloudflare\//, '')
    .replace(/^\//, '');
}

function kvFileKey(path) {
  return `file:${normalizeFilePath(path)}`;
}

function parseKvFileRaw(raw, path) {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      if (typeof parsed.data === 'string') {
        return {
          mime: parsed.mime || parsed.contentType || mimeFromPath(path),
          data: parsed.data,
        };
      }
      if (typeof parsed.base64 === 'string') {
        return {
          mime: parsed.mime || parsed.contentType || mimeFromPath(path),
          data: parsed.base64,
        };
      }
    }
  } catch (_) {}
  return { mime: mimeFromPath(path), data: raw };
}

function base64ToBytes(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function kvFileResponse(file, path) {
  const mime = file.mime || mimeFromPath(path);
  const bytes = base64ToBytes(file.data);
  return new Response(bytes, {
    headers: {
      'Content-Type': mime,
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

async function getKvFile(env, path) {
  const normalized = normalizeFilePath(path);
  const keys = [kvFileKey(normalized), normalized, `media:${normalized}`];
  for (const key of keys) {
    const raw = await env.KORSMOTION_DATA.get(key);
    if (raw) return parseKvFileRaw(raw, normalized);
  }
  return null;
}

async function putKvFile(env, path, mime, dataB64) {
  const normalized = normalizeFilePath(path);
  const payload = JSON.stringify({
    mime: mime || mimeFromPath(normalized),
    data: dataB64,
  });
  await env.KORSMOTION_DATA.put(kvFileKey(normalized), payload);
  return { path: normalized, mime: mime || mimeFromPath(normalized) };
}

async function serveKvFileIfPresent(env, pathname) {
  const path = normalizeFilePath(pathname);
  if (!path || path.startsWith('api/')) return null;
  const file = await getKvFile(env, path);
  if (!file?.data) return null;
  return kvFileResponse(file, path);
}

async function serveAssetOrKv(request, env) {
  const url = new URL(request.url);
  const path = normalizeFilePath(url.pathname);

  if (request.method === 'GET' && isMediaPath(path)) {
    const kvRes = await serveKvFileIfPresent(env, url.pathname);
    if (kvRes) return kvRes;
  }

  const assetRes = await env.ASSETS.fetch(request);

  if (
    request.method === 'GET' &&
    isMediaPath(path) &&
    assetRes.headers.get('Content-Type')?.includes('text/html')
  ) {
    const kvRes = await serveKvFileIfPresent(env, url.pathname);
    if (kvRes) return kvRes;
  }

  return assetRes;
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

function shouldSkipTracking(pathname) {
  if (pathname.startsWith('/api/')) return true;
  if (pathname.startsWith('/admin')) return true;
  const dot = pathname.lastIndexOf('.');
  if (dot === -1) return false;
  return SKIP_EXTENSIONS.includes(pathname.slice(dot + 1).toLowerCase());
}

async function trackVisitor(request, env) {
  const url = new URL(request.url);
  if (request.method !== 'GET') return;
  if (shouldSkipTracking(url.pathname)) return;

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const today = new Date().toISOString().split('T')[0];
  const visitKey = `visit:${today}:${ip.slice(0, 8)}`;

  if (await env.KORSMOTION_DATA.get(visitKey)) return;
  await env.KORSMOTION_DATA.put(visitKey, '1', { expirationTtl: 86400 });
}

const DEFAULT_PROJECTS = { projects: [] };
const DEFAULT_SETTINGS = {
  show_portfolio_section: true,
  show_services_section: true,
  show_dev_section: false,
  show_reviews_section: true,
  show_hero_section: true,
  apps: [],
};

const DEFAULT_REVIEWS = {
  reviews: [
    { id: 'rev_seed_1', name: 'Alex Weber', role: 'Co-founder, Apex Core', text: '«Sergej hat unsere Logo-Animation in einer Woche erstellt — sieht aus wie ein Kinofilm.»', stars: 5, date: '2024-06-12', status: 'approved' },
    { id: 'rev_seed_2', name: 'Maria Klein', role: 'Marketing Director', text: '«Ein Profi auf höchstem Niveau. Versteht die Aufgabe auf Anhieb.»', stars: 5, date: '2024-08-03', status: 'approved' },
    { id: 'rev_seed_3', name: 'Daniel Roth', role: 'Brand Director', text: '«Ideales Ergebnis vom ersten Versuch. Keine endlosen Korrekturen.»', stars: 5, date: '2024-10-21', status: 'approved' },
  ],
};

const SEED_REVIEW_TEXTS = {
  rev_seed_1: '«Sergej hat unsere Logo-Animation in einer Woche erstellt — sieht aus wie ein Kinofilm.»',
  rev_seed_2: '«Ein Profi auf höchstem Niveau. Versteht die Aufgabe auf Anhieb.»',
  rev_seed_3: '«Ideales Ergebnis vom ersten Versuch. Keine endlosen Korrekturen.»',
};

function isBlockedReview(review) {
  const name = (review?.name || '').trim().toLowerCase();
  const role = (review?.role || '').trim().toLowerCase();
  return name === 'sergej korsakov' && (role.includes('bauinginier') || role.includes('bauingenieur'));
}

function sanitizeReviewsList(reviews) {
  return (Array.isArray(reviews) ? reviews : [])
    .filter(r => !isBlockedReview(r))
    .map(r => (SEED_REVIEW_TEXTS[r.id] ? { ...r, text: SEED_REVIEW_TEXTS[r.id] } : r));
}

const DEFAULT_HERO = {
  show: true,
  media: '',
  cardMedia: '',
  mediaOpacity: 44,
  content: {
    de: { badge: 'Motion Design Studio · Schweiz', title: 'Bewegung, die<br><em>eindruckt</em>', subtitle: 'Kors Motion ist Ihr Spezialist für Motion Design.', btn1Text: 'Projekt anfragen', btn1Link: '#contact', btn2Text: 'Portfolio ansehen', btn2Link: '#portfolio' },
    en: { badge: 'Motion Design Studio · Switzerland', title: 'Motion<br>that <em>resonates</em>', subtitle: 'Kors Motion is a premium motion design studio.', btn1Text: 'Discuss a project', btn1Link: '#contact', btn2Text: 'View portfolio', btn2Link: '#portfolio' },
    ru: { badge: 'Студия моушн-дизайна · Швейцария', title: 'Движение,<br>которое <em>запоминается</em>', subtitle: 'Kors Motion — студия моушн-дизайна.', btn1Text: 'Обсудить проект', btn1Link: '#contact', btn2Text: 'Смотреть работы', btn2Link: '#portfolio' },
    fr: { badge: 'Studio de Motion Design · Suisse', title: 'Un mouvement<br>qui <em>marque les esprits</em>', subtitle: 'Kors Motion est un studio de motion design.', btn1Text: 'Discuter d\'un projet', btn1Link: '#contact', btn2Text: 'Voir le portfolio', btn2Link: '#portfolio' },
    it: { badge: 'Studio di Motion Design · Svizzera', title: 'Un movimento<br>che <em>lascia il segno</em>', subtitle: 'Kors Motion è uno studio di motion design.', btn1Text: 'Parliamo del progetto', btn1Link: '#contact', btn2Text: 'Vedi il portfolio', btn2Link: '#portfolio' },
  },
};

function normalizeSettings(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  return {
    ...DEFAULT_SETTINGS,
    ...s,
    show_portfolio_section: s.show_portfolio_section === false ? false : true,
    show_services_section: s.show_services_section === false ? false : true,
    show_dev_section: s.show_dev_section === true,
    show_reviews_section: s.show_reviews_section === false ? false : true,
    show_hero_section: s.show_hero_section === false ? false : true,
    apps: Array.isArray(s.apps) ? s.apps : DEFAULT_SETTINGS.apps,
    ui: s.ui && typeof s.ui === 'object' ? s.ui : {},
  };
}

async function applySectionFlags(env, settings) {
  const [portfolio, services, dev, reviews, hero] = await Promise.all([
    env.KORSMOTION_DATA.get('flag:portfolio'),
    env.KORSMOTION_DATA.get('flag:services'),
    env.KORSMOTION_DATA.get('flag:dev'),
    env.KORSMOTION_DATA.get('flag:reviews'),
    env.KORSMOTION_DATA.get('flag:hero'),
  ]);
  if (portfolio !== null) settings.show_portfolio_section = portfolio === '1';
  if (services !== null) settings.show_services_section = services === '1';
  if (dev !== null) settings.show_dev_section = dev === '1';
  if (reviews !== null) settings.show_reviews_section = reviews === '1';
  if (hero !== null) settings.show_hero_section = hero === '1';
  return settings;
}

function sectionVisibilityPayload(settings) {
  return {
    portfolio: settings.show_portfolio_section !== false,
    services: settings.show_services_section !== false,
    development: !!settings.show_dev_section,
    reviews: settings.show_reviews_section !== false,
    hero: settings.show_hero_section !== false,
  };
}

async function persistSectionFlags(env, settings) {
  return Promise.all([
    env.KORSMOTION_DATA.put('flag:portfolio', settings.show_portfolio_section === false ? '0' : '1'),
    env.KORSMOTION_DATA.put('flag:services', settings.show_services_section === false ? '0' : '1'),
    env.KORSMOTION_DATA.put('flag:dev', settings.show_dev_section ? '1' : '0'),
    env.KORSMOTION_DATA.put('flag:reviews', settings.show_reviews_section === false ? '0' : '1'),
    env.KORSMOTION_DATA.put('flag:hero', settings.show_hero_section === false ? '0' : '1'),
  ]);
}

function normalizeReviews(raw) {
  const data = raw && typeof raw === 'object' ? raw : {};
  const reviews = Array.isArray(data.reviews) ? data.reviews : DEFAULT_REVIEWS.reviews;
  return { reviews: sanitizeReviewsList(reviews) };
}

function normalizeHero(raw) {
  const data = raw && typeof raw === 'object' ? raw : {};
  const opacity = Number(data.mediaOpacity);
  return {
    show: data.show !== false,
    media: typeof data.media === 'string' ? data.media : '',
    cardMedia: typeof data.cardMedia === 'string' ? data.cardMedia : '',
    mediaOpacity: Number.isFinite(opacity) ? Math.min(100, Math.max(0, Math.round(opacity))) : 44,
    content: { ...DEFAULT_HERO.content, ...(data.content || {}) },
  };
}

const FORMSPREE_CALCULATOR_ID = 'xpqbjznb';

const CALC_SUCCESS_MSG = {
  ru: 'Спасибо! Мы свяжемся с вами в течение 24 часов.',
  de: 'Danke! Wir melden uns innerhalb von 24 Stunden.',
  en: 'Thank you! We will contact you within 24 hours.',
  fr: 'Merci ! Nous vous contacterons dans les 24 heures.',
  it: 'Grazie! Vi contatteremo entro 24 ore.',
};

function normalizeCalculator(data) {
  if (!data || typeof data !== 'object' || !Array.isArray(data.groups)) {
    return { visible: false, groups: [] };
  }
  return {
    visible: data.visible === true,
    groups: data.groups,
  };
}

async function loadCalculatorDefault(env, request) {
  const defUrl = new URL(request.url);
  defUrl.pathname = '/data/calculator-default.json';
  defUrl.search = '';
  try {
    const res = await env.ASSETS.fetch(defUrl.toString());
    if (res.ok) return normalizeCalculator(await res.json());
  } catch (_) {}
  return { visible: false, groups: [] };
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    ctx.waitUntil(trackVisitor(request, env));

    // Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    // GET /api/data — load projects + settings from KV, or a single key via ?key=
    if (url.pathname === '/api/data' && request.method === 'GET') {
      const kvKey = url.searchParams.get('key');
      if (kvKey) {
        const raw = await env.KORSMOTION_DATA.get(kvKey);
        let value = null;
        if (raw) {
          try {
            value = JSON.parse(raw);
          } catch {
            value = raw;
          }
        }
        return json({ key: kvKey, value });
      }

      const [pRaw, sRaw] = await Promise.all([
        env.KORSMOTION_DATA.get('projects'),
        env.KORSMOTION_DATA.get('settings'),
      ]);
      const projects = pRaw ? JSON.parse(pRaw) : DEFAULT_PROJECTS;
      let settings = normalizeSettings(sRaw ? JSON.parse(sRaw) : {});
      settings = await applySectionFlags(env, settings);
      return json({ projects, settings, sectionVisibility: sectionVisibilityPayload(settings) });
    }

    // POST /api/save — save projects + settings to KV, or a generic key/value pair
    if (url.pathname === '/api/save' && request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: 'Invalid JSON' }, 400);
      }

      if (body.key != null && body.value !== undefined) {
        const key = String(body.key);
        const ordersKey = 'bestellungen:waldner_10_3:orders';
        if (key !== ordersKey && body.password !== ADMIN_PASSWORD) {
          return json({ error: 'Unauthorized' }, 401);
        }
        if (key.startsWith('file:') || key.startsWith('media:')) {
          const filePath = key.replace(/^(file:|media:)/, '');
          const mime = body.mime || body.contentType || mimeFromPath(filePath);
          const dataB64 = typeof body.value === 'string'
            ? body.value
            : (body.value?.data || body.value?.base64 || '');
          if (!dataB64) return json({ error: 'File data required' }, 400);
          const saved = await putKvFile(env, filePath, mime, dataB64);
          return json({ ok: true, ...saved });
        }
        const val = typeof body.value === 'string' ? body.value : JSON.stringify(body.value);
        await env.KORSMOTION_DATA.put(key, val);
        return json({ ok: true });
      }

      if (body.password !== ADMIN_PASSWORD) {
        return json({ error: 'Unauthorized' }, 401);
      }

      const settings = normalizeSettings(body.settings);
      await Promise.all([
        env.KORSMOTION_DATA.put('projects', JSON.stringify(body.projects)),
        env.KORSMOTION_DATA.put('settings', JSON.stringify(settings)),
        persistSectionFlags(env, settings),
      ]);

      return json({ ok: true, sectionVisibility: sectionVisibilityPayload(settings) });
    }

    // GET /api/analytics — unique visitors from KV visit keys
    if (url.pathname === '/api/analytics' && request.method === 'GET') {
      const auth = request.headers.get('X-Admin-Password');
      if (auth !== ADMIN_PASSWORD) return json({ error: 'Unauthorized' }, 401);

      try {
        const now = new Date();
        const today = now.toISOString().split('T')[0];
        const since7 = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        const since30 = new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

        const list = await env.KORSMOTION_DATA.list({ prefix: 'visit:' });
        const keys = list.keys.map(k => k.name);

        const todayCount = keys.filter(k => k.startsWith(`visit:${today}`)).length;
        const weekCount = keys.filter(k => {
          const d = k.split(':')[1];
          return d >= since7 && d <= today;
        }).length;
        const monthCount = keys.filter(k => {
          const d = k.split(':')[1];
          return d >= since30 && d <= today;
        }).length;

        return json({
          data: {
            viewer: {
              accounts: [{
                todayViews: [{ sum: { count: todayCount } }],
                week: [{ sum: { count: weekCount } }],
                total: [{ sum: { count: monthCount } }],
              }],
            },
          },
        });
      } catch (e) {
        return json({ error: e.message }, 500);
      }
    }

    // GET /api/services — load services from KV
    if (url.pathname === '/api/services' && request.method === 'GET') {
      const [raw, sRaw] = await Promise.all([
        env.KORSMOTION_DATA.get('services_data'),
        env.KORSMOTION_DATA.get('settings'),
      ]);
      const data = raw ? JSON.parse(raw) : { services: [] };
      let settings = normalizeSettings(sRaw ? JSON.parse(sRaw) : {});
      settings = await applySectionFlags(env, settings);
      return json({
        services: data.services || [],
        show_services_section: settings.show_services_section !== false,
        sectionVisibility: sectionVisibilityPayload(settings),
      });
    }

    // POST /api/services — save services to KV
    if (url.pathname === '/api/services' && request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: 'Invalid JSON' }, 400);
      }

      if (body.password !== ADMIN_PASSWORD) {
        return json({ error: 'Unauthorized' }, 401);
      }

      await env.KORSMOTION_DATA.put('services_data', JSON.stringify({ services: body.services }));
      return json({ ok: true });
    }

    // GET /api/reviews — approved for site; all for admin (X-Admin-Password)
    if (url.pathname === '/api/reviews' && request.method === 'GET') {
      const raw = await env.KORSMOTION_DATA.get('reviews_data');
      const data = normalizeReviews(raw ? JSON.parse(raw) : {});
      const isAdmin = request.headers.get('X-Admin-Password') === ADMIN_PASSWORD;
      const reviews = isAdmin
        ? data.reviews
        : data.reviews.filter(r => r.status === 'approved');
      return json({ reviews });
    }

    // POST /api/reviews — public submit OR admin save
    if (url.pathname === '/api/reviews' && request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: 'Invalid JSON' }, 400);
      }

      if (body.password === ADMIN_PASSWORD && Array.isArray(body.reviews)) {
        await env.KORSMOTION_DATA.put('reviews_data', JSON.stringify({ reviews: body.reviews }));
        return json({ ok: true });
      }

      const name = (body.name || '').trim();
      const text = (body.text || '').trim();
      if (!name || !text) return json({ error: 'Name and text required' }, 400);

      const raw = await env.KORSMOTION_DATA.get('reviews_data');
      const data = normalizeReviews(raw ? JSON.parse(raw) : {});
      const review = {
        id: 'rev_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name,
        role: (body.role || '').trim(),
        text,
        stars: Math.min(5, Math.max(1, parseInt(body.stars, 10) || 5)),
        date: new Date().toISOString().split('T')[0],
        status: 'pending',
      };
      data.reviews.unshift(review);
      await env.KORSMOTION_DATA.put('reviews_data', JSON.stringify(data));
      return json({ ok: true, id: review.id });
    }

    // GET /api/hero
    if (url.pathname === '/api/hero' && request.method === 'GET') {
      const raw = await env.KORSMOTION_DATA.get('hero_data');
      return json(normalizeHero(raw ? JSON.parse(raw) : {}));
    }

    // GET /api/calculator
    if (url.pathname === '/api/calculator' && request.method === 'GET') {
      const raw = await env.KORSMOTION_DATA.get('calculator_data');
      if (raw) return json(normalizeCalculator(JSON.parse(raw)));
      return json(await loadCalculatorDefault(env, request));
    }

    // GET /api/clients
    if (url.pathname === '/api/clients' && request.method === 'GET') {
      const raw = await env.KORSMOTION_DATA.get('clients');
      const clients = raw ? JSON.parse(raw) : [];
      return json({ clients: Array.isArray(clients) ? clients : [] });
    }

    // POST /api/clients — admin save
    if (url.pathname === '/api/clients' && request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: 'Invalid JSON' }, 400);
      }
      if (body.password !== ADMIN_PASSWORD) return json({ error: 'Unauthorized' }, 401);
      const clients = Array.isArray(body.clients) ? body.clients : [];
      await env.KORSMOTION_DATA.put('clients', JSON.stringify(clients));
      return json({ ok: true });
    }

    // POST /api/calculator — admin save
    if (url.pathname === '/api/calculator' && request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: 'Invalid JSON' }, 400);
      }
      if (body.password !== ADMIN_PASSWORD) return json({ error: 'Unauthorized' }, 401);
      const calc = normalizeCalculator(body.calculator || body);
      await env.KORSMOTION_DATA.put('calculator_data', JSON.stringify(calc));
      return json({ ok: true });
    }

    // POST /api/calculator-request — public lead form
    if (url.pathname === '/api/calculator-request' && request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: 'Invalid JSON' }, 400);
      }
      const name = (body.name || '').trim();
      const email = (body.email || '').trim();
      const phone = (body.phone || '').trim();
      const lang = (body.lang || 'ru').toLowerCase();
      const selectedOptions = Array.isArray(body.selectedOptions) ? body.selectedOptions : [];
      const totalInternal = parseInt(body.totalInternal, 10) || 0;
      if (!name || !email) return json({ error: 'Name and email required' }, 400);

      const optionsList = selectedOptions.length
        ? selectedOptions.map(o => `- ${o}`).join('\n')
        : '—';
      const adminMessage = [
        `Новый лид: ${name} (${email}, ${phone || '—'})`,
        `Язык: ${lang}`,
        'Выбрано:',
        optionsList,
        `Внутренняя расчетная стоимость: ${totalInternal} CHF`,
      ].join('\n');

      try {
        const fsRes = await fetch(`https://formspree.io/f/${FORMSPREE_CALCULATOR_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: `Новый лид: ${name}`,
            _replyto: email,
            message: adminMessage,
            name,
            email,
            phone,
            lang,
            selectedOptions: optionsList,
            totalInternal,
          }),
        });
        if (!fsRes.ok) throw new Error('Formspree error');
      } catch (e) {
        return json({ error: 'Failed to send request' }, 500);
      }

      return json({
        ok: true,
        message: CALC_SUCCESS_MSG[lang] || CALC_SUCCESS_MSG.en,
      });
    }

    // POST /api/upload — save binary media to KV with MIME metadata
    if (url.pathname === '/api/upload' && request.method === 'POST') {
      const ct = request.headers.get('Content-Type') || '';
      let password;
      let path;
      let mime;
      let dataB64;

      try {
        if (ct.includes('application/json')) {
          const body = await request.json();
          password = body.password;
          path = body.path;
          mime = body.mime || body.contentType;
          dataB64 = body.data || body.base64;
        } else if (ct.includes('multipart/form-data')) {
          const form = await request.formData();
          password = form.get('password');
          path = form.get('path');
          const file = form.get('file');
          if (file && typeof file === 'object' && 'arrayBuffer' in file) {
            mime = file.type || mimeFromPath(path || file.name || '');
            if (!path) path = file.name;
            const buf = await file.arrayBuffer();
            const bytes = new Uint8Array(buf);
            let binary = '';
            for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
            dataB64 = btoa(binary);
          }
        } else {
          return json({ error: 'Unsupported Content-Type' }, 415);
        }
      } catch {
        return json({ error: 'Invalid upload payload' }, 400);
      }

      if (password !== ADMIN_PASSWORD) return json({ error: 'Unauthorized' }, 401);
      if (!path || !dataB64) return json({ error: 'path and data required' }, 400);

      const saved = await putKvFile(env, path, mime, dataB64);
      return json({ ok: true, ...saved });
    }

    // POST /api/hero — admin save
    if (url.pathname === '/api/hero' && request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: 'Invalid JSON' }, 400);
      }
      if (body.password !== ADMIN_PASSWORD) return json({ error: 'Unauthorized' }, 401);
      const hero = normalizeHero(body.hero || body);
      await env.KORSMOTION_DATA.put('hero_data', JSON.stringify(hero));
      return json({ ok: true });
    }

    // Everything else — KV media first, then static assets from Pages
    return serveAssetOrKv(request, env);
  },
};
