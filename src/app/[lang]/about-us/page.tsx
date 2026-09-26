import { AboutUsPage } from "@/components/pages/AboutUsPage";
import type { Metadata } from "next";
import { locales } from "@/lib/i18n/config";
import { buildSeoMeta } from "@/lib/i18n/seo";

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'O que é a Pocket Option? Sobre a plataforma, história e empresa',
  es: '¿Qué es Pocket Option? Sobre la plataforma, historia y empresa',
  ru: 'Что такое Pocket Option? О платформе, истории и компании',
  id: 'Apa itu Pocket Option? Tentang platform, sejarah, dan perusahaan',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Pocket Option é uma plataforma de trading online lançada em 2017: 100+ ativos, depósito mínimo de $5, demo de $50.000 e 10M+ traders em 95+ países. Saiba quem opera a pocketoption e onde estão seus documentos legais.',
  es: 'Pocket Option es una plataforma de trading online lanzada en 2017: 100+ activos, depósito mínimo de $5, demo de $50.000 y 10M+ traders en 95+ países. Descubre quién opera pocketoption y dónde están sus documentos legales.',
  ru: 'Pocket Option — онлайн-платформа для трейдинга, запущенная в 2017: 100+ активов, депозит от $5, демо $50 000 и 10M+ трейдеров в 95+ странах. Кто управляет pocketoption и где юридические документы.',
  id: 'Pocket Option adalah platform trading online yang diluncurkan 2017: 100+ aset, deposit minimum $5, demo $50.000, dan 10M+ trader di 95+ negara. Ketahui siapa operator pocketoption dan di mana dokumen legalnya.',
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
