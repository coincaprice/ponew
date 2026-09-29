import type { Locale } from '@/lib/i18n/config';
import type { BlogDictionary, BlogPost } from './types';
import { howToTradeOnPocketOption } from './posts/how-to-trade-on-pocket-option';
import { pocketOptionWithdrawal } from './posts/pocket-option-withdrawal';
import { pocketOptionDeposit } from './posts/pocket-option-deposit';
import { pocketOptionDemoAccount } from './posts/pocket-option-demo-account';
import { pocketOptionIndicators } from './posts/pocket-option-indicators';
import { pocketOptionRiskManagement } from './posts/pocket-option-risk-management';
import { pocketOptionMobileApp } from './posts/pocket-option-mobile-app';
import { pocketOptionReview } from './posts/pocket-option-review';
import { pocketOptionPromoCode } from './posts/pocket-option-promo-code';
import { pocketOptionLoginRegistration } from './posts/pocket-option-login-registration';
import { pocketOptionStrategies } from './posts/pocket-option-strategies';
import { pocketOptionAccountVerification } from './posts/pocket-option-account-verification';
import { pocketOptionSocialTrading } from './posts/pocket-option-social-trading';
import { pocketOptionTournaments } from './posts/pocket-option-tournaments';
import { pocketOptionVsQuotex } from './posts/pocket-option-vs-quotex';
import { pocketOptionVsIqOption } from './posts/pocket-option-vs-iq-option';
import { pocketOptionPayoutAndAssets } from './posts/pocket-option-payout-and-assets';
import { pocketOptionSignals } from './posts/pocket-option-signals';
import { pocketOptionOtcTrading } from './posts/pocket-option-otc-trading';
import { isPocketOptionLegit } from './posts/is-pocket-option-legit';
import { pocketOptionMinimumDeposit } from './posts/pocket-option-minimum-deposit';
import { pocketOptionApkDownload } from './posts/pocket-option-apk-download';
import { pocketOptionCountries } from './posts/pocket-option-countries';
import { pocketOptionFees } from './posts/pocket-option-fees';

export const blogPosts: BlogPost[] = [
  isPocketOptionLegit,
  pocketOptionMinimumDeposit,
  pocketOptionApkDownload,
  pocketOptionCountries,
  pocketOptionFees,
  pocketOptionReview,
  pocketOptionPromoCode,
  pocketOptionLoginRegistration,
  pocketOptionAccountVerification,
  pocketOptionSocialTrading,
  pocketOptionTournaments,
  pocketOptionVsQuotex,
  pocketOptionVsIqOption,
  pocketOptionPayoutAndAssets,
  pocketOptionSignals,
  pocketOptionOtcTrading,
  pocketOptionStrategies,
  pocketOptionMobileApp,
  pocketOptionRiskManagement,
  pocketOptionIndicators,
  pocketOptionDemoAccount,
  pocketOptionDeposit,
  pocketOptionWithdrawal,
  howToTradeOnPocketOption,
].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

const dictionaries: Record<Locale, BlogDictionary> = {
  en: {
    home: 'Home',
    breadcrumb: 'Blog',
    eyebrow: 'Pocket Option blog',
    title: 'Pocket Option tutorials,',
    titleAccent: 'guides and platform news',
    subtitle: 'Practical articles about trading on Pocket Option: how the terminal works, deposits and withdrawals, demo practice, indicators and risk management. Written for beginners, useful for everyone.',
    latest: 'Latest articles',
    readMore: 'Read article',
    minRead: 'min read',
    published: 'Published',
    updated: 'Updated',
    author: 'Author',
    onThisPage: 'On this page',
    keyTakeaways: 'Key takeaways',
    faqTitle: 'Frequently asked questions',
    faqEyebrow: 'FAQ',
    related: 'Keep reading',
    ctaEyebrow: 'Start now',
    ctaTitle: 'Try it on the Pocket Option demo account',
    ctaText: '$50,000 virtual balance, the same terminal and assets as the real account. No deposit required.',
    ctaButton: 'Open free demo',
    ctaSecondary: 'Quick start guide',
    stickyText: '$5 minimum deposit · free $50,000 demo',
    stickyButton: 'Sign up',
    stickyClose: 'Dismiss',
    categories: { tutorial: 'Tutorial', payments: 'Deposits & withdrawals', platform: 'Platform', strategy: 'Strategy' },
    disclaimer: 'This is an independent Pocket Option affiliate website. Articles are for information only and are not investment advice. Trading involves risk.',
    affiliateNotice: 'Affiliate disclosure: this is an independent site. If you sign up via our links we may earn a commission from Pocket Option at no extra cost to you.',
  },
  pt: {
    home: 'Início',
    breadcrumb: 'Blog',
    eyebrow: 'Blog Pocket Option',
    title: 'Tutoriais, guias e novidades',
    titleAccent: 'da plataforma Pocket Option',
    subtitle: 'Artigos práticos sobre trading na Pocket Option: como funciona o terminal, depósitos e saques, prática na demo, indicadores e gestão de risco. Escritos para iniciantes, úteis para todos.',
    latest: 'Artigos recentes',
    readMore: 'Ler artigo',
    minRead: 'min de leitura',
    published: 'Publicado',
    updated: 'Atualizado',
    author: 'Autor',
    onThisPage: 'Nesta página',
    keyTakeaways: 'Pontos principais',
    faqTitle: 'Perguntas frequentes',
    faqEyebrow: 'FAQ',
    related: 'Continue lendo',
    ctaEyebrow: 'Comece agora',
    ctaTitle: 'Teste na conta demo da Pocket Option',
    ctaText: 'Saldo virtual de $50.000, o mesmo terminal e os mesmos ativos da conta real. Sem depósito.',
    ctaButton: 'Abrir demo grátis',
    ctaSecondary: 'Guia de início rápido',
    stickyText: 'Depósito mínimo de $5 · demo grátis de $50.000',
    stickyButton: 'Cadastrar',
    stickyClose: 'Fechar',
    categories: { tutorial: 'Tutorial', payments: 'Depósitos e saques', platform: 'Plataforma', strategy: 'Estratégia' },
    disclaimer: 'Este é um site afiliado independente da Pocket Option. Os artigos são apenas informativos e não constituem recomendação de investimento. Operar envolve risco.',
    affiliateNotice: 'Divulgação de afiliado: este é um site independente. Se você se cadastrar pelos nossos links, podemos receber uma comissão da Pocket Option sem custo adicional para você.',
  },
  es: {
    home: 'Inicio',
    breadcrumb: 'Blog',
    eyebrow: 'Blog Pocket Option',
    title: 'Tutoriales, guías y novedades',
    titleAccent: 'de la plataforma Pocket Option',
    subtitle: 'Artículos prácticos sobre trading en Pocket Option: cómo funciona el terminal, depósitos y retiros, práctica en demo, indicadores y gestión del riesgo. Escritos para principiantes, útiles para todos.',
    latest: 'Últimos artículos',
    readMore: 'Leer artículo',
    minRead: 'min de lectura',
    published: 'Publicado',
    updated: 'Actualizado',
    author: 'Autor',
    onThisPage: 'En esta página',
    keyTakeaways: 'Puntos clave',
    faqTitle: 'Preguntas frecuentes',
    faqEyebrow: 'FAQ',
    related: 'Sigue leyendo',
    ctaEyebrow: 'Empieza ahora',
    ctaTitle: 'Pruébalo en la cuenta demo de Pocket Option',
    ctaText: 'Saldo virtual de $50.000, el mismo terminal y los mismos activos que la cuenta real. Sin depósito.',
    ctaButton: 'Abrir demo gratis',
    ctaSecondary: 'Guía de inicio rápido',
    stickyText: 'Depósito mínimo de $5 · demo gratis de $50,000',
    stickyButton: 'Registrarse',
    stickyClose: 'Cerrar',
    categories: { tutorial: 'Tutorial', payments: 'Depósitos y retiros', platform: 'Plataforma', strategy: 'Estrategia' },
    disclaimer: 'Este es un sitio afiliado independiente de Pocket Option. Los artículos son solo informativos y no constituyen asesoramiento de inversión. Operar implica riesgo.',
    affiliateNotice: 'Divulgación de afiliado: este es un sitio independiente. Si te registras a través de nuestros enlaces, podemos recibir una comisión de Pocket Option sin coste adicional para ti.',
  },
  ru: {
    home: 'Главная',
    breadcrumb: 'Блог',
    eyebrow: 'Блог Pocket Option',
    title: 'Обучение, руководства',
    titleAccent: 'и новости платформы Pocket Option',
    subtitle: 'Практические статьи о торговле на Pocket Option: как устроен терминал, депозиты и выводы, практика на демо, индикаторы и управление риском. Написано для новичков, полезно всем.',
    latest: 'Последние статьи',
    readMore: 'Читать статью',
    minRead: 'мин чтения',
    published: 'Опубликовано',
    updated: 'Обновлено',
    author: 'Автор',
    onThisPage: 'На этой странице',
    keyTakeaways: 'Главное',
    faqTitle: 'Частые вопросы',
    faqEyebrow: 'FAQ',
    related: 'Читайте также',
    ctaEyebrow: 'Начните сейчас',
    ctaTitle: 'Попробуйте на демо-счёте Pocket Option',
    ctaText: 'Виртуальный баланс $50 000, тот же терминал и активы, что и на реальном счёте. Без депозита.',
    ctaButton: 'Открыть бесплатное демо',
    ctaSecondary: 'Быстрый старт',
    stickyText: 'Мин. депозит $5 · бесплатное демо $50 000',
    stickyButton: 'Регистрация',
    stickyClose: 'Закрыть',
    categories: { tutorial: 'Обучение', payments: 'Депозиты и выводы', platform: 'Платформа', strategy: 'Стратегии' },
    disclaimer: 'Это независимый партнёрский сайт Pocket Option. Статьи носят информационный характер и не являются инвестиционной рекомендацией. Торговля связана с риском.',
    affiliateNotice: 'Раскрытие партнёрства: это независимый сайт. Если вы зарегистрируетесь по нашим ссылкам, мы можем получить комиссию от Pocket Option без дополнительных расходов для вас.',
  },
  id: {
    home: 'Beranda',
    breadcrumb: 'Blog',
    eyebrow: 'Blog Pocket Option',
    title: 'Tutorial, panduan, dan berita',
    titleAccent: 'platform Pocket Option',
    subtitle: 'Artikel praktis tentang trading di Pocket Option: cara kerja terminal, deposit dan penarikan, latihan demo, indikator, dan manajemen risiko. Ditulis untuk pemula, berguna bagi semua.',
    latest: 'Artikel terbaru',
    readMore: 'Baca artikel',
    minRead: 'menit baca',
    published: 'Diterbitkan',
    updated: 'Diperbarui',
    author: 'Penulis',
    onThisPage: 'Di halaman ini',
    keyTakeaways: 'Poin penting',
    faqTitle: 'Pertanyaan umum',
    faqEyebrow: 'FAQ',
    related: 'Baca juga',
    ctaEyebrow: 'Mulai sekarang',
    ctaTitle: 'Coba di akun demo Pocket Option',
    ctaText: 'Saldo virtual $50.000, terminal dan aset yang sama seperti akun riil. Tanpa deposit.',
    ctaButton: 'Buka demo gratis',
    ctaSecondary: 'Panduan mulai cepat',
    stickyText: 'Deposit minimum $5 · demo gratis $50.000',
    stickyButton: 'Daftar',
    stickyClose: 'Tutup',
    categories: { tutorial: 'Tutorial', payments: 'Deposit & penarikan', platform: 'Platform', strategy: 'Strategi' },
    disclaimer: 'Ini adalah situs afiliasi Pocket Option independen. Artikel bersifat informatif dan bukan saran investasi. Trading melibatkan risiko.',
    affiliateNotice: 'Pengungkapan afiliasi: ini situs independen. Jika Anda mendaftar melalui tautan kami, kami dapat menerima komisi dari Pocket Option tanpa biaya tambahan bagi Anda.',
  },
};

export function getBlogDictionary(lang: string): BlogDictionary {
  return dictionaries[lang as Locale] ?? dictionaries.en;
}

export const blogIndexSeo: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Pocket Option Blog – Tutorials, Guides and Platform News',
    description: 'Pocket Option blog: step-by-step tutorials for beginners — trading terminal, deposits and withdrawals, demo account, indicators, risk management, mobile app.',
  },
  pt: {
    title: 'Blog Pocket Option – Tutoriais, Guias e Novidades',
    description: 'Blog da Pocket Option: tutoriais passo a passo para iniciantes — terminal, depósitos e saques, conta demo, indicadores, gestão de risco e app mobile.',
  },
  es: {
    title: 'Blog Pocket Option – Tutoriales, Guías y Novedades',
    description: 'Blog de Pocket Option: tutoriales paso a paso para principiantes — terminal, depósitos y retiros, cuenta demo, indicadores, gestión del riesgo y app móvil.',
  },
  ru: {
    title: 'Блог Pocket Option – обучение, руководства и новости',
    description: 'Блог Pocket Option: пошаговые руководства для новичков — терминал, пополнение и вывод, демо-счёт, индикаторы, риск-менеджмент и мобильное приложение.',
  },
  id: {
    title: 'Blog Pocket Option – Tutorial, Panduan, dan Berita',
    description: 'Blog Pocket Option: tutorial langkah demi langkah untuk pemula — terminal trading, deposit dan penarikan, akun demo, indikator, risiko, aplikasi mobile.',
  },
};

export type { BlogPost, BlogPostContent, BlogBlock, BlogDictionary, BlogCategory } from './types';
