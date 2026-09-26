import { HomePage } from '@/components/pages/HomePage';
import type { Metadata } from 'next';
import { locales } from '@/lib/i18n/config';
import { buildSeoMeta } from '@/lib/i18n/seo';

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

const TITLES: Record<string, string> = {
  pt: 'Pocket Option – Plataforma de Trading Online | Depósito de $5, Demo Grátis',
  es: 'Pocket Option – Plataforma de Trading Online | Depósito de $5, Demo Gratis',
  ru: 'Pocket Option – Платформа онлайн-трейдинга | Депозит от $5, бесплатное демо',
  id: 'Pocket Option – Platform Trading Online | Deposit $5, Demo Gratis',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Pocket Option (PocketOption): negocie 100+ ativos — forex, cripto, ações e commodities — com depósito mínimo de $5, pagamentos de até 92% e conta demo grátis de $50.000. Abra sua conta.',
  es: 'Pocket Option (PocketOption): opera 100+ activos — forex, cripto, acciones y materias primas — con depósito mínimo de $5, pagos de hasta 92% y cuenta demo gratis de $50.000. Abre tu cuenta.',
  ru: 'Pocket Option (PocketOption): торгуйте 100+ активами — форекс, крипто, акции, сырьё — с депозитом от $5, выплатами до 92% и бесплатным демо на $50 000. Откройте счёт.',
  id: 'Pocket Option (PocketOption): trading 100+ aset — forex, kripto, saham, komoditas — dengan deposit minimum $5, payout hingga 92%, dan akun demo gratis $50.000. Buka akun sekarang.',
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
