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
  const sites = sitesJson.result || [];
  const siteTag = sites.find(s => {
    const host = `${s.host || ''} ${s.site_host || ''}`.toLowerCase();
    return host.includes('korsmotion');
  })?.site_tag || sites[0]?.site_tag;
  if (!siteTag) {
    throw new Error('No Web Analytics site found');
  }

  const now = new Date();
  const todayStart = new Date(Date.UTC(
    now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()
  )).toISOString();
  const nowIso = now.toISOString();
  const since7 = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString();
  const since30 = new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString();

  const query = `
    query RumDashboard($acct: string!, $site: string!, $todayStart: Time!, $now: Time!, $since7: Time!, $since30: Time!) {
      viewer {
        accounts(filter: { accountTag: $acct }) {
          todayViews: rumPageloadEventsAdaptiveGroups(
            filter: { siteTag: $site, datetime_geq: $todayStart, datetime_leq: $now }
            limit: 1
          ) { count sum { pageViews visits } }
          week: rumPageloadEventsAdaptiveGroups(
            filter: { siteTag: $site, datetime_geq: $since7, datetime_leq: $now }
            limit: 1
          ) { count sum { pageViews visits } }
          total: rumPageloadEventsAdaptiveGroups(
            filter: { siteTag: $site, datetime_geq: $since30, datetime_leq: $now }
            limit: 1
          ) { count sum { pageViews visits } }
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
        todayStart,
        now: nowIso,
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
