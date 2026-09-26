import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import { getLocalePath } from '@/lib/i18n/config';
import type { BlogDictionary, BlogPost } from '@/lib/blog';
import { formatBlogDate } from './format';

export function BlogCard({ post, locale, t }: { post: BlogPost; locale: Locale; t: BlogDictionary }) {
  const c = post.content[locale];
  return (
    <a href={getLocalePath(locale, `blog/${post.slug}`)} className="card-premium group flex flex-col overflow-hidden no-underline">
      <div className="overflow-hidden">
        <Image
          src={post.cover}
          alt={c.coverAlt}
          width={1840}
          height={700}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.1em]">
          <span className="rounded-full bg-[#0099FA]/10 px-2.5 py-1 text-[#0077cc]">{t.categories[post.category]}</span>
          <span className="flex items-center gap-1.5 text-[#8A9BBE] normal-case tracking-normal font-medium"><Clock className="h-3.5 w-3.5" />{post.readingMinutes} {t.minRead}</span>
        </div>
        <h3 className="mt-4 font-heading font-bold text-[19px] leading-[1.3] text-[#080F20] group-hover:text-[#0077cc] transition-colors">{c.title}</h3>
        <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-[#5A6A85] line-clamp-3">{c.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-[13px] text-[#8A9BBE]">{formatBlogDate(post.publishedAt, locale)}</span>
          <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0099FA] group-hover:gap-2.5 transition-all">{t.readMore}<ArrowRight className="h-4 w-4" /></span>
        </div>
      </div>
    </a>
  );
}
