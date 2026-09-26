import { QuickStartPage } from '@/components/pages/QuickStartPage';
import { EnLayout } from '@/components/EnLayout';
import { enBaseMetadata } from '@/components/EnLayout';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...enBaseMetadata,
  title: { absolute: 'Quick Start – How to Start Trading on Pocket Option' },
  description: 'Get started on Pocket Option in minutes: open a free account, deposit funds, and place your first trade on 100+ assets including forex, crypto, and stocks.',
  ...buildSeoMeta('en', 'quick-start'),
};

export default function QuickStart() {
  return (
    <EnLayout>
      <QuickStartPage lang="en" />
    </EnLayout>
  );
}
