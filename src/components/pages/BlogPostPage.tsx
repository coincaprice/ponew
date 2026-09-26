import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { ArticleJsonLd } from '@/components/seo/ArticleJsonLd';
import { FaqJsonLd } from '@/components/seo/FaqJsonLd';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogCta } from '@/components/blog/BlogCta';
import { formatBlogDate } from '@/components/blog/format';
import { ChevronRight, Clock, CalendarDays, RefreshCw, Lightbulb, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { REGISTER_URL, AFFILIATE_REL } from '@/config/links';
import { getLocalePath, isLocale } from '@/lib/i18n/config';
import { blogPosts, getBlogDictionary } from '@/lib/blog';
import type { BlogBlock, BlogPost } from '@/lib/blog';

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'p':
      return <p className="text-[16.5px] md:text-[17.5px] leading-[1.75] text-[#3D4A63]">{block.text}</p>;
    case 'h2':
      return <h2 id={block.id} className="scroll-mt-28 pt-4 font-heading font-bold text-[26px] md:text-[30px] leading-[1.2] tracking-[-0.01em] text-[#080F20]">{block.text}</h2>;
    case 'h3':
      return <h3 className="font-heading font-bold text-[20px] md:text-[22px] text-[#080F20]">{block.text}</h3>;
    case 'ul':
      return (
        <ul className="flex flex-col gap-3">
          {block.items.map(item => (
            <li key={item} className="flex gap-3 text-[16px] md:text-[17px] leading-[1.7] text-[#3D4A63]">
              <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#0099FA]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="flex flex-col gap-4">
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-4 text-[16px] md:text-[17px] leading-[1.7] text-[#3D4A63]">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0099FA]/10 font-heading text-[14px] font-bold text-[#0077cc]">{i + 1}</span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'tip':
      return (
        <aside className="flex gap-4 rounded-2xl border border-[#0099FA]/25 bg-[#EEF6FF] p-6">
          <Lightbulb className="mt-0.5 h-6 w-6 shrink-0 text-[#0099FA]" />
          <div>
            <div className="font-heading font-bold text-[16px] text-[#0A2540]">{block.title}</div>
            <p className="mt-1.5 text-[15.5px] leading-relaxed text-[#3D4A63]">{block.text}</p>
          </div>
        </aside>
      );
    case 'warn':
      return (
        <aside className="flex gap-4 rounded-2xl border border-[#F5A623]/40 bg-[#FFF8EC] p-6">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-[#E08A00]" />
          <div>
            <div className="font-heading font-bold text-[16px] text-[#5C3B00]">{block.title}</div>
            <p className="mt-1.5 text-[15.5px] leading-relaxed text-[#5C4A2A]">{block.text}</p>
          </div>
        </aside>
      );
    case 'image':
      return (
        <figure className="overflow-hidden rounded-[22px] border border-[#E4EBF5] bg-[#F7F9FD]">
          <img src={block.src} alt={block.alt} loading="lazy" className="mx-auto max-h-[420px] w-auto max-w-full object-contain p-6 md:p-8" />
          {block.caption && <figcaption className="border-t border-[#E4EBF5] px-6 py-3 text-center text-[13.5px] text-[#8A9BBE]">{block.caption}</figcaption>}
        </figure>
      );
    case 'table':
      return (
        <div className="overflow-x-auto rounded-2xl border border-[#E4EBF5]">
          <table className="w-full min-w-[520px] text-left text-[15px]">
            <thead className="bg-[#0A2540] text-white">
              <tr>{block.head.map(h => <th key={h} className="px-5 py-3.5 font-heading font-semibold text-[13.5px] uppercase tracking-[0.06em]">{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? 'bg-[#F7F9FD]' : 'bg-white'}>
                  {row.map((cell, j) => <td key={j} className={`px-5 py-3.5 align-top leading-relaxed ${j === 0 ? 'font-semibold text-[#080F20]' : 'text-[#3D4A63]'}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'cta':
      return (
        <div className="flex flex-col gap-5 rounded-[22px] p-7 md:flex-row md:items-center md:justify-between text-white" style={{ background: 'linear-gradient(135deg, #0A2540 0%, #0C3260 100%)' }}>
          <p className="text-[15.5px] leading-relaxed text-white/80 md:max-w-[60%]">{block.text}</p>
          <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand h-12 shrink-0 px-7 text-[14.5px]">{block.label}<ChevronRight className="w-4 h-4" /></a>
        </div>
      );
  }
}

export function BlogPostPage({ lang = 'en', post }: { lang?: string; post: BlogPost }) {
  const locale = isLocale(lang) ? lang : 'en';
  const t = getBlogDictionary(locale);
  const c = post.content[locale];
  const lp = (path: string) => getLocalePath(locale, path);
  const slug = `blog/${post.slug}`;
  const toc = c.blocks.filter((b): b is Extract<BlogBlock, { type: 'h2' }> => b.type === 'h2');
  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#080F20] flex flex-col font-sans">
      <BreadcrumbJsonLd lang={locale} slug={slug} homeName={t.home} pageName={c.title} parent={{ slug: 'blog', name: t.breadcrumb }} />
      <ArticleJsonLd lang={locale} slug={slug} headline={c.title} description={c.metaDescription} image={post.cover} datePublished={post.publishedAt} dateModified={post.updatedAt} author={post.author} />
      <FaqJsonLd items={c.faq} />
      <Header lang={locale} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-[110px] md:pt-[150px] pb-[120px] md:pb-[200px] text-white" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 45%, #0C3260 75%, #0A2540 100%)' }}>
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#0099FA]/20 blur-[140px]" />
        <div className="absolute inset-0 grid-noise pointer-events-none" />
        <div className="container-x relative">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[13px] text-white/50">
            <a href={lp('')} className="hover:text-white transition-colors">{t.home}</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <a href={lp('blog')} className="hover:text-white transition-colors">{t.breadcrumb}</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/85">{t.categories[post.category]}</span>
          </nav>
          <div className="max-w-[900px]">
            <span className="eyebrow eyebrow-dark mb-5">{t.categories[post.category]}</span>
            <h1 className="font-heading font-bold text-[30px] md:text-[42px] lg:text-[50px] leading-[1.12] tracking-[-0.02em]">{c.title}</h1>
            <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-white/65 max-w-[760px]">{c.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-white/55">
              <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" />{t.published}: <span className="text-white/80">{formatBlogDate(post.publishedAt, locale)}</span></span>
              <span className="flex items-center gap-1.5"><RefreshCw className="h-4 w-4" />{t.updated}: <span className="text-white/80">{formatBlogDate(post.updatedAt, locale)}</span></span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readingMinutes} {t.minRead}</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-x">
          <div className="-mt-[90px] md:-mt-[160px] relative z-10 overflow-hidden rounded-[24px] md:rounded-[28px] border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <img src={post.cover} alt={c.coverAlt} width={1840} height={700} className="w-full h-auto aspect-[1840/700] object-cover" />
          </div>

          <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-14">
            <aside className="lg:col-span-4 order-2 lg:order-1 min-w-0">
              <div className="lg:sticky lg:top-28 flex flex-col gap-6">
                <div className="rounded-2xl border border-[#E4EBF5] bg-[#F7F9FD] p-6">
                  <div className="font-heading text-[13px] font-bold uppercase tracking-[0.1em] text-[#8A9BBE]">{t.onThisPage}</div>
                  <ol className="mt-4 flex flex-col gap-2.5">
                    {toc.map((h, i) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="flex gap-3 text-[14.5px] leading-snug text-[#3D4A63] no-underline hover:text-[#0099FA] transition-colors">
                          <span className="font-heading text-[13px] font-bold text-[#0099FA]">{String(i + 1).padStart(2, '0')}</span>
                          <span>{h.text}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-2xl border border-[#E4EBF5] p-6">
                  <div className="font-heading text-[13px] font-bold uppercase tracking-[0.1em] text-[#8A9BBE]">{t.keyTakeaways}</div>
                  <ul className="mt-4 flex flex-col gap-3">
                    {c.keyTakeaways.map(k => (
                      <li key={k} className="flex gap-3 text-[14.5px] leading-relaxed text-[#3D4A63]">
                        <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#0099FA]" />
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-[13px] leading-relaxed text-[#8A9BBE]">
                  <span className="font-semibold text-[#5A6A85]">{t.author}:</span> {post.author}
                </div>
              </div>
            </aside>

            <article className="lg:col-span-8 order-1 lg:order-2 flex flex-col gap-7 max-w-[760px] min-w-0">
              {c.blocks.map((b, i) => <Block key={i} block={b} />)}
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F9FD] py-20 lg:py-24">
        <div className="container-x">
          <div className="mx-auto mb-12 flex max-w-[760px] flex-col items-center text-center">
            <span className="eyebrow mb-5">{t.faqEyebrow}</span>
            <h2 className="font-heading font-bold text-[28px] md:text-[38px] leading-[1.15] text-[#080F20]">{t.faqTitle}</h2>
          </div>
          <FaqAccordion items={c.faq} />
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-white py-20 lg:py-24">
          <div className="container-x">
            <h2 className="mb-8 font-heading font-bold text-[26px] md:text-[32px] text-[#080F20]">{t.related}</h2>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {related.map(p => <BlogCard key={p.slug} post={p} locale={locale} t={t} />)}
            </div>
            <p className="mx-auto mt-14 max-w-[760px] text-center text-[13.5px] leading-relaxed text-[#8A9BBE]">{t.disclaimer}</p>
          </div>
        </section>
      )}

      <BlogCta locale={locale} t={t} />
      <Footer lang={locale} />
    </div>
  );
}
