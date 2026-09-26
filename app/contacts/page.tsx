import { ContactsPage } from '@/components/pages/ContactsPage';
import { EnLayout } from '@/components/EnLayout';
import { enBaseMetadata } from '@/components/EnLayout';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...enBaseMetadata,
  title: 'Contacts – 24/7 Support | Pocket Option',
  description: 'Contact Pocket Option support specialists via live chat, email, or our community forum. Our team is available 24/7 to help you with trading and account questions.',
  ...buildSeoMeta('en', 'contacts'),
};

export default function Contacts() {
  return (
    <EnLayout>
      <ContactsPage lang="en" />
    </EnLayout>
  );
}
