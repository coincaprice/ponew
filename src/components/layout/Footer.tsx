import { AlertTriangle, Info } from 'lucide-react';
import { Logo } from '@/components/layout/Logo';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocalePath } from '@/lib/i18n/config';
import type { Locale } from '@/lib/i18n/config';

type Props = { lang?: string };

const FOOTER_LABELS: Record<string, Record<Locale, string>> = {
  blog: { en: 'Blog', pt: 'Blog', es: 'Blog', ru: 'Блог', id: 'Blog' },
  paymentMethods: { en: 'Payment methods', pt: 'Métodos de pagamento', es: 'Métodos de pago', ru: 'Способы оплаты', id: 'Metode pembayaran' },
  socialTrading: { en: 'Social trading', pt: 'Social trading', es: 'Social trading', ru: 'Социальный трейдинг', id: 'Social trading' },
  contacts: { en: 'Contacts', pt: 'Contatos', es: 'Contactos', ru: 'Контакты', id: 'Kontak' },
  terms: { en: 'Terms and Conditions', pt: 'Termos e Condições', es: 'Términos y Condiciones', ru: 'Условия использования', id: 'Syarat dan Ketentuan' },
  aml: { en: 'AML and KYC policy', pt: 'Política AML e KYC', es: 'Política AML y KYC', ru: 'Политика ПОД/ФТ и KYC', id: 'Kebijakan AML dan KYC' },
  privacy: { en: 'Privacy policy', pt: 'Política de privacidade', es: 'Política de privacidad', ru: 'Политика конфиденциальности', id: 'Kebijakan privasi' },
  payment: { en: 'Payment policy', pt: 'Política de pagamento', es: 'Política de pago', ru: 'Платёжная политика', id: 'Kebijakan pembayaran' },
  oneClick: { en: 'One-Click Payment Policy', pt: 'Política de Pagamento em Um Clique', es: 'Política de Pago con Un Clic', ru: 'Политика оплаты в один клик', id: 'Kebijakan Pembayaran Satu Klik' },
};

export function Footer({ lang = 'en' }: Props) {
  const t = getDictionary(lang);
  const locale = lang as Locale;
  const lp = (path: string) => getLocalePath(locale, path);
  const label = (key: keyof typeof FOOTER_LABELS) => FOOTER_LABELS[key][locale] ?? FOOTER_LABELS[key].en;

  const NAV_LINKS = [
    { label: label('blog'), href: lp('blog') },
    { label: label('paymentMethods'), href: lp('payment-methods') },
    { label: label('socialTrading'), href: lp('social-trading') },
    { label: label('contacts'), href: lp('contacts') },
    { label: label('terms'), href: lp('terms-and-conditions') },
    { label: label('aml'), href: lp('aml-policy') },
    { label: label('privacy'), href: lp('privacy-policy') },
    { label: label('payment'), href: lp('payment-policy') },
    { label: label('oneClick'), href: lp('payment-policy') },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050d1c] font-sans text-[#8ca6c0]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0099fa]/60 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#0099fa]/[0.07] blur-3xl" />

      <div className="container-x relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo href={lp('')} />
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60">{t.footer.tagline}</p>
            <SocialLinks label={t.footer.social} />
          </div>

          <nav aria-label="Legal" className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {NAV_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-[14.5px] text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
          <div className="mb-3 flex items-center gap-2.5 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-white">
            <AlertTriangle className="h-4 w-4 text-[#f5b942]" />
            {t.footer.riskWarning}
          </div>
          <p className="text-[13px] leading-[1.75] text-white/55">{t.footer.riskText}</p>
          <a href={lp('risk-disclosure')} className="mt-3 inline-block text-[13px] font-semibold text-[#5fb8ff] underline-offset-4 hover:underline">
            {t.footer.riskDisclosure}
          </a>
        </div>

        <div className="mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
          <div className="mb-3 flex items-center gap-2.5 font-heading text-[13px] font-bold uppercase tracking-[0.08em] text-white">
            <Info className="h-4 w-4 text-[#5fb8ff]" />
            {t.footer.affiliateTitle}
          </div>
          <p className="text-[13px] leading-[1.75] text-white/55">{t.footer.affiliateText}</p>
        </div>

        <div className="mt-10 space-y-2.5 text-[12.5px] leading-[1.75] text-white/45">
          <p>{t.footer.copyright1}</p>
          <p>{t.footer.copyright2}</p>
          <p>{t.footer.copyright3}</p>
          <p>{t.footer.brokerage}</p>
          <p>{t.footer.minInvestNote}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-7">
          <span className="text-[14px] text-white/55">Copyright ©{new Date().getFullYear()} Pocket Option</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/35 font-heading text-[12px] font-bold text-white/70">21+</span>
        </div>
      </div>
    </footer>
  );
}
