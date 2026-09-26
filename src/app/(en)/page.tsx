import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';
import { buildSeoMeta } from '@/lib/i18n/seo';

export const metadata: Metadata = {
  ...buildSeoMeta('en', ''),
};

export default function Home() {
  return (
    <HomePage lang="en" />
  );
}
