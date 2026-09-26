'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, Zap, PlayCircle, Info, BarChart2, Newspaper, ChevronRight } from 'lucide-react';
import { Logo } from '@/components/layout/Logo';
import { REGISTER_URL, LOGIN_URL, AFFILIATE_REL } from '@/config/links';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localeNames, getLocalePath } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';

const LOCALES: { code: Locale; country: string }[] = [
  { code: 'en', country: 'gb' },
  { code: 'pt', country: 'br' },
  { code: 'es', country: 'es' },
  { code: 'ru', country: 'ru' },
  { code: 'id', country: 'id' },
];

function FlagImg({ country, size = 20 }: { country: string; size?: number }) {
  return (
    <img
      src={`/images/flags/${country}.svg`}
      width={size}
      height={Math.round(size * 0.75)}
      alt=""
      aria-hidden
      className="rounded-[2px] object-cover"
      style={{ display: 'inline-block' }}
    />
  );
}

type Props = { lang?: string };

export function Header({ lang = 'en' }: Props) {
  const t = getDictionary(lang);
  const locale = lang as Locale;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const pathname = usePathname();

  function buildLangUrl(targetLang: Locale): string {
    const allLocales: Locale[] = ['pt', 'es', 'ru', 'id'];
    let basePath = pathname ?? '/';
    for (const loc of allLocales) {
      if (basePath.startsWith(`/${loc}/`)) { basePath = basePath.slice(loc.length + 1); break; }
      if (basePath === `/${loc}`) { basePath = '/'; break; }
    }
    return getLocalePath(targetLang, basePath.replace(/^\//, ''));
  }

  const lp = (path: string) => getLocalePath(locale, path);

  const NAV_LINKS = [
    { label: t.nav.quickStart, href: lp('quick-start'), Icon: Zap },
    { label: t.nav.freeDemo, href: lp('free-demo'), Icon: PlayCircle },
    { label: t.nav.aboutUs, href: lp('about-us'), Icon: Info },
    { label: t.nav.tradingAssets, href: lp('assets'), Icon: BarChart2 },
    { label: t.nav.blog, href: lp('blog'), Icon: Newspaper },
  ];

  const currentLocaleInfo = LOCALES.find(l => l.code === locale) ?? LOCALES[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full text-white transition-all duration-300 ${
        scrolled ? 'glass-dark shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]' : 'bg-transparent border-b border-white/[0.06]'
      }`}
    >
      <div className={`container-x flex items-center justify-between transition-[height] duration-300 ${scrolled ? 'h-[64px]' : 'h-[76px]'}`}>
        {/* Logo & Desktop Nav */}
        <div className="flex items-center gap-8">
          <Logo href={lp('')} />

          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.04] p-1 text-[14px] font-semibold text-white/70">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          {/* Language switcher */}
          <div ref={langRef} className="relative hidden md:block">
            <button
              onClick={() => setLangOpen(o => !o)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={`${locale.toUpperCase()} – change language`}
              className="flex items-center gap-1.5 text-sm text-[#8A9BBE] hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/10"
            >
              <FlagImg country={currentLocaleInfo.country} size={20} />
              <span className="font-semibold text-white uppercase text-sm">{locale}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-white/60 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-white/10 overflow-hidden shadow-2xl z-50"
                style={{ background: 'rgba(8,15,32,0.97)', backdropFilter: 'blur(16px)' }}>
                {LOCALES.map(({ code, country }) => (
                  <a
                    key={code}
                    href={buildLangUrl(code)}
                    onClick={() => setLangOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/10 ${code === locale ? 'text-white bg-white/5' : 'text-white/70'}`}
                  >
                    <FlagImg country={country} size={20} />
                    <span>{localeNames[code]}</span>
                    {code === locale && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#0099FA]" />}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-2.5">
            <a href={LOGIN_URL} target="_blank" rel={AFFILIATE_REL} className="btn-ghost-light h-10 px-5 text-[14px]">
              {t.nav.logIn}
            </a>
            <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand h-10 px-6 text-[14px]">
              {t.nav.registration}
            </a>
          </div>

          <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand sm:hidden h-9 px-4 text-[13px]">
            {t.nav.registration}
          </a>
          <button
            className="lg:hidden flex items-center justify-center"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            style={{ width: '40px', height: '40px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.12)', background: mobileOpen ? 'rgba(0,153,250,0.15)' : 'rgba(255,255,255,0.06)', flexShrink: 0, transition: 'background 0.2s, border-color 0.2s', borderColor: mobileOpen ? 'rgba(0,153,250,0.4)' : 'rgba(255,255,255,0.12)' }}
          >
            {mobileOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2L14 14M14 2L2 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <rect x="0" y="0" width="18" height="2" rx="1" fill="white"/>
                <rect x="3" y="6" width="15" height="2" rx="1" fill="rgba(255,255,255,0.7)"/>
                <rect x="0" y="12" width="18" height="2" rx="1" fill="white"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[200] lg:hidden ${mobileOpen ? 'visible' : 'invisible pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
        aria-label={t.drawer.menu}
      >
        <div
          className={`absolute inset-0 bg-[#020814]/70 backdrop-blur-md transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col overflow-hidden border-l border-white/[0.08] bg-[#070f1f] shadow-[-30px_0_80px_rgba(0,0,0,0.65)] transition-transform duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[#0099FA]/25 blur-[90px]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-[#002ED9]/25 blur-[100px]" />
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

          <div className="relative flex shrink-0 items-center justify-between px-5 pt-[calc(env(safe-area-inset-top)+18px)] pb-4">
            <Logo href={lp('')} size="sm" onClick={() => setMobileOpen(false)} />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-[18px] w-[18px]" />
            </button>
          </div>

          <nav className="relative flex-1 overflow-y-auto px-3 pt-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="mb-2 px-3 font-heading text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/35">{t.drawer.menu}</div>
            <ul className="space-y-0.5">
              {NAV_LINKS.map(({ label, href, Icon }, i) => {
                const active = pathname === href || (href !== lp('') && pathname?.startsWith(`${href}/`));
                return (
                  <li
                    key={label}
                    className={`transition-all duration-500 ${mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
                    style={{ transitionDelay: mobileOpen ? `${80 + i * 45}ms` : '0ms' }}
                  >
                    <a
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`group flex items-center gap-3.5 rounded-xl px-3 py-2.5 transition-colors ${active ? 'bg-white/[0.07]' : 'hover:bg-white/[0.05]'}`}
                    >
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${active ? 'border-[#0099FA]/50 bg-[#0099FA]/20' : 'border-white/[0.08] bg-white/[0.04] group-hover:border-[#0099FA]/30 group-hover:bg-[#0099FA]/10'}`}>
                        <Icon className="h-[18px] w-[18px] text-[#5fb8ff]" strokeWidth={1.8} />
                      </span>
                      <span className="flex-1 font-heading text-[15.5px] font-semibold tracking-tight text-white/90">{label}</span>
                      <ChevronRight className="h-4 w-4 text-white/25 transition-transform group-hover:translate-x-0.5 group-hover:text-white/50" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 mb-2 px-3 font-heading text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/35">{t.drawer.language}</div>
            <div className={`mx-1 overflow-hidden rounded-xl border transition-colors ${mobileLangOpen ? 'border-[#0099FA]/40 bg-white/[0.05]' : 'border-white/[0.08] bg-white/[0.03]'}`}>
              <button
                type="button"
                onClick={() => setMobileLangOpen(o => !o)}
                aria-expanded={mobileLangOpen}
                className="flex w-full items-center gap-3 px-3.5 py-3 text-left"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                  <FlagImg country={LOCALES.find(l => l.code === locale)?.country ?? 'gb'} size={20} />
                </span>
                <span className="flex-1 font-heading text-[15px] font-semibold text-white/90">{localeNames[locale]}</span>
                <ChevronDown className={`h-4 w-4 text-white/40 transition-transform duration-300 ${mobileLangOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${mobileLangOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <ul className="min-h-0 overflow-hidden">
                  {LOCALES.filter(l => l.code !== locale).map(({ code, country }) => (
                    <li key={code} className="border-t border-white/[0.06]">
                      <a
                        href={buildLangUrl(code)}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3.5 py-2.5 text-[14px] font-semibold text-white/65 transition-colors hover:bg-white/[0.06] hover:text-white"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center"><FlagImg country={country} size={18} /></span>
                        {localeNames[code]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          <div className="relative shrink-0 border-t border-white/[0.07] bg-[#050b18]/80 px-5 pt-4 pb-[calc(env(safe-area-inset-bottom)+18px)] backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={LOGIN_URL}
                target="_blank"
                rel={AFFILIATE_REL}
                onClick={() => setMobileOpen(false)}
                className="btn-ghost-light h-12 text-[15px]"
              >
                {t.nav.logIn}
              </a>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel={AFFILIATE_REL}
                onClick={() => setMobileOpen(false)}
                className="btn-brand h-12 text-[15px]"
              >
                {t.drawer.signUp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
