import { sitemapIndexXml, XML_HEADERS } from '@/lib/seo/sitemap';

export const dynamic = 'force-static';

export function GET() {
  return new Response(sitemapIndexXml(), { headers: XML_HEADERS });
}
