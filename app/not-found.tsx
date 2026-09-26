import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: '404 – Page Not Found | Pocket Option' },
  description: 'The page you are looking for does not exist. Return to the Pocket Option trading platform homepage.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#080F20', fontFamily: "'Nunito Sans', sans-serif" }}>
        <Header lang="en" />

        <main
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(160deg, #061a3a 0%, #080F20 50%, #061a3a 100%)',
            padding: '120px 24px 80px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background glow effects */}
          <div style={{
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,153,250,0.08) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          {/* 404 number */}
          <div style={{
            fontSize: 'clamp(100px, 20vw, 180px)',
            fontWeight: 900,
            lineHeight: 1,
            background: 'linear-gradient(135deg, #0099FA, #00d4ff, #0099FA)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 8,
            letterSpacing: '-4px',
            position: 'relative',
          }}>
            404
          </div>

          {/* Divider line */}
          <div style={{
            width: 80,
            height: 3,
            background: 'linear-gradient(90deg, transparent, #0099FA, transparent)',
            borderRadius: 2,
            marginBottom: 32,
          }} />

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(22px, 4vw, 36px)',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 16px',
          }}>
            Page Not Found
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 480,
            lineHeight: 1.7,
            margin: '0 auto 48px',
          }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back to trading.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#0099FA',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              ← Back to Home
            </Link>
            <Link
              href="/quick-start"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                color: '#0099FA',
                padding: '14px 32px',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: 'none',
                border: '2px solid #0099FA',
              }}
            >
              Quick Start Guide
            </Link>
          </div>

          {/* Popular links */}
          <div style={{ marginTop: 64 }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Popular pages
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { label: 'Trading Assets', href: '/assets' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Contacts', href: '/contacts' },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 14,
                    textDecoration: 'none',
                    padding: '6px 16px',
                    borderRadius: 20,
                    border: '1px solid rgba(255,255,255,0.12)',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer lang="en" />
      </body>
    </html>
  );
}
