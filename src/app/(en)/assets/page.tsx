import { AssetsPage } from '@/components/pages/AssetsPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'Trading Assets – 100+ Assets with Payouts Up to 92% | Pocket Option';
const description = 'Trade 100+ assets on Pocket Option: forex pairs, cryptocurrencies, stocks, commodities, and indices. Payouts up to 92%. Start with a $5 minimum deposit.';

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
