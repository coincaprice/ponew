import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import type { Locale } from '@/lib/i18n/config';
import { getBlogPost } from '@/lib/blog';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

type OgCopy = { eyebrow: string; title: string; subtitle: string };

const STATS: Record<Locale, [string, string, string]> = {
  en: ['$5 min. deposit', 'Payouts up to 92%', 'Free $50,000 demo'],
  pt: ['Depósito mín. $5', 'Payouts até 92%', 'Demo grátis $50.000'],
  es: ['Depósito mín. $5', 'Pagos hasta 92%', 'Demo gratis $50.000'],
  ru: ['Депозит от $5', 'Выплаты до 92%', 'Демо $50 000 бесплатно'],
  id: ['Deposit min. $5', 'Payout hingga 92%', 'Demo gratis $50.000'],
};

export const OG_COPY: Record<string, Record<Locale, OgCopy>> = {
  home: {
    en: { eyebrow: 'Trading platform', title: 'Pocket Option — trade 100+ assets from just $5', subtitle: 'Forex, crypto, stocks and commodities in one terminal' },
    pt: { eyebrow: 'Plataforma de trading', title: 'Pocket Option — opere 100+ ativos a partir de $5', subtitle: 'Forex, cripto, ações e commodities em um só terminal' },
    es: { eyebrow: 'Plataforma de trading', title: 'Pocket Option — opera 100+ activos desde solo $5', subtitle: 'Forex, cripto, acciones y materias primas en un terminal' },
    ru: { eyebrow: 'Платформа для трейдинга', title: 'Pocket Option — 100+ активов от $5', subtitle: 'Форекс, крипто, акции и сырьё в одном терминале' },
    id: { eyebrow: 'Platform trading', title: 'Pocket Option — trading 100+ aset mulai $5', subtitle: 'Forex, kripto, saham, dan komoditas dalam satu terminal' },
  },
  'about-us': {
    en: { eyebrow: 'About', title: 'What is Pocket Option and who is behind it?', subtitle: 'Platform, history, company and legal facts' },
    pt: { eyebrow: 'Sobre', title: 'O que é a Pocket Option e quem está por trás?', subtitle: 'Plataforma, história, empresa e fatos legais' },
    es: { eyebrow: 'Acerca de', title: '¿Qué es Pocket Option y quién está detrás?', subtitle: 'Plataforma, historia, empresa y datos legales' },
    ru: { eyebrow: 'О платформе', title: 'Что такое Pocket Option и кто за ней стоит?', subtitle: 'Платформа, история, компания и юридические факты' },
    id: { eyebrow: 'Tentang', title: 'Apa itu Pocket Option dan siapa di belakangnya?', subtitle: 'Platform, sejarah, perusahaan, dan fakta legal' },
  },
  'quick-start': {
    en: { eyebrow: 'Quick start', title: 'How to start trading on Pocket Option in 6 steps', subtitle: 'Register → demo → verify → deposit → trade → withdraw' },
    pt: { eyebrow: 'Início rápido', title: 'Como começar a operar na Pocket Option em 6 passos', subtitle: 'Cadastro → demo → verificação → depósito → trade → saque' },
    es: { eyebrow: 'Inicio rápido', title: 'Cómo empezar a operar en Pocket Option en 6 pasos', subtitle: 'Registro → demo → verificación → depósito → trade → retiro' },
    ru: { eyebrow: 'Быстрый старт', title: 'Как начать торговать на Pocket Option за 6 шагов', subtitle: 'Регистрация → демо → верификация → депозит → сделка → вывод' },
    id: { eyebrow: 'Mulai cepat', title: 'Cara mulai trading di Pocket Option dalam 6 langkah', subtitle: 'Daftar → demo → verifikasi → deposit → trade → tarik' },
  },
  'free-demo': {
    en: { eyebrow: 'Free demo', title: 'Pocket Option demo account: $50,000 free, zero risk', subtitle: 'Real quotes, same terminal, no deposit or card required' },
    pt: { eyebrow: 'Demo grátis', title: 'Conta demo Pocket Option: $50.000 grátis, risco zero', subtitle: 'Cotações reais, mesmo terminal, sem depósito ou cartão' },
    es: { eyebrow: 'Demo gratis', title: 'Cuenta demo Pocket Option: $50.000 gratis, riesgo cero', subtitle: 'Cotizaciones reales, mismo terminal, sin depósito ni tarjeta' },
    ru: { eyebrow: 'Бесплатное демо', title: 'Демо-счёт Pocket Option: $50 000 бесплатно, без риска', subtitle: 'Реальные котировки, тот же терминал, без депозита и карты' },
    id: { eyebrow: 'Demo gratis', title: 'Akun demo Pocket Option: $50.000 gratis, tanpa risiko', subtitle: 'Harga real-time, terminal sama, tanpa deposit atau kartu' },
  },
  assets: {
    en: { eyebrow: 'Assets & schedule', title: 'Pocket Option assets and trading schedule', subtitle: 'Forex, stocks, crypto, commodities, indices — payouts up to 92%' },
    pt: { eyebrow: 'Ativos e horários', title: 'Ativos e horários de trading da Pocket Option', subtitle: 'Forex, ações, cripto, commodities, índices — payouts até 92%' },
    es: { eyebrow: 'Activos y horarios', title: 'Activos y horarios de trading de Pocket Option', subtitle: 'Forex, acciones, cripto, materias primas, índices — pagos hasta 92%' },
    ru: { eyebrow: 'Активы и расписание', title: 'Активы и расписание торгов Pocket Option', subtitle: 'Форекс, акции, крипто, сырьё, индексы — выплаты до 92%' },
    id: { eyebrow: 'Aset & jadwal', title: 'Aset dan jadwal trading Pocket Option', subtitle: 'Forex, saham, kripto, komoditas, indeks — payout hingga 92%' },
  },
  'payment-methods': {
    en: { eyebrow: 'Payment methods', title: 'Pocket Option payment methods: deposit & withdrawal', subtitle: 'Cards, bank transfers, e-wallets, crypto and local methods — from $5' },
    pt: { eyebrow: 'Métodos de pagamento', title: 'Métodos de pagamento Pocket Option: depósito e saque', subtitle: 'Cartões, transferências, carteiras digitais, cripto e PIX — a partir de $5' },
    es: { eyebrow: 'Métodos de pago', title: 'Métodos de pago Pocket Option: depósito y retiro', subtitle: 'Tarjetas, transferencias, billeteras, cripto y métodos locales — desde $5' },
    ru: { eyebrow: 'Способы оплаты', title: 'Способы оплаты Pocket Option: пополнение и вывод', subtitle: 'Карты, переводы, кошельки, криптовалюта и локальные методы — от $5' },
    id: { eyebrow: 'Metode pembayaran', title: 'Metode pembayaran Pocket Option: deposit & penarikan', subtitle: 'Kartu, transfer bank, e-wallet, kripto, QRIS & OVO — mulai $5' },
  },
  'social-trading': {
    en: { eyebrow: 'Social trading', title: 'Pocket Option Social Trading: copy top traders', subtitle: 'One-click and automatic copy trading — from $1, free demo' },
    pt: { eyebrow: 'Social trading', title: 'Social Trading Pocket Option: copie os melhores traders', subtitle: 'Cópia com um clique ou automática — a partir de $1, demo grátis' },
    es: { eyebrow: 'Social trading', title: 'Social Trading Pocket Option: copia a los mejores traders', subtitle: 'Copia con un clic o automática — desde $1, demo gratis' },
    ru: { eyebrow: 'Социальный трейдинг', title: 'Social Trading Pocket Option: копируйте лучших трейдеров', subtitle: 'Копирование в один клик и автоматически — от $1, бесплатное демо' },
    id: { eyebrow: 'Social trading', title: 'Social Trading Pocket Option: salin trader terbaik', subtitle: 'Penyalinan satu klik dan otomatis — mulai $1, demo gratis' },
  },
  contacts: {
    en: { eyebrow: 'Support', title: 'Pocket Option support: help desk, chat and social', subtitle: 'Get help with deposits, withdrawals and verification 24/7' },
    pt: { eyebrow: 'Suporte', title: 'Suporte Pocket Option: central de ajuda, chat e redes', subtitle: 'Ajuda com depósitos, saques e verificação 24/7' },
    es: { eyebrow: 'Soporte', title: 'Soporte Pocket Option: ayuda, chat y redes sociales', subtitle: 'Ayuda con depósitos, retiros y verificación 24/7' },
    ru: { eyebrow: 'Поддержка', title: 'Поддержка Pocket Option: служба помощи, чат, соцсети', subtitle: 'Помощь с депозитами, выводом и верификацией 24/7' },
    id: { eyebrow: 'Dukungan', title: 'Dukungan Pocket Option: bantuan, chat, dan sosial', subtitle: 'Bantuan deposit, penarikan, dan verifikasi 24/7' },
  },
  legal: {
    en: { eyebrow: 'Legal', title: 'Pocket Option legal documents', subtitle: 'Privacy, terms, AML, payment policy and risk disclosure' },
    pt: { eyebrow: 'Legal', title: 'Documentos legais da Pocket Option', subtitle: 'Privacidade, termos, AML, política de pagamento e riscos' },
    es: { eyebrow: 'Legal', title: 'Documentos legales de Pocket Option', subtitle: 'Privacidad, términos, AML, política de pagos y riesgos' },
    ru: { eyebrow: 'Документы', title: 'Юридические документы Pocket Option', subtitle: 'Конфиденциальность, условия, AML, платежи и риски' },
    id: { eyebrow: 'Legal', title: 'Dokumen legal Pocket Option', subtitle: 'Privasi, ketentuan, AML, kebijakan pembayaran dan risiko' },
  },
  blog: {
    en: { eyebrow: 'Blog', title: 'Pocket Option blog: tutorials, guides and strategies', subtitle: 'Step-by-step guides for trading on the pocketoption platform' },
    pt: { eyebrow: 'Blog', title: 'Blog Pocket Option: tutoriais, guias e estratégias', subtitle: 'Guias passo a passo para operar na plataforma pocketoption' },
    es: { eyebrow: 'Blog', title: 'Blog Pocket Option: tutoriales, guías y estrategias', subtitle: 'Guías paso a paso para operar en la plataforma pocketoption' },
    ru: { eyebrow: 'Блог', title: 'Блог Pocket Option: уроки, гиды и стратегии', subtitle: 'Пошаговые руководства по торговле на pocketoption' },
    id: { eyebrow: 'Blog', title: 'Blog Pocket Option: tutorial, panduan, dan strategi', subtitle: 'Panduan langkah demi langkah trading di platform pocketoption' },
  },
};

const toArrayBuffer = (b: Buffer) => b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer;

const ASSET_DIR = path.join(process.cwd(), 'public', 'og');
const asset = (file: string) => readFile(path.join(ASSET_DIR, file));

async function loadAssets() {
  const [latin800, cyr800, latin600, cyr600, logo] = await Promise.all([
    asset('montserrat-latin-800.woff'),
    asset('montserrat-cyrillic-800.woff'),
    asset('montserrat-latin-600.woff'),
    asset('montserrat-cyrillic-600.woff'),
    asset('logo.png'),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;
  const fonts = [
    { name: 'Montserrat', data: toArrayBuffer(latin800), weight: 800 as const, style: 'normal' as const },
    { name: 'MontserratCyr', data: toArrayBuffer(cyr800), weight: 800 as const, style: 'normal' as const },
    { name: 'Montserrat', data: toArrayBuffer(latin600), weight: 600 as const, style: 'normal' as const },
    { name: 'MontserratCyr', data: toArrayBuffer(cyr600), weight: 600 as const, style: 'normal' as const },
  ];
  return { logoSrc, fonts };
}

function Card({ eyebrow, title, subtitle, stats, logoSrc }: OgCopy & { stats: readonly string[]; logoSrc: string }) {
  const titleSize = title.length > 60 ? 48 : title.length > 44 ? 54 : 62;
  return (
    <div
      style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '56px 64px', fontFamily: 'Montserrat, MontserratCyr', color: '#fff', position: 'relative',
        background: 'linear-gradient(135deg, #050F1E 0%, #0A2540 55%, #0C3260 100%)',
      }}
    >
      <div style={{ position: 'absolute', top: -220, right: -160, width: 620, height: 620, borderRadius: 9999, background: 'rgba(0,153,250,0.22)', filter: 'blur(120px)' }} />
      <div style={{ position: 'absolute', bottom: -260, left: -120, width: 520, height: 520, borderRadius: 9999, background: 'rgba(0,119,204,0.18)', filter: 'blur(120px)' }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={56} height={56} />
          <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5 }}>Pocket Option</span>
        </div>
        <div style={{ display: 'flex', padding: '10px 18px', borderRadius: 9999, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.06)', fontSize: 18, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#8ED0FF' }}>
          {eyebrow}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 1000 }}>
        <div style={{ fontSize: titleSize, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.5 }}>{title}</div>
        <div style={{ fontSize: 26, fontWeight: 600, color: 'rgba(255,255,255,0.72)', lineHeight: 1.35 }}>{subtitle}</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 12 }}>
          {stats.map(s => (
            <div key={s} style={{ display: 'flex', padding: '12px 20px', borderRadius: 14, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', fontSize: 20, fontWeight: 600 }}>
              {s}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 20, fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}>pocketoption.lc</div>
      </div>
    </div>
  );
}

export async function renderPageOg(page: keyof typeof OG_COPY, lang: Locale) {
  const { logoSrc, fonts } = await loadAssets();
  const copy = OG_COPY[page][lang] ?? OG_COPY[page].en;
  return new ImageResponse(<Card {...copy} stats={STATS[lang]} logoSrc={logoSrc} />, { ...OG_SIZE, fonts });
}

function truncate(text: string, max: number) {
  return text.length <= max ? text : `${text.slice(0, max).replace(/\s+\S*$/, '')}…`;
}

export async function renderBlogOg(slug: string, lang: Locale) {
  const post = getBlogPost(slug);
  const { logoSrc, fonts } = await loadAssets();
  const c = post?.content[lang] ?? post?.content.en;
  const copy: OgCopy = {
    eyebrow: OG_COPY.blog[lang].eyebrow,
    title: truncate(c?.title ?? OG_COPY.blog[lang].title, 90),
    subtitle: truncate(c?.excerpt ?? OG_COPY.blog[lang].subtitle, 120),
  };
  return new ImageResponse(<Card {...copy} stats={STATS[lang]} logoSrc={logoSrc} />, { ...OG_SIZE, fonts });
}
