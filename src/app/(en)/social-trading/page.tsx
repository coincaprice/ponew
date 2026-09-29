import { RelatedGuides } from '@/components/blog/RelatedGuides';
import { SocialTradingPage } from '@/components/pages/SocialTradingPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'Pocket Option Social Trading – Copy Trades of Top Traders';
const description = 'How Pocket Option Social Trading works: live trader ranking, one-click and automatic copy trading, settings, costs and risks. Copy from $1, test on the free $50,000 demo.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...buildSeoMeta('en', 'social-trading', { title, description }),
};

export default function SocialTrading() {
  return (
    <SocialTradingPage lang="en" guides={<RelatedGuides locale="en" slugs={['pocket-option-social-trading', 'pocket-option-signals', 'pocket-option-risk-management']} />} />
  );
}
