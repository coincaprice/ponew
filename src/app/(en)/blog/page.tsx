import type { Metadata } from 'next';
import { BlogIndexPage } from '@/components/pages/BlogIndexPage';
import { blogIndexSeo } from '@/lib/blog';
import { buildSeoMeta } from '@/lib/i18n/seo';

const { title, description } = blogIndexSeo.en;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...buildSeoMeta('en', 'blog', { title, description }),
};

export default function Blog() {
  return <BlogIndexPage lang="en" />;
}
