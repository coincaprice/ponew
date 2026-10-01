import { locales, isLocale } from '@/lib/i18n/config';
import { localeSitemapXml, XML_HEADERS } from '@/lib/seo/sitemap';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map(lang => ({ file: `${lang}.xml` }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const code = file.replace(/\.xml$/, '');
  if (!isLocale(code)) return new Response('Not found', { status: 404 });
  return new Response(localeSitemapXml(code), { headers: XML_HEADERS });
}
