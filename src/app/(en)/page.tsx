import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';
import { buildSeoMeta } from '@/lib/i18n/seo';

const title = 'Pocket Option – Online Trading Platform | $5 Deposit, Free Demo';
const description =
  'Pocket Option (PocketOption): trade 100+ assets — forex, crypto, stocks and commodities — with a $5 minimum deposit, payouts up to 92% and a free $50,000 demo account. Open your account today.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...buildSeoMeta('en', '', { title, description }),
};

export default function Home() {
  return (
    <HomePage lang="en" />
  );
}
