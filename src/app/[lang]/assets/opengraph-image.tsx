import { OG_SIZE, OG_CONTENT_TYPE, renderPageOg } from '@/lib/seo/og';
import { isLocale, locales } from '@/lib/i18n/config';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Pocket Option';

export function generateStaticParams() {
  return locales.filter(l => l !== 'en').map(lang => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return renderPageOg('assets', isLocale(lang) ? lang : 'en');
}
