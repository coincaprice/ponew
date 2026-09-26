import { FreeDemoPage } from '@/components/pages/FreeDemoPage';
import { EnLayout } from '@/components/EnLayout';
import { enBaseMetadata } from '@/components/EnLayout';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...enBaseMetadata,
  title: { absolute: 'Free Demo Account – Practice Trading Risk-Free | Pocket Option' },
  description: 'Open a free Pocket Option demo account with $50,000 in virtual funds. Practice trading strategies risk-free with real market data, 100+ assets, and unlimited balance top-ups.',
  ...buildSeoMeta('en', 'free-demo'),
};

export default function FreeDemo() {
  return (
    <EnLayout>
      <FreeDemoPage lang="en" />
    </EnLayout>
  );
}
