import { AboutUsPage } from "@/components/pages/AboutUsPage";
import type { Metadata } from "next";
import { locales } from "@/lib/i18n/config";
import { buildSeoMeta } from "@/lib/i18n/seo";

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'O que é a Pocket Option? Plataforma, história e empresa',
  es: '¿Qué es Pocket Option? Plataforma, historia y empresa',
  ru: 'Что такое Pocket Option? Платформа, история и компания',
  id: 'Apa itu Pocket Option? Platform, Sejarah, dan Perusahaan',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Pocket Option é uma plataforma de trading lançada em 2017: 100+ ativos, depósito de $5, demo de $50.000, 10M+ traders. Quem opera a pocketoption.',
  es: 'Pocket Option es una plataforma de trading lanzada en 2017: 100+ activos, depósito de $5, demo de $50.000, 10M+ traders. Quién opera pocketoption.',
  ru: 'Pocket Option — платформа для трейдинга с 2017 года: 100+ активов, депозит от $5, демо $50 000, 10M+ трейдеров. Кто управляет pocketoption.',
  id: 'Pocket Option adalah platform trading online sejak 2017: 100+ aset, deposit minimum $5, demo $50.000, 10M+ trader. Siapa operator pocketoption.',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const title = TITLES[lang] ?? TITLES.pt;
  const description = DESCRIPTIONS[lang] ?? DESCRIPTIONS.pt;
  return {
    title: { absolute: title },
    description,
    ...buildSeoMeta(lang, 'about-us', { title, description }),
  };
}

export default async function AboutUsLang({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <AboutUsPage lang={lang} />;
}
