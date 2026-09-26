import { RelatedGuides } from '@/components/blog/RelatedGuides';
import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';
import { buildSeoMeta } from '@/lib/i18n/seo';

const title = 'Pocket Option – Trading Platform | $5 Deposit, Free Demo';
const description =
  'Pocket Option (PocketOption): trade 100+ assets — forex, crypto, stocks, commodities — from a $5 deposit, payouts up to 92% and a free $50,000 demo.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...buildSeoMeta('en', '', { title, description }),
};

export default function Home() {
  return (
    <HomePage lang="en" guides={<RelatedGuides locale="en" slugs={['how-to-trade-on-pocket-option', 'pocket-option-deposit', 'pocket-option-withdrawal']} />} />
  );
}
