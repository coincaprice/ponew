import { siteConfig } from '@/config/site';

export const locales = ['en', 'pt', 'es', 'ru', 'id'] as const;
export type Locale = (typeof locales)[number];
export type NonEnLocale = Exclude<Locale, 'en'>;

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
  ru: 'Русский',
  id: 'Indonesia',
};

export const localeHreflang: Record<Locale, string> = {
  en: 'en',
  pt: 'pt-BR',
  es: 'es',
  ru: 'ru',
  id: 'id',
};

export const BASE_URL = siteConfig.url;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isNonEnLocale(value: string): value is NonEnLocale {
  return isLocale(value) && value !== 'en';
}

export function getLocalePath(lang: Locale, path: string = ''): string {
  const cleanPath = path.replace(/^\//, '');
  if (lang === 'en') return cleanPath ? `/${cleanPath}` : '/';
  return cleanPath ? `/${lang}/${cleanPath}` : `/${lang}`;
}

export function getHreflangLinks(currentPath: string = '') {
  return locales.map(lang => ({
    lang,
    hreflang: localeHreflang[lang],
    url: `${BASE_URL}${getLocalePath(lang, currentPath)}`,
  }));
}
