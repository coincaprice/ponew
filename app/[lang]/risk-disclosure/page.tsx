import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { locales, getLocalePath } from '@/lib/i18n/config';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const META_TITLES: Record<string, string> = {
  pt: 'Divulgação de Riscos | Pocket Option',
  es: 'Divulgación de Riesgos | Pocket Option',
  ru: 'Раскрытие рисков | Pocket Option',
  id: 'Pengungkapan Risiko | Pocket Option',
};

const META_DESCRIPTIONS: Record<string, string> = {
  pt: 'Leia a Divulgação de Riscos da Pocket Option. Entenda os riscos envolvidos no trading de opções binárias e instrumentos financeiros antes de investir seu capital.',
  es: 'Lee la Divulgación de Riesgos de Pocket Option. Comprende los riesgos del trading de opciones binarias e instrumentos financieros antes de invertir tu capital.',
  ru: 'Ознакомьтесь с Раскрытием рисков Pocket Option. Поймите риски торговли бинарными опционами и финансовыми инструментами перед инвестированием капитала.',
  id: 'Baca Pengungkapan Risiko Pocket Option. Pahami risiko trading opsi biner dan instrumen keuangan sebelum menginvestasikan modal Anda.',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const title = META_TITLES[lang] ?? META_TITLES.pt;
  const description = META_DESCRIPTIONS[lang] ?? META_DESCRIPTIONS.pt;
  return {
    title: { absolute: title },
    description,
    openGraph: { title, description },
    twitter: { card: 'summary_large_image', title, description },
    ...buildSeoMeta(lang, 'risk-disclosure'),
  };
}

const TITLES: Record<string, { title: string; home: string; page: string }> = {
  pt: { title: 'Divulgação de Riscos', home: 'Início', page: 'Divulgação de Riscos' },
  es: { title: 'Divulgación de Riesgos', home: 'Inicio', page: 'Divulgación de Riesgos' },
  ru: { title: 'Раскрытие рисков', home: 'Главная', page: 'Раскрытие рисков' },
  id: { title: 'Pengungkapan Risiko', home: 'Beranda', page: 'Pengungkapan Risiko' },
};

export default async function LangRiskDisclosure({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = TITLES[lang] ?? TITLES.pt;
  const locale = lang as Locale;
  const homeHref = getLocalePath(locale);

  return (
    <>
      <Header lang={lang} />
      <main style={{ background: '#080F20', minHeight: '100vh', fontFamily: "'Nunito Sans', sans-serif" }}>
        <section style={{ background: 'linear-gradient(135deg, #061a3a, #0a2d5e, #0d3a7a)', padding: '130px 0 60px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>
              <a href={homeHref} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{t.home}</a>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>{t.page}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 800, color: '#fff' }}>{t.title}</h1>
          </div>
        </section>
        <section style={{ background: '#fff', padding: '64px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
            <a href="/risk-disclosure" style={{ color: '#0099FA', textDecoration: 'none', fontSize: 16 }}>
              → View Risk Disclosure in English
            </a>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
