import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostPage } from '@/components/pages/BlogPostPage';
import { blogPosts, getBlogPost } from '@/lib/blog';
import { buildSeoMeta } from '@/lib/i18n/seo';

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const { metaTitle, metaDescription } = post.content.en;
  const seo = buildSeoMeta('en', `blog/${slug}`, { title: metaTitle, description: metaDescription });
  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    ...seo,
    openGraph: { ...seo.openGraph, type: 'article', publishedTime: post.publishedAt, modifiedTime: post.updatedAt },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return <BlogPostPage lang="en" post={post} />;
}
