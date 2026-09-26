import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocalePath } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';

type Props = { lang?: string };

export function Footer({ lang = 'en' }: Props) {
  const t = getDictionary(lang);
  const locale = lang as Locale;
  const lp = (path: string) => getLocalePath(locale, path);

  const NAV_LINKS = [
    { label: lang === 'en' ? 'Contacts' : lang === 'pt' ? 'Contatos' : lang === 'es' ? 'Contactos' : lang === 'ru' ? 'Контакты' : 'Kontak', href: lp('contacts') },
    { label: lang === 'en' ? 'Terms and Conditions' : lang === 'pt' ? 'Termos e Condições' : lang === 'es' ? 'Términos y Condiciones' : lang === 'ru' ? 'Условия использования' : 'Syarat dan Ketentuan', href: lp('terms-and-conditions') },
    { label: lang === 'en' ? 'AML and KYC policy' : lang === 'pt' ? 'Política AML e KYC' : lang === 'es' ? 'Política AML y KYC' : lang === 'ru' ? 'Политика ПОД/ФТ и KYC' : 'Kebijakan AML dan KYC', href: lp('aml-policy') },
    { label: lang === 'en' ? 'Privacy policy' : lang === 'pt' ? 'Política de privacidade' : lang === 'es' ? 'Política de privacidad' : lang === 'ru' ? 'Политика конфиденциальности' : 'Kebijakan privasi', href: lp('privacy-policy') },
    { label: lang === 'en' ? 'Payment policy' : lang === 'pt' ? 'Política de pagamento' : lang === 'es' ? 'Política de pago' : lang === 'ru' ? 'Платёжная политика' : 'Kebijakan pembayaran', href: lp('payment-policy') },
    { label: lang === 'en' ? 'One-Click Payment Policy' : lang === 'pt' ? 'Política de Pagamento em Um Clique' : lang === 'es' ? 'Política de Pago con Un Clic' : lang === 'ru' ? 'Политика оплаты в один клик' : 'Kebijakan Pembayaran Satu Klik', href: lp('payment-policy') },
  ];

  return (
    <footer style={{ background: '#063764', color: '#a8bbd4', fontFamily: "'Nunito Sans', sans-serif" }}>
      <style>{`
        .footer-nav { display: flex; flex-wrap: wrap; gap: 0; margin-bottom: 28px; }
        .footer-nav-link { color: #8ca6c0; font-size: 16px; text-decoration: underline; margin-right: 36px; margin-bottom: 8px; line-height: 1.8; }
        @media (max-width: 639px) {
          .footer-nav { flex-direction: column; gap: 0; }
          .footer-nav-link { margin-right: 0; margin-bottom: 12px; display: block; }
        }
      `}</style>
      <div style={{ padding: '56px 5% 0' }}>

        {/* RISK WARNING */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9" stroke="#a8bbd4" strokeWidth="1.5"/>
              <line x1="10" y1="8" x2="10" y2="14" stroke="#a8bbd4" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="10" cy="6" r="0.8" fill="#a8bbd4"/>
            </svg>
            <span style={{ color: '#ffffff', fontWeight: '700', fontSize: '13px', letterSpacing: '0.03em' }}>
              {t.footer.riskWarning}
            </span>
          </div>
          <p style={{ fontSize: '13px', lineHeight: '1.7', marginBottom: '14px', color: '#8ca6c0' }}>
            Investing in financial products involves risks. Past performance does not guarantee future returns, and values may fluctuate due to market conditions and changes in underlying assets. Any forecasts or illustrations are for reference only and are not guarantees. This website does not constitute an invitation or recommendation to invest. Before investing, seek advice from financial, legal, and tax professionals, and assess whether the product suits your goals, risk tolerance, and circumstances.
          </p>
          <a href={lp('risk-disclosure')} style={{ color: '#8ca6c0', fontSize: '13px', textDecoration: 'underline' }}>
            {t.footer.riskDisclosure}
          </a>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '32px' }} />

        {/* LEGAL TEXT */}
        <div style={{ fontSize: '13px', lineHeight: '1.75', color: '#8ca6c0', marginBottom: '28px' }}>
          <p style={{ marginBottom: '10px' }}>{t.footer.copyright1}</p>
          <p style={{ marginBottom: '10px' }}>{t.footer.copyright2}</p>
          <p style={{ marginBottom: '10px' }}>{t.footer.copyright3}</p>
          <p style={{ marginBottom: '20px' }}>All brokerage activity on this website provided by FX Trading LLC.</p>
          <p style={{ color: '#8ca6c0' }}>* The minimum investment amount varies by region and payment method.</p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '28px' }} />

        {/* NAV LINKS */}
        <div className="footer-nav">
          {NAV_LINKS.map((link, i) => (
            <a key={i} href={link.href} className="footer-nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '0' }} />

        {/* BOTTOM BAR */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '24px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
            <svg width="28" height="22" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.764 1.39412C23.7097 3.48874 27.0949 7.94781 27.0949 13.0956C27.0949 18.2456 23.7085 22.7046 18.7628 24.7971C13.8182 22.7046 10.4307 18.2456 10.4307 13.0956C10.4307 7.94676 13.8182 3.48769 18.764 1.39412Z" fill="#002ED9"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M18.7699 1.3964C20.4838 0.486105 22.4389 0 24.5067 0C31.6944 0 37.5293 5.86913 37.5293 13.099C37.5293 20.3278 31.6944 26.1969 24.5067 26.1969C22.4389 26.1969 20.4838 25.7118 18.7688 24.8005C23.0912 22.7069 26.0525 18.2478 26.0525 13.099C26.0525 7.9501 23.0923 3.49102 18.7699 1.3964Z" fill="#0099FA"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M18.7605 24.7994C17.0455 25.7108 15.0894 26.1969 13.0226 26.1969H5.33701L1.87782 29.6764C1.56363 29.9924 1.09079 30.0869 0.679524 29.9158C0.268261 29.7446 0 29.3415 0 28.8931V1.69039C0 0.757003 0.75259 0 1.68054 0H13.0644C15.1175 0.0062996 17.059 0.492421 18.7615 1.39641C14.438 3.48998 11.4767 7.94905 11.4767 13.0979C11.4767 18.2479 14.438 22.7069 18.7605 24.7994Z" fill="#1A4DDE"/>
            </svg>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '17px', lineHeight: 1, letterSpacing: '-0.01em' }}>
              <span style={{ fontWeight: 700, color: '#ffffff' }}>Pocket</span><span style={{ fontWeight: 400, color: '#ffffff' }}>Option</span>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '17px', color: '#8ca6c0' }}>Copyright ©{new Date().getFullYear()} Pocket Option</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '2px solid #8ca6c0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', color: '#8ca6c0', letterSpacing: '0.02em', flexShrink: 0 }}>21+</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
