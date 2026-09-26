import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { BASE_URL, locales, localeHreflang, getLocalePath } from './config';
import type { Locale } from './config';

const ogLocaleMap: Record<Locale, string> = {
  en: 'en_US',
  pt: 'pt_BR',
  es: 'es_ES',
  ru: 'ru_RU',
  id: 'id_ID',
};

export function getOgLocale(lang: string): string {
  return ogLocaleMap[lang as Locale] ?? 'en_US';
}

function getOgAlternates(lang: string): string[] {
  return locales.filter(l => l !== lang).map(l => ogLocaleMap[l]);
}

const OG_IMAGE = [{ ...siteConfig.ogImage, url: `${BASE_URL}${siteConfig.ogImage.url}` }];

/** Metadata shared by every root layout (icons, robots, verification, twitter defaults). */
export function buildBaseMetadata(lang: string, title: string, description: string): Metadata {
  return {
    metadataBase: new URL(BASE_URL),
    title: { default: title, template: `%s | ${siteConfig.name}` },
    description,
    keywords: [
      'pocket option', 'pocketoption', 'pocket option trading',
      'online trading platform', 'binary options', 'forex trading',
      'cryptocurrency trading', 'trading platform', 'pocketoption.dev',
    ],
    authors: [{ name: siteConfig.name, url: BASE_URL }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    openGraph: {
      type: 'website',
      locale: getOgLocale(lang),
      alternateLocale: getOgAlternates(lang),
      siteName: siteConfig.name,
      title,
      description,
      images: OG_IMAGE,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: OG_IMAGE.map(i => i.url),
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.png', sizes: '350x350', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    manifest: '/site.webmanifest',
    verification: {
      google: siteConfig.verification.google,
      other: { 'msvalidate.01': siteConfig.verification.bing },
    },
  };
}

type PageSeo = { title?: string; description?: string };

/**
 * Builds canonical + hreflang + Open Graph + Twitter metadata for any page.
 * @param lang - e.g. 'en', 'pt', 'es', 'ru', 'id'
 * @param slug - page slug WITHOUT leading slash, e.g. 'about-us', '' (homepage)
 * @param page - optional title/description, mirrored into og:* and twitter:*
 */
export function buildSeoMeta(
  lang: string,
  slug: string = '',
  page: PageSeo = {},
): Pick<Metadata, 'alternates' | 'openGraph' | 'twitter'> {
  const locale = lang as Locale;
  const canonical = `${BASE_URL}${getLocalePath(locale, slug)}`;

  const languages: Record<string, string> = {
    'x-default': `${BASE_URL}${getLocalePath('en', slug)}`,
  };
  locales.forEach(l => {
    languages[localeHreflang[l]] = `${BASE_URL}${getLocalePath(l, slug)}`;
  });

  return {
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      images: OG_IMAGE,
      url: canonical,
      locale: getOgLocale(lang),
      alternateLocale: getOgAlternates(lang),
      ...(page.title && { title: page.title }),
      ...(page.description && { description: page.description }),
    },
    twitter: {
      card: 'summary_large_image',
      images: OG_IMAGE.map(i => i.url),
      site: siteConfig.twitterHandle,
      ...(page.title && { title: page.title }),
      ...(page.description && { description: page.description }),
    },
  };
}
