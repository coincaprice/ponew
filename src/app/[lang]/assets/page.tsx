import { AssetsPage } from "@/components/pages/AssetsPage";
import type { Metadata } from "next";
import { locales } from "@/lib/i18n/config";
import { buildSeoMeta } from "@/lib/i18n/seo";

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'Ativos da Pocket Option e horários: 100+ ativos, payouts até 92%',
  es: 'Activos de Pocket Option y horarios: 100+ activos, pagos hasta 92%',
  ru: 'Активы Pocket Option и расписание торгов: 100+ активов, выплаты до 92%',
  id: 'Aset Pocket Option dan jadwal trading: 100+ aset, payout hingga 92%',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Lista completa de ativos da Pocket Option com payout atual e horários: pares forex, ações, criptomoedas, commodities e índices. Ativos OTC 24/7, payouts até 92%, disponível na demo de $50.000.',
  es: 'Lista completa de activos de Pocket Option con pago actual y horarios: pares forex, acciones, criptomonedas, materias primas e índices. Activos OTC 24/7, pagos hasta 92%, disponibles en la demo de $50.000.',
  ru: 'Полный список активов Pocket Option с текущими выплатами и часами торгов: валютные пары, акции, криптовалюты, сырьё и индексы. OTC-активы 24/7, выплаты до 92%, доступно на демо $50 000.',
  id: 'Daftar lengkap aset Pocket Option dengan payout terkini dan jam trading: pasangan forex, saham, kripto, komoditas, dan indeks. Aset OTC 24/7, payout hingga 92%, tersedia di demo $50.000.',
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
