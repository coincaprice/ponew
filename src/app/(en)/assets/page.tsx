import { AssetsPage } from '@/components/pages/AssetsPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'Pocket Option assets and trading schedule: 100+ assets, payouts up to 92%';
const description = 'Full list of Pocket Option assets with current payouts and trading hours: forex pairs, stocks, cryptocurrencies, commodities and indices. OTC assets 24/7, payouts up to 92%, all available on the $50,000 demo.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...buildSeoMeta('en', 'assets', { title, description }),
};

export default function Assets() {
  return (
    <AssetsPage lang="en" />
  );
}
