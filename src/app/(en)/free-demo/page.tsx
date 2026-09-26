import { RelatedGuides } from '@/components/blog/RelatedGuides';
import { FreeDemoPage } from '@/components/pages/FreeDemoPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'Pocket Option Demo Account – Free $50,000, No Deposit';
const description = 'Open a free Pocket Option demo account: $50,000 virtual balance, real quotes, 100+ assets, unlimited refills, no card needed. How the pocketoption demo works.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...buildSeoMeta('en', 'free-demo', { title, description }),
};

export default function FreeDemo() {
  return (
    <FreeDemoPage lang="en" guides={<RelatedGuides locale="en" slugs={['pocket-option-demo-account', 'pocket-option-indicators', 'pocket-option-risk-management']} />} />
  );
}
