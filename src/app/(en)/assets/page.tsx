import { AssetsPage } from '@/components/pages/AssetsPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'Pocket Option Assets & Trading Schedule – Payouts up to 92%';
const description = 'Full list of Pocket Option assets with current payouts and trading hours: forex, stocks, crypto, commodities, indices. OTC 24/7, payouts up to 92%.';

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
