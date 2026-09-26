import { HomePage } from '@/components/pages/HomePage';
import { EnLayout } from '@/components/EnLayout';
import { enBaseMetadata } from '@/components/EnLayout';
import { buildSeoMeta } from '@/lib/i18n/seo';

export const metadata = {
  ...enBaseMetadata,
  ...buildSeoMeta('en', ''),
};

export default function Home() {
  return (
    <EnLayout>
      <HomePage lang="en" />
    </EnLayout>
  );
}
