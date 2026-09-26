import { ContactsPage } from "@/components/pages/ContactsPage";
import type { Metadata } from "next";
import { locales } from "@/lib/i18n/config";
import { buildSeoMeta } from "@/lib/i18n/seo";

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'Contato – Suporte Pocket Option 24/7',
  es: 'Contacto – Soporte Pocket Option 24/7',
  ru: 'Контакты – Поддержка Pocket Option 24/7',
  id: 'Kontak – Dukungan Pocket Option 24/7',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Entre em contato com a equipe de suporte da Pocket Option. Disponível 24/7 via chat ao vivo, e-mail e Telegram para resolver suas dúvidas e problemas rapidamente.',
  es: 'Contacta al equipo de soporte de Pocket Option. Disponible 24/7 por chat en vivo, correo electrónico y Telegram para resolver tus dudas y problemas rápidamente.',
  ru: 'Свяжитесь с командой поддержки Pocket Option. Доступно 24/7 через онлайн-чат, электронную почту и Telegram для быстрого решения ваших вопросов.',
  id: 'Hubungi tim dukungan Pocket Option. Tersedia 24/7 melalui live chat, email, dan Telegram untuk menyelesaikan pertanyaan dan masalah Anda dengan cepat.',
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
    ...buildSeoMeta(lang, 'contacts'),
  };
}

export default async function ContactsLang({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <ContactsPage lang={lang} />;
}
