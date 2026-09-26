import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogCta } from '@/components/blog/BlogCta';
import { ChevronRight, ArrowRight, Clock } from 'lucide-react';
import { getLocalePath, isLocale } from '@/lib/i18n/config';
import { blogPosts, getBlogDictionary } from '@/lib/blog';
import { formatBlogDate } from '@/components/blog/format';

export function BlogIndexPage({ lang = 'en' }: { lang?: string }) {
  const locale = isLocale(lang) ? lang : 'en';
  const t = getBlogDictionary(locale);
  const lp = (path: string) => getLocalePath(locale, path);
  const [featured, ...rest] = blogPosts;
  const fc = featured.content[locale];

  return (
    <div className="min-h-screen bg-[#080F20] flex flex-col font-sans">
      <BreadcrumbJsonLd lang={locale} slug="blog" homeName={t.home} pageName={t.breadcrumb} />
      <Header lang={locale} />
      <main className="flex-1 flex flex-col">

      {/* HERO */}
      <section className="relative overflow-hidden pt-[110px] md:pt-[150px] pb-16 lg:pb-24 text-white" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 45%, #0C3260 75%, #0A2540 100%)' }}>
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#0099FA]/20 blur-[140px]" />
        <div className="absolute inset-0 grid-noise pointer-events-none" />
        <div className="container-x relative">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[13px] text-white/50">
            <a href={lp('')} className="hover:text-white transition-colors">{t.home}</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/85">{t.breadcrumb}</span>
          </nav>
          <div className="max-w-[820px]">
            <span className="eyebrow eyebrow-dark mb-5">{t.eyebrow}</span>
            <h1 className="font-heading font-bold text-[34px] md:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.02em]">
              {t.title}{' '}
              <span className="bg-gradient-to-r from-[#0099FA] to-[#5cc8ff] bg-clip-text text-transparent">{t.titleAccent}</span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-white/65 max-w-[720px]">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-white pt-16 lg:pt-24 pb-6">
        <div className="container-x">
          <a href={lp(`blog/${featured.slug}`)} className="group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center no-underline rounded-[28px] border border-[#E4EBF5] bg-[#F7F9FD] p-5 md:p-7 lg:p-8 transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(8,15,32,0.35)]">
            <div className="lg:col-span-7 overflow-hidden rounded-[20px]">
              <img
                src={featured.cover}
                alt={fc.coverAlt}
                width={1840}
                height={700}
                className="w-full h-auto aspect-[1840/700] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.1em]">
                <span className="rounded-full bg-[#0099FA]/10 px-3 py-1 text-[#0077cc]">{t.categories[featured.category]}</span>
                <span className="flex items-center gap-1.5 text-[#8A9BBE] normal-case tracking-normal font-medium"><Clock className="h-3.5 w-3.5" />{featured.readingMinutes} {t.minRead}</span>
              </div>
              <h2 className="mt-5 font-heading font-bold text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.01em] text-[#080F20] group-hover:text-[#0077cc] transition-colors">{fc.title}</h2>
              <p className="mt-4 text-[15.5px] md:text-[16.5px] leading-relaxed text-[#5A6A85]">{fc.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[13.5px] text-[#8A9BBE]">{formatBlogDate(featured.publishedAt, locale)}</span>
                <span className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#0099FA] group-hover:gap-2.5 transition-all">{t.readMore}<ArrowRight className="h-4 w-4" /></span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* LIST */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <div className="flex items-end justify-between mb-8 md:mb-10">
            <h2 className="font-heading font-bold text-[26px] md:text-[32px] text-[#080F20]">{t.latest}</h2>
          </div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {rest.map(post => (
              <BlogCard key={post.slug} post={post} locale={locale} t={t} />
            ))}
          </div>
          <p className="mx-auto mt-14 max-w-[760px] text-center text-[13.5px] leading-relaxed text-[#8A9BBE]">{t.disclaimer}</p>
        </div>
      </section>

      <BlogCta locale={locale} t={t} />
      </main>
      <Footer lang={locale} />
    </div>
  );
}
