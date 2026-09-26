import { FreeDemoPage } from '@/components/pages/FreeDemoPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'Free Demo Account – Practice Trading Risk-Free | Pocket Option';
const description = 'Open a free Pocket Option demo account with $50,000 in virtual funds. Practice trading strategies risk-free with real market data, 100+ assets, and unlimited balance top-ups.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...buildSeoMeta('en', 'free-demo', { title, description }),
};

export default function FreeDemo() {
  return (
    <FreeDemoPage lang="en" />
  );
}
