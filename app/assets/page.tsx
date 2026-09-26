import { AssetsPage } from '@/components/pages/AssetsPage';
import { EnLayout } from '@/components/EnLayout';
import { enBaseMetadata } from '@/components/EnLayout';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...enBaseMetadata,
  title: 'Trading Assets – 100+ Assets with Payouts Up to 92% | Pocket Option',
  description: 'Trade 100+ assets on Pocket Option: forex pairs, cryptocurrencies, stocks, commodities, and indices. Payouts up to 92%. Start with a $5 minimum deposit.',
  ...buildSeoMeta('en', 'assets'),
};

export default function Assets() {
  return (
    <EnLayout>
      <AssetsPage lang="en" />
    </EnLayout>
  );
}
