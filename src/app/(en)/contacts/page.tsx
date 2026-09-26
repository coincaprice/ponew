import { ContactsPage } from '@/components/pages/ContactsPage';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

const title = 'Pocket Option Support Contacts – Help Desk, Chat, Social';
const description = 'How to contact Pocket Option support 24/7: support desk for deposits, withdrawals and KYC, trader community chat and official pocketoption social channels.';

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
