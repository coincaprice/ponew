import { AboutUsPage } from "@/components/pages/AboutUsPage";
import type { Metadata } from "next";
import { locales } from "@/lib/i18n/config";
import { buildSeoMeta } from "@/lib/i18n/seo";

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'Sobre a Pocket Option – Plataforma de Trading Global',
  es: 'Sobre Pocket Option – Plataforma de Trading Global',
  ru: 'О Pocket Option – Глобальная торговая платформа',
  id: 'Tentang Pocket Option – Platform Trading Global',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Conheça a Pocket Option: plataforma de trading online fundada em 2017, com mais de 10 milhões de traders no mundo, mais de 100 ativos disponíveis e depósito mínimo de apenas $5.',
  es: 'Conoce Pocket Option: plataforma de trading online fundada en 2017, con más de 10 millones de traders en el mundo, más de 100 activos disponibles y un depósito mínimo de solo $5.',
  ru: 'Узнайте о Pocket Option: онлайн-торговая платформа, основанная в 2017 году, с более чем 10 миллионами трейдеров по всему миру, более 100 активами и минимальным депозитом от $5.',
  id: 'Kenali Pocket Option: platform trading online yang didirikan pada 2017, dengan lebih dari 10 juta trader di seluruh dunia, 100+ aset tersedia dan deposit minimum hanya $5.',
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
    ...buildSeoMeta(lang, 'about-us'),
  };
}

export default async function AboutUsLang({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <AboutUsPage lang={lang} />;
}
