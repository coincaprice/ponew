import { AboutUsPage } from '@/components/pages/AboutUsPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'What is Pocket Option? About the platform, history and company';
const description = 'Pocket Option is an online trading platform launched in 2017: 100+ assets, $5 minimum deposit, $50,000 demo and 10M+ traders in 95+ countries. Learn who operates pocketoption and where to find its legal documents.';

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
