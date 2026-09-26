import type { Metadata } from 'next';
import { BASE_URL, locales, localeHreflang, getLocalePath } from './config';
import type { Locale } from './config';

const ogLocaleMap: Record<string, string> = {
  en: 'en_US',
  pt: 'pt_BR',
  es: 'es_ES',
  ru: 'ru_RU',
  id: 'id_ID',
};

const OG_IMAGE = [
  { url: `${BASE_URL}/images/og-image.png`, width: 1200, height: 669, alt: 'Trade smarter with Pocket Option – access global financial markets in seconds' },
];

/**
 * Builds canonical + hreflang + full og metadata for any page.
 * @param lang - e.g. 'en', 'pt', 'es', 'ru', 'id'
 * @param slug - page slug WITHOUT leading slash, e.g. 'about-us', 'quick-start', '' (homepage)
 */
export function buildSeoMeta(lang: string, slug: string = ''): Pick<Metadata, 'alternates' | 'openGraph'> {
  const locale = lang as Locale;
  const canonical = `${BASE_URL}${getLocalePath(locale, slug)}`;

  const languages: Record<string, string> = {
    'x-default': `${BASE_URL}${getLocalePath('en', slug)}`,
  };
  locales.forEach(l => {
    languages[localeHreflang[l]] = `${BASE_URL}${getLocalePath(l, slug)}`;
  });

  return {
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      siteName: 'Pocket Option',
      images: OG_IMAGE,
      url: canonical,
      locale: ogLocaleMap[lang] ?? 'en_US',
    },
  };
}
