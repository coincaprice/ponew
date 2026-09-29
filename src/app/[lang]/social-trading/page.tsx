import { RelatedGuides } from '@/components/blog/RelatedGuides';
import { SocialTradingPage } from '@/components/pages/SocialTradingPage';
import type { Metadata } from 'next';
import { isLocale, locales } from '@/lib/i18n/config';
import { buildSeoMeta } from '@/lib/i18n/seo';

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'Social Trading Pocket Option – Copie as Operações dos Melhores Traders',
  es: 'Social Trading Pocket Option – Copia las Operaciones de los Mejores Traders',
  ru: 'Социальный трейдинг Pocket Option – копируйте сделки лучших трейдеров',
  id: 'Social Trading Pocket Option – Salin Trade dari Trader Terbaik',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Como funciona o Social Trading da Pocket Option: ranking de traders ao vivo, cópia com um clique ou automática, configurações, custos e riscos. Copie a partir de $1, teste na demo grátis de $50.000.',
  es: 'Cómo funciona el Social Trading de Pocket Option: ranking de traders en vivo, copia con un clic o automática, ajustes, costes y riesgos. Copia desde $1, prueba en la demo gratis de $50.000.',
  ru: 'Как работает Social Trading в Pocket Option: живой рейтинг трейдеров, копирование в один клик и автокопирование, настройки, стоимость и риски. Копируйте от $1, тестируйте на бесплатном демо $50 000.',
  id: 'Cara kerja Social Trading Pocket Option: peringkat trader langsung, penyalinan satu klik dan otomatis, pengaturan, biaya, dan risiko. Salin mulai $1, uji di demo gratis $50.000.',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const title = TITLES[lang] ?? TITLES.pt;
  const description = DESCRIPTIONS[lang] ?? DESCRIPTIONS.pt;
  return {
    title: { absolute: title },
    description,
    ...buildSeoMeta(lang, 'social-trading', { title, description }),
  };
}

export default async function SocialTradingLang({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : 'en';
  return (
    <SocialTradingPage lang={lang} guides={<RelatedGuides locale={locale} slugs={['pocket-option-social-trading', 'pocket-option-signals', 'pocket-option-risk-management']} />} />
  );
}
