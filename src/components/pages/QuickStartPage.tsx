'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/seo/FaqJsonLd';
import { HowToJsonLd } from '@/components/seo/HowToJsonLd';
import { IconBadge } from '@/components/ui/IconBadge';
import { SectionHead } from '@/components/ui/SectionHead';
import {
  ChevronRight, ArrowRight, Check, Lightbulb, CandlestickChart, Timer, Coins, TrendingUp,
  GraduationCap, Percent, SlidersHorizontal, CalendarDays, FileText, FlaskConical,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { REGISTER_URL, LOGIN_URL, AFFILIATE_REL } from '@/config/links';
import { getLocalePath, isLocale } from '@/lib/i18n/config';
import { getQuickStartDictionary } from '@/lib/i18n/quick-start';

const BRAND = '#0099FA';
const STEP_IMAGES = ['1_1', '6_1', '2_2', '3_1', '4_1', '6_2'];
const TRADE_ICONS: LucideIcon[] = [CandlestickChart, Timer, Coins, TrendingUp];
const TIP_ICONS: LucideIcon[] = [GraduationCap, Percent, SlidersHorizontal, CalendarDays, FileText];

export function QuickStartPage({ lang = 'en', guides }: { lang?: string; guides?: React.ReactNode }) {
  const t = getQuickStartDictionary(lang);
  const locale = isLocale(lang) ? lang : 'en';
  const lp = (path: string) => getLocalePath(locale, path);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#080F20] flex flex-col font-sans">
      <BreadcrumbJsonLd lang={lang} slug="quick-start" homeName={t.home} pageName={t.breadcrumb} />
      <HowToJsonLd name={`${t.hero.title} ${t.hero.titleAccent}`} description={t.hero.subtitle} steps={t.steps.items.map(s => ({ name: s.title, text: s.desc }))} />
      <FaqJsonLd items={t.faq.items} />
      <Header lang={lang} />
      <main className="flex-1 flex flex-col">

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 45%, #0C3260 75%, #0A2540 100%)' }}>
        <div className="absolute pointer-events-none" style={{ top: '-20%', right: '-10%', width: '60%', height: '80%', background: 'radial-gradient(ellipse, rgba(0,153,250,0.16) 0%, transparent 65%)', borderRadius: '50%' }} />
        <div className="absolute inset-0 grid-noise pointer-events-none" />
        <div className="container-x relative z-10 pt-[110px] md:pt-[150px] pb-14 lg:pb-20">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[13px] text-white/45">
            <a href={lp('')} className="hover:text-white/80 transition-colors">{t.home}</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{t.breadcrumb}</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            <div className="lg:col-span-7 text-white">
              <span className="eyebrow eyebrow-dark mb-6">{t.hero.eyebrow}</span>
              <h1 className="font-heading font-extrabold text-[34px] md:text-[48px] lg:text-[56px] leading-[1.08] mb-6">
                {t.hero.title}{' '}
                <span className="text-gradient-brand">{t.hero.titleAccent}</span>
              </h1>
              <p className="text-[16px] md:text-[17.5px] text-white/72 leading-relaxed max-w-[620px] mb-9">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3.5 mb-11">
                <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-9 text-[15px] font-bold tracking-[0.06em] uppercase">{t.hero.register}<ChevronRight className="w-4 h-4" /></a>
                <a href={LOGIN_URL} target="_blank" rel={AFFILIATE_REL} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.hero.login}</a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {t.hero.facts.map(f => (
                  <div key={f.label} className="bg-[#0A2540]/90 px-5 py-4">
                    <div className="font-heading font-extrabold text-[24px] md:text-[26px] leading-none text-white">{f.value}</div>
                    <div className="mt-1.5 text-[12px] uppercase tracking-[0.1em] text-white/45">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'rgba(0,153,250,0.22)' }} />
              <Image src="/images/quick-start/header-bg-3.webp" alt="Pocket Option trading platform on a laptop" width={1537} height={1439} priority sizes="(min-width: 768px) 520px, 90vw" className="relative w-full max-w-[520px] mx-auto animate-float-slow drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]" />
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.steps.eyebrow} title={t.steps.title} subtitle={t.steps.subtitle} />
          <ol className="relative flex flex-col gap-6 md:gap-8">
            <div className="hidden md:block absolute left-[39px] top-10 bottom-10 w-px bg-gradient-to-b from-[#0099FA]/0 via-[#0099FA]/35 to-[#0099FA]/0" aria-hidden />
            {t.steps.items.map((step, i) => (
              <li key={step.title} className="relative grid md:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <div className="relative z-10 flex h-[78px] w-[78px] items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,153,250,0.18)] ring-1 ring-[#E4EBF5]">
                    <span className="font-heading text-[26px] font-extrabold text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #0099FA, #0052cc)' }}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className={`md:col-span-11 card-premium overflow-hidden grid md:grid-cols-12 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="md:col-span-4 relative flex items-center justify-center bg-gradient-to-br from-[#F2F6FC] to-[#E6EEF9] p-8 min-h-[220px]">
                    <div className="absolute pointer-events-none h-[180px] w-[180px] rounded-full blur-2xl" style={{ background: 'rgba(0,153,250,0.16)' }} />
                    <Image src={`/images/quick-start/${STEP_IMAGES[i]}.webp`} alt={`${step.title} — Pocket Option`} width={360} height={270} sizes="260px" className="relative w-[240px] md:w-[260px] h-auto animate-float-slow" style={{ animationDelay: `${i * 0.4}s` }} />
                  </div>
                  <div className="md:col-span-8 p-7 md:p-9 lg:p-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="md:hidden font-heading text-[14px] font-extrabold text-[#0099FA]">{t.steps.stepLabel} {i + 1}</span>
                      <span className="hidden md:inline text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#0099FA]">{t.steps.stepLabel} {i + 1} / {t.steps.items.length}</span>
                    </div>
                    <h3 className="font-heading font-bold text-[22px] md:text-[26px] leading-[1.2] text-[#080F20] mb-4">{step.title}</h3>
                    <p className="text-[15.5px] md:text-[16px] leading-[1.75] text-[#5A6A85] mb-6">{step.desc}</p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2.5 mb-6">
                      {step.bullets.map(b => (
                        <li key={b} className="flex items-center gap-2 text-[14px] font-medium text-[#1A2B42]">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E6F4FF]"><Check className="h-3 w-3 text-[#0099FA]" strokeWidth={3} /></span>{b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-t border-[#EEF2F8] pt-6">
                      <div className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#5A6A85] flex-1">
                        <Lightbulb className="h-4 w-4 shrink-0 mt-0.5 text-[#F5A524]" fill="#F5A524" fillOpacity={0.25} />
                        <span><span className="font-semibold text-[#0D1B2A]">{t.steps.tipLabel}:</span> {step.tip}</span>
                      </div>
                      <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-bold text-[#0099FA] hover:gap-2.5 transition-all">{step.cta}<ArrowRight className="h-4 w-4" /></a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FIRST TRADE */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #071A33 0%, #0A2540 100%)' }}>
        <div className="absolute inset-0 grid-noise pointer-events-none opacity-50" />
        <div className="container-x relative">
          <SectionHead eyebrow={t.firstTrade.eyebrow} title={t.firstTrade.title} subtitle={t.firstTrade.subtitle} dark />
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {t.firstTrade.items.map((item, i) => {
                const Icon = TRADE_ICONS[i];
                return (
                  <div key={item.title} className="glass-dark rounded-2xl border border-white/10 p-7">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.08]"><Icon className="h-6 w-6 text-[#5fb8ff]" strokeWidth={1.75} fill="#5fb8ff" fillOpacity={0.18} /></span>
                      <span className="font-heading text-[13px] font-bold tracking-[0.12em] text-white/40">0{i + 1}</span>
                    </div>
                    <h3 className="font-heading font-bold text-[18px] text-white mb-2">{item.title}</h3>
                    <p className="text-[14.5px] leading-relaxed text-white/60">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-7 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading font-bold text-[18px] text-[#080F20]">{t.firstTrade.exampleTitle}</h3>
                  <span className="live-dot h-2 w-2 rounded-full bg-[#22c55e]" />
                </div>
                <dl className="divide-y divide-[#EEF2F8]">
                  {t.firstTrade.example.map((row, i) => {
                    const last = i === t.firstTrade.example.length - 1;
                    return (
                      <div key={row.label} className="flex items-center justify-between py-3.5">
                        <dt className="text-[14px] text-[#5A6A85]">{row.label}</dt>
                        <dd className={`font-heading font-bold ${last ? 'text-[22px] text-[#16A34A]' : 'text-[15px] text-[#0D1B2A]'}`}>{row.value}</dd>
                      </div>
                    );
                  })}
                </dl>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <div className="flex h-12 items-center justify-center rounded-lg bg-[#16A34A] font-heading text-[14px] font-bold uppercase tracking-wider text-white">Higher</div>
                  <div className="flex h-12 items-center justify-center rounded-lg bg-[#EF4444] font-heading text-[14px] font-bold uppercase tracking-wider text-white">Lower</div>
                </div>
                <p className="mt-5 text-[12.5px] leading-relaxed text-[#8A9BB5]">{t.firstTrade.exampleNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="bg-[#F7F9FD] py-20 lg:py-28 overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 relative flex justify-center">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'rgba(0,153,250,0.18)' }} />
              <div className="relative card-premium p-8 w-full max-w-[420px]">
                <div className="flex items-center justify-between mb-6">
                  <IconBadge icon={FlaskConical} size={52} />
                  <span className="rounded-full bg-[#E6F4FF] px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#0099FA]">Demo</span>
                </div>
                <div className="text-[13px] uppercase tracking-[0.12em] text-[#8A9BB5] mb-1">Balance</div>
                <div className="font-heading text-[40px] font-extrabold leading-none text-[#080F20] mb-6">$50,000<span className="text-[18px] text-[#8A9BB5]">.00</span></div>
                <Image src="/images/quick-start/5_1.webp" alt="Pocket Option demo account chart" width={360} height={270} sizes="220px" className="w-[220px] h-auto mx-auto animate-float-slow" />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="eyebrow mb-5">{t.demo.eyebrow}</span>
              <h2 className="font-heading font-bold text-[28px] md:text-[38px] lg:text-[42px] leading-[1.15] text-[#080F20] mb-5">{t.demo.title}</h2>
              <p className="text-[16px] md:text-[17px] leading-[1.75] text-[#5A6A85] mb-4">{t.demo.p1}</p>
              <p className="text-[16px] md:text-[17px] leading-[1.75] text-[#5A6A85] mb-7">{t.demo.p2}</p>
              <ul className="flex flex-col gap-3 mb-9">
                {t.demo.points.map(p => (
                  <li key={p} className="flex items-center gap-3 text-[15px] font-medium text-[#1A2B42]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F4FF]"><Check className="h-3.5 w-3.5 text-[#0099FA]" strokeWidth={3} /></span>{p}
                  </li>
                ))}
              </ul>
              <a href={lp('free-demo')} className="btn-brand h-[52px] px-8 text-[14.5px] font-bold tracking-[0.06em] uppercase">{t.demo.cta}<ChevronRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.tips.eyebrow} title={t.tips.title} subtitle={t.tips.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.tips.items.map((tip, i) => (
              <div key={tip.title} className="card-premium p-7 flex flex-col">
                <IconBadge icon={TIP_ICONS[i]} size={56} />
                <div className="mt-6 mb-2 font-heading text-[12px] font-bold tracking-[0.14em] text-[#0099FA]">0{i + 1}</div>
                <h3 className="font-heading font-bold text-[17px] leading-snug text-[#080F20] mb-3">{tip.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#5A6A85]">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F9FD] py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />
          <div className="max-w-4xl mx-auto flex flex-col gap-3">
            {t.faq.items.map((item, i) => {
              const isOpen = faqOpen === i;
              return (
                <div key={item.q} className="rounded-2xl border bg-white transition-all" style={{ borderColor: isOpen ? 'rgba(0,153,250,0.4)' : '#E4EBF5', boxShadow: isOpen ? '0 8px 30px rgba(0,153,250,0.08)' : '0 1px 4px rgba(0,0,0,0.03)' }}>
                  <button onClick={() => setFaqOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left">
                    <h3 className="font-heading font-semibold text-[16px] md:text-[17px] leading-[1.4] text-[#0D1B2A]">{item.q}</h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all" style={{ background: isOpen ? 'linear-gradient(135deg, #0099FA, #0052cc)' : '#EEF3FC', transform: isOpen ? 'rotate(45deg)' : 'none' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><line x1="6" y1="1" x2="6" y2="11" stroke={isOpen ? '#fff' : BRAND} strokeWidth="2" strokeLinecap="round"/><line x1="1" y1="6" x2="11" y2="6" stroke={isOpen ? '#fff' : BRAND} strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                  </button>
                  {isOpen && <p className="px-7 pb-6 -mt-1 text-[15.5px] leading-[1.75] text-[#5A6A85]">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {guides}

      <section className="relative overflow-hidden py-20 lg:py-24" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 50%, #0C3260 100%)' }}>
        <div className="absolute inset-0 grid-noise pointer-events-none opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'rgba(0,153,250,0.18)' }} />
        <div className="container-x relative text-center">
          <h2 className="font-heading font-extrabold text-[30px] md:text-[44px] leading-[1.12] text-white mb-4">{t.finalCta.title}</h2>
          <p className="text-[16px] md:text-[18px] text-white/70 max-w-[600px] mx-auto mb-9">{t.finalCta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-10 text-[15px] font-bold tracking-[0.06em] uppercase">{t.finalCta.register}<ChevronRight className="w-4 h-4" /></a>
            <a href={lp('free-demo')} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.finalCta.demo}</a>
          </div>
          <p className="mt-6 text-[13px] text-white/40">{t.finalCta.note}</p>
        </div>
      </section>

      </main>

      <Footer lang={lang} />
    </div>
  );
}
