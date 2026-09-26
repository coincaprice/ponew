import { OG_SIZE, OG_CONTENT_TYPE, renderBlogOg } from '@/lib/seo/og';
import { blogPosts } from '@/lib/blog';
import { isLocale, locales } from '@/lib/i18n/config';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Pocket Option blog';

export function generateStaticParams() {
  return locales.filter(l => l !== 'en').flatMap(lang => blogPosts.map(p => ({ lang, slug: p.slug })));
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  return renderBlogOg(slug, isLocale(lang) ? lang : 'en');
}
