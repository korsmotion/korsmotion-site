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
  apps: [],
};

function normalizeSettings(raw) {
  const s = raw && typeof raw === 'object' ? raw : {};
  return {
    ...DEFAULT_SETTINGS,
    ...s,
    apps: Array.isArray(s.apps) ? s.apps : DEFAULT_SETTINGS.apps,
    ui: s.ui && typeof s.ui === 'object' ? s.ui : {},
  };
}

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
      const settings = normalizeSettings(sRaw ? JSON.parse(sRaw) : {});
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

      const settings = normalizeSettings(body.settings);
      await Promise.all([
        env.KORSMOTION_DATA.put('projects', JSON.stringify(body.projects)),
        env.KORSMOTION_DATA.put('settings', JSON.stringify(settings)),
      ]);

      return json({ ok: true });
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
      const settings = normalizeSettings(sRaw ? JSON.parse(sRaw) : {});
      return json({
        services: data.services || [],
        show_services_section: settings.show_services_section,
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

    // Everything else — serve static assets from Pages
    return env.ASSETS.fetch(request);
  },
};
