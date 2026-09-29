import { ChevronRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import { getLocalePath } from '@/lib/i18n/config';
import { REGISTER_URL, AFFILIATE_REL } from '@/config/links';
import type { BlogDictionary } from '@/lib/blog';

export function BlogCta({ locale, t }: { locale: Locale; t: BlogDictionary }) {
  return (
    <section id="blog-cta" className="relative overflow-hidden py-20 lg:py-24" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 50%, #0C3260 100%)' }}>
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#0099FA]/15 blur-[140px]" />
      <div className="absolute inset-0 grid-noise pointer-events-none" />
      <div className="container-x relative z-10 text-center max-w-[760px] mx-auto text-white">
        <span className="eyebrow eyebrow-dark mb-5">{t.ctaEyebrow}</span>
        <h2 className="font-heading font-extrabold text-[30px] md:text-[42px] leading-[1.1] mb-5">{t.ctaTitle}</h2>
        <p className="text-[16px] md:text-[17px] text-white/70 leading-relaxed mb-9">{t.ctaText}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-10 text-[15px] font-bold tracking-[0.06em] uppercase">{t.ctaButton}<ChevronRight className="w-4 h-4" /></a>
          <a href={getLocalePath(locale, 'quick-start')} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.ctaSecondary}</a>
        </div>
      </div>
    </section>
  );
}
