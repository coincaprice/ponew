import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { FaqJsonLd } from '@/components/seo/FaqJsonLd';
import { IconBadge } from '@/components/ui/IconBadge';
import { SectionHead } from '@/components/ui/SectionHead';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import {
  ChevronRight, ArrowUpRight, Globe, Smartphone, Timer, Users, Trophy, LineChart,
  Wallet, Lightbulb, MessagesSquare, Eye, Headset, ShieldCheck, Building2, BadgeCheck, MapPinOff, AlertTriangle,
  FileText, Facebook, Instagram, Send, Twitter, Youtube, MessageCircle, Music2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { REGISTER_URL, AFFILIATE_REL } from '@/config/links';
import { siteConfig } from '@/config/site';
import { getLocalePath, isLocale } from '@/lib/i18n/config';
import { getAboutDictionary } from '@/lib/i18n/about';

const PLATFORM_ICONS: LucideIcon[] = [Globe, Smartphone, Timer, Users, Trophy, LineChart];
const VALUE_ICONS: LucideIcon[] = [Wallet, Lightbulb, MessagesSquare, Eye, Headset, ShieldCheck];
const TRUST_ICONS: LucideIcon[] = [Building2, BadgeCheck, MapPinOff, AlertTriangle];

const SOCIAL_ICONS: { match: string; icon: LucideIcon; label: string }[] = [
  { match: 'facebook', icon: Facebook, label: 'Facebook' },
  { match: 't.me', icon: Send, label: 'Telegram' },
  { match: 'instagram', icon: Instagram, label: 'Instagram' },
  { match: 'x.com', icon: Twitter, label: 'X' },
  { match: 'bit.ly', icon: Youtube, label: 'YouTube' },
  { match: 'discord', icon: MessageCircle, label: 'Discord' },
  { match: 'tiktok', icon: Music2, label: 'TikTok' },
];

export function AboutUsPage({ lang = 'en' }: { lang?: string }) {
  const t = getAboutDictionary(lang);
  const locale = isLocale(lang) ? lang : 'en';
  const lp = (path: string) => getLocalePath(locale, path);

  return (
    <div className="min-h-screen bg-[#080F20] flex flex-col font-sans">
      <BreadcrumbJsonLd lang={lang} slug="about-us" homeName={t.home} pageName={t.breadcrumb} />
      <FaqJsonLd items={t.faq.items} />
      <Header lang={lang} />
      <main className="flex-1 flex flex-col">

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 45%, #0C3260 75%, #0A2540 100%)' }}>
        <Image src="/images/about/about-bg.webp" alt="" aria-hidden width={1408} height={685} priority sizes="100vw" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.16] mix-blend-luminosity" />
        <div className="absolute pointer-events-none" style={{ top: '-20%', right: '-10%', width: '60%', height: '80%', background: 'radial-gradient(ellipse, rgba(0,153,250,0.18) 0%, transparent 65%)', borderRadius: '50%' }} />
        <div className="absolute inset-0 grid-noise pointer-events-none" />
        <div className="container-x relative z-10 pt-[110px] md:pt-[150px] pb-16 lg:pb-24">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[13px] text-white/45">
            <a href={lp('')} className="hover:text-white/80 transition-colors">{t.home}</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{t.breadcrumb}</span>
          </nav>
          <div className="max-w-[860px] text-white">
            <span className="eyebrow eyebrow-dark mb-6">{t.hero.eyebrow}</span>
            <h1 className="font-heading font-extrabold text-[34px] md:text-[48px] lg:text-[58px] leading-[1.08] mb-6">
              {t.hero.title}{' '}
              <span className="text-gradient-brand">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-[16px] md:text-[17.5px] text-white/72 leading-relaxed max-w-[720px] mb-9">{t.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3.5">
              <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand w-full sm:w-auto h-[54px] px-9 text-[15px] font-bold tracking-[0.06em] uppercase">{t.hero.cta}<ChevronRight className="w-4 h-4" /></a>
              <a href={lp('/free-demo')} className="btn-ghost-light w-full sm:w-auto h-[54px] px-8 text-[15px]">{t.hero.secondary}</a>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {t.hero.facts.map(f => (
              <div key={f.label} className="bg-[#0A2540]/90 px-6 py-6">
                <div className="font-heading font-extrabold text-[30px] md:text-[36px] leading-none text-white">{f.value}</div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.1em] text-white/45">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <span className="eyebrow mb-5">{t.overview.eyebrow}</span>
            <h2 className="font-heading font-bold text-[28px] md:text-[38px] lg:text-[42px] leading-[1.15] text-[#080F20] mb-6">{t.overview.title}</h2>
            <p className="text-[16px] md:text-[17px] leading-[1.8] text-[#5A6A85] mb-5">{t.overview.p1}</p>
            <p className="text-[16px] md:text-[17px] leading-[1.8] text-[#5A6A85]">{t.overview.p2}</p>
          </div>
          <div className="lg:col-span-6">
            <div className="card-premium overflow-hidden">
              <div className="px-7 py-5 border-b border-[#EEF2F8] flex items-center gap-3">
                <IconBadge icon={FileText} size={40} />
                <span className="font-heading font-bold text-[15px] text-[#080F20]">Pocket Option</span>
              </div>
              <dl>
                {t.overview.rows.map((r, i) => (
                  <div key={r.label} className={`grid grid-cols-[38%_1fr] gap-4 px-7 py-3.5 text-[14.5px] ${i % 2 ? 'bg-[#F7F9FD]' : 'bg-white'}`}>
                    <dt className="text-[#8A9BB5]">{r.label}</dt>
                    <dd className="font-semibold text-[#0D1B2A]">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: 'linear-gradient(180deg, #071A33 0%, #0A2540 100%)' }}>
        <div className="absolute inset-0 grid-noise pointer-events-none" />
        <div className="container-x relative z-10">
          <SectionHead eyebrow={t.timeline.eyebrow} title={t.timeline.title} subtitle={t.timeline.subtitle} dark />
          <ol className="relative grid lg:grid-cols-5 gap-6">
            <div className="hidden lg:block absolute left-0 right-0 top-[22px] h-px bg-gradient-to-r from-transparent via-[#0099FA]/60 to-transparent" />
            {t.timeline.items.map((item, i) => (
              <li key={item.year} className="relative flex gap-5 lg:flex-col lg:gap-0">
                <div className="flex flex-col items-center lg:items-start shrink-0">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#0099FA]/50 bg-[#0A2540] font-heading text-[13px] font-extrabold text-[#0099FA] shadow-[0_0_0_6px_rgba(0,153,250,0.12)]">{i + 1}</span>
                  {i < t.timeline.items.length - 1 && <span className="lg:hidden mt-2 w-px flex-1 bg-white/10" />}
                </div>
                <div className="pb-8 lg:pb-0 lg:pt-6">
                  <div className="font-heading font-extrabold text-[22px] text-white mb-1">{item.year}</div>
                  <div className="font-heading font-semibold text-[15px] text-[#7CC4FF] mb-2">{item.title}</div>
                  <p className="text-[14.5px] leading-relaxed text-white/60">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PLATFORM */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.platform.eyebrow} title={t.platform.title} subtitle={t.platform.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.platform.items.map((item, i) => (
              <div key={item.title} className="card-premium p-8 flex flex-col">
                <IconBadge icon={PLATFORM_ICONS[i]} size={60} />
                <h3 className="font-heading font-bold text-[18px] text-[#080F20] mt-6 mb-2.5">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#5A6A85]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#F7F9FD] py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.values.eyebrow} title={t.values.title} subtitle={t.values.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {t.values.items.map((item, i) => (
              <div key={item.title} className="flex gap-5 items-start">
                <IconBadge icon={VALUE_ICONS[i]} size={56} />
                <div>
                  <h3 className="font-heading font-bold text-[17px] text-[#080F20] mb-2">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#5A6A85]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHead eyebrow={t.trust.eyebrow} title={t.trust.title} subtitle={t.trust.subtitle} align="left" />
            <div className="grid sm:grid-cols-2 gap-6">
              {t.trust.items.map((item, i) => (
                <div key={item.title} className="rounded-2xl border border-[#E4EBF5] p-6">
                  <IconBadge icon={TRUST_ICONS[i]} size={48} />
                  <h3 className="font-heading font-bold text-[16.5px] text-[#080F20] mt-5 mb-2">{item.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-[#5A6A85]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 lg:p-10 text-white h-full" style={{ background: 'linear-gradient(145deg, #050F1E 0%, #0A2540 60%, #0C3260 100%)' }}>
              <h3 className="font-heading font-bold text-[22px] mb-6">{t.trust.docsTitle}</h3>
              <ul className="flex flex-col divide-y divide-white/10">
                {t.trust.docs.map(d => (
                  <li key={d.slug}>
                    <a href={lp(`/${d.slug}`)} className="group flex items-center justify-between gap-4 py-4 text-[15.5px] font-medium text-white/85 hover:text-white transition-colors">
                      <span className="flex items-center gap-3"><FileText className="h-4.5 w-4.5 text-[#0099FA]" />{d.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-[#0099FA] transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-[#F7F9FD] py-20 lg:py-24">
        <div className="container-x flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <span className="eyebrow mb-5">{t.community.eyebrow}</span>
            <h2 className="font-heading font-bold text-[28px] md:text-[36px] leading-[1.15] text-[#080F20] mb-4">{t.community.title}</h2>
            <p className="text-[16px] leading-relaxed text-[#5A6A85]">{t.community.subtitle}</p>
          </div>
          <div className="lg:w-1/2 flex flex-wrap gap-3">
            {siteConfig.social.map(url => {
              const s = SOCIAL_ICONS.find(x => url.includes(x.match));
              if (!s) return null;
              const Icon = s.icon;
              return (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex items-center gap-2.5 rounded-full border border-[#E4EBF5] bg-white px-5 py-3 text-[14.5px] font-semibold text-[#0D1B2A] hover:border-[#0099FA] hover:text-[#0099FA] transition-colors">
                  <Icon className="h-4.5 w-4.5" />{s.label}
                </a>
              );
            })}
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
        <Image src="/images/about/join-bg.webp" alt="" aria-hidden width={1920} height={599} sizes="100vw" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.14] mix-blend-luminosity" />
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

      </main>

      <Footer lang={lang} />
    </div>
  );
}
