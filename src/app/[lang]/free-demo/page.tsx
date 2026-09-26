import { RelatedGuides } from '@/components/blog/RelatedGuides';
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
  pt: 'Conta demo Pocket Option grátis: $50.000 virtuais, cotações reais, 100+ ativos, recargas ilimitadas, sem cartão. Como abrir a demo pocketoption.',
  es: 'Cuenta demo Pocket Option gratis: $50.000 virtuales, cotizaciones reales, 100+ activos, recargas ilimitadas, sin tarjeta. Cómo abrir la demo pocketoption.',
  ru: 'Бесплатный демо-счёт Pocket Option: $50 000 виртуальных, реальные котировки, 100+ активов, безлимитное пополнение, без карты. Как открыть демо pocketoption.',
  id: 'Akun demo Pocket Option gratis: saldo virtual $50.000, harga real-time, 100+ aset, isi ulang tanpa batas, tanpa kartu. Cara buka demo pocketoption.',
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
  return <FreeDemoPage lang={lang as Locale} guides={<RelatedGuides locale={lang as Locale} slugs={['pocket-option-demo-account', 'pocket-option-indicators', 'pocket-option-risk-management']} />} />;
}
