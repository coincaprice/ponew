import { AboutUsPage } from '@/components/pages/AboutUsPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'What Is Pocket Option? Platform, History and Company';
const description = 'Pocket Option is an online trading platform launched in 2017: 100+ assets, $5 minimum deposit, $50,000 demo, 10M+ traders. Who operates pocketoption.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...buildSeoMeta('en', 'about-us', { title, description }),
};

export default function AboutUs() {
  return (
    <AboutUsPage lang="en" />
  );
}
