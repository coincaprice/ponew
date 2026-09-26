import { HomePage } from '@/components/pages/HomePage';
import type { Metadata } from 'next';
import { locales } from '@/lib/i18n/config';
import { buildSeoMeta } from '@/lib/i18n/seo';

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

const TITLES: Record<string, string> = {
  pt: 'Pocket Option – Plataforma de Trading | Depósito $5, Demo Grátis',
  es: 'Pocket Option – Plataforma de Trading | Depósito $5, Demo Gratis',
  ru: 'Pocket Option – Платформа для трейдинга | Депозит $5, демо',
  id: 'Pocket Option – Platform Trading | Deposit $5, Demo Gratis',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Pocket Option (PocketOption): negocie 100+ ativos — forex, cripto, ações, commodities — com depósito de $5, payouts até 92% e demo grátis de $50.000.',
  es: 'Pocket Option (PocketOption): opera 100+ activos — forex, cripto, acciones, materias primas — con depósito de $5, pagos hasta 92% y demo gratis de $50.000.',
  ru: 'Pocket Option (PocketOption): торгуйте 100+ активами — форекс, крипто, акции, сырьё — с депозитом от $5, выплатами до 92% и бесплатным демо на $50 000.',
  id: 'Pocket Option (PocketOption): trading 100+ aset — forex, kripto, saham, komoditas — dengan deposit $5, payout hingga 92%, dan akun demo gratis $50.000.',
};

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const title = TITLES[lang] ?? TITLES.pt;
  const description = DESCRIPTIONS[lang] ?? DESCRIPTIONS.pt;

  return {
    title: { absolute: title },
    description,
    ...buildSeoMeta(lang, '', { title, description }),
  };
}

export default async function LangPage({ params }: Props) {
  const { lang } = await params;
  return <HomePage lang={lang} />;
}
