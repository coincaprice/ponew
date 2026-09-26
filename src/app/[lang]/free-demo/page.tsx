import { FreeDemoPage } from '@/components/pages/FreeDemoPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import { BASE_URL, locales, getLocalePath } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const NON_EN_LOCALES = locales.filter((l): l is Exclude<Locale, 'en'> => l !== 'en');

export function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'Conta Demo Grátis – Pratique Trading Sem Risco | Pocket Option',
  es: 'Cuenta Demo Gratis – Opera Sin Riesgo | Pocket Option',
  ru: 'Бесплатный Демо-счёт – Торгуйте Без Риска | Pocket Option',
  id: 'Akun Demo Gratis – Berlatih Trading Tanpa Risiko | Pocket Option',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Abra uma conta demo gratuita na Pocket Option com $50.000 em fundos virtuais. Pratique estratégias de trading sem risco com dados reais de mercado e mais de 100 ativos.',
  es: 'Abre una cuenta demo gratuita en Pocket Option con $50,000 en fondos virtuales. Practica estrategias de trading sin riesgo con datos reales del mercado y más de 100 activos.',
  ru: 'Откройте бесплатный демо-счёт на Pocket Option с $50 000 виртуальных средств. Практикуйте торговые стратегии без риска с реальными рыночными данными и 100+ активами.',
  id: 'Buka akun demo gratis di Pocket Option dengan $50.000 dana virtual. Berlatih strategi trading tanpa risiko dengan data pasar nyata dan 100+ aset.',
};

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!NON_EN_LOCALES.includes(lang as Exclude<Locale, 'en'>)) return {};
  return {
    title: { absolute: TITLES[lang] ?? TITLES.pt },
    description: DESCRIPTIONS[lang] ?? DESCRIPTIONS.pt,
    ...buildSeoMeta(lang, 'free-demo'),
  };
}

export default async function FreeDemoLang({ params }: Props) {
  const { lang } = await params;
  if (!NON_EN_LOCALES.includes(lang as Exclude<Locale, 'en'>)) notFound();
  return <FreeDemoPage lang={lang as Locale} />;
}
