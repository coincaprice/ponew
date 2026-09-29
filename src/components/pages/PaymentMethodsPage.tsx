'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/seo/FaqJsonLd';
import { IconBadge } from '@/components/ui/IconBadge';
import { SectionHead } from '@/components/ui/SectionHead';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import {
  ChevronRight, Search, CreditCard, Landmark, Wallet, Bitcoin, Smartphone,
  ArrowDownToLine, ArrowUpFromLine, Repeat, UserCheck, Network, ShieldCheck, BookOpen,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { REGISTER_URL, AFFILIATE_REL } from '@/config/links';
import { getLocalePath, isLocale } from '@/lib/i18n/config';
import { getPaymentMethodsDictionary } from '@/lib/i18n/payment-methods';
import {
  PAYMENT_METHODS, PAYMENT_TYPES, PAYMENT_REGIONS, FEATURED_METHODS, paymentLogo,
  type PaymentType, type PaymentRegion,
} from '@/data/payment-methods';

const TYPE_ICONS: Record<PaymentType, LucideIcon> = {
  cards: CreditCard,
  bank: Landmark,
  ewallet: Wallet,
  crypto: Bitcoin,
  mobile: Smartphone,
};
const TIP_ICONS: LucideIcon[] = [Repeat, UserCheck, Network, ShieldCheck];

type TypeFilter = 'All' | PaymentType;
type RegionFilter = 'All' | PaymentRegion;

function Logo({ id, name, className = '' }: { id: string; name: string; className?: string }) {
  return (
    <Image
      src={paymentLogo(id)}
      alt={name}
      width={200}
      height={100}
      className={`h-auto w-full object-contain ${className}`}
      sizes="(max-width: 640px) 40vw, 160px"
    />
  );
}

export function PaymentMethodsPage({ lang = 'en' }: { lang?: string }) {
  const t = getPaymentMethodsDictionary(lang);
  const locale = isLocale(lang) ? lang : 'en';
  const lp = (path: string) => getLocalePath(locale, path);

  const [type, setType] = useState<TypeFilter>('All');
  const [region, setRegion] = useState<RegionFilter>('All');
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const visible = useMemo(() => {
    const rank = (id: string) => { const i = FEATURED_METHODS.indexOf(id); return i === -1 ? FEATURED_METHODS.length : i; };
    return PAYMENT_METHODS
      .filter(m =>
        (type === 'All' || m.type === type) &&
        (region === 'All' || m.region === region) &&
        (!q || m.name.toLowerCase().includes(q) || m.id.includes(q)),
      )
      .sort((a, b) =>
        rank(a.id) - rank(b.id) ||
        PAYMENT_TYPES.indexOf(a.type) - PAYMENT_TYPES.indexOf(b.type) ||
        a.name.localeCompare(b.name),
      );
  }, [type, region, q]);

  const featured = FEATURED_METHODS
    .map(id => PAYMENT_METHODS.find(m => m.id === id))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  const countByType = (k: PaymentType) => PAYMENT_METHODS.filter(m => m.type === k).length;

  return (
    <div className="min-h-screen bg-[#080F20] flex flex-col font-sans">
      <BreadcrumbJsonLd lang={lang} slug="payment-methods" homeName={t.home} pageName={t.breadcrumb} />
      <FaqJsonLd items={t.faq.items} />
      <Header lang={lang} />
      <main className="flex-1 flex flex-col">

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
                <a href="#deposit" className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.hero.secondary}</a>
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

          {/* featured logos strip */}
          <div className="mt-14 grid grid-cols-4 sm:grid-cols-8 gap-2.5">
            {featured.map(m => (
              <div key={m.id} title={m.name} className="rounded-xl bg-white/[0.96] border border-white/10 px-3 py-2.5 flex items-center justify-center shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
                <Logo id={m.id} name={m.name} className="max-h-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <SectionHead eyebrow={t.types.eyebrow} title={t.types.title} subtitle={t.types.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PAYMENT_TYPES.map(k => {
              const sample = PAYMENT_METHODS.filter(m => m.type === k).slice(0, 3);
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => { setType(k); setRegion('All'); document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  className="card-premium p-7 text-left flex flex-col hover:-translate-y-1 transition-transform"
                >
                  <IconBadge icon={TYPE_ICONS[k]} size={56} />
                  <h3 className="font-heading font-bold text-[17px] text-[#080F20] mt-5 mb-2">{t.types.items[k].name}</h3>
                  <p className="text-[14px] leading-relaxed text-[#5A6A85] flex-1">{t.types.items[k].desc}</p>
                  <div className="mt-5 pt-4 border-t border-[#EEF2F8] flex items-center justify-between gap-3">
                    <span className="text-[12.5px] text-[#8A9BB5]"><b className="text-[#0D1B2A] font-heading">{countByType(k)}</b> {t.types.countLabel}</span>
                    <span className="flex -space-x-1.5">
                      {sample.map(m => (
                        <span key={m.id} className="h-7 w-11 rounded-md bg-white border border-[#E4EBF5] flex items-center justify-center overflow-hidden">
                          <Logo id={m.id} name={m.name} className="max-h-5 px-1" />
                        </span>
                      ))}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section id="directory" className="bg-[#F7F9FD] py-20 lg:py-28 scroll-mt-24">
        <div className="container-x">
          <SectionHead eyebrow={t.directory.eyebrow} title={t.directory.title} subtitle={t.directory.subtitle} />

          <div className="card-premium overflow-hidden">
            <div className="border-b border-[#EEF2F8] px-5 md:px-7 py-5 flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8A9BB5]" />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder={t.directory.search}
                  className="w-full h-11 rounded-full border border-[#E4EBF5] bg-white pl-11 pr-4 text-[14.5px] text-[#0D1B2A] outline-none focus:border-[#0099FA] transition-colors"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 -mb-1">
                {(['All', ...PAYMENT_TYPES] as TypeFilter[]).map(f => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setType(f)}
                    className={`shrink-0 h-9 rounded-full px-4 text-[13px] font-semibold border transition-colors ${type === f ? 'bg-[#0D1B2A] border-[#0D1B2A] text-white' : 'bg-white border-[#E4EBF5] text-[#5A6A85] hover:border-[#0099FA] hover:text-[#0099FA]'}`}
                  >
                    {f === 'All' ? t.directory.all : t.types.items[f].name}
                  </button>
                ))}
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 -mb-1">
                {(['All', ...PAYMENT_REGIONS] as RegionFilter[]).map(r => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRegion(r)}
                    className={`shrink-0 h-8 rounded-full px-3.5 text-[12.5px] font-semibold border transition-colors ${region === r ? 'bg-[#0099FA] border-[#0099FA] text-white' : 'bg-white border-[#E4EBF5] text-[#5A6A85] hover:border-[#0099FA] hover:text-[#0099FA]'}`}
                  >
                    {r === 'All' ? t.directory.allRegions : t.directory.regions[r]}
                  </button>
                ))}
              </div>
              <div className="text-[13px] text-[#8A9BB5]"><b className="text-[#0D1B2A]">{visible.length}</b> {t.directory.showing}</div>
            </div>

            {visible.length === 0 ? (
              <p className="px-7 py-14 text-center text-[15px] text-[#8A9BB5]">{t.directory.empty}</p>
            ) : (
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-5 md:p-7">
                {visible.map(m => {
                  const Icon = TYPE_ICONS[m.type];
                  return (
                    <li key={m.id} className="group rounded-2xl border border-[#E4EBF5] bg-white p-3 flex flex-col hover:border-[#0099FA] hover:shadow-[0_12px_30px_-16px_rgba(0,153,250,0.45)] transition-all">
                      <div className="h-16 flex items-center justify-center rounded-xl bg-[#F7F9FD] px-3">
                        <Logo id={m.id} name={m.name} className="max-h-11" />
                      </div>
                      <div className="mt-3 flex items-start gap-1.5 min-h-[36px]">
                        <Icon className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#0099FA]" strokeWidth={2} />
                        <span className="text-[12.5px] leading-snug font-semibold text-[#0D1B2A]">{m.name}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <p className="mt-6 max-w-4xl text-[13px] leading-relaxed text-[#8A9BB5]">{t.directory.note}</p>
        </div>
      </section>

      {/* COMPARE */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <SectionHead eyebrow={t.compare.eyebrow} title={t.compare.title} subtitle={t.compare.subtitle} />
          <div className="card-premium overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="bg-[#F7F9FD] text-[11px] font-bold uppercase tracking-[0.12em] text-[#8A9BB5]">
                  <th className="px-6 py-3.5">{t.compare.cols.method}</th>
                  <th className="px-6 py-3.5">{t.compare.cols.minDeposit}</th>
                  <th className="px-6 py-3.5">{t.compare.cols.speed}</th>
                  <th className="px-6 py-3.5">{t.compare.cols.fee}</th>
                  <th className="px-6 py-3.5">{t.compare.cols.withdrawal}</th>
                </tr>
              </thead>
              <tbody>
                {t.compare.rows.map((r, i) => {
                  const Icon = TYPE_ICONS[PAYMENT_TYPES[i]];
                  return (
                    <tr key={r.method} className="border-t border-[#F1F4F9] hover:bg-[#FAFBFE] transition-colors">
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-3">
                          <IconBadge icon={Icon} size={36} />
                          <span className="font-heading font-bold text-[15px] text-[#080F20]">{r.method}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[14.5px] font-semibold text-[#0D1B2A]">{r.minDeposit}</td>
                      <td className="px-6 py-4 text-[14.5px] text-[#5A6A85]">{r.speed}</td>
                      <td className="px-6 py-4"><span className="rounded-md bg-[#E8F7EE] px-2 py-0.5 text-[12.5px] font-bold text-[#16A34A]">{r.fee}</span></td>
                      <td className="px-6 py-4 text-[14.5px] text-[#5A6A85]">{r.withdrawal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-4xl text-[13px] leading-relaxed text-[#8A9BB5]">{t.compare.note}</p>
        </div>
      </section>

      {/* DEPOSIT / WITHDRAWAL */}
      <section id="deposit" className="relative overflow-hidden py-20 lg:py-28 scroll-mt-24" style={{ background: 'linear-gradient(180deg, #071A33 0%, #0A2540 100%)' }}>
        <div className="absolute inset-0 grid-noise pointer-events-none" />
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {[{ d: t.deposit, Icon: ArrowDownToLine, note: undefined }, { d: t.withdrawal, Icon: ArrowUpFromLine, note: t.withdrawal.note }].map(({ d, Icon, note }) => (
              <div key={d.title}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"><Icon className="h-5 w-5 text-[#7CC4FF]" strokeWidth={1.75} /></span>
                  <span className="eyebrow eyebrow-dark">{d.eyebrow}</span>
                </div>
                <h2 className="font-heading font-extrabold text-[26px] md:text-[32px] leading-[1.15] text-white mb-3">{d.title}</h2>
                <p className="text-[15.5px] text-white/60 leading-relaxed mb-8">{d.subtitle}</p>
                <ol className="space-y-3">
                  {d.steps.map((s, i) => (
                    <li key={s.title} className="glass-dark rounded-2xl border border-white/10 p-5 flex gap-4">
                      <span className="shrink-0 font-heading font-extrabold text-[15px] h-9 w-9 rounded-full bg-[#0099FA] text-white flex items-center justify-center">{i + 1}</span>
                      <div>
                        <h3 className="font-heading font-bold text-[16px] text-white mb-1">{s.title}</h3>
                        <p className="text-[14px] leading-relaxed text-white/60">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                {note && <p className="mt-5 text-[13px] text-white/40">{note}</p>}
              </div>
            ))}
          </div>
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

      {/* GUIDES */}
      <section className="bg-[#F7F9FD] py-20 lg:py-24">
        <div className="container-x">
          <SectionHead eyebrow={t.guides.eyebrow} title={t.guides.title} />
          <div className="grid sm:grid-cols-3 gap-5">
            {t.guides.items.map(g => (
              <a key={g.href} href={lp(g.href.replace(/^\//, ''))} className="card-premium p-7 flex flex-col hover:-translate-y-1 transition-transform group">
                <IconBadge icon={BookOpen} size={48} />
                <h3 className="font-heading font-bold text-[17px] text-[#080F20] mt-5 mb-2 group-hover:text-[#0099FA] transition-colors">{g.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#5A6A85] flex-1">{g.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-bold text-[#0099FA]">{t.guides.eyebrow}<ChevronRight className="h-3.5 w-3.5" /></span>
              </a>
            ))}
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

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-20 lg:py-24" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 50%, #0C3260 100%)' }}>
        <div className="absolute inset-0 grid-noise pointer-events-none" />
        <div className="container-x relative z-10 text-center max-w-[760px] mx-auto text-white">
          <h2 className="font-heading font-extrabold text-[30px] md:text-[42px] leading-[1.1] mb-5">{t.finalCta.title}</h2>
          <p className="text-[16px] md:text-[17px] text-white/70 leading-relaxed mb-9">{t.finalCta.subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5">
            <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-10 text-[15px] font-bold tracking-[0.06em] uppercase">{t.finalCta.cta}<ChevronRight className="w-4 h-4" /></a>
            <a href={lp('quick-start')} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.finalCta.secondary}</a>
          </div>
          <p className="text-[13px] text-white/40">{t.finalCta.note}</p>
        </div>
      </section>

      </main>
      <Footer lang={lang} />
    </div>
  );
}
