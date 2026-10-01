import { siteRoutes } from '@/config/routes';
import type { SiteRoute } from '@/config/routes';
import { blogPosts } from '@/lib/blog';
import { BASE_URL, locales, localeHreflang, getLocalePath } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';

type SitemapRoute = SiteRoute & { lastModified?: string };

export const SITEMAP_BUILD_DATE = new Date().toISOString().slice(0, 10);

const blogRoutes: SitemapRoute[] = blogPosts.map(p => ({
  slug: `blog/${p.slug}`,
  changeFrequency: 'monthly',
  priority: 0.6,
  lastModified: p.updatedAt,
}));

const allRoutes: SitemapRoute[] = [...siteRoutes, ...blogRoutes];

const esc = (s: string) => s.replace(/&/g, '&amp;');
const abs = (lang: Locale, slug: string) => esc(`${BASE_URL}${getLocalePath(lang, slug)}`);

export const XML_HEADERS = { 'Content-Type': 'application/xml; charset=utf-8' };

export function sitemapIndexXml(): string {
  const items = locales
    .map(
      lang =>
        `  <sitemap>\n    <loc>${BASE_URL}/sitemaps/${lang}.xml</loc>\n    <lastmod>${SITEMAP_BUILD_DATE}</lastmod>\n  </sitemap>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
}

export function localeSitemapXml(lang: Locale): string {
  const urls = allRoutes
    .map(route => {
      const alternates = [
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs('en', route.slug)}"/>`,
        ...locales.map(
          l => `    <xhtml:link rel="alternate" hreflang="${localeHreflang[l]}" href="${abs(l, route.slug)}"/>`,
        ),
      ].join('\n');
      const priority = lang === 'en' ? route.priority : Math.max(0.1, route.priority - 0.1);
      return [
        '  <url>',
        `    <loc>${abs(lang, route.slug)}</loc>`,
        alternates,
        `    <lastmod>${route.lastModified ?? SITEMAP_BUILD_DATE}</lastmod>`,
        `    <changefreq>${route.changeFrequency}</changefreq>`,
        `    <priority>${priority.toFixed(1)}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
}
