'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Zap, PlayCircle, Info, BarChart2, ChevronRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { REGISTER_URL, LOGIN_URL } from '@/lib/links';
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
      src={`https://flagcdn.com/w${size}/${country}.png`}
      srcSet={`https://flagcdn.com/w${size * 2}/${country}.png 2x`}
      width={size}
      height={Math.round(size * 0.75)}
      alt={country}
      loading="lazy"
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
  ];

  const currentLocaleInfo = LOCALES.find(l => l.code === locale) ?? LOCALES[0];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full text-white border-b border-white/10 bg-transparent">
      <div className="container mx-auto px-4 h-[72px] flex items-center justify-between">
        {/* Logo & Desktop Nav */}
        <div className="flex items-center gap-8">
          <a href={lp('')} className="flex items-center gap-[9px]">
            <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.764 1.39412C23.7097 3.48874 27.0949 7.94781 27.0949 13.0956C27.0949 18.2456 23.7085 22.7046 18.7628 24.7971C13.8182 22.7046 10.4307 18.2456 10.4307 13.0956C10.4307 7.94676 13.8182 3.48769 18.764 1.39412Z" fill="#002ED9"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M18.7699 1.3964C20.4838 0.486105 22.4389 0 24.5067 0C31.6944 0 37.5293 5.86913 37.5293 13.099C37.5293 20.3278 31.6944 26.1969 24.5067 26.1969C22.4389 26.1969 20.4838 25.7118 18.7688 24.8005C23.0912 22.7069 26.0525 18.2478 26.0525 13.099C26.0525 7.9501 23.0923 3.49102 18.7699 1.3964Z" fill="#0099FA"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M18.7605 24.7994C17.0455 25.7108 15.0894 26.1969 13.0226 26.1969H5.33701L1.87782 29.6764C1.56363 29.9924 1.09079 30.0869 0.679524 29.9158C0.268261 29.7446 0 29.3415 0 28.8931V1.69039C0 0.757003 0.75259 0 1.68054 0H13.0644C15.1175 0.0062996 17.059 0.492421 18.7615 1.39641C14.438 3.48998 11.4767 7.94905 11.4767 13.0979C11.4767 18.2479 14.438 22.7069 18.7605 24.7994Z" fill="#1A4DDE"/>
            </svg>
            <span className="hidden md:inline" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '20px', lineHeight: 1, letterSpacing: '-0.01em' }}>
              <span style={{ fontWeight: 700, color: '#ffffff' }}>Pocket</span><span style={{ fontWeight: 400, color: '#ffffff' }}>Option</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center text-[15px] font-semibold text-white/75">
            {NAV_LINKS.map((link, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && <span className="text-white/20 px-2">|</span>}
                <a href={link.href} className="hover:text-white transition-colors py-2 px-3">{link.label}</a>
              </span>
            ))}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          {/* Language switcher */}
          <div ref={langRef} className="relative hidden md:block">
            <button
              onClick={() => setLangOpen(o => !o)}
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

          <div className="hidden sm:flex items-center gap-3">
            <Button asChild variant="outline" className="bg-white border-white text-black hover:bg-white/90 rounded-[6px] px-6 h-10 font-semibold">
              <a href={LOGIN_URL} target="_blank" rel="nofollow sponsored noopener noreferrer">{t.nav.logIn}</a>
            </Button>
            <Button asChild className="bg-gradient-to-r from-[#0099FA] to-[#002ED9] hover:opacity-90 text-white rounded-[6px] px-6 h-10 border-0 font-semibold shadow-[0_4px_12px_rgba(0,153,250,0.3)]">
              <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer">{t.nav.registration}</a>
            </Button>
          </div>

          {/* Mobile: Registration only + hamburger */}
          <Button asChild className="sm:hidden bg-gradient-to-r from-[#0099FA] to-[#002ED9] text-white rounded-[6px] px-4 h-9 text-[13px] border-0 font-semibold">
            <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer">{t.nav.registration}</a>
          </Button>
          <button
            className="lg:hidden flex items-center justify-center"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
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

      {/* Mobile Drawer — full-screen overlay + slide panel */}
      <div
        className={`fixed inset-0 z-[200] lg:hidden transition-all duration-300 ${mobileOpen ? 'visible' : 'invisible pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: 'rgba(2,8,20,0.75)', backdropFilter: 'blur(6px)' }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[300px] flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ background: 'linear-gradient(160deg, #0b1628 0%, #071020 100%)', borderLeft: '1px solid rgba(255,255,255,0.07)', boxShadow: '-20px 0 60px rgba(0,0,0,0.6)' }}
        >
          {/* Panel Header */}
          <div style={{ padding: '20px 20px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <a href={lp('')} onClick={() => setMobileOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none' }}>
              <svg width="26" height="20" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.764 1.39412C23.7097 3.48874 27.0949 7.94781 27.0949 13.0956C27.0949 18.2456 23.7085 22.7046 18.7628 24.7971C13.8182 22.7046 10.4307 18.2456 10.4307 13.0956C10.4307 7.94676 13.8182 3.48769 18.764 1.39412Z" fill="#002ED9"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18.7699 1.3964C20.4838 0.486105 22.4389 0 24.5067 0C31.6944 0 37.5293 5.86913 37.5293 13.099C37.5293 20.3278 31.6944 26.1969 24.5067 26.1969C22.4389 26.1969 20.4838 25.7118 18.7688 24.8005C23.0912 22.7069 26.0525 18.2478 26.0525 13.099C26.0525 7.9501 23.0923 3.49102 18.7699 1.3964Z" fill="#0099FA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18.7605 24.7994C17.0455 25.7108 15.0894 26.1969 13.0226 26.1969H5.33701L1.87782 29.6764C1.56363 29.9924 1.09079 30.0869 0.679524 29.9158C0.268261 29.7446 0 29.3415 0 28.8931V1.69039C0 0.757003 0.75259 0 1.68054 0H13.0644C15.1175 0.0062996 17.059 0.492421 18.7615 1.39641C14.438 3.48998 11.4767 7.94905 11.4767 13.0979C11.4767 18.2479 14.438 22.7069 18.7605 24.7994Z" fill="#1A4DDE"/>
              </svg>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '16px', lineHeight: 1, letterSpacing: '-0.01em' }}>
                <span style={{ fontWeight: 700, color: '#fff' }}>Pocket</span><span style={{ fontWeight: 400, color: '#fff' }}>Option</span>
              </span>
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              style={{ width: '34px', height: '34px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', flexShrink: 0 }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav Links */}
          <nav style={{ padding: '8px 12px', flex: 1, overflowY: 'auto' }}>
            {NAV_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 12px', borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s', marginBottom: '2px' }}
                className="group hover:bg-white/[0.06]"
              >
                <span style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0,153,250,0.12)', border: '1px solid rgba(0,153,250,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon className="w-4 h-4" style={{ color: '#0099FA' }} />
                </span>
                <span style={{ flex: 1, fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{label}</span>
                <ChevronRight className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.25)' }} />
              </a>
            ))}

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '10px 0' }} />

            {/* Language Switcher */}
            <div style={{ marginBottom: '2px' }}>
              <button
                onClick={() => setMobileLangOpen(o => !o)}
                style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '100%', padding: '13px 12px', borderRadius: '10px', background: 'transparent', border: 'none', cursor: 'pointer', transition: 'background 0.15s' }}
                className="hover:bg-white/[0.06]"
              >
                <span style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Globe className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.5)' }} />
                </span>
                <span style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FlagImg country={currentLocaleInfo.country} size={20} />
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{localeNames[locale as Locale]}</span>
                </span>
                <ChevronDown className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.3)', transform: mobileLangOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
              </button>

              {/* Lang dropdown */}
              <div
                style={{ overflow: 'hidden', transition: 'max-height 0.25s ease, opacity 0.2s', maxHeight: mobileLangOpen ? '300px' : '0', opacity: mobileLangOpen ? 1 : 0 }}
              >
                <div style={{ padding: '4px 8px 8px', display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  {LOCALES.map(({ code, country }) => (
                    <a
                      key={code}
                      href={buildLangUrl(code)}
                      onClick={() => { setMobileLangOpen(false); setMobileOpen(false); }}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '8px', textDecoration: 'none', background: code === locale ? 'rgba(0,153,250,0.1)' : 'transparent', border: code === locale ? '1px solid rgba(0,153,250,0.2)' : '1px solid transparent' }}
                      className={code !== locale ? 'hover:bg-white/[0.05]' : ''}
                    >
                      <FlagImg country={country} size={20} />
                      <span style={{ flex: 1, fontSize: '14px', fontWeight: 600, color: code === locale ? '#fff' : 'rgba(255,255,255,0.6)' }}>{localeNames[code]}</span>
                      {code === locale && (
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="#0099FA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Bottom CTAs */}
          <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', textAlign: 'center', padding: '13px 16px', borderRadius: '6px', background: 'linear-gradient(90deg, #0099FA, #002ED9)', color: '#fff', fontSize: '15px', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.02em', boxShadow: '0 4px 20px rgba(0,153,250,0.3)', fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.nav.registration}
            </a>
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', textAlign: 'center', padding: '12px 16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', color: '#000000', fontSize: '15px', fontWeight: 600, textDecoration: 'none', fontFamily: "'Montserrat', sans-serif", background: '#ffffff' }}
            >
              {t.nav.logIn}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
