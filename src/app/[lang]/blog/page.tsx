import type { Metadata } from 'next';
import { BlogIndexPage } from '@/components/pages/BlogIndexPage';
import { blogIndexSeo } from '@/lib/blog';
import { locales } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';
import { buildSeoMeta } from '@/lib/i18n/seo';

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const { title, description } = blogIndexSeo[lang as Locale] ?? blogIndexSeo.en;
  return {
    title: { absolute: title },
    description,
    ...buildSeoMeta(lang, 'blog', { title, description }),
  };
}

export default async function BlogLang({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <BlogIndexPage lang={lang} />;
}
