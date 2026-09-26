import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/i18n/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/go', '/go/'] }],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
