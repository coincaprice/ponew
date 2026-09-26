import { ContactsPage } from '@/components/pages/ContactsPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'Contacts – 24/7 Support | Pocket Option';
const description = 'Contact Pocket Option support specialists via live chat, email, or our community forum. Our team is available 24/7 to help you with trading and account questions.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  ...buildSeoMeta('en', 'contacts', { title, description }),
};

export default function Contacts() {
  return (
    <ContactsPage lang="en" />
  );
}
