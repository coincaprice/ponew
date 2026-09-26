import { AboutUsPage } from '@/components/pages/AboutUsPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'About Pocket Option – Global Trading Platform';
const description = 'Learn more about Pocket Option – a fast, secure, and easy-to-use trading platform for over 100 global assets. Founded in 2017 with 10M+ traders worldwide.';

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
