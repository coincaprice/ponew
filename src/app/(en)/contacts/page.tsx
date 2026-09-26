import { ContactsPage } from '@/components/pages/ContactsPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts – 24/7 Support | Pocket Option',
  description: 'Contact Pocket Option support specialists via live chat, email, or our community forum. Our team is available 24/7 to help you with trading and account questions.',
  ...buildSeoMeta('en', 'contacts'),
};

export default function Contacts() {
  return (
    <ContactsPage lang="en" />
  );
}
