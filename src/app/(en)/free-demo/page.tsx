import { FreeDemoPage } from '@/components/pages/FreeDemoPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'Pocket Option Demo Account – Free $50,000 Practice Balance, No Deposit';
const description = 'Open a free Pocket Option demo account: $50,000 virtual balance, real quotes, 100+ assets, unlimited refills. No deposit or card required. How to open the pocketoption demo and when to go live.';

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
