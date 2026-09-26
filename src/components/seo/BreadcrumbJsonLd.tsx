import { BASE_URL, getLocalePath } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';

interface Props {
  lang: string;
  slug: string;
  homeName: string;
  pageName: string;
  parent?: { slug: string; name: string };
}

export function BreadcrumbJsonLd({ lang, slug, homeName, pageName, parent }: Props) {
  const locale = lang as Locale;
  const url = (s: string) => `${BASE_URL}${getLocalePath(locale, s)}`;

  const crumbs = [
    { name: homeName, item: url('') },
    ...(parent ? [{ name: parent.name, item: url(parent.slug) }] : []),
    { name: pageName, item: url(slug) },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
