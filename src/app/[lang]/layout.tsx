import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Analytics } from '@/components/layout/Analytics';
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd';
import { fontVariables } from '@/styles/fonts';
import { locales, isNonEnLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { buildBaseMetadata } from '@/lib/i18n/seo';

const NON_EN_LOCALES = locales.filter(isNonEnLocale);

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isNonEnLocale(lang)) return {};
  const t = getDictionary(lang);
  return buildBaseMetadata(lang, `Pocket Option – ${t.hero.title}`, t.hero.subtitle);
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isNonEnLocale(lang)) notFound();

  return (
    <html lang={lang} className={fontVariables}>
      <body>
        {children}
        <OrganizationJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
