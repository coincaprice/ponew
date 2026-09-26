'use client';

import { useEffect, useMemo, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/seo/FaqJsonLd';
import { IconBadge } from '@/components/ui/IconBadge';
import { SectionHead } from '@/components/ui/SectionHead';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import {
  ChevronRight, ChevronDown, Search, Clock, Coins, Gem, Building2, Bitcoin, BarChart3,
  Percent, Activity, Globe, FlaskConical,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { REGISTER_URL, AFFILIATE_REL } from '@/config/links';
import { getLocalePath, isLocale } from '@/lib/i18n/config';
import { getAssetsDictionary, type AssetCategoryKey } from '@/lib/i18n/assets';
import { ASSETS, ASSET_CATEGORIES } from '@/data/assets';

const CATEGORY_ICONS: Record<AssetCategoryKey, LucideIcon> = {
  Currency: Coins,
  Commodities: Gem,
  Stocks: Building2,
  Cryptocurrencies: Bitcoin,
  Indices: BarChart3,
};
const HOURS_ICONS: LucideIcon[] = [Coins, Building2, Gem, Bitcoin, Clock];
const TIP_ICONS: LucideIcon[] = [Percent, Activity, Globe, FlaskConical];

type Filter = 'All' | AssetCategoryKey;

function payoutColor(p: number) {
  if (p >= 85) return '#16A34A';
  if (p >= 60) return '#0099FA';
  return '#F59E0B';
}

export function AssetsPage({ lang = 'en' }: { lang?: string }) {
  const t = getAssetsDictionary(lang);
  const locale = isLocale(lang) ? lang : 'en';
  const lp = (path: string) => getLocalePath(locale, path);

  const [filter, setFilter] = useState<Filter>('All');
  const [otcOnly, setOtcOnly] = useState(false);
  const [query, setQuery] = useState('');
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [timeLabel, setTimeLabel] = useState('');

  useEffect(() => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.');
    setTimeLabel(`${time}, ${date}`);
  }, []);

  const q = query.trim().toLowerCase();
  const visible = useMemo(() => {
    const cats = filter === 'All' ? ASSET_CATEGORIES : [filter];
    return cats
      .map(cat => ({
        cat,
        assets: ASSETS[cat].filter(a => (!otcOnly || a.name.includes('OTC')) && (!q || a.name.toLowerCase().includes(q))),
      }))
      .filter(g => g.assets.length > 0);
  }, [filter, otcOnly, q]);
  const total = visible.reduce((n, g) => n + g.assets.length, 0);

  return (
    <div className="min-h-screen bg-[#080F20] flex flex-col font-sans">
      <BreadcrumbJsonLd lang={lang} slug="assets" homeName={t.home} pageName={t.breadcrumb} />
      <FaqJsonLd items={t.faq.items} />
      <Header lang={lang} />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 45%, #0C3260 75%, #0A2540 100%)' }}>
        <div className="absolute pointer-events-none" style={{ top: '-20%', right: '-10%', width: '60%', height: '80%', background: 'radial-gradient(ellipse, rgba(0,153,250,0.18) 0%, transparent 65%)', borderRadius: '50%' }} />
        <div className="absolute inset-0 grid-noise pointer-events-none" />
        <div className="container-x relative z-10 pt-[110px] md:pt-[150px] pb-16 lg:pb-20">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[13px] text-white/45">
            <a href={lp('')} className="hover:text-white/80 transition-colors">{t.home}</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{t.breadcrumb}</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 text-white">
              <span className="eyebrow eyebrow-dark mb-6">{t.hero.eyebrow}</span>
              <h1 className="font-heading font-extrabold text-[34px] md:text-[48px] lg:text-[56px] leading-[1.08] mb-6">
                {t.hero.title}{' '}
                <span className="text-gradient-brand">{t.hero.titleAccent}</span>
              </h1>
              <p className="text-[16px] md:text-[17.5px] text-white/72 leading-relaxed max-w-[680px] mb-9">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3.5">
                <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-9 text-[15px] font-bold tracking-[0.06em] uppercase">{t.hero.cta}<ChevronRight className="w-4 h-4" /></a>
                <a href={lp('/free-demo')} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.hero.secondary}</a>
              </div>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              {t.hero.facts.map(f => (
                <div key={f.label} className="glass-dark rounded-2xl border border-white/10 px-5 py-5">
                  <div className="font-heading font-extrabold text-[28px] leading-none text-white">{f.value}</div>
                  <div className="mt-2 text-[11.5px] uppercase tracking-[0.1em] text-white/45">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <SectionHead eyebrow={t.categories.eyebrow} title={t.categories.title} subtitle={t.categories.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {ASSET_CATEGORIES.map(cat => {
              const list = ASSETS[cat];
              const top = Math.max(...list.map(a => a.payout));
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => { setFilter(cat); document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  className="card-premium p-7 text-left flex flex-col hover:-translate-y-1 transition-transform"
                >
                  <IconBadge icon={CATEGORY_ICONS[cat]} size={56} />
                  <h3 className="font-heading font-bold text-[17px] text-[#080F20] mt-5 mb-2">{t.categories.items[cat].name}</h3>
                  <p className="text-[14px] leading-relaxed text-[#5A6A85] flex-1">{t.categories.items[cat].desc}</p>
                  <div className="mt-5 pt-4 border-t border-[#EEF2F8] flex items-center justify-between text-[12.5px]">
                    <span className="text-[#8A9BB5]"><b className="text-[#0D1B2A] font-heading">{list.length}</b> {t.categories.countLabel}</span>
                    <span className="text-[#8A9BB5]"><b className="text-[#16A34A] font-heading">{top}%</b> {t.categories.topPayoutLabel}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="bg-[#F7F9FD] py-20 lg:py-28 scroll-mt-24">
        <div className="container-x">
          <SectionHead eyebrow={t.table.eyebrow} title={t.table.title} subtitle={t.table.subtitle} />

          <div className="card-premium overflow-hidden">
            {/* toolbar */}
            <div className="border-b border-[#EEF2F8] px-5 md:px-7 py-5 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8A9BB5]" />
                  <input
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder={t.table.search}
                    className="w-full h-11 rounded-full border border-[#E4EBF5] bg-white pl-11 pr-4 text-[14.5px] text-[#0D1B2A] outline-none focus:border-[#0099FA] transition-colors"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setOtcOnly(v => !v)}
                  aria-pressed={otcOnly}
                  className={`h-11 rounded-full px-5 text-[13.5px] font-bold uppercase tracking-[0.06em] border transition-colors ${otcOnly ? 'bg-[#0099FA] border-[#0099FA] text-white' : 'bg-white border-[#E4EBF5] text-[#5A6A85] hover:border-[#0099FA]'}`}
                >
                  {t.table.otcOnly}
                </button>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 -mb-1">
                {(['All', ...ASSET_CATEGORIES] as Filter[]).map(f => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    className={`shrink-0 h-9 rounded-full px-4 text-[13px] font-semibold border transition-colors ${filter === f ? 'bg-[#0D1B2A] border-[#0D1B2A] text-white' : 'bg-white border-[#E4EBF5] text-[#5A6A85] hover:border-[#0099FA] hover:text-[#0099FA]'}`}
                  >
                    {f === 'All' ? t.table.all : t.categories.items[f].name}
                  </button>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[13px] text-[#8A9BB5]">
                <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-[#0099FA]" />{t.table.updated} <span className="font-semibold text-[#0D1B2A]">{timeLabel || '—'}</span></span>
                <span><b className="text-[#0D1B2A]">{total}</b> {t.table.showing}</span>
              </div>
            </div>

            {/* groups */}
            {visible.length === 0 && <p className="px-7 py-14 text-center text-[15px] text-[#8A9BB5]">{t.table.empty}</p>}
            {visible.map(({ cat, assets }) => {
              const Icon = CATEGORY_ICONS[cat];
              const isCollapsed = !!collapsed[cat];
              return (
                <div key={cat} className="border-b border-[#EEF2F8] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setCollapsed(c => ({ ...c, [cat]: !c[cat] }))}
                    aria-expanded={!isCollapsed}
                    className="w-full flex items-center justify-between gap-4 px-5 md:px-7 py-4 bg-white hover:bg-[#FAFBFE] transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <IconBadge icon={Icon} size={36} />
                      <span className="font-heading font-bold text-[15.5px] text-[#080F20]">{t.categories.items[cat].name}</span>
                      <span className="rounded-full bg-[#EEF3FC] px-2.5 py-0.5 text-[11.5px] font-bold text-[#0099FA]">{assets.length}</span>
                    </span>
                    <ChevronDown className={`h-4.5 w-4.5 text-[#8A9BB5] transition-transform ${isCollapsed ? '' : 'rotate-180'}`} />
                  </button>
                  {!isCollapsed && (
                    <div>
                      <div className="hidden md:grid grid-cols-[1fr_260px_90px] gap-6 px-7 py-2 bg-[#F7F9FD] text-[11px] font-bold uppercase tracking-[0.12em] text-[#8A9BB5]">
                        <span>{t.table.assetCol}</span><span /><span className="text-right">{t.table.payoutCol}</span>
                      </div>
                      <ul>
                        {assets.map(a => {
                          const color = payoutColor(a.payout);
                          const otc = a.name.includes('OTC');
                          return (
                            <li key={a.name} className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_260px_90px] items-center gap-x-4 md:gap-6 px-5 md:px-7 py-3.5 border-t border-[#F1F4F9] hover:bg-[#FAFBFE] transition-colors">
                              <span className="flex items-center gap-2.5 min-w-0">
                                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: otc ? '#16A34A' : '#0099FA', boxShadow: `0 0 0 3px ${otc ? 'rgba(22,163,74,0.15)' : 'rgba(0,153,250,0.15)'}` }} />
                                <span className="truncate text-[14.5px] font-semibold text-[#0D1B2A]">{a.name.replace(/\s*OTC$/, '')}</span>
                                {otc && <span className="shrink-0 rounded-md bg-[#E8F7EE] px-1.5 py-0.5 text-[10px] font-bold tracking-[0.08em] text-[#16A34A]">OTC</span>}
                              </span>
                              <span className="hidden md:block h-1.5 rounded-full bg-[#EEF2F8] overflow-hidden">
                                <span className="block h-full rounded-full" style={{ width: `${a.payout}%`, background: color }} />
                              </span>
                              <span className="text-right font-heading font-extrabold text-[15px]" style={{ color }}>{a.payout}%</span>
                              <span className="md:hidden col-span-2 mt-2 h-1 rounded-full bg-[#EEF2F8] overflow-hidden">
                                <span className="block h-full rounded-full" style={{ width: `${a.payout}%`, background: color }} />
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-6 max-w-4xl text-[13px] leading-relaxed text-[#8A9BB5]">{t.table.note}</p>
        </div>
      </section>

      {/* HOURS */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #071A33 0%, #0A2540 100%)' }}>
        <div className="absolute inset-0 grid-noise pointer-events-none" />
        <div className="container-x relative z-10">
          <SectionHead eyebrow={t.hours.eyebrow} title={t.hours.title} subtitle={t.hours.subtitle} dark />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.hours.items.map((h, i) => {
              const Icon = HOURS_ICONS[i];
              return (
                <div key={h.title} className="glass-dark rounded-2xl border border-white/10 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"><Icon className="h-5 w-5 text-[#7CC4FF]" strokeWidth={1.75} /></span>
                  <h3 className="font-heading font-bold text-[16.5px] text-white mt-5 mb-1.5">{h.title}</h3>
                  <div className="text-[13px] font-semibold text-[#7CC4FF] mb-3">{h.time}</div>
                  <p className="text-[14px] leading-relaxed text-white/60">{h.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-center text-[13px] text-white/40">{t.hours.note}</p>
        </div>
      </section>

      {/* TIPS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.tips.eyebrow} title={t.tips.title} subtitle={t.tips.subtitle} />
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12 max-w-5xl mx-auto">
            {t.tips.items.map((item, i) => (
              <div key={item.title} className="flex gap-5 items-start">
                <IconBadge icon={TIP_ICONS[i]} size={56} />
                <div>
                  <h3 className="font-heading font-bold text-[17px] text-[#080F20] mb-2">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#5A6A85]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F9FD] py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />
          <FaqAccordion items={t.faq.items} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-20 lg:py-24" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 50%, #0C3260 100%)' }}>
        <div className="absolute inset-0 grid-noise pointer-events-none" />
        <div className="container-x relative z-10 text-center max-w-[760px] mx-auto text-white">
          <h2 className="font-heading font-extrabold text-[30px] md:text-[42px] leading-[1.1] mb-5">{t.finalCta.title}</h2>
          <p className="text-[16px] md:text-[17px] text-white/70 leading-relaxed mb-9">{t.finalCta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5">
            <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-10 text-[15px] font-bold tracking-[0.06em] uppercase">{t.finalCta.cta}<ChevronRight className="w-4 h-4" /></a>
            <a href={lp('/quick-start')} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.finalCta.secondary}</a>
          </div>
          <p className="text-[13px] text-white/40">{t.finalCta.note}</p>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
