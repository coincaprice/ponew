import { QuickStartPage } from '@/components/pages/QuickStartPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'Quick Start – How to Start Trading on Pocket Option';
const description = 'Get started on Pocket Option in minutes: open a free account, deposit funds, and place your first trade on 100+ assets including forex, crypto, and stocks.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...buildSeoMeta('en', 'quick-start', { title, description }),
};

export default function QuickStart() {
  return (
    <QuickStartPage lang="en" />
  );
}
