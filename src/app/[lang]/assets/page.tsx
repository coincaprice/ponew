import { AssetsPage } from "@/components/pages/AssetsPage";
import type { Metadata } from "next";
import { locales } from "@/lib/i18n/config";
import { buildSeoMeta } from "@/lib/i18n/seo";

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'Ativos Pocket Option e Horários – Payouts até 92%',
  es: 'Activos Pocket Option y Horarios – Pagos hasta 92%',
  ru: 'Активы Pocket Option и расписание торгов – выплаты до 92%',
  id: 'Aset Pocket Option & Jadwal Trading – Payout hingga 92%',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Lista completa de ativos da Pocket Option com payouts e horários: forex, ações, cripto, commodities, índices. OTC 24/7, payouts até 92%.',
  es: 'Lista completa de activos de Pocket Option con pagos y horarios: forex, acciones, cripto, materias primas, índices. OTC 24/7, pagos hasta 92%, todo en la demo.',
  ru: 'Полный список активов Pocket Option с выплатами и часами торгов: форекс, акции, крипто, сырьё, индексы. OTC 24/7, выплаты до 92%, всё доступно на демо.',
  id: 'Daftar lengkap aset Pocket Option dengan payout dan jam trading: forex, saham, kripto, komoditas, indeks. OTC 24/7, payout hingga 92%, semua tersedia di demo.',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const title = TITLES[lang] ?? TITLES.pt;
  const description = DESCRIPTIONS[lang] ?? DESCRIPTIONS.pt;
  return {
    title: { absolute: title },
    description,
    ...buildSeoMeta(lang, 'assets', { title, description }),
  };
}

export default async function AssetsLang({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <AssetsPage lang={lang} />;
}
