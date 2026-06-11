// Kors Motion CMS Worker
// Handles /api/data (GET), /api/save (POST), /api/analytics (GET)
// KV binding: KORSMOTION_DATA

const ADMIN_PASSWORD = 'korsmotion2026';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const SKIP_EXTENSIONS = ['js', 'css', 'png', 'jpg', 'ico', 'svg', 'woff'];

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

function todayStr(date = new Date()) {
  return date.toISOString().split('T')[0];
}

function shouldSkipTracking(pathname) {
  if (pathname.startsWith('/api/')) return true;
  if (pathname.startsWith('/admin')) return true;
  const dot = pathname.lastIndexOf('.');
  if (dot === -1) return false;
  const ext = pathname.slice(dot + 1).toLowerCase();
  return SKIP_EXTENSIONS.includes(ext);
}

function lastNDates(n) {
  const dates = [];
  const now = new Date();
  for (let i = 0; i < n; i++) {
    dates.push(todayStr(new Date(now - i * 24 * 60 * 60 * 1000)));
  }
  return dates;
}

async function trackVisitor(request, env) {
  const url = new URL(request.url);
  if (request.method !== 'GET') return;
  if (shouldSkipTracking(url.pathname)) return;

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const ipHash = ip.slice(0, 8);
  const today = todayStr();
  const visitKey = `visit:${today}:${ipHash}`;

  const existing = await env.KORSMOTION_DATA.get(visitKey);
  if (existing) return;

  await env.KORSMOTION_DATA.put(visitKey, '1', { expirationTtl: 86400 });

  const todayKey = `visits:today:${today}`;
  const todayCount = parseInt(await env.KORSMOTION_DATA.get(todayKey) || '0', 10) + 1;
  await env.KORSMOTION_DATA.put(todayKey, String(todayCount));

  const weekCount = parseInt(await env.KORSMOTION_DATA.get('visits:week') || '0', 10) + 1;
  await env.KORSMOTION_DATA.put('visits:week', String(weekCount));

  const monthCount = parseInt(await env.KORSMOTION_DATA.get('visits:month') || '0', 10) + 1;
  await env.KORSMOTION_DATA.put('visits:month', String(monthCount));
}

async function getKvAnalytics(env) {
  const today = todayStr();
  const todayVal = parseInt(await env.KORSMOTION_DATA.get(`visits:today:${today}`) || '0', 10);

  let weekVal = 0;
  for (const d of lastNDates(7)) {
    weekVal += parseInt(await env.KORSMOTION_DATA.get(`visits:today:${d}`) || '0', 10);
  }

  let monthVal = 0;
  for (const d of lastNDates(30)) {
    monthVal += parseInt(await env.KORSMOTION_DATA.get(`visits:today:${d}`) || '0', 10);
  }

  return {
    data: {
      viewer: {
        accounts: [{
          today: [{ sum: { visits: todayVal } }],
          week: [{ sum: { visits: weekVal } }],
          total: [{ sum: { visits: monthVal } }],
        }],
      },
    },
  };
}

const DEFAULT_PROJECTS = { projects: [] };
const DEFAULT_SETTINGS = { show_dev_section: false, apps: [] };

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    ctx.waitUntil(trackVisitor(request, env));

    // Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    // GET /api/data — load projects + settings from KV
    if (url.pathname === '/api/data' && request.method === 'GET') {
      const [pRaw, sRaw] = await Promise.all([
        env.KORSMOTION_DATA.get('projects'),
        env.KORSMOTION_DATA.get('settings'),
      ]);
      const projects = pRaw ? JSON.parse(pRaw) : DEFAULT_PROJECTS;
      const settings = sRaw ? JSON.parse(sRaw) : DEFAULT_SETTINGS;
      return json({ projects, settings });
    }

    // POST /api/save — save projects + settings to KV
    if (url.pathname === '/api/save' && request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return json({ error: 'Invalid JSON' }, 400);
      }

      if (body.password !== ADMIN_PASSWORD) {
        return json({ error: 'Unauthorized' }, 401);
      }

      await Promise.all([
        env.KORSMOTION_DATA.put('projects', JSON.stringify(body.projects)),
        env.KORSMOTION_DATA.put('settings', JSON.stringify(body.settings)),
      ]);

      return json({ ok: true });
    }

    // GET /api/analytics — read visitor counts from KV
    if (url.pathname === '/api/analytics') {
      const auth = request.headers.get('X-Admin-Password');
      if (auth !== ADMIN_PASSWORD) return json({ error: 'Unauthorized' }, 401);

      try {
        const data = await getKvAnalytics(env);
        return json(data);
      } catch (e) {
        return json({ error: e.message }, 500);
      }
    }

    // Everything else — serve static assets from Pages
    return env.ASSETS.fetch(request);
  },
};
