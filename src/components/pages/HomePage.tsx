'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FaqJsonLd } from '@/components/seo/FaqJsonLd';
import {
  Star, ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap, Timer, FlaskConical, Layers,
  Coins, ArrowLeftRight, Users, LineChart, Headphones, Check, Minus, Smartphone, Globe, Send,
  Apple, CandlestickChart, Target, Rocket, Clock, Copy, Wallet, Banknote, Bitcoin, Landmark,
  BarChart3, Gem, TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { IconBadge } from '@/components/ui/IconBadge';
import { SectionHead } from '@/components/ui/SectionHead';
import { REGISTER_URL, LOGIN_URL, AFFILIATE_REL } from '@/config/links';
import { getLocalePath, isLocale } from '@/lib/i18n/config';
import { getHomeDictionary } from '@/lib/i18n/home';

const BRAND = '#0099FA';

function CountUpNumber({ target, prefix = '', suffix = '', duration = 1800, active }: {
  target: number; prefix?: string; suffix?: string; duration?: number; active: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || target === 0) { setCount(target); return; }
    let startTime: number | null = null;
    let raf: number;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setCount(target);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  const fmt = (n: number) => (n >= 1000 ? `${Math.floor(n / 1000)} ${String(n % 1000).padStart(3, '0')}` : String(n));
  return <>{prefix}{fmt(count)}{suffix}</>;
}

export function HomePage({ lang = 'en', guides }: { lang?: string; guides?: React.ReactNode }) {
  const t = getHomeDictionary(lang);
  const locale = isLocale(lang) ? lang : 'en';
  const lp = (path: string) => getLocalePath(locale, path);

  const [reviewIdx, setReviewIdx] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [countStarted, setCountStarted] = useState(false);
  const conditionsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = conditionsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setCountStarted(true); obs.disconnect(); }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const WHY_ICONS: LucideIcon[] = [Timer, FlaskConical, Layers, Coins, ArrowLeftRight, Users, LineChart, Headphones];
  const TRADE_ICONS: LucideIcon[] = [Zap, Target, Rocket, Clock, Copy];
  const ASSET_ICONS: LucideIcon[] = [Landmark, Bitcoin, BarChart3, Gem, TrendingUp];
  const APP_ICONS: LucideIcon[] = [Smartphone, Apple, Globe, Send];
  const PAY_ICONS: LucideIcon[] = [Zap, Clock, ShieldCheck, Banknote];
  const STEP_ICONS: LucideIcon[] = [Users, Wallet, CandlestickChart];

  const CONDITIONS = [
    { icon: Coins,          target: 5,     prefix: '$', suffix: '*' },
    { icon: Zap,            target: 1,     prefix: '$', suffix: ''  },
    { icon: FlaskConical,   target: 50000, prefix: '$', suffix: ''  },
    { icon: ArrowLeftRight, target: 50,    prefix: '',  suffix: '+' },
    { icon: ShieldCheck,    target: 0,     prefix: '$', suffix: ''  },
    { icon: Layers,         target: 100,   prefix: '',  suffix: '+' },
  ];

  const PAYMENT_LOGOS: { name: string; file: string; h: number }[] = [
    { name: 'Visa', file: 'visa', h: 44 },
    { name: 'Mastercard', file: 'mastercard', h: 34 },
    { name: 'Pix', file: 'pix', h: 34 },
    { name: 'UPI', file: 'upi', h: 30 },
    { name: 'Mercado Pago', file: 'mercadopago', h: 40 },
    { name: 'Google Pay', file: 'googlepay', h: 40 },
    { name: 'Apple Pay', file: 'applepay', h: 40 },
    { name: 'Binance Pay', file: 'binance', h: 34 },
    { name: 'Bitcoin', file: 'bitcoin', h: 34 },
    { name: 'Ethereum', file: 'ethereum', h: 34 },
    { name: 'Tether (USDT)', file: 'tether', h: 34 },
    { name: 'Litecoin', file: 'litecoin', h: 34 },
  ];

  const review = t.reviews.items[reviewIdx];

  return (
    <div className="min-h-screen bg-[#080F20] flex flex-col font-sans">
      <Header lang={lang} />
      <main className="flex-1 flex flex-col">
      <FaqJsonLd items={t.faq.items} />

      {/* HERO */}
      <section className="relative w-full overflow-hidden flex items-center" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 45%, #0C3260 75%, #0A2540 100%)' }}>
        <div className="absolute pointer-events-none" style={{ top: '-15%', left: '-8%', width: '65%', height: '65%', background: 'radial-gradient(ellipse, rgba(0,153,250,0.13) 0%, transparent 68%)', borderRadius: '50%' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '5%', right: '-5%', width: '55%', height: '55%', background: 'radial-gradient(ellipse, rgba(0,82,204,0.11) 0%, transparent 65%)', borderRadius: '50%' }} />
        <div className="absolute inset-0 grid-noise pointer-events-none" />

        <div className="container-x relative z-10 pt-[120px] md:pt-[150px] lg:pt-[170px] pb-16 lg:pb-24">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-[50%] text-white">
            <div className="animate-fade-up flex justify-center md:justify-start mb-6">
              <span className="eyebrow eyebrow-dark">
                <span className="live-dot w-2 h-2 rounded-full bg-[#22c55e]" />
                {t.hero.eyebrow}
              </span>
            </div>
            <h1 className="animate-fade-up delay-100 text-[34px] md:text-[50px] lg:text-[56px] font-heading font-extrabold leading-[1.08] mb-6 text-center md:text-left">
              {t.hero.title}{' '}
              <span className="text-gradient-brand">{t.hero.titleAccent}</span>
            </h1>
            <p className="animate-fade-up delay-200 text-[16px] md:text-[17.5px] text-white/75 mb-10 leading-relaxed text-center md:text-left max-w-[600px] mx-auto md:mx-0">{t.hero.subtitle}</p>
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center gap-3.5 justify-center md:justify-start">
              <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-9 text-[15px] font-bold tracking-[0.06em] uppercase">
                {t.hero.register}<ChevronRight className="w-4 h-4" />
              </a>
              <a href={LOGIN_URL} target="_blank" rel={AFFILIATE_REL} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.hero.login}</a>
            </div>
            <div className="animate-fade-up delay-400 mt-10 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center md:justify-start gap-x-7 gap-y-3 text-[13.5px] text-white/65">
              {t.hero.trust.map(item => (
                <span key={item} className="inline-flex items-center gap-2"><Check className="w-4 h-4 text-[#5fb8ff]" />{item}</span>
              ))}
            </div>
            <p className="mt-6 text-[12px] text-white/40 text-center md:text-left">{t.hero.riskNote}</p>
          </div>
          <div className="w-full lg:w-[50%] relative">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'rgba(0,153,250,0.22)' }} />
            <Image src="/images/hero-devices.webp" alt="Pocket Option trading platform on laptop and smartphone" width={2600} height={1800} priority sizes="(min-width: 1024px) 50vw, 100vw" className="relative w-full h-auto max-w-[560px] md:max-w-[680px] lg:max-w-none mx-auto lg:ml-auto lg:scale-[1.15] lg:origin-left lg:translate-x-[2%] animate-float-slow select-none" />
          </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative bg-[#061A33] border-y border-white/5">
        <div className="container-x py-8 md:py-9">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-7 gap-x-6 divide-x-0 lg:divide-x divide-white/10">
            {t.stats.map((s, i) => (
              <div key={s.label} className={`text-center lg:px-4 ${i === t.stats.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <div className="font-heading font-extrabold text-[30px] md:text-[34px] leading-none text-white">{s.value}</div>
                <div className="mt-2 text-[12.5px] uppercase tracking-[0.12em] text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-5">{t.about.eyebrow}</span>
              <h2 className="font-heading font-bold text-[28px] md:text-[38px] lg:text-[42px] leading-[1.15] text-[#080F20] mb-7">{t.about.title}</h2>
              <div className="space-y-5 text-[16.5px] md:text-[17.5px] leading-[1.8] text-[#3E4C63]">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
              <a href={lp('about-us')} className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-[#0099FA] hover:gap-3 transition-all">
                {t.about.cta}<ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <aside className="lg:col-span-5 card-premium overflow-hidden">
              <div className="px-7 py-5 border-b border-[#E4EBF5] flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #F7FAFF, #EEF3FA)' }}>
                <IconBadge icon={ShieldCheck} size={40} />
                <h3 className="font-heading font-bold text-[17px] text-[#080F20]">{t.about.factsTitle}</h3>
              </div>
              <dl className="divide-y divide-[#EEF2F8]">
                {t.about.facts.map(f => (
                  <div key={f.label} className="flex items-start justify-between gap-6 px-7 py-3.5">
                    <dt className="text-[14px] text-[#66748A] shrink-0">{f.label}</dt>
                    <dd className="text-[14.5px] font-semibold text-[#0D1B2A] text-right">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section ref={conditionsRef} className="relative overflow-hidden py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #F7F9FD 0%, #EEF3FA 100%)' }}>
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,153,250,0.16) 0%, rgba(0,153,250,0) 70%)' }} />
        <div className="pointer-events-none absolute -bottom-48 left-[-8%] h-[420px] w-[420px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,82,204,0.10) 0%, rgba(0,82,204,0) 70%)' }} />
        <div className="container-x relative">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-8">
            <div className="w-full lg:w-[48%] flex-shrink-0">
              <span className="eyebrow mb-5"><Zap className="w-3.5 h-3.5" />{t.conditions.eyebrow}</span>
              <h2 className="text-[30px] md:text-[40px] lg:text-[46px] font-heading font-bold text-[#080F20] leading-[1.15] mb-4 text-center md:text-left">{t.conditions.title}</h2>
              <p className="text-[16px] md:text-[17px] text-[#5A6A85] leading-relaxed mb-10 max-w-[480px] text-center md:text-left mx-auto md:mx-0">{t.conditions.subtitle}</p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {CONDITIONS.map((s, i) => (
                  <div key={i} className="card-premium p-4 md:p-5">
                    <div className="mb-3"><IconBadge icon={s.icon} size={36} /></div>
                    <div className="text-[28px] md:text-[34px] font-heading font-bold leading-none mb-1.5 text-[#0099FA]">
                      <CountUpNumber target={s.target} prefix={s.prefix} suffix={s.suffix} active={countStarted} />
                    </div>
                    <div className="text-[13px] md:text-[14px] text-[#5A6A85] leading-snug">{t.conditions.items[i]}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[12.5px] text-[#8A9BB5]">{t.conditions.footnote}</p>
            </div>
            <div className="hidden md:flex w-full lg:w-[52%] self-stretch items-center justify-center lg:justify-start relative">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: 'rgba(0,153,250,0.22)' }} />
              <Image src="/images/platform-monitor.webp" alt="Pocket Option web trading platform" width={2480} height={1720} sizes="(min-width: 1024px) 60vw, 100vw" className="relative w-full max-w-[720px] lg:max-w-none lg:w-[118%] h-auto object-contain drop-shadow-[0_40px_60px_rgba(8,15,32,0.28)]" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} align="left" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.why.items.map((item, i) => (
              <div key={item.title} className="card-premium text-center md:text-left p-7">
                <div className="mx-auto md:mx-0 mb-5 w-fit"><IconBadge icon={WHY_ICONS[i]} /></div>
                <h3 className="font-heading font-bold text-[18px] text-[#0D1B2A] mb-2.5 leading-[1.35]">{item.title}</h3>
                <p className="text-[15px] text-[#5A6A85] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRADE TYPES */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: 'linear-gradient(160deg, #061A33 0%, #0A2540 55%, #0C3260 100%)' }}>
        <div className="absolute inset-0 grid-noise pointer-events-none opacity-60" />
        <div className="container-x relative">
          <SectionHead eyebrow={t.tradeTypes.eyebrow} title={t.tradeTypes.title} subtitle={t.tradeTypes.subtitle} dark />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.tradeTypes.items.map((item, i) => {
              const Icon = TRADE_ICONS[i];
              return (
                <div key={item.title} className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-[#0099FA]/50 transition-colors">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06]">
                      <Icon className="h-5 w-5 text-[#5fb8ff]" strokeWidth={1.75} fill="#5fb8ff" fillOpacity={0.15} />
                    </div>
                    <span className="font-heading text-[12px] font-bold tracking-[0.2em] text-white/30">0{i + 1}</span>
                  </div>
                  <h3 className="font-heading font-bold text-[17px] text-white mb-2">{item.title}</h3>
                  <p className="text-[14px] leading-[1.7] text-white/60">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ASSETS */}
      <section className="bg-[#F7F9FD] py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.assets.eyebrow} title={t.assets.title} subtitle={t.assets.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.assets.groups.map((g, i) => (
              <div key={g.name} className="card-premium p-6 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <IconBadge icon={ASSET_ICONS[i]} size={48} />
                  <span className="font-heading font-extrabold text-[26px] leading-none text-[#0099FA]">{g.count}</span>
                </div>
                <h3 className="font-heading font-bold text-[17px] text-[#0D1B2A] mb-1.5">{g.name}</h3>
                <p className="text-[13.5px] leading-relaxed text-[#66748A]">{g.examples}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={lp('assets')} className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0099FA] hover:gap-3 transition-all">{t.assets.cta}<ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.steps.eyebrow} title={t.steps.title} subtitle={t.steps.subtitle} />
          <div className="relative">
            <div className="hidden md:block absolute top-[44px] left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-[#C9DBF0] to-transparent" />
          <ol className="relative grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.steps.items.map((step, i) => (
              <li key={step.title} className="relative card-premium p-8 text-center">
                <div className="relative mx-auto mb-6 w-fit">
                  <IconBadge icon={STEP_ICONS[i]} size={72} />
                  <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[12px] font-extrabold text-white" style={{ background: 'linear-gradient(135deg, #0099FA, #0052cc)' }}>{i + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-[19px] text-[#0D1B2A] mb-2.5">{step.title}</h3>
                <p className="text-[15.5px] leading-[1.7] text-[#5A6A85]">{step.desc}</p>
              </li>
            ))}
          </ol>
          </div>
          <div className="mt-12 text-center">
            <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand h-[52px] px-10 text-[14px] font-bold tracking-[0.06em] uppercase">{t.steps.cta}<ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      {/* PAYMENTS */}
      <section className="relative overflow-hidden py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, #063764 0%, #052B4F 100%)' }}>
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="eyebrow eyebrow-dark mb-5">{t.payments.eyebrow}</span>
              <h2 className="font-heading font-bold text-[28px] md:text-[38px] leading-[1.15] text-white mb-4">{t.payments.title}</h2>
              <p className="text-[16px] md:text-[17px] leading-relaxed text-white/65 mb-8">{t.payments.subtitle}</p>
              <ul className="grid sm:grid-cols-2 gap-3.5">
                {t.payments.points.map((p, i) => {
                  const Icon = PAY_ICONS[i];
                  return (
                    <li key={p} className="flex items-center gap-3 text-[14.5px] text-white/85">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.08]"><Icon className="h-4 w-4 text-[#5fb8ff]" /></span>{p}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {PAYMENT_LOGOS.map(logo => (
                  <div key={logo.file} title={logo.name} className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5">
                    <div className="flex h-[44px] items-center justify-center">
                      <img src={`/images/payments/${logo.file}.svg`} alt={`${logo.name} — Pocket Option payment method`} loading="lazy" style={{ height: logo.h }} className="w-auto max-w-[120px] object-contain" />
                    </div>
                    <span className="text-[11.5px] font-semibold tracking-wide text-[#5A6A85]">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="bg-white overflow-hidden pt-20 lg:pt-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end gap-12">
            <div className="w-full md:w-1/2 pb-20 lg:pb-28">
              <span className="eyebrow mb-5">{t.apps.eyebrow}</span>
              <h2 className="font-heading font-bold text-[28px] md:text-[40px] leading-[1.15] text-[#080F20] mb-4">{t.apps.title}</h2>
              <p className="text-[16px] md:text-[17px] leading-relaxed text-[#5A6A85] mb-9 max-w-[480px]">{t.apps.subtitle}</p>
              <div className="grid grid-cols-2 gap-3.5">
                {t.apps.items.map((app, i) => (
                  <a key={app.name} href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="card-premium flex items-center gap-4 p-4">
                    <IconBadge icon={APP_ICONS[i]} size={44} />
                    <div>
                      <div className="font-heading font-bold text-[15px] text-[#0D1B2A]">{app.name}</div>
                      <div className="text-[13px] text-[#66748A]">{app.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:block relative flex-1 min-h-[460px]">
              <div className="pointer-events-none absolute left-1/2 bottom-0 h-[80%] w-[80%] -translate-x-1/2 rounded-full blur-3xl" style={{ background: 'rgba(0,153,250,0.14)' }} />
              <Image src="/images/app-phones.webp" alt="Pocket Option mobile app on two smartphones" width={1438} height={1584} sizes="(min-width: 1024px) 420px, 360px" className="absolute right-[-40px] bottom-[-40px] w-[440px] lg:w-[520px] max-w-none h-auto z-[1]" />
            </div>
          </div>
        </div>
      </section>

      {/* PROS & CONS */}
      <section className="bg-[#F7F9FD] py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.prosCons.eyebrow} title={t.prosCons.title} subtitle={t.prosCons.subtitle} />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card-premium p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F6EE]"><Check className="h-5 w-5 text-[#16A34A]" strokeWidth={2.5} /></span>
                <h3 className="font-heading font-bold text-[19px] text-[#0D1B2A]">{t.prosCons.prosTitle}</h3>
              </div>
              <ul className="space-y-3.5">
                {t.prosCons.pros.map(p => (
                  <li key={p} className="flex gap-3 text-[15px] leading-[1.65] text-[#3E4C63]"><Check className="mt-1 h-4 w-4 shrink-0 text-[#16A34A]" strokeWidth={2.5} />{p}</li>
                ))}
              </ul>
            </div>
            <div className="card-premium p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1E6]"><Minus className="h-5 w-5 text-[#EA580C]" strokeWidth={2.5} /></span>
                <h3 className="font-heading font-bold text-[19px] text-[#0D1B2A]">{t.prosCons.consTitle}</h3>
              </div>
              <ul className="space-y-3.5">
                {t.prosCons.cons.map(c => (
                  <li key={c} className="flex gap-3 text-[15px] leading-[1.65] text-[#3E4C63]"><Minus className="mt-1 h-4 w-4 shrink-0 text-[#EA580C]" strokeWidth={2.5} />{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <span className="eyebrow mb-5">{t.reviews.eyebrow}</span>
              <h2 className="font-heading font-bold text-[28px] md:text-[38px] leading-[1.15] text-[#080F20] mb-4">{t.reviews.title}</h2>
              <p className="text-[16px] leading-relaxed text-[#5A6A85] mb-8">{t.reviews.subtitle}</p>
              <div className="flex items-center gap-4">
                <span className="font-heading font-extrabold text-[44px] leading-none text-[#0D1B2A]">4.8</span>
                <div>
                  <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4" style={{ fill: '#FFC107', color: '#FFC107' }} />)}</div>
                  <div className="text-[13px] text-[#66748A] mt-1">{t.reviews.ratingLabel}</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="card-premium p-8 md:p-10 relative">
                <span className="absolute top-6 right-8 font-heading text-[80px] leading-none text-[#0099FA]/10 select-none">&ldquo;</span>
                <div className="flex gap-1 mb-5">{[1,2,3,4,5].map(i => <Star key={i} className="h-[18px] w-[18px]" style={{ fill: '#FFC107', color: '#FFC107' }} />)}</div>
                <p className="text-[17px] md:text-[18px] leading-[1.75] text-[#1A2B42] mb-8 min-h-[120px]">{review.text}</p>
                <div className="flex items-center justify-between gap-4 border-t border-[#E4EBF5] pt-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full font-heading text-[14px] font-bold text-white" style={{ background: 'linear-gradient(135deg, #0099FA, #0052cc)' }}>{review.name.charAt(0)}</span>
                    <div>
                      <div className="font-semibold text-[15px] text-[#0D1B2A]">{review.name}</div>
                      <div className="text-[13px] text-[#8A9BB5]">{review.country} · {review.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button aria-label="Previous review" onClick={() => setReviewIdx(i => (i - 1 + t.reviews.items.length) % t.reviews.items.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8D8EA] text-[#3B6DB5] hover:bg-[#EEF3FA] transition-colors"><ChevronLeft className="h-4 w-4" /></button>
                    <button aria-label="Next review" onClick={() => setReviewIdx(i => (i + 1) % t.reviews.items.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8D8EA] text-[#3B6DB5] hover:bg-[#EEF3FA] transition-colors"><ChevronRight className="h-4 w-4" /></button>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-1.5">
                {t.reviews.items.map((_, i) => (
                  <button key={i} aria-label={`Review ${i + 1}`} onClick={() => setReviewIdx(i)} className="flex h-6 min-w-6 items-center justify-center"><span className="block h-1.5 rounded-full transition-all" style={{ width: i === reviewIdx ? 24 : 8, background: i === reviewIdx ? BRAND : '#D6E0EE' }} /></button>
                ))}
              </div>
            </div>
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
          <p className="mt-10 text-center text-[15px] text-[#5A6A85]">
            {t.faq.stillQuestions}{' '}
            <a href={lp('contacts')} className="font-semibold text-[#0099FA]">{t.faq.contact}</a>
          </p>
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
