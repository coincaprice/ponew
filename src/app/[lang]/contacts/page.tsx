import { ContactsPage } from "@/components/pages/ContactsPage";
import type { Metadata } from "next";
import { locales } from "@/lib/i18n/config";
import { buildSeoMeta } from "@/lib/i18n/seo";

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'Contatos do Suporte Pocket Option – Ajuda, Chat, Redes',
  es: 'Contactos de Soporte Pocket Option – Ayuda, Chat, Redes',
  ru: 'Контакты поддержки Pocket Option: служба помощи, чат и соцсети',
  id: 'Kontak Dukungan Pocket Option – Bantuan, Chat, Sosial',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Como contatar o suporte da Pocket Option 24/7: central de ajuda para depósitos, saques e KYC, chat da comunidade e redes sociais oficiais da pocketoption.',
  es: 'Cómo contactar al soporte de Pocket Option 24/7: mesa de ayuda para depósitos, retiros y KYC, chat de la comunidad y redes sociales oficiales de pocketoption.',
  ru: 'Как связаться с поддержкой Pocket Option 24/7: служба помощи по депозитам, выводу и KYC, чат сообщества трейдеров и официальные соцсети pocketoption.',
  id: 'Cara menghubungi dukungan Pocket Option 24/7: meja bantuan untuk deposit, penarikan dan KYC, chat komunitas trader, dan media sosial resmi pocketoption.',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const title = TITLES[lang] ?? TITLES.pt;
  const description = DESCRIPTIONS[lang] ?? DESCRIPTIONS.pt;
  return {
    title: { absolute: title },
    description,
    ...buildSeoMeta(lang, 'contacts', { title, description }),
  };
}

export default async function ContactsLang({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <ContactsPage lang={lang} />;
}
