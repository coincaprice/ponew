import { siteRoutes } from '@/config/routes';
import type { SiteRoute } from '@/config/routes';
import { blogPosts } from '@/lib/blog';
import { BASE_URL, locales, localeHreflang, getLocalePath } from '@/lib/i18n/config';

export const dynamic = 'force-static';

const BUILD_DATE = new Date().toISOString().slice(0, 10);

const blogRoutes: (SiteRoute & { lastModified?: string })[] = blogPosts.map(p => ({
  slug: `blog/${p.slug}`,
  changeFrequency: 'monthly',
  priority: 0.6,
  lastModified: p.updatedAt,
}));

const escape = (s: string) => s.replace(/&/g, '&amp;');

export function GET() {
  const entries = [...siteRoutes, ...blogRoutes].flatMap(route => {
    const alternates = [
      `<xhtml:link rel="alternate" hreflang="x-default" href="${escape(`${BASE_URL}${getLocalePath('en', route.slug)}`)}"/>`,
      ...locales.map(
        lang =>
          `<xhtml:link rel="alternate" hreflang="${localeHreflang[lang]}" href="${escape(`${BASE_URL}${getLocalePath(lang, route.slug)}`)}"/>`,
      ),
    ].join('');
    const lastmod = 'lastModified' in route && route.lastModified ? route.lastModified : BUILD_DATE;

    return locales.map(lang => {
      const priority = lang === 'en' ? route.priority : Math.max(0.1, route.priority - 0.1);
      return `<url><loc>${escape(`${BASE_URL}${getLocalePath(lang, route.slug)}`)}</loc>${alternates}<lastmod>${lastmod}</lastmod><changefreq>${route.changeFrequency}</changefreq><priority>${priority.toFixed(1)}</priority></url>`;
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
