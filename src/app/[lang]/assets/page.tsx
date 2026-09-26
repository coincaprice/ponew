import { AssetsPage } from "@/components/pages/AssetsPage";
import type { Metadata } from "next";
import { locales } from "@/lib/i18n/config";
import { buildSeoMeta } from "@/lib/i18n/seo";

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'Ativos de Trading – Forex, Cripto, Ações e Commodities | Pocket Option',
  es: 'Activos de Trading – Forex, Cripto, Acciones y Materias Primas | Pocket Option',
  ru: 'Торговые активы – Форекс, Криптовалюты, Акции и Товары | Pocket Option',
  id: 'Aset Trading – Forex, Kripto, Saham dan Komoditas | Pocket Option',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Explore mais de 100 ativos disponíveis na Pocket Option: pares de forex, criptomoedas, índices, ações e commodities. Negocie com payouts de até 218% por operação.',
  es: 'Explora más de 100 activos disponibles en Pocket Option: pares de forex, criptomonedas, índices, acciones y materias primas. Opera con pagos de hasta el 218% por operación.',
  ru: 'Изучите более 100 активов на Pocket Option: форексные пары, криптовалюты, индексы, акции и товары. Торгуйте с доходностью до 218% за сделку.',
  id: 'Jelajahi lebih dari 100 aset yang tersedia di Pocket Option: pasangan forex, kripto, indeks, saham, dan komoditas. Trading dengan payout hingga 218% per transaksi.',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const title = TITLES[lang] ?? TITLES.pt;
  const description = DESCRIPTIONS[lang] ?? DESCRIPTIONS.pt;
  return {
    title: { absolute: title },
    description,
    openGraph: { title, description },
    twitter: { card: 'summary_large_image', title, description },
    ...buildSeoMeta(lang, 'assets'),
  };
}

export default async function AssetsLang({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <AssetsPage lang={lang} />;
}
