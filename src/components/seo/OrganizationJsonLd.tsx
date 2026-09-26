import { siteConfig } from '@/config/site';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.png`,
  description: siteConfig.description,
  foundingDate: siteConfig.foundingDate,
  sameAs: siteConfig.social,
  offers: {
    '@type': 'Offer',
    description: 'Online trading platform with over 100 global assets',
    priceCurrency: 'USD',
    price: '0',
  },
};

export function OrganizationJsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
