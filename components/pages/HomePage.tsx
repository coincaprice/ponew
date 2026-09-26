'use client';

import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, ChevronLeft, ChevronRight, Play, Download, LayoutGrid, Send } from 'lucide-react';
import { REGISTER_URL, LOGIN_URL } from '@/lib/links';
import { getDictionary } from '@/lib/i18n/dictionaries';

function formatReviewDate(raw: string): string {
  const [datePart] = raw.split(' ');
  const [year, month, day] = datePart.split('-').map(Number);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[month - 1]} ${day}, ${year}`;
}

const REVIEWS = [
  { date: '2025-11-26 04:09:33', text: 'Pocket Option is a beginner-friendly trading platform with a simple and easy-to-use interface. It offers a demo account, low minimum deposits, and access to a wide range of assets like forex, stocks and crypto. The platform supports social trading, allowing users to copy expert traders, and provides multiple payment methods and ...', flag: 'https://flagcdn.com/w40/in.png', name: 'Vinod Kum. M', uid: 'UID 113533265' },
  { date: '2026-02-24 11:22:10', text: 'This Pocket Option Platform is the best, it\'s very easy to deposit and withdraw. Highly recommended for anyone looking for a reliable trading platform with excellent customer support and fast execution ...', flag: 'https://flagcdn.com/w40/ng.png', name: 'Oluwaseyi O.', uid: 'UID 69107619' },
  { date: '2026-03-05 08:14:55', text: 'Great platform for trading. Clean interface and helpful support team. The demo account is perfect for beginners to practice before trading with real funds. Would highly recommend to anyone ...', flag: 'https://flagcdn.com/w40/gb.png', name: 'James W.', uid: 'UID 88421337' },
  { date: '2026-02-18 19:43:01', text: 'Amazing tools for beginners, demo account is a life saver. Fast withdrawals and a very intuitive interface. Social trading feature is a bonus. One of the best platforms I have used so far ...', flag: 'https://flagcdn.com/w40/za.png', name: 'Michael T.', uid: 'UID 77654921' },
];

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
  const fmt = (n: number) => {
    if (n >= 1000) {
      const k = Math.floor(n / 1000);
      const rem = String(n % 1000).padStart(3, '0');
      return `${k} ${rem}`;
    }
    return String(n);
  };
  return <>{prefix}{fmt(count)}{suffix}</>;
}

export function HomePage({ lang = 'en' }: { lang?: string }) {
  const t = getDictionary(lang);
  const [slideIndex, setSlideIndex] = useState(0);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [countStarted, setCountStarted] = useState(false);
  const conditionsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onResize = () => { setIsMobile(window.innerWidth < 768); setSlideIndex(0); };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const el = conditionsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setCountStarted(true); obs.disconnect(); }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const OFFERS = [
    { img: '/images/offers/comm.webp', title: t.offers.paymentMethods },
    { img: '/images/offers/trade.webp', title: t.offers.tradingAssets },
    { img: '/images/offers/archi.webp', title: t.offers.achievements },
    { img: '/images/offers/copy.webp', title: t.offers.apps },
    { img: '/images/offers/tournament.svg', title: t.offers.tournaments },
  ];

  const FAQS = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
  ];

  const WHY = [
    { img: '/images/why/1.svg', title: t.why.item1Title, desc: t.why.item1Desc },
    { img: '/images/why/2.svg', title: t.why.item2Title, desc: t.why.item2Desc },
    { img: '/images/why/3.svg', title: t.why.item3Title, desc: t.why.item3Desc },
    { img: '/images/why/4.svg', title: t.why.item4Title, desc: t.why.item4Desc },
    { img: '/images/why/5.svg', title: t.why.item5Title, desc: t.why.item5Desc },
    { img: '/images/why/6.svg', title: t.why.item6Title, desc: t.why.item6Desc },
    { img: '/images/why/7.svg', title: t.why.item7Title, desc: t.why.item7Desc },
    { img: '/images/why/8.svg', title: t.why.item8Title, desc: t.why.item8Desc },
  ];

  const visibleCount = isMobile ? 1 : 4;
  const maxIndex = OFFERS.length - visibleCount;
  const prev = () => setSlideIndex(i => Math.max(0, i - 1));
  const next = () => setSlideIndex(i => Math.min(maxIndex, i + 1));
  const review = REVIEWS[reviewIdx];

  const APPS = [
    { Icon: Play, label: t.apps.android, action: t.apps.androidAction },
    { Icon: Download, label: t.apps.apk, action: t.apps.apkAction },
    { Icon: LayoutGrid, label: t.apps.webApp, action: t.apps.webAppAction },
    { Icon: Send, label: t.apps.telegram, action: t.apps.telegramAction },
  ];

  const STEPS = [
    { icon: <svg width="24" height="24" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="9" r="5" stroke="#0099FA" strokeWidth="1.8"/><path d="M3 23c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="#0099FA" strokeWidth="1.8" strokeLinecap="round"/></svg>, title: t.steps.step1Title, desc: t.steps.step1Desc },
    { icon: <svg width="24" height="24" viewBox="0 0 26 26" fill="none"><rect x="3" y="6" width="20" height="14" rx="3" stroke="#0099FA" strokeWidth="1.8"/><path d="M3 11h20" stroke="#0099FA" strokeWidth="1.8"/><circle cx="8" cy="17" r="1.5" fill="#0099FA"/></svg>, title: t.steps.step2Title, desc: t.steps.step2Desc },
    { icon: <svg width="24" height="24" viewBox="0 0 26 26" fill="none"><polyline points="3,20 10,12 16,17 23,6" stroke="#0099FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="18,6 23,6 23,11" stroke="#0099FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: t.steps.step3Title, desc: t.steps.step3Desc },
  ];

  return (
    <div className="min-h-screen bg-[#080F20] flex flex-col font-sans">
      <Header lang={lang} />

      {/* HERO */}
      <section className="relative w-full overflow-hidden min-h-[680px] flex items-center" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 45%, #0C3260 75%, #0A2540 100%)' }}>

        {/* Ambient glow */}
        <div className="absolute pointer-events-none" style={{ top: '-15%', left: '-8%', width: '65%', height: '65%', background: 'radial-gradient(ellipse, rgba(0,153,250,0.13) 0%, transparent 68%)', borderRadius: '50%' }} />
        <div className="absolute pointer-events-none" style={{ bottom: '5%', right: '-5%', width: '55%', height: '55%', background: 'radial-gradient(ellipse, rgba(0,82,204,0.11) 0%, transparent 65%)', borderRadius: '50%' }} />

        {/* Desktop image */}
        <img src="/images/header-bg.webp" alt="" className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[-2%] w-[58%] pointer-events-none select-none" />

        {/* Mobile image — right-side only, clipped off-screen right, clearly visible */}
        <img
          src="/images/header-bg.webp"
          alt=""
          className="md:hidden absolute top-[40px] pointer-events-none select-none"
          style={{
            right: '-50%',
            width: '120%',
            opacity: 0.92,
            maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 100%)',
          }}
        />

        {/* Desktop overlay */}
        <div className="hidden md:block absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, #0A2540 0%, #0A2540cc 35%, #0A254055 65%, transparent 100%)' }} />

        {/* Mobile overlay — strong left for text readability, fades right so image shows */}
        <div className="md:hidden absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(5,15,30,0.93) 0%, rgba(5,15,30,0.90) 28%, rgba(5,15,30,0.55) 52%, rgba(5,15,30,0.15) 100%)' }} />

        <div className="container relative z-10 mx-auto px-5 lg:px-16 pt-[96px] md:pt-[200px] lg:pt-[260px] pb-16 lg:pb-40">
          <div className="w-full lg:w-[52%] text-white">
            {/* Mobile: centered + uppercase. Desktop: left-aligned */}
            <h1 className="text-[28px] md:text-[48px] lg:text-[60px] font-heading font-bold leading-[1.2] mb-5 tracking-[0px] text-center md:text-left uppercase md:normal-case">
              {t.hero.title}
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/85 mb-8 leading-relaxed text-center md:text-left">{t.hero.subtitle}</p>
            <Button asChild className="w-full sm:w-[260px] h-[52px] rounded-[6px] text-[15px] font-semibold tracking-widest uppercase text-white border-0 mb-5" style={{ background: 'linear-gradient(to right, #0099FA, #0052cc)' }}>
              <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer">{t.hero.registrationBtn}</a>
            </Button>
            {/* Mobile: only "Start in one click" centered */}
            <div className="md:hidden text-center">
              <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-white/90 hover:text-white transition-colors text-[15px] underline underline-offset-4 decoration-white/40">
                {t.hero.startOneClick}
              </a>
            </div>
            {/* Desktop: "Log In or Start in one click" */}
            <div className="hidden md:flex items-center gap-2 text-[15px]">
              <a href={LOGIN_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-white/90 hover:text-white transition-colors underline underline-offset-4 decoration-white/40 hover:decoration-white">{t.hero.logIn}</a>
              <span className="text-white/40">{t.hero.or}</span>
              <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" className="text-white/90 hover:text-white transition-colors underline underline-offset-4 decoration-white/40 hover:decoration-white">{t.hero.startOneClick}</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section ref={conditionsRef} className="bg-[#F4F6FB] py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            <div className="w-full lg:w-[46%] flex-shrink-0">
              <h2 className="text-[28px] md:text-[38px] lg:text-[46px] font-heading font-bold text-[#080F20] leading-tight mb-10 md:mb-12 text-center md:text-left">{t.conditions.title}</h2>
              {/* Mobile: single column centered list */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-0 md:gap-y-10">
                {[
                  { target: 5,     prefix: '$', suffix: '*', label: t.conditions.minInvest },
                  { target: 1,     prefix: '$', suffix: '',  label: t.conditions.minTrade },
                  { target: 50000, prefix: '$', suffix: '',  label: t.conditions.demoMoney },
                  { target: 50,    prefix: '',  suffix: '+', label: t.conditions.paymentMethods },
                  { target: 0,     prefix: '$', suffix: '',  label: t.conditions.noCommission },
                  { target: 100,   prefix: '',  suffix: '+', label: t.conditions.assets },
                ].map((s, i) => (
                  <div key={i} className="text-center md:text-left py-6 md:py-0">
                    <div className="text-[52px] md:text-[48px] lg:text-[56px] font-heading font-bold text-[#0099FA] leading-none mb-2">
                      <CountUpNumber target={s.target} prefix={s.prefix} suffix={s.suffix} active={countStarted} />
                    </div>
                    <div className="text-[16px] md:text-[18px] text-[#5A6A85] leading-snug whitespace-pre-line">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex w-full lg:w-[54%] items-center justify-end">
              <img src="/images/monitor.webp" alt="Trading Platform" className="w-full max-w-[680px] h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: '#ffffff', padding: '96px 0 88px' }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: '700', color: '#0D1B2A', marginBottom: '14px', lineHeight: '1.2' }}>{t.steps.title}</h2>
            <p style={{ fontSize: '17px', color: '#5A6A85', maxWidth: '440px', margin: '0 auto', lineHeight: '1.65' }}>{t.steps.subtitle}</p>
          </div>
          {/* Desktop steps */}
          <div className="hidden md:block">
            <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ position: 'absolute', top: '32px', left: 'calc(16.66%)', right: 'calc(16.66%)', height: '1px', background: '#D6E4F5', zIndex: 0 }} />
              {STEPS.map((step, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1, padding: '0 40px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#EEF5FF', border: '2px solid #D0E4F9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px', flexShrink: 0, position: 'relative' }}>
                    {step.icon}
                    <div style={{ position: 'absolute', top: '-6px', right: '-6px', width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #0099FA, #0052cc)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800', color: '#fff', border: '2px solid #fff' }}>{i + 1}</div>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0D1B2A', marginBottom: '10px', lineHeight: '1.3', textAlign: 'center' }}>{step.title}</h3>
                  <p style={{ fontSize: '17px', color: '#5A6A85', lineHeight: '1.75', textAlign: 'center', margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile steps */}
          <div className="block md:hidden">
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '31px', top: '64px', bottom: '64px', width: '1px', background: '#D6E4F5' }} />
              {STEPS.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', marginBottom: i < 2 ? '40px' : '0', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '62px', height: '62px', borderRadius: '50%', background: '#EEF5FF', border: '2px solid #D0E4F9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
                    {step.icon}
                    <div style={{ position: 'absolute', top: '-6px', right: '-6px', width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #0099FA, #0052cc)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '800', color: '#fff', border: '2px solid #fff' }}>{i + 1}</div>
                  </div>
                  <div style={{ paddingTop: '10px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0D1B2A', marginBottom: '6px', lineHeight: '1.3' }}>{step.title}</h3>
                    <p style={{ fontSize: '17px', color: '#5A6A85', lineHeight: '1.7', margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 44px', borderRadius: '8px', background: 'linear-gradient(to right, #0099FA, #0052cc)', color: '#ffffff', fontSize: '16px', fontWeight: '600', textDecoration: 'none', boxShadow: '0 6px 20px rgba(0,153,250,0.3)' }}>
              {t.steps.getStarted}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: '#ffffff', padding: '88px 0 72px', position: 'relative', overflow: 'hidden' }}>
        <div className="container mx-auto px-6 max-w-7xl" style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center md:text-left" style={{ marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: '700', color: '#0D1B2A', lineHeight: '1.2', marginBottom: '16px' }}>{t.why.title}</h2>
            <p className="mx-auto md:mx-0" style={{ fontSize: '17px', color: '#5A6A85', maxWidth: '520px', lineHeight: '1.6' }}>{t.why.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-14">
            {WHY.map((item, i) => (
              <div key={i} className="text-center md:text-left" style={{ padding: '8px 0' }}>
                <img src={item.img} alt={item.title} loading="lazy" className="mx-auto md:mx-0 w-16 h-16 md:w-12 md:h-12" style={{ marginBottom: '18px', display: 'block' }} />
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0D1B2A', letterSpacing: '0.01em', marginBottom: '10px', lineHeight: '1.35' }}>{item.title}</h3>
                <p style={{ fontSize: '17px', color: '#5A6A85', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', borderTop: '1px solid #E4EBF5', paddingTop: '40px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#5A6A85', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{t.why.tradeOneClick}</span>
            <Button asChild style={{ height: '48px', padding: '0 36px', borderRadius: '8px', background: 'linear-gradient(to right, #0099FA, #0052cc)', color: 'white', fontWeight: '600', fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', border: 'none', boxShadow: '0 4px 20px rgba(0,153,250,0.35)' }}>
              <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer">{t.why.startTrading}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* OFFERS SLIDER */}
      <section className="py-16 overflow-hidden" style={{ background: '#0f487c' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-end gap-3 mb-8">
            <button onClick={prev} disabled={slideIndex === 0} className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:border-white hover:text-white disabled:opacity-25 transition-all bg-white/10"><ChevronLeft className="w-5 h-5" /></button>
            <button onClick={next} disabled={slideIndex >= maxIndex} className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white/60 hover:border-white hover:text-white disabled:opacity-25 transition-all bg-white/10"><ChevronRight className="w-5 h-5" /></button>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-5 transition-transform duration-500 ease-in-out" style={{ transform: isMobile ? `translateX(calc(-${slideIndex} * (100% + 20px)))` : `translateX(calc(-${slideIndex} * (25% + 5px)))` }}>
              {OFFERS.map((offer, i) => (
                <div key={i} className="flex-shrink-0 rounded-2xl overflow-hidden flex flex-col" style={{ width: isMobile ? 'calc(100% - 0px)' : 'calc(25% - 15px)', background: 'linear-gradient(160deg, #0E3A6E 0%, #0A2550 60%, #061830 100%)' }}>
                  <div className="flex items-center justify-center pt-8 pb-4 px-6 flex-1">
                    <img src={offer.img} alt={offer.title} loading="lazy" className="w-32 h-32 object-contain drop-shadow-2xl" />
                  </div>
                  <div className="px-6 pb-8 pt-4">
                    <h3 className="text-white text-[18px] font-bold tracking-wide mb-5 whitespace-pre-line leading-snug">{offer.title}</h3>
                    <button className="w-[90px] h-9 rounded-[6px] bg-[#0A2550] hover:bg-[#0d3266] border border-white/10 text-white text-[13px] font-semibold tracking-widest uppercase transition-colors">{t.offers.more}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUCK SECTION */}
      <section style={{ background: 'white', padding: '0 0 64px 0' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div style={{ paddingTop: '36px' }}>
            <div className="flex flex-col md:flex-row md:items-center pl-6 md:pl-[220px] pr-6 md:pr-12" style={{ background: '#eef2f9', borderRadius: '16px', boxShadow: '0 2px 20px rgba(0,0,0,0.07)', position: 'relative', overflow: 'visible', minHeight: '200px', paddingTop: '48px', paddingBottom: '48px' }}>
              <img src="/images/gift.webp" alt="Gift box" loading="lazy" className="hidden md:block" style={{ position: 'absolute', left: '12px', bottom: '0', height: '240px', width: 'auto' }} />
              <div className="flex-1 mb-6 md:mb-0 md:mr-12">
                <h2 className="text-[30px] md:text-[46px]" style={{ fontWeight: '700', color: '#0D1B2A', marginBottom: '10px', lineHeight: '1.2' }}>{t.luck.title}</h2>
                <p className="text-[17px] md:text-[18px]" style={{ color: '#5A6A85', lineHeight: '1.55', maxWidth: '380px', margin: 0 }}>{t.luck.subtitle}</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-3 flex-shrink-0">
                <Input type="email" placeholder={t.luck.emailPlaceholder} style={{ height: '48px', borderRadius: '6px', padding: '0 16px', border: '1px solid #C8D5E8', fontSize: '16px', background: 'white', color: '#0D1B2A' }} className="w-full md:w-[248px] focus-visible:ring-[#0099FA]" />
                <Button asChild className="w-full md:w-auto" style={{ height: '48px', padding: '0 28px', borderRadius: '6px', background: 'linear-gradient(to right, #0099FA, #0052cc)', color: 'white', fontWeight: '600', fontSize: '17px', letterSpacing: '0.09em', textTransform: 'uppercase', border: 'none', whiteSpace: 'nowrap', cursor: 'pointer' }}>
                  <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer">{t.luck.checkNow}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="bg-white overflow-hidden" style={{ paddingTop: '72px', paddingBottom: '0' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div style={{ flexShrink: 0 }} className="w-full md:w-1/2">
              <h2 className="text-[28px] md:text-[46px] mb-7 md:mb-12" style={{ fontWeight: '700', color: '#0D1B2A', lineHeight: '1.15', whiteSpace: 'pre-line' }}>{t.apps.title}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {APPS.map(({ Icon, label, action }) => (
                  <div key={label} className="w-[calc(50%-6px)] md:w-[136px]" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#EEF2F9', borderRadius: '14px', paddingTop: '32px', paddingBottom: '24px', paddingLeft: '12px', paddingRight: '12px', cursor: 'pointer' }}>
                    <Icon strokeWidth={1.5} style={{ width: '40px', height: '40px', color: '#8EA4C0', marginBottom: '16px' }} />
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#1A2B42', textAlign: 'center', marginBottom: '14px', lineHeight: '1.3' }}>{label}</span>
                    <span style={{ fontSize: '17px', color: '#5A7A9E', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{action}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block" style={{ flex: 1, position: 'relative', minHeight: '420px' }}>
              <img src="/images/iphone.webp" alt="App back" loading="lazy" style={{ position: 'absolute', right: '0', bottom: '0', width: '210px', zIndex: 1, filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.10))' }} />
              <img src="/images/android.webp" alt="App front" loading="lazy" style={{ position: 'absolute', right: '140px', bottom: '0', width: '240px', zIndex: 2, filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.18))' }} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#ffffff', padding: '88px 0' }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: '700', color: '#0D1B2A', lineHeight: '1.2', marginBottom: '14px' }}>{t.faq.title}</h2>
            <p style={{ fontSize: '17px', color: '#5A6A85', maxWidth: '520px', margin: '0 auto', lineHeight: '1.6' }}>{t.faq.subtitle}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((item, i) => {
              const isOpen = faqOpen === i;
              return (
                <div key={i} style={{ border: isOpen ? '1px solid rgba(0,153,250,0.4)' : '1px solid #E4EBF5', borderRadius: '14px', overflow: 'hidden', background: isOpen ? 'rgba(0,153,250,0.03)' : '#FAFCFF', transition: 'border-color 0.25s, background 0.25s', boxShadow: isOpen ? '0 4px 24px rgba(0,153,250,0.08)' : '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <button onClick={() => setFaqOpen(isOpen ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 28px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#0D1B2A', lineHeight: '1.4', flex: 1 }}>{item.q}</span>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: isOpen ? 'linear-gradient(135deg, #0099FA, #0052cc)' : '#EEF3FC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.25s, transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><line x1="6" y1="1" x2="6" y2="11" stroke={isOpen ? '#fff' : '#0099FA'} strokeWidth="2" strokeLinecap="round"/><line x1="1" y1="6" x2="11" y2="6" stroke={isOpen ? '#fff' : '#0099FA'} strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                  </button>
                  {isOpen && (<div style={{ padding: '0 28px 24px 28px' }}><p style={{ fontSize: '16px', color: '#5A6A85', lineHeight: '1.75', margin: 0 }}>{item.a}</p></div>)}
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ fontSize: '16px', color: '#5A6A85', marginBottom: '20px' }}>
              {t.faq.stillHaveQuestions}{' '}
              <a href="/contacts" style={{ color: '#0099FA', fontWeight: '600', textDecoration: 'none' }}>{t.faq.contactSupport}</a>
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: '#F0F4FA', padding: '72px 0' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: '700', color: '#0D1B2A', marginBottom: '8px' }}>{t.reviews.title}</h2>
          <p style={{ fontSize: '17px', color: '#5A6A85', marginBottom: '40px' }}>{t.reviews.subtitle}</p>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-[58%]" style={{ background: 'white', borderRadius: '16px', border: '1px solid #E4EBF5', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0" style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '4px' }}>{[1,2,3,4,5].map(i => <Star key={i} style={{ width: '20px', height: '20px', fill: '#FFC107', color: '#FFC107' }} />)}</div>
                <span style={{ fontSize: '13px', color: '#8A9BB5', fontWeight: 500, letterSpacing: '0.01em' }}>{formatReviewDate(review.date)}</span>
              </div>
              <p style={{ fontSize: '16px', color: '#1A2B42', lineHeight: '1.7', marginBottom: '16px' }}>{review.text}</p>
              <a href="#" style={{ fontSize: '16px', color: '#1A2B42', textDecoration: 'underline', display: 'block', marginBottom: '28px' }}>{t.reviews.showFullReview}</a>
              <hr style={{ border: 'none', borderTop: '1px solid #E4EBF5', marginBottom: '20px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src={review.flag} alt={`${review.name} country flag`} loading="lazy" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #E4EBF5' }} />
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#0D1B2A' }}>{review.name}</div>
                    <div style={{ fontSize: '14px', color: '#8A9BB5' }}>{review.uid}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => setReviewIdx(i => Math.max(0, i - 1))} disabled={reviewIdx === 0} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1.5px solid #C8D8EA', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: reviewIdx === 0 ? 'not-allowed' : 'pointer', opacity: reviewIdx === 0 ? 0.4 : 1, color: '#3B6DB5' }}><ChevronLeft style={{ width: '16px', height: '16px' }} /></button>
                  <button onClick={() => setReviewIdx(i => Math.min(REVIEWS.length - 1, i + 1))} disabled={reviewIdx === REVIEWS.length - 1} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1.5px solid #C8D8EA', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: reviewIdx === REVIEWS.length - 1 ? 'not-allowed' : 'pointer', opacity: reviewIdx === REVIEWS.length - 1 ? 0.4 : 1, color: '#3B6DB5' }}><ChevronRight style={{ width: '16px', height: '16px' }} /></button>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, paddingTop: '8px' }}>
              <a href="#" style={{ fontSize: '17px', color: '#0099FA', textDecoration: 'underline', display: 'block', marginBottom: '20px' }}>{t.reviews.allReviews}</a>
              <p style={{ fontSize: '17px', color: '#5A6A85', lineHeight: '1.65', marginBottom: '28px' }}>{t.reviews.feedbackText}</p>
              <button style={{ height: '48px', padding: '0 28px', borderRadius: '6px', border: '1px solid #D0DCF0', background: '#d6e6f2', fontSize: '13px', fontWeight: '600', letterSpacing: '0.1em', color: '#3A4F6E', cursor: 'pointer', textTransform: 'uppercase', marginBottom: '20px', display: 'block' }}>{t.reviews.submitReview}</button>
              <p style={{ fontSize: '12px', color: '#8A9BB5', lineHeight: '1.5' }}>{t.reviews.reviewsNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section style={{ background: '#063764', padding: '56px 5%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '48px 64px', marginBottom: '40px' }}>
          <img src="https://cdn.simpleicons.org/visa/ffffff" alt="Visa" loading="lazy" style={{ height: '28px', filter: 'brightness(0) invert(1)' }} />
          <span style={{ color: 'white', fontWeight: '700', fontSize: '22px', letterSpacing: '-0.02em' }}>Jetonbank<span style={{ color: '#5bb8ff' }}>.</span></span>
          <img src="https://cdn.simpleicons.org/pix/ffffff" alt="Pix" loading="lazy" style={{ height: '32px' }} />
          <span style={{ color: 'white', fontWeight: '700', fontSize: '20px', letterSpacing: '-0.01em' }}>easypaisa</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" loading="lazy" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
          <span style={{ color: 'white', fontWeight: '800', fontSize: '20px', letterSpacing: '-0.01em' }}>m<span style={{ background: 'white', color: '#063764', borderRadius: '3px', padding: '0 3px', fontSize: '16px', fontWeight: '900', margin: '0 1px' }}>p</span>esa</span>
          <span style={{ color: 'white', fontWeight: '700', fontSize: '20px', border: '2px solid white', borderRadius: '20px', padding: '2px 14px', letterSpacing: '0.04em' }}>MTN</span>
          <span style={{ color: 'white', fontWeight: '700', fontSize: '20px' }}>b<span style={{ color: '#e8a0bf' }}>K</span>ash</span>
          <img src="https://cdn.simpleicons.org/mercadopago/ffffff" alt="Mercado Pago" loading="lazy" style={{ height: '28px' }} />
          <span style={{ color: 'white', fontWeight: '700', fontSize: '22px', letterSpacing: '-0.01em' }}>volet<span style={{ color: '#5bb8ff' }}>.</span></span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', textDecoration: 'none' }}>{t.offers.more}</a>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
