import { RelatedGuides } from '@/components/blog/RelatedGuides';
import { QuickStartPage } from "@/components/pages/QuickStartPage";
import type { Metadata } from "next";
import { locales, type Locale } from '@/lib/i18n/config';
import { buildSeoMeta } from "@/lib/i18n/seo";

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'Como Começar a Operar na Pocket Option – 6 Passos',
  es: 'Cómo Empezar a Operar en Pocket Option – 6 Pasos',
  ru: 'Как начать торговать на Pocket Option – 6 шагов',
  id: 'Cara Mulai Trading di Pocket Option – 6 Langkah Mudah',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Início rápido Pocket Option: cadastre-se em 2 minutos, pratique na demo grátis de $50.000, deposite a partir de $5, opere e saque. Guia para iniciantes.',
  es: 'Inicio rápido Pocket Option: regístrate en 2 minutos, practica en la demo gratis de $50.000, deposita desde $5, opera y retira. Guía para principiantes.',
  ru: 'Быстрый старт Pocket Option: регистрация за 2 минуты, бесплатное демо $50 000, депозит от $5, первая сделка и вывод прибыли. Руководство для новичков.',
  id: 'Mulai cepat Pocket Option: daftar dalam 2 menit, latihan di demo gratis $50.000, deposit mulai $5, trade pertama, dan tarik profit. Panduan untuk pemula.',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const title = TITLES[lang] ?? TITLES.pt;
  const description = DESCRIPTIONS[lang] ?? DESCRIPTIONS.pt;
  return {
    title: { absolute: title },
    description,
    ...buildSeoMeta(lang, 'quick-start', { title, description }),
  };
}

export default async function QuickStartLang({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <QuickStartPage lang={lang as Locale} guides={<RelatedGuides locale={lang as Locale} slugs={['how-to-trade-on-pocket-option', 'pocket-option-demo-account', 'pocket-option-deposit']} />} />;
}
