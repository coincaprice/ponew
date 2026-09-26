import type { Locale } from '@/lib/i18n/config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface TocItem { num: string; title: string; href?: string; }

interface LegalShellProps {
  lang: string;
  breadcrumbHome: string;
  breadcrumbPage: string;
  title: React.ReactNode;
  updated: string;
  tocItems: TocItem[];
  contentsLabel?: string;
  children: React.ReactNode;
}

export function LegalShell({
  lang, breadcrumbHome, breadcrumbPage, title, updated,
  tocItems, contentsLabel = 'Contents', children,
}: LegalShellProps) {
  const homeHref = lang === 'en' ? '/' : `/${lang}`;

  return (
    <main style={{ background: '#F8FAFC', minHeight: '100vh', fontFamily: "'Nunito Sans', 'Inter', sans-serif" }}>
      <style>{`
        .legal-hero-inner { max-width: 1400px; margin: 0 auto; padding: 0 48px; position: relative; z-index: 1; }
        .legal-content-wrap { max-width: 1400px; margin: 0 auto; padding: 0 48px; }
        .legal-grid { display: grid; grid-template-columns: 260px 1fr; gap: 56px; align-items: start; }
        .legal-sidebar { position: sticky; top: 100px; }
        .legal-mobile-toc { display: none; background: #fff; border-radius: 14px; padding: 20px 18px; border: 1px solid #E8EDF5; box-shadow: 0 2px 12px rgba(0,0,0,0.04); margin-bottom: 24px; }
        .legal-card { background: #fff; border-radius: 14px; padding: 36px 40px; border: 1px solid #E8EDF5; margin-bottom: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); }
        .legal-def-row { display: grid; grid-template-columns: 220px 1fr; gap: 24px; padding: 18px 0; }
        @media (max-width: 900px) {
          .legal-hero-inner { padding: 0 20px; }
          .legal-content-wrap { padding: 0 16px; }
          .legal-grid { grid-template-columns: 1fr; gap: 0; }
          .legal-sidebar { display: none; }
          .legal-mobile-toc { display: block; }
          .legal-card { padding: 22px 18px; border-radius: 10px; }
          .legal-def-row { grid-template-columns: 1fr; gap: 6px; padding: 14px 0; }
        }
      `}</style>

      <Header lang={lang as Locale} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #020d1a 0%, #061829 50%, #0a2540 100%)', paddingTop: 130, paddingBottom: 60, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '50%', height: '140%', background: 'radial-gradient(ellipse, rgba(0,153,250,0.1) 0%, transparent 65%)', borderRadius: '50%' }} />
        <div className="legal-hero-inner">
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <a href={homeHref} style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{breadcrumbHome}</a>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{breadcrumbPage}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 46px)', fontWeight: 800, color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>{title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>{updated}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '48px 0 80px' }}>
        <div className="legal-content-wrap">

          {/* Mobile TOC */}
          <div className="legal-mobile-toc">
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0099FA', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>{contentsLabel}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {tocItems.map(s => (
                <a key={s.num} href={s.href ?? `#section-${s.num}`} style={{ fontSize: 14, color: '#4A5E78', textDecoration: 'none', padding: '6px 10px', borderRadius: 6, display: 'block' }}>
                  {s.num !== 'def' ? `${s.num}. ` : ''}{s.title}
                </a>
              ))}
            </div>
          </div>

          <div className="legal-grid">
            {/* Desktop Sidebar */}
            <aside className="legal-sidebar">
              <div style={{ background: '#fff', borderRadius: 14, padding: '28px 22px', border: '1px solid #E8EDF5', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#0099FA', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 18 }}>{contentsLabel}</div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {tocItems.map(s => (
                    <a key={s.num} href={s.href ?? `#section-${s.num}`} style={{ fontSize: 15, color: '#4A5E78', textDecoration: 'none', padding: '7px 12px', borderRadius: 6, display: 'block' }}>
                      {s.num !== 'def' ? `${s.num}. ` : ''}{s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div>{children}</div>
          </div>
        </div>
      </section>

      <Footer lang={lang as Locale} />
    </main>
  );
}
