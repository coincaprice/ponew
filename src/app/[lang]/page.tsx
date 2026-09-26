import { HomePage } from '@/components/pages/HomePage';
import type { Metadata } from 'next';
import { locales } from '@/lib/i18n/config';
import { buildSeoMeta } from '@/lib/i18n/seo';

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

const TITLES: Record<string, string> = {
  pt: 'Pocket Option – A Interface de Trading Mais Fácil de Usar',
  es: 'Pocket Option – La Interfaz de Trading Más Fácil de Usar',
  ru: 'Pocket Option – Самый удобный торговый интерфейс',
  id: 'Pocket Option – Antarmuka Trading Paling Ramah Pengguna',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Negocie mais de 100 ativos globais incluindo forex, criptomoedas, ações e commodities na Pocket Option. Comece a negociar online com uma plataforma rápida e segura.',
  es: 'Opera más de 100 activos globales incluyendo forex, criptomonedas, acciones y materias primas en Pocket Option. Comienza a operar online con una plataforma rápida y segura.',
  ru: 'Торгуйте более чем 100 мировыми активами: форекс, криптовалюты, акции и товары на Pocket Option. Начните онлайн-торговлю на быстрой и надёжной платформе.',
  id: 'Perdagangkan lebih dari 100 aset global termasuk forex, kripto, saham dan komoditas di Pocket Option. Mulai trading online dengan platform yang cepat dan aman.',
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
