import { ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import { getLocalePath } from '@/lib/i18n/config';
import { blogPosts, getBlogDictionary } from '@/lib/blog';
import { BlogCard } from './BlogCard';

const HEADINGS: Record<Locale, { eyebrow: string; title: string; all: string }> = {
  en: { eyebrow: 'Pocket Option guides', title: 'Learn more about Pocket Option', all: 'All articles' },
  pt: { eyebrow: 'Guias Pocket Option', title: 'Saiba mais sobre a Pocket Option', all: 'Todos os artigos' },
  es: { eyebrow: 'Guías Pocket Option', title: 'Aprende más sobre Pocket Option', all: 'Todos los artículos' },
  ru: { eyebrow: 'Гиды Pocket Option', title: 'Узнайте больше о Pocket Option', all: 'Все статьи' },
  id: { eyebrow: 'Panduan Pocket Option', title: 'Pelajari lebih lanjut tentang Pocket Option', all: 'Semua artikel' },
};

export function RelatedGuides({ locale, slugs }: { locale: Locale; slugs: string[] }) {
  const t = getBlogDictionary(locale);
  const h = HEADINGS[locale];
  const posts = slugs.map(s => blogPosts.find(p => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  if (posts.length === 0) return null;
  return (
    <section className="bg-[#F5F8FC] py-20 md:py-24">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow mb-5">{h.eyebrow}</span>
            <h2 className="font-heading font-extrabold text-[30px] md:text-[38px] leading-[1.15] tracking-tight text-[#080F20]">{h.title}</h2>
          </div>
          <a href={getLocalePath(locale, 'blog')} className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0077cc] hover:gap-3 transition-all">
            {h.all}<ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map(p => <BlogCard key={p.slug} post={p} locale={locale} t={t} />)}
        </div>
      </div>
    </section>
  );
}
