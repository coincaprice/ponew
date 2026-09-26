import { AboutUsPage } from '@/components/pages/AboutUsPage';
import { EnLayout } from '@/components/EnLayout';
import { enBaseMetadata } from '@/components/EnLayout';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...enBaseMetadata,
  title: { absolute: 'About Pocket Option – Global Trading Platform' },
  description: 'Learn more about Pocket Option – a fast, secure, and easy-to-use trading platform for over 100 global assets. Founded in 2017 with 10M+ traders worldwide.',
  ...buildSeoMeta('en', 'about-us'),
};

export default function AboutUs() {
  return (
    <EnLayout>
      <AboutUsPage lang="en" />
    </EnLayout>
  );
}
