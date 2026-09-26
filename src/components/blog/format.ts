import type { Locale } from '@/lib/i18n/config';

const DATE_LOCALE: Record<Locale, string> = {
  en: 'en-US',
  pt: 'pt-BR',
  es: 'es-ES',
  ru: 'ru-RU',
  id: 'id-ID',
};

export function formatBlogDate(iso: string, locale: Locale): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(DATE_LOCALE[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
