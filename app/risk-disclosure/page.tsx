import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EnLayout } from '@/components/EnLayout';
import { enBaseMetadata } from '@/components/EnLayout';
import { buildSeoMeta } from '@/lib/i18n/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...enBaseMetadata,
  title: 'Risk Disclosure | Pocket Option',
  description: 'Risk disclosure statement for Pocket Option traders. Trading binary options and financial instruments carries significant risk. Read before you invest.',
  ...buildSeoMeta('en', 'risk-disclosure'),
};

const sections = [
  { title: '1. General Risk Warning', body: 'Trading financial instruments including binary options, forex, cryptocurrencies, stocks, and commodities involves a high level of risk and may not be suitable for all investors. The high degree of leverage available in financial trading can work both in your favor and against you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, financial situation, and risk appetite.' },
  { title: '2. Risk of Loss', body: 'There is a real risk that you may lose some or all of your invested capital. You should not invest money that you cannot afford to lose. Binary options and similar instruments are high-risk products where the potential for profit comes with an equally high potential for loss. In some cases, you may lose your entire investment in a very short period.' },
  { title: '3. Market Risks', body: 'Financial markets are affected by many factors beyond our control including: economic and political events; changes in interest rates and inflation; currency fluctuations; market liquidity and volatility; regulatory changes; and technical failures in market infrastructure. These factors can cause rapid and significant changes in asset prices, which may result in substantial losses.' },
  { title: '4. Leverage Risk', body: 'Leverage magnifies both potential gains and potential losses. Trading with leverage means you can hold a position larger than your actual capital. While this can increase returns, it also significantly increases the risk of loss, potentially exceeding your initial investment. You should fully understand how leverage works before trading leveraged products.' },
  { title: '5. Liquidity Risk', body: 'Some markets or instruments may have limited liquidity, meaning it may be difficult to open or close a position at the price you want. In times of market stress, liquidity can decrease significantly, leading to wider spreads and potential slippage. This can result in trades being executed at prices significantly different from those expected.' },
  { title: '6. Technology and Operational Risks', body: 'Online trading involves technology risks including internet connectivity issues, software failures, system outages, and cybersecurity threats. While we work to maintain platform availability and security, we cannot guarantee uninterrupted access or protection against all technical failures. You should have backup plans for managing your positions if technology fails.' },
  { title: '7. Regulatory Risks', body: 'Financial regulations can change at any time and may impact your ability to trade certain instruments or access certain markets. Tax laws may also change in ways that affect your trading profits or losses. It is your responsibility to comply with all applicable laws and regulations in your jurisdiction.' },
  { title: '8. No Guarantee of Returns', body: 'Past performance of any financial instrument is not indicative of future results. Pocket Option does not guarantee any specific level of performance, return, or profit. Any forecasts, projections, or illustrations are for reference only and should not be relied upon as a guarantee of future performance.' },
  { title: '9. Psychological Risks', body: 'Trading can be psychologically demanding. Emotional decision-making, overconfidence, and loss aversion can lead to poor trading decisions. We recommend developing and following a disciplined trading strategy, and seeking professional guidance if you find yourself making decisions driven by emotion rather than analysis.' },
  { title: '10. Seeking Independent Advice', body: 'We strongly recommend seeking independent financial, legal, and tax advice before starting to trade. A qualified professional can help you assess whether trading is appropriate for your specific circumstances, financial goals, and risk tolerance. Nothing on this platform constitutes investment advice.' },
];

export default function RiskDisclosure() {
  return (
    <EnLayout>
      <Header lang="en" />
      <main style={{ background: '#080F20', minHeight: '100vh', fontFamily: "'Nunito Sans', sans-serif" }}>
        <section style={{ background: 'linear-gradient(135deg, #061a3a, #0a2d5e, #0d3a7a)', padding: '130px 0 60px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</a>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>Risk Disclosure</span>
            </div>
            <h1 style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 800, color: '#fff' }}>Risk Disclosure</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12, fontSize: 15 }}>Last updated: March 17, 2026</p>
          </div>
        </section>
        <section style={{ background: '#fff', padding: '64px 0' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', color: '#1a1a2e', fontSize: 16, lineHeight: 1.8 }}>
            <div style={{ marginBottom: 40, fontSize: 17, color: '#7a2020', borderLeft: '4px solid #e53535', padding: '16px 20px', background: '#fff5f5', borderRadius: '0 8px 8px 0' }}>
              <strong>Important Warning:</strong> Trading financial instruments carries a high level of risk and may not be suitable for all investors. You may lose some or all of your invested capital. Please read this document carefully before trading.
            </div>
            {sections.map((s) => (
              <div key={s.title} style={{ marginBottom: 36 }}>
                <h2 style={{ fontSize: 19, fontWeight: 700, color: '#0a2d5e', marginBottom: 10, fontFamily: "'Montserrat', sans-serif" }}>{s.title}</h2>
                <p style={{ color: '#444', lineHeight: 1.9 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </EnLayout>
  );
}
