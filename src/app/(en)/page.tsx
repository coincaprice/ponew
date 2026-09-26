import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import { siteConfig } from '@/config/site';

const title = 'Pocket Option – The Most User-Friendly Trading Platform';

export const metadata: Metadata = {
  title: { absolute: title },
  description: siteConfig.description,
  ...buildSeoMeta('en', '', { title, description: siteConfig.description }),
};

export default function Home() {
  return (
    <HomePage lang="en" />
  );
}
