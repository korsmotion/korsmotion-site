// Kors Motion CMS Worker
// Handles /api/data (GET) and /api/save (POST)
// KV binding: KORSMOTION_DATA

const ADMIN_PASSWORD = 'korsmotion2026';
const CF_ACCOUNT_ID = '0bb844a6ae45ef8dd4157eb97bac9de2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Password',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

async function getCfAnalytics(cfApiToken) {
  const sitesResp = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/web-analytics/sites`,
    { headers: { Authorization: `Bearer ${cfApiToken}` } }
  );
  const sitesJson = await sitesResp.json();
  if (!sitesResp.ok || sitesJson.success === false) {
    throw new Error(sitesJson.errors?.[0]?.message || 'Failed to fetch Web Analytics sites');
  }
  const sites = sitesJson.result || [];
  const siteTag = sites.find(s => {
    const host = `${s.host || ''} ${s.site_host || ''}`.toLowerCase();
    return host.includes('korsmotion');
  })?.site_tag || sites[0]?.site_tag;
  if (!siteTag) {
    throw new Error('No Web Analytics site found');
  }

  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const since7 = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const since30 = new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const query = `
    query RumDashboard($acct: string!, $site: string!, $today: string!, $since7: string!, $since30: string!) {
      viewer {
        accounts(filter: { accountTag: $acct }) {
          todayViews: rumPageloadEventsAdaptiveGroups(
            filter: { siteTag: $site, date_geq: $today, date_leq: $today }
            limit: 1
          ) { count sum { visits } }
          week: rumPageloadEventsAdaptiveGroups(
            filter: { siteTag: $site, date_geq: $since7, date_leq: $today }
            limit: 1
          ) { count sum { visits } }
          total: rumPageloadEventsAdaptiveGroups(
            filter: { siteTag: $site, date_geq: $since30, date_leq: $today }
            limit: 1
          ) { count sum { visits } }
        }
      }
    }`;

  const resp = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${cfApiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        acct: CF_ACCOUNT_ID,
        site: siteTag,
        today,
        since7,
        since30,
      },
    }),
  });
  const data = await resp.json();
  if (data.errors?.length) {
    throw new Error(data.errors.map(e => e.message).join('; '));
  }
  return data;
}

const DEFAULT_PROJECTS = { projects: [] };
const DEFAULT_SETTINGS = { show_dev_section: false, apps: [] };

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

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

    // GET /api/analytics — Cloudflare Web Analytics (RUM) via GraphQL
    if (url.pathname === '/api/analytics' && request.method === 'GET') {
      const auth = request.headers.get('X-Admin-Password');
      if (auth !== ADMIN_PASSWORD) return json({ error: 'Unauthorized' }, 401);

      const cfApiToken = env.CF_API_TOKEN;
      if (!cfApiToken) return json({ error: 'Analytics not configured' }, 503);

      try {
        return json(await getCfAnalytics(cfApiToken));
      } catch (e) {
        return json({ error: e.message }, 500);
      }
    }

    // GET /api/services — load services from KV
    if (url.pathname === '/api/services' && request.method === 'GET') {
      const raw = await env.KORSMOTION_DATA.get('services_data');
      if (!raw) return json({ services: [] });
      return json(JSON.parse(raw));
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
