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
  ChevronRight, ArrowRight, Check, Minus, ShieldCheck, Activity, RefreshCw, LayoutGrid,
  Layers, SlidersHorizontal, Timer, PieChart, Globe, Trophy, UserPlus, ToggleRight, MousePointerClick,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { REGISTER_URL, LOGIN_URL, AFFILIATE_REL } from '@/config/links';
import { getLocalePath, isLocale } from '@/lib/i18n/config';
import { getFreeDemoDictionary } from '@/lib/i18n/free-demo';

const BRAND = '#0099FA';
const HIGHLIGHT_ICONS: LucideIcon[] = [ShieldCheck, Activity, RefreshCw, LayoutGrid];
const STEP_ICONS: LucideIcon[] = [UserPlus, ToggleRight, MousePointerClick];
const PRACTICE_ICONS: LucideIcon[] = [Layers, SlidersHorizontal, Timer, PieChart, Globe, Trophy];

export function FreeDemoPage({ lang = 'en', guides }: { lang?: string; guides?: React.ReactNode }) {
  const t = getFreeDemoDictionary(lang);
  const locale = isLocale(lang) ? lang : 'en';
  const lp = (path: string) => getLocalePath(locale, path);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#080F20] flex flex-col font-sans">
      <BreadcrumbJsonLd lang={lang} slug="free-demo" homeName={t.home} pageName={t.breadcrumb} />
      <HowToJsonLd name={t.steps.title} description={t.steps.subtitle} steps={t.steps.items.map(s => ({ name: s.title, text: s.desc }))} />
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
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 text-white">
              <span className="eyebrow eyebrow-dark mb-6">{t.hero.eyebrow}</span>
              <h1 className="font-heading font-extrabold text-[34px] md:text-[48px] lg:text-[56px] leading-[1.08] mb-6">
                {t.hero.title}{' '}
                <span className="text-gradient-brand">{t.hero.titleAccent}</span>
              </h1>
              <p className="text-[16px] md:text-[17.5px] text-white/72 leading-relaxed max-w-[620px] mb-9">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3.5 mb-4">
                <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-9 text-[15px] font-bold tracking-[0.06em] uppercase">{t.hero.cta}<ChevronRight className="w-4 h-4" /></a>
                <a href={LOGIN_URL} target="_blank" rel={AFFILIATE_REL} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.hero.login}</a>
              </div>
              <p className="text-[13px] text-white/45 mb-10">{t.hero.note}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {t.hero.facts.map(f => (
                  <div key={f.label} className="bg-[#0A2540]/90 px-5 py-4">
                    <div className="font-heading font-extrabold text-[24px] md:text-[26px] leading-none text-white">{f.value}</div>
                    <div className="mt-1.5 text-[12px] uppercase tracking-[0.1em] text-white/45">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'rgba(0,153,250,0.25)' }} />
              <div className="relative w-[220px] sm:w-[280px] lg:w-[300px] translate-x-10 sm:translate-x-14 lg:translate-x-10 mt-4 lg:mt-0">
                <Image src="/images/iphone.webp" alt="Pocket Option demo account on mobile" width={272} height={558} priority sizes="(min-width: 1024px) 300px, 60vw" className="relative w-full h-auto animate-float-slow rotate-[-6deg] drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]" />
                <div className="absolute -left-20 sm:-left-36 bottom-10 rounded-2xl bg-white p-4 shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center justify-between gap-6 mb-2">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#8A9BB5]">{t.hero.balanceLabel}</span>
                    <span className="rounded-full bg-[#E6F4FF] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#0099FA]">{t.hero.accountTag}</span>
                  </div>
                  <div className="font-heading text-[26px] font-extrabold leading-none text-[#080F20]">{t.hero.balance}</div>
                  <div className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold text-[#16A34A]"><RefreshCw className="h-3.5 w-3.5" />{t.hero.facts[3].label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white py-14 lg:py-16 border-b border-[#EEF2F8]">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.highlights.map((h, i) => (
            <div key={h.title} className="flex gap-4 items-start">
              <IconBadge icon={HIGHLIGHT_ICONS[i]} size={56} />
              <div>
                <h3 className="font-heading font-bold text-[16.5px] text-[#080F20] mb-1.5">{h.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#5A6A85]">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-20 lg:py-28 overflow-hidden">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow mb-5">{t.about.eyebrow}</span>
            <h2 className="font-heading font-bold text-[28px] md:text-[38px] lg:text-[42px] leading-[1.15] text-[#080F20] mb-5">{t.about.title}</h2>
            <p className="text-[16px] md:text-[17px] leading-[1.75] text-[#5A6A85] mb-4">{t.about.p1}</p>
            <p className="text-[16px] md:text-[17px] leading-[1.75] text-[#5A6A85] mb-7">{t.about.p2}</p>
            <ul className="flex flex-col gap-3">
              {t.about.points.map(p => (
                <li key={p} className="flex items-start gap-3 text-[15px] font-medium text-[#1A2B42]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E6F4FF]"><Check className="h-3.5 w-3.5 text-[#0099FA]" strokeWidth={3} /></span>{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'rgba(0,153,250,0.16)' }} />
            <Image src="/images/monitor.webp" alt="Pocket Option demo trading terminal" width={935} height={790} sizes="(min-width: 1024px) 50vw, 100vw" className="relative w-full h-auto lg:scale-[1.12] lg:translate-x-8 drop-shadow-[0_40px_80px_rgba(8,15,32,0.25)]" />
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="bg-[#F7F9FD] py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.compare.eyebrow} title={t.compare.title} subtitle={t.compare.subtitle} />
          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_rgba(8,15,32,0.08)] ring-1 ring-[#E4EBF5]">
            <div className="grid grid-cols-[1.3fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.12em]">
              <div className="px-5 md:px-8 py-5 text-[#8A9BB5]" />
              <div className="px-4 md:px-8 py-5 text-center text-[#0099FA] bg-[#EEF6FF]">{t.compare.demoCol}</div>
              <div className="px-4 md:px-8 py-5 text-center text-white" style={{ background: 'linear-gradient(135deg, #0A2540, #0C3260)' }}>{t.compare.liveCol}</div>
            </div>
            {t.compare.rows.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-[1.3fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr] text-[13.5px] md:text-[15px] ${i % 2 ? 'bg-[#FAFBFE]' : 'bg-white'}`}>
                <div className="px-5 md:px-8 py-4 font-semibold text-[#0D1B2A] border-t border-[#EEF2F8]">{row.feature}</div>
                <div className="px-4 md:px-8 py-4 text-center text-[#1A2B42] border-t border-[#EEF2F8] bg-[#EEF6FF]/40">{row.demo}</div>
                <div className="px-4 md:px-8 py-4 text-center text-[#1A2B42] border-t border-[#EEF2F8]">{row.live}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl mx-auto text-center text-[14.5px] leading-relaxed text-[#5A6A85]">{t.compare.note}</p>
        </div>
      </section>

      {/* STEPS */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #071A33 0%, #0A2540 100%)' }}>
        <div className="absolute inset-0 grid-noise pointer-events-none opacity-50" />
        <div className="container-x relative">
          <SectionHead eyebrow={t.steps.eyebrow} title={t.steps.title} subtitle={t.steps.subtitle} dark />
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12">
            {t.steps.items.map((s, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <div key={s.title} className="relative glass-dark rounded-2xl border border-white/10 p-8">
                  <span className="absolute right-6 top-5 font-heading text-[56px] font-extrabold leading-none text-white/[0.06]">0{i + 1}</span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.08] mb-6"><Icon className="h-7 w-7 text-[#5fb8ff]" strokeWidth={1.75} fill="#5fb8ff" fillOpacity={0.18} /></span>
                  <h3 className="font-heading font-bold text-[19px] text-white mb-3">{s.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-white/60">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand h-[54px] px-10 text-[15px] font-bold tracking-[0.06em] uppercase">{t.steps.cta}<ChevronRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.practice.eyebrow} title={t.practice.title} subtitle={t.practice.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.practice.items.map((item, i) => (
              <div key={item.title} className="card-premium p-8 flex flex-col">
                <IconBadge icon={PRACTICE_ICONS[i]} size={60} />
                <h3 className="mt-6 font-heading font-bold text-[18px] leading-snug text-[#080F20] mb-3">{item.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-[#5A6A85]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSITION */}
      <section className="bg-[#F7F9FD] py-20 lg:py-28 overflow-hidden">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow mb-5">{t.transition.eyebrow}</span>
            <h2 className="font-heading font-bold text-[28px] md:text-[38px] lg:text-[42px] leading-[1.15] text-[#080F20] mb-5">{t.transition.title}</h2>
            <p className="text-[16px] md:text-[17px] leading-[1.75] text-[#5A6A85] mb-8">{t.transition.subtitle}</p>
            <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand h-[52px] px-8 text-[14.5px] font-bold tracking-[0.06em] uppercase">{t.transition.cta}<ChevronRight className="w-4 h-4" /></a>
          </div>
          <div className="lg:col-span-6">
            <div className="card-premium p-7 md:p-9">
              <ol className="flex flex-col divide-y divide-[#EEF2F8]">
                {t.transition.checklist.map((c, i) => (
                  <li key={c} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-heading text-[13px] font-extrabold text-white" style={{ background: 'linear-gradient(135deg, #0099FA, #0052cc)' }}>{i + 1}</span>
                    <span className="text-[15px] font-medium text-[#1A2B42]">{c}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />
          <div className="max-w-4xl mx-auto flex flex-col gap-3">
            {t.faq.items.map((item, i) => {
              const isOpen = faqOpen === i;
              return (
                <div key={item.q} className="rounded-2xl border bg-white transition-all" style={{ borderColor: isOpen ? 'rgba(0,153,250,0.4)' : '#E4EBF5', boxShadow: isOpen ? '0 8px 30px rgba(0,153,250,0.08)' : '0 1px 4px rgba(0,0,0,0.03)' }}>
                  <button onClick={() => setFaqOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left">
                    <h3 className="font-heading font-semibold text-[16px] md:text-[17px] leading-[1.4] text-[#0D1B2A]">{item.q}</h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all" style={{ background: isOpen ? 'linear-gradient(135deg, #0099FA, #0052cc)' : '#EEF3FC' }}>
                      {isOpen ? <Minus className="h-3.5 w-3.5 text-white" strokeWidth={2.5} /> : <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><line x1="6" y1="1" x2="6" y2="11" stroke={BRAND} strokeWidth="2" strokeLinecap="round"/><line x1="1" y1="6" x2="11" y2="6" stroke={BRAND} strokeWidth="2" strokeLinecap="round"/></svg>}
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
          <p className="text-[16px] md:text-[18px] text-white/70 max-w-[640px] mx-auto mb-9">{t.finalCta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-10 text-[15px] font-bold tracking-[0.06em] uppercase">{t.finalCta.cta}<ChevronRight className="w-4 h-4" /></a>
            <a href={lp('quick-start')} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.finalCta.secondary}<ArrowRight className="w-4 h-4" /></a>
          </div>
          <p className="mt-6 text-[13px] text-white/40">{t.finalCta.note}</p>
        </div>
      </section>

      </main>

      <Footer lang={lang} />
    </div>
  );
}
