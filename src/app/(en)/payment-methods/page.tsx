import { PaymentMethodsPage } from '@/components/pages/PaymentMethodsPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'Pocket Option Payment Methods – Deposit & Withdrawal from $5';
const description = 'All Pocket Option payment methods: Visa/Mastercard, bank transfers, e-wallets, 40+ cryptocurrencies, PIX, UPI, QRIS, M-Pesa. Min deposit $5, no platform fees, withdrawals within 24h.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...buildSeoMeta('en', 'payment-methods', { title, description }),
};

export default function PaymentMethods() {
  return <PaymentMethodsPage lang="en" />;
}
