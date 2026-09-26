export const locales = ['en', 'pt', 'es', 'ru', 'id'] as const;
export type Locale = typeof locales[number];

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

export const BASE_URL = 'https://pocketoption.dev';

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
