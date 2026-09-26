import { BASE_URL, getLocalePath } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';
import { siteConfig } from '@/config/site';

interface Props {
  lang: string;
  slug: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}

export function ArticleJsonLd({ lang, slug, headline, description, image, datePublished, dateModified, author }: Props) {
  const url = `${BASE_URL}${getLocalePath(lang as Locale, slug)}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: [`${BASE_URL}${image}`],
    datePublished,
    dateModified,
    inLanguage: lang,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: author, url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/favicon.png` },
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
