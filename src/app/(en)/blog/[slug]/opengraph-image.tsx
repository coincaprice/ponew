import { OG_SIZE, OG_CONTENT_TYPE, renderBlogOg } from '@/lib/seo/og';
import { blogPosts } from '@/lib/blog';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Pocket Option blog';

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return renderBlogOg(slug, 'en');
}
