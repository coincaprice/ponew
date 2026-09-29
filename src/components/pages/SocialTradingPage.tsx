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
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import {
  ChevronRight, ArrowRight, Check, Eye, Users, Copy, Wallet, GraduationCap, Zap, ShieldCheck,
  SlidersHorizontal, BadgeDollarSign, Star, Bot, UserCheck, Settings2, Layers, FileText, MessagesSquare,
  UserPlus, Award, TrendingUp, Activity, Gem, AlertTriangle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { REGISTER_URL, AFFILIATE_REL } from '@/config/links';
import { getLocalePath, isLocale } from '@/lib/i18n/config';
import { getSocialTradingDictionary } from '@/lib/i18n/social-trading';

const STEP_ICONS: LucideIcon[] = [Eye, Users, Copy, Wallet];
const WHY_ICONS: LucideIcon[] = [GraduationCap, Star, Zap, ShieldCheck, SlidersHorizontal, BadgeDollarSign];
const BEGINNER_ICONS: LucideIcon[] = [Bot, UserCheck, Settings2, Layers, FileText, MessagesSquare];
const PRO_ICONS: LucideIcon[] = [UserPlus, Award, TrendingUp, Activity, Gem, MessagesSquare];

const TOP_TRADERS = [
  { name: 'Michael210', trades: 12, profit: '+$7474.94' },
  { name: 'user3249901', trades: 84, profit: '+$4722.92' },
  { name: 'Trademonster', trades: 8, profit: '+$4238.23' },
];

export function SocialTradingPage({ lang = 'en', guides }: { lang?: string; guides?: React.ReactNode }) {
  const t = getSocialTradingDictionary(lang);
  const locale = isLocale(lang) ? lang : 'en';
  const lp = (path: string) => getLocalePath(locale, path);
  const [tab, setTab] = useState<'beginners' | 'pro'>('beginners');
  const audienceItems = tab === 'beginners' ? t.audience.beginners : t.audience.pro;
  const audienceIcons = tab === 'beginners' ? BEGINNER_ICONS : PRO_ICONS;

  return (
    <div className="min-h-screen bg-[#080F20] flex flex-col font-sans">
      <BreadcrumbJsonLd lang={lang} slug="social-trading" homeName={t.home} pageName={t.breadcrumb} />
      <HowToJsonLd name={t.how.title} description={t.how.subtitle} steps={t.how.steps.map(s => ({ name: s.title, text: s.desc }))} />
      <FaqJsonLd items={t.faq.items} />
      <Header lang={lang} />
      <main className="flex-1 flex flex-col">

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #03091A 0%, #061B3A 45%, #082A5C 80%, #061B3A 100%)' }}>
        <div className="absolute pointer-events-none" style={{ top: '-10%', right: '0%', width: '55%', height: '90%', background: 'radial-gradient(ellipse, rgba(0,153,250,0.22) 0%, transparent 65%)', borderRadius: '50%' }} />
        <div className="absolute inset-0 grid-noise pointer-events-none" />
        <div className="container-x relative z-10 pt-[110px] md:pt-[150px] pb-0 lg:pb-0">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[13px] text-white/45">
            <a href={lp('')} className="hover:text-white/80 transition-colors">{t.home}</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{t.breadcrumb}</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-end">
            <div className="lg:col-span-7 text-white pb-14 lg:pb-24">
              <span className="eyebrow eyebrow-dark mb-6">{t.hero.eyebrow}</span>
              <h1 className="font-heading font-extrabold text-[34px] md:text-[48px] lg:text-[56px] leading-[1.08] mb-6">
                {t.hero.title}{' '}
                <span className="text-gradient-brand">{t.hero.titleAccent}</span>
              </h1>
              <p className="text-[16px] md:text-[17.5px] text-white/72 leading-relaxed max-w-[620px] mb-9">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3.5 mb-4">
                <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-9 text-[15px] font-bold tracking-[0.06em] uppercase">{t.hero.cta}<ChevronRight className="w-4 h-4" /></a>
                <a href={lp('free-demo')} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.hero.secondary}</a>
              </div>
              <p className="text-[13px] text-white/45 mb-10">{t.hero.note}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {t.hero.facts.map(f => (
                  <div key={f.label} className="bg-[#061B3A]/90 px-5 py-4">
                    <div className="font-heading font-extrabold text-[24px] md:text-[26px] leading-none text-white">{f.value}</div>
                    <div className="mt-1.5 text-[12px] uppercase tracking-[0.1em] text-white/45">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end self-end">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'rgba(0,153,250,0.28)' }} />
              <div className="relative w-[300px] sm:w-[360px] lg:w-[420px]">
                <Image src="/images/social-trading/hero-trader.webp" alt="Trader watching a Pocket Option social trading chart" width={900} height={1237} priority sizes="(min-width: 1024px) 420px, 70vw" className="relative w-full h-auto" />
                <div className="absolute right-0 top-[22%] sm:top-[24%] rounded-xl border border-[#0099FA]/40 bg-[#061B3A]/95 p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur animate-float-slow">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#0099FA] to-[#0052cc] font-heading text-[12px] font-extrabold text-white">JE</span>
                    <span className="font-heading text-[13px] font-bold text-white">John E.</span>
                    <span className="ml-auto rounded-full bg-[#16A34A]/20 px-2 py-0.5 text-[11px] font-bold text-[#4ADE80]">+$2000</span>
                  </div>
                  <div className="flex justify-between gap-6 text-[10.5px] text-white/50"><span>{t.hero.profitableLabel}</span><span className="font-semibold text-white">82%</span></div>
                  <div className="flex justify-between gap-6 text-[10.5px] text-white/50"><span>{t.hero.payoutLabel}</span><span className="font-semibold text-white">100%</span></div>
                  <div className="mt-2.5 rounded-md bg-[#0099FA] py-1.5 text-center font-heading text-[11px] font-bold uppercase tracking-[0.08em] text-white">{t.hero.copyLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT */}
      <section className="bg-white py-20 lg:py-28 overflow-hidden">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow mb-5">{t.what.eyebrow}</span>
            <h2 className="font-heading font-bold text-[28px] md:text-[38px] lg:text-[42px] leading-[1.15] text-[#080F20] mb-5">{t.what.title}</h2>
            <p className="text-[16px] md:text-[17px] leading-[1.75] text-[#5A6A85] mb-4">{t.what.p1}</p>
            <p className="text-[16px] md:text-[17px] leading-[1.75] text-[#5A6A85] mb-7">{t.what.p2}</p>
            <ul className="flex flex-col gap-3">
              {t.what.points.map(p => (
                <li key={p} className="flex items-start gap-3 text-[15px] font-medium text-[#1A2B42]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E6F4FF]"><Check className="h-3.5 w-3.5 text-[#0099FA]" strokeWidth={3} /></span>{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 shadow-[0_30px_80px_rgba(8,15,32,0.25)]" style={{ background: 'linear-gradient(160deg, #061B3A 0%, #03091A 100%)' }}>
              <Image src="/images/social-trading/copy-graph.webp" alt="Live chart with copied trades on Pocket Option" width={1000} height={823} sizes="(min-width: 1024px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover opacity-70" />
              <div className="relative">
                <div className="mb-4 font-heading text-[12px] font-bold uppercase tracking-[0.12em] text-white/60">{t.what.topTraders}</div>
                <ul className="flex flex-col gap-2.5">
                  {TOP_TRADERS.map((tr, i) => (
                    <li key={tr.name} className={`flex items-center gap-4 rounded-xl border px-4 py-3 backdrop-blur ${i === 1 ? 'border-[#0099FA]/50 bg-[#0099FA]/15' : 'border-white/10 bg-[#061B3A]/80'}`}>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#0099FA]/60 bg-[#0A2540] font-heading text-[13px] font-extrabold text-white">{tr.name.slice(0, 2).toUpperCase()}</span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-heading text-[15px] font-bold text-white">{tr.name}</div>
                        <div className="text-[12px] text-white/50">{t.what.tradesLabel}: {tr.trades}</div>
                      </div>
                      <span className="font-heading text-[16px] font-extrabold text-[#4ADE80]">{tr.profit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #071A33 0%, #0A2540 100%)' }}>
        <div className="absolute inset-0 grid-noise pointer-events-none opacity-50" />
        <div className="container-x relative">
          <SectionHead eyebrow={t.how.eyebrow} title={t.how.title} subtitle={t.how.subtitle} dark />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-12">
            {t.how.steps.map((s, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <div key={s.title} className="relative glass-dark rounded-2xl border border-white/10 p-8">
                  <span className="absolute right-6 top-5 font-heading text-[56px] font-extrabold leading-none text-white/[0.06]">0{i + 1}</span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.08] mb-6"><Icon className="h-7 w-7 text-[#5fb8ff]" strokeWidth={1.75} /></span>
                  <h3 className="font-heading font-bold text-[19px] text-white mb-3">{s.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-white/60">{s.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand h-[54px] px-10 text-[15px] font-bold tracking-[0.06em] uppercase">{t.how.cta}<ChevronRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.why.items.map((item, i) => (
              <div key={item.title} className="card-premium p-8 flex flex-col">
                <IconBadge icon={WHY_ICONS[i]} size={60} />
                <h3 className="mt-6 font-heading font-bold text-[18px] leading-snug text-[#080F20] mb-3">{item.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-[#5A6A85]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-[#F7F9FD] py-20 lg:py-28 overflow-hidden">
        <div className="container-x">
          <SectionHead eyebrow={t.audience.eyebrow} title={t.audience.title} />
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex rounded-full bg-white p-1.5 ring-1 ring-[#E4EBF5] shadow-sm">
                {(['beginners', 'pro'] as const).map(k => (
                  <button
                    key={k}
                    onClick={() => setTab(k)}
                    className={`rounded-full px-6 py-2.5 font-heading text-[13.5px] font-bold uppercase tracking-[0.06em] transition-all ${tab === k ? 'text-white shadow-md' : 'text-[#5A6A85] hover:text-[#080F20]'}`}
                    style={tab === k ? { background: 'linear-gradient(135deg, #0099FA, #0052cc)' } : undefined}
                  >
                    {k === 'beginners' ? t.audience.beginnersTab : t.audience.proTab}
                  </button>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {audienceItems.map((item, i) => {
                  const Icon = audienceIcons[i];
                  return (
                    <div key={item.title} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-[#E4EBF5]">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6F4FF]"><Icon className="h-5 w-5 text-[#0099FA]" strokeWidth={1.75} /></span>
                      <div>
                        <h3 className="font-heading font-bold text-[15px] text-[#080F20] mb-1">{item.title}</h3>
                        <p className="text-[13.5px] leading-relaxed text-[#5A6A85]">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'rgba(0,153,250,0.18)' }} />
              <div className="relative w-full max-w-[440px] overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(8,15,32,0.25)]" style={{ background: 'linear-gradient(160deg, #061B3A 0%, #03091A 100%)' }}>
                <Image src="/images/social-trading/pro-trader.webp" alt="Professional trader profile on Pocket Option social trading" width={800} height={860} sizes="(min-width: 1024px) 40vw, 80vw" className="w-full h-auto" />
                <Image src="/images/social-trading/copy-markers.webp" alt="" width={1000} height={823} sizes="(min-width: 1024px) 40vw, 80vw" className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-auto opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SETTINGS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.settings.eyebrow} title={t.settings.title} subtitle={t.settings.subtitle} />
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl bg-white shadow-[0_20px_60px_rgba(8,15,32,0.08)] ring-1 ring-[#E4EBF5]">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.12em] text-[#8A9BB5]">
                  <th className="px-6 md:px-8 py-5">{t.settings.settingCol}</th>
                  <th className="px-6 md:px-8 py-5">{t.settings.meaningCol}</th>
                  <th className="px-6 md:px-8 py-5 bg-[#EEF6FF] text-[#0099FA]">{t.settings.tipCol}</th>
                </tr>
              </thead>
              <tbody>
                {t.settings.rows.map((r, i) => (
                  <tr key={r.setting} className={`text-[14px] md:text-[15px] border-t border-[#EEF2F8] ${i % 2 ? 'bg-[#FAFBFE]' : 'bg-white'}`}>
                    <td className="px-6 md:px-8 py-4 font-semibold text-[#0D1B2A]">{r.setting}</td>
                    <td className="px-6 md:px-8 py-4 text-[#1A2B42]">{r.meaning}</td>
                    <td className="px-6 md:px-8 py-4 text-[#1A2B42] bg-[#EEF6FF]/40">{r.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RISK */}
      <section className="bg-[#F7F9FD] py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow mb-5">{t.risk.eyebrow}</span>
            <h2 className="font-heading font-bold text-[28px] md:text-[38px] lg:text-[42px] leading-[1.15] text-[#080F20] mb-5">{t.risk.title}</h2>
            <p className="text-[16px] md:text-[17px] leading-[1.75] text-[#5A6A85]">{t.risk.p}</p>
          </div>
          <div className="lg:col-span-6">
            <div className="card-premium p-7 md:p-9 border-l-4 border-l-[#f5b942]">
              <ul className="flex flex-col divide-y divide-[#EEF2F8]">
                {t.risk.points.map(p => (
                  <li key={p} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#f5b942]" />
                    <span className="text-[15px] font-medium text-[#1A2B42]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />
          <FaqAccordion items={t.faq.items} />
        </div>
      </section>

      {guides}

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-20 lg:py-24" style={{ background: 'linear-gradient(145deg, #03091A 0%, #061B3A 50%, #082A5C 100%)' }}>
        <div className="absolute inset-0 grid-noise pointer-events-none opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'rgba(0,153,250,0.2)' }} />
        <div className="container-x relative text-center">
          <h2 className="font-heading font-extrabold text-[30px] md:text-[44px] leading-[1.12] text-white mb-4 uppercase tracking-tight">{t.finalCta.title}</h2>
          <p className="text-[16px] md:text-[18px] text-white/70 max-w-[640px] mx-auto mb-9">{t.finalCta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-10 text-[15px] font-bold tracking-[0.06em] uppercase">{t.finalCta.cta}<ChevronRight className="w-4 h-4" /></a>
            <a href={lp('blog/pocket-option-social-trading')} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.finalCta.secondary}<ArrowRight className="w-4 h-4" /></a>
          </div>
          <p className="mt-6 text-[13px] text-white/40">{t.finalCta.note}</p>
        </div>
      </section>

      </main>

      <Footer lang={lang} />
    </div>
  );
}
