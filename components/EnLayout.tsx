import type { Metadata } from 'next';
import Script from 'next/script';
import { BASE_URL } from '@/lib/i18n/config';

export const enBaseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Pocket Option – The Most User-Friendly Trading Platform',
    template: '%s | Pocket Option',
  },
  description:
    'Trade over 100 global assets including forex, cryptocurrencies, stocks, and commodities on Pocket Option. Start online trading with a fast and secure platform.',
  keywords: [
    'pocket option', 'pocketoption', 'pocket option trading',
    'online trading platform', 'binary options', 'forex trading',
    'cryptocurrency trading', 'trading platform', 'pocketoption.dev',
  ],
  authors: [{ name: 'Pocket Option', url: BASE_URL }],
  creator: 'Pocket Option',
  publisher: 'Pocket Option',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website', locale: 'en_US', siteName: 'Pocket Option',
    title: 'Pocket Option – The Most User-Friendly Trading Platform',
    description: 'Trade over 100 global assets including forex, cryptocurrencies, stocks, and commodities on Pocket Option. Start online trading with a fast and secure platform.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 669, alt: 'Trade smarter with Pocket Option – access global financial markets in seconds' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Option – The Most User-Friendly Trading Platform',
    description: 'Trade over 100 global assets including forex, cryptocurrencies, stocks, and commodities on Pocket Option. Start online trading with a fast and secure platform.',
    images: ['/images/og-image.png'],
    site: '@pocketbrokergl',
    creator: '@pocketbrokergl',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '350x350', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'B160svh70O099eiiqW3VQGfZv9XO1KEKdLI2WFMnm7M',
    other: { 'msvalidate.01': '4F37DBE036B13EABA7F7C7625B77C3A7' },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Pocket Option',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.png`,
  description: 'Trade over 100 global assets including forex, cryptocurrencies, stocks, and commodities on Pocket Option. Start online trading with a fast and secure platform.',
  foundingDate: '2017',
  sameAs: [
    'https://www.facebook.com/pocketbrokerglobal',
    'https://t.me/pocketbrokerglobal',
    'https://www.instagram.com/pocketbrokerglobal/',
    'https://x.com/pocketbrokergl',
    'https://bit.ly/4pMrVCR',
    'https://discord.gg/pocketbroker',
    'https://tiktok.com/@pocketbrokerglobal',
  ],
  offers: {
    '@type': 'Offer',
    description: 'Online trading platform with over 100 global assets',
    priceCurrency: 'USD',
    price: '0',
  },
};

export function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C017JPRFX1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C017JPRFX1');
          `}
        </Script>
        <Script id="statcounter-vars" strategy="afterInteractive">
          {`var sc_project=13211220; var sc_invisible=1; var sc_security="826a071c";`}
        </Script>
        <Script
          src="https://www.statcounter.com/counter/counter.js"
          strategy="afterInteractive"
        />
        <noscript>
          <div className="statcounter">
            <a title="Web Analytics" href="https://statcounter.com/" target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="statcounter" src="https://c.statcounter.com/13211220/0/826a071c/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade" />
            </a>
          </div>
        </noscript>
      </body>
    </html>
  );
}
