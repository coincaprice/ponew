import { PaymentMethodsPage } from '@/components/pages/PaymentMethodsPage';
import type { Metadata } from 'next';
import { locales } from '@/lib/i18n/config';
import { buildSeoMeta } from '@/lib/i18n/seo';

const NON_EN_LOCALES = locales.filter(l => l !== 'en');

export async function generateStaticParams() {
  return NON_EN_LOCALES.map(lang => ({ lang }));
}

const TITLES: Record<string, string> = {
  pt: 'Métodos de Pagamento Pocket Option – Depósito e Saque a partir de $5',
  es: 'Métodos de Pago Pocket Option – Depósito y Retiro desde $5',
  ru: 'Способы оплаты Pocket Option – пополнение и вывод от $5',
  id: 'Metode Pembayaran Pocket Option – Deposit & Penarikan mulai $5',
};

const DESCRIPTIONS: Record<string, string> = {
  pt: 'Todos os métodos de pagamento da Pocket Option: Visa/Mastercard, PIX, transferências, carteiras digitais e 40+ criptomoedas. Depósito mínimo $5, sem taxas da plataforma, saque em até 24h.',
  es: 'Todos los métodos de pago de Pocket Option: Visa/Mastercard, transferencias, SPEI, PIX, billeteras y 40+ criptomonedas. Depósito mínimo $5, sin comisiones de la plataforma, retiros en 24h.',
  ru: 'Все способы оплаты Pocket Option: Visa/Mastercard, СБП, перевод по карте, кошельки и 40+ криптовалют. Минимальный депозит $5, без комиссии платформы, вывод до 24 часов.',
  id: 'Semua metode pembayaran Pocket Option: Visa/Mastercard, QRIS, OVO, ShopeePay, transfer bank, e-wallet, dan 40+ kripto. Deposit minimum $5, tanpa biaya platform, penarikan dalam 24 jam.',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const title = TITLES[lang] ?? TITLES.pt;
  const description = DESCRIPTIONS[lang] ?? DESCRIPTIONS.pt;
  return {
    title: { absolute: title },
    description,
    ...buildSeoMeta(lang, 'payment-methods', { title, description }),
  };
}

export default async function PaymentMethodsLang({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <PaymentMethodsPage lang={lang} />;
}
