import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostPage } from '@/components/pages/BlogPostPage';
import { blogPosts, getBlogPost } from '@/lib/blog';
import { locales, isLocale } from '@/lib/i18n/config';
import { buildSeoMeta } from '@/lib/i18n/seo';

type Params = { params: Promise<{ lang: string; slug: string }> };

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.flatMap(lang => blogPosts.map(p => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getBlogPost(slug);
  if (!post || !isLocale(lang)) return {};
  const { metaTitle, metaDescription } = post.content[lang];
  const seo = buildSeoMeta(lang, `blog/${slug}`, { title: metaTitle, description: metaDescription });
  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    ...seo,
    openGraph: { ...seo.openGraph, type: 'article', publishedTime: post.publishedAt, modifiedTime: post.updatedAt },
  };
}

export default async function BlogPostLang({ params }: Params) {
  const { lang, slug } = await params;
  const post = getBlogPost(slug);
  if (!post || !isLocale(lang)) notFound();
  return <BlogPostPage lang={lang} post={post} />;
}
