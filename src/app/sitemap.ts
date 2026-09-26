import type { MetadataRoute } from 'next';
import { siteRoutes } from '@/config/routes';
import type { SiteRoute } from '@/config/routes';
import { blogPosts } from '@/lib/blog';
import { BASE_URL, locales, localeHreflang, getLocalePath } from '@/lib/i18n/config';

const LAST_MODIFIED = new Date();

const blogRoutes: SiteRoute[] = blogPosts.map(p => ({
  slug: `blog/${p.slug}`,
  changeFrequency: 'monthly',
  priority: 0.6,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...siteRoutes, ...blogRoutes].flatMap(route => {
    const languages: Record<string, string> = {
      'x-default': `${BASE_URL}${getLocalePath('en', route.slug)}`,
    };
    for (const lang of locales) {
      languages[localeHreflang[lang]] = `${BASE_URL}${getLocalePath(lang, route.slug)}`;
    }

    return locales.map(lang => ({
      url: `${BASE_URL}${getLocalePath(lang, route.slug)}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: route.changeFrequency,
      priority: lang === 'en' ? route.priority : Math.max(0.1, route.priority - 0.1),
      alternates: { languages },
    }));
  });
}
