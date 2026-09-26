import { BASE_URL, getLocalePath } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';

interface Props {
  lang: string;
  slug: string;
  homeName: string;
  pageName: string;
}

export function BreadcrumbJsonLd({ lang, slug, homeName, pageName }: Props) {
  const locale = lang as Locale;
  const homeUrl = `${BASE_URL}${getLocalePath(locale, '')}`;
  const pageUrl = `${BASE_URL}${getLocalePath(locale, slug)}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeName,
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
