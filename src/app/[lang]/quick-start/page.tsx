import { QuickStartPage } from "@/components/pages/QuickStartPage";
import type { Metadata } from "next";
import { locales } from "@/lib/i18n/config";
import { buildSeoMeta } from "@/lib/i18n/seo";

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'Início Rápido – Como Começar a Negociar na Pocket Option',
  es: 'Inicio Rápido – Cómo Empezar a Operar en Pocket Option',
  ru: 'Быстрый старт – Как начать торговать на Pocket Option',
  id: 'Mulai Cepat – Cara Mulai Trading di Pocket Option',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Aprenda a negociar na Pocket Option em minutos: crie sua conta gratuitamente, faça um depósito a partir de $5 e realize sua primeira negociação em mais de 100 ativos globais.',
  es: 'Aprende a operar en Pocket Option en minutos: crea tu cuenta gratis, deposita desde $5 y realiza tu primera operación entre más de 100 activos globales.',
  ru: 'Начните торговать на Pocket Option за считанные минуты: создайте бесплатный аккаунт, пополните счёт от $5 и совершите первую сделку среди более 100 мировых активов.',
  id: 'Pelajari cara trading di Pocket Option dalam hitungan menit: buat akun gratis, deposit mulai $5, dan lakukan trade pertama Anda di lebih dari 100 aset global.',
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
    ...buildSeoMeta(lang, 'quick-start'),
  };
}

export default async function QuickStartLang({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <QuickStartPage lang={lang} />;
}
