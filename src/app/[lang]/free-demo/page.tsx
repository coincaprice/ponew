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
  pt: 'Conta Demo Pocket Option – $50.000 Grátis, Sem Depósito',
  es: 'Cuenta Demo Pocket Option – $50.000 Gratis, Sin Depósito',
  ru: 'Демо-счёт Pocket Option – $50 000 бесплатно, без депозита',
  id: 'Akun Demo Pocket Option – $50.000 Gratis, Tanpa Deposit',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Conta demo Pocket Option grátis: $50.000 virtuais, cotações reais, 100+ ativos, recargas ilimitadas. Sem depósito nem cartão. Veja como abrir a demo pocketoption e quando migrar para a conta real.',
  es: 'Cuenta demo Pocket Option gratis: $50.000 virtuales, cotizaciones reales, 100+ activos, recargas ilimitadas. Sin depósito ni tarjeta. Cómo abrir la demo pocketoption y cuándo pasar a real.',
  ru: 'Бесплатное демо Pocket Option: $50 000 виртуальных, реальные котировки, 100+ активов, безлимитное пополнение. Без депозита и карты. Как открыть демо pocketoption и когда переходить на реальный счёт.',
  id: 'Akun demo Pocket Option gratis: $50.000 virtual, kuotasi riil, 100+ aset, isi ulang tanpa batas. Tanpa deposit atau kartu. Cara membuka demo pocketoption dan kapan beralih ke akun riil.',
};

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!NON_EN_LOCALES.includes(lang as Exclude<Locale, 'en'>)) return {};
  const title = TITLES[lang] ?? TITLES.pt;
  const description = DESCRIPTIONS[lang] ?? DESCRIPTIONS.pt;
  return {
    title: { absolute: title },
    description,
    ...buildSeoMeta(lang, 'free-demo', { title, description }),
  };
}

export default async function FreeDemoLang({ params }: Props) {
  const { lang } = await params;
  if (!NON_EN_LOCALES.includes(lang as Exclude<Locale, 'en'>)) notFound();
  return <FreeDemoPage lang={lang as Locale} />;
}
