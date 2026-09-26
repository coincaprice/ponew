import type { Metadata } from 'next';
import { Analytics } from '@/components/layout/Analytics';
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd';
import { fontVariables } from '@/styles/fonts';
import { siteConfig } from '@/config/site';
import { buildBaseMetadata } from '@/lib/i18n/seo';

export const metadata: Metadata = buildBaseMetadata(
  'en',
  'Pocket Option – The Most User-Friendly Trading Platform',
  siteConfig.description,
);

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        {children}
        <OrganizationJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
