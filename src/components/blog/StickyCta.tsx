'use client';

import { useEffect, useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Logo } from '@/components/layout/Logo';
import { REGISTER_URL, AFFILIATE_REL } from '@/config/links';
import { getLocalePath } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';
import type { BlogDictionary } from '@/lib/blog';

const SHOW_AFTER_PX = 600;

export function StickyCta({ locale, t, endSelector }: { locale: Locale; t: BlogDictionary; endSelector: string }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const end = document.querySelector(endSelector);
    let endInView = false;

    const update = () => setVisible(window.scrollY > SHOW_AFTER_PX && !endInView);

    const io = end
      ? new IntersectionObserver(([entry]) => {
          endInView = entry.isIntersecting;
          update();
        })
      : null;
    io?.observe(end as Element);

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', update);
      io?.disconnect();
    };
  }, [dismissed, endSelector]);

  if (dismissed) return null;

  const close = () => setDismissed(true);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-[150] flex justify-center transition-all duration-400 sm:inset-x-6 sm:bottom-5 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <div
        className="relative flex w-full max-w-[640px] items-center gap-3 rounded-2xl border border-white/10 py-2.5 pl-3.5 pr-2.5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:gap-4 sm:pl-4"
        style={{ background: 'linear-gradient(135deg, rgba(9,20,42,0.97), rgba(10,37,64,0.97))' }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_15%_0%,rgba(0,153,250,0.22),transparent_55%)]" />
        <div className="relative shrink-0">
          <Logo href={getLocalePath(locale, '')} size="sm" showText={false} />
        </div>
        <div className="relative min-w-0 flex-1">
          <p className="truncate font-heading text-[14px] font-bold leading-tight text-white sm:text-[15px]">
            Pocket<span className="font-normal text-white/85">Option</span>
          </p>
          <p className="line-clamp-2 text-[12px] leading-snug text-white/60 sm:line-clamp-1 sm:text-[13px]">{t.stickyText}</p>
        </div>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel={AFFILIATE_REL}
          className="btn-brand relative h-10 shrink-0 px-4 text-[13px] font-bold sm:px-5 sm:text-[13.5px]"
        >
          {t.stickyButton}
          <ChevronRight className="hidden h-4 w-4 sm:block" />
        </a>
        <button
          type="button"
          onClick={close}
          aria-label={t.stickyClose}
          className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/55 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
