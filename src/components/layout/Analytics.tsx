import Script from 'next/script';
import { siteConfig } from '@/config/site';

const { gaId, statcounter } = siteConfig.analytics;

export function Analytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
      <Script id="statcounter-vars" strategy="afterInteractive">
        {`var sc_project=${statcounter.project}; var sc_invisible=1; var sc_security="${statcounter.security}";`}
      </Script>
      <Script src="https://www.statcounter.com/counter/counter.js" strategy="afterInteractive" />
      <noscript>
        <div className="statcounter">
          <a title="Web Analytics" href="https://statcounter.com/" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="statcounter"
              src={`https://c.statcounter.com/${statcounter.project}/0/${statcounter.security}/1/`}
              alt="Web Analytics"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </noscript>
    </>
  );
}
