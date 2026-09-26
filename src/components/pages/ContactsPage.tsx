import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BreadcrumbJsonLd } from '@/components/seo/BreadcrumbJsonLd';
import { IconBadge } from '@/components/ui/IconBadge';
import { SectionHead } from '@/components/ui/SectionHead';
import {
  ChevronRight, Headset, Users, ArrowUpRight, Clock, Globe, BookOpen,
  Facebook, Instagram, Send, Twitter, Youtube, MessageCircle, Music2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { REGISTER_URL, AFFILIATE_REL } from '@/config/links';
import { siteConfig } from '@/config/site';
import { getLocalePath, isLocale } from '@/lib/i18n/config';

type Lang = 'en' | 'pt' | 'es' | 'ru' | 'id';

type ContactsDictionary = {
  home: string; breadcrumb: string;
  eyebrow: string; title: string; titleAccent: string; subtitle: string; cta: string;
  facts: { value: string; label: string }[];
  channelsEyebrow: string; channelsTitle: string; channelsSubtitle: string;
  supportTitle: string; supportDesc: string; supportLink: string;
  communityTitle: string; communityDesc: string; communityLink: string;
  guidesTitle: string; guidesDesc: string; guidesLink: string;
  socialEyebrow: string; socialTitle: string; socialSubtitle: string;
  note: string;
};

const T: Record<Lang, ContactsDictionary> = {
  en: {
    home: 'Home', breadcrumb: 'Contacts',
    eyebrow: 'Contacts', title: 'Pocket Option support:', titleAccent: 'how to get help 24/7',
    subtitle: 'Questions about a Pocket Option deposit, withdrawal, verification or the trading terminal? Support works around the clock inside the platform, and the trader community answers in real time.',
    cta: 'Open Pocket Option',
    facts: [
      { value: '24/7', label: 'Support availability' },
      { value: '10+', label: 'Support languages' },
      { value: '~24h', label: 'Typical withdrawal review' },
    ],
    channelsEyebrow: 'Channels', channelsTitle: 'Where to contact Pocket Option', channelsSubtitle: 'All official support channels live inside your pocketoption account — log in first, then choose the channel that fits your question.',
    supportTitle: 'Support desk', supportDesc: 'Account, deposit, withdrawal and KYC questions are handled by Pocket Option support specialists via the built-in ticket system and live chat.', supportLink: 'Go to support desk',
    communityTitle: 'Community chat', communityDesc: 'Ask other Pocket Option traders about strategies, indicators, tournaments and platform features in the general chat.', communityLink: 'Open general chat',
    guidesTitle: 'Guides on this site', guidesDesc: 'Most beginner questions are already answered in our Quick Start guide, demo account page and asset schedule.', guidesLink: 'Read Quick Start',
    socialEyebrow: 'Social', socialTitle: 'Pocket Option on social media', socialSubtitle: 'Official channels for platform news, tournament announcements and promo codes.',
    note: 'This is an independent Pocket Option affiliate website. For account-specific requests, always use the support desk inside your pocketoption account.',
  },
  pt: {
    home: 'Início', breadcrumb: 'Contatos',
    eyebrow: 'Contatos', title: 'Suporte Pocket Option:', titleAccent: 'como obter ajuda 24/7',
    subtitle: 'Dúvidas sobre depósito, saque, verificação ou o terminal de trading da Pocket Option? O suporte funciona 24 horas dentro da plataforma e a comunidade de traders responde em tempo real.',
    cta: 'Abrir a Pocket Option',
    facts: [
      { value: '24/7', label: 'Disponibilidade do suporte' },
      { value: '10+', label: 'Idiomas de atendimento' },
      { value: '~24h', label: 'Análise típica de saque' },
    ],
    channelsEyebrow: 'Canais', channelsTitle: 'Onde falar com a Pocket Option', channelsSubtitle: 'Todos os canais oficiais de suporte ficam dentro da sua conta pocketoption — faça login e escolha o canal adequado para a sua dúvida.',
    supportTitle: 'Central de suporte', supportDesc: 'Questões de conta, depósito, saque e KYC são tratadas pelos especialistas de suporte da Pocket Option via sistema de tickets e chat ao vivo.', supportLink: 'Ir para a central de suporte',
    communityTitle: 'Chat da comunidade', communityDesc: 'Pergunte a outros traders da Pocket Option sobre estratégias, indicadores, torneios e recursos da plataforma no chat geral.', communityLink: 'Abrir chat geral',
    guidesTitle: 'Guias neste site', guidesDesc: 'A maioria das dúvidas de iniciantes já está respondida no nosso guia Quick Start, na página da conta demo e na tabela de ativos.', guidesLink: 'Ler o Quick Start',
    socialEyebrow: 'Redes sociais', socialTitle: 'Pocket Option nas redes sociais', socialSubtitle: 'Canais oficiais com novidades da plataforma, anúncios de torneios e códigos promocionais.',
    note: 'Este é um site afiliado independente da Pocket Option. Para solicitações sobre a sua conta, use sempre a central de suporte dentro da sua conta pocketoption.',
  },
  es: {
    home: 'Inicio', breadcrumb: 'Contactos',
    eyebrow: 'Contactos', title: 'Soporte de Pocket Option:', titleAccent: 'cómo obtener ayuda 24/7',
    subtitle: '¿Preguntas sobre un depósito, retiro, verificación o el terminal de trading de Pocket Option? El soporte funciona las 24 horas dentro de la plataforma y la comunidad de traders responde en tiempo real.',
    cta: 'Abrir Pocket Option',
    facts: [
      { value: '24/7', label: 'Disponibilidad del soporte' },
      { value: '10+', label: 'Idiomas de atención' },
      { value: '~24h', label: 'Revisión típica de retiros' },
    ],
    channelsEyebrow: 'Canales', channelsTitle: 'Dónde contactar a Pocket Option', channelsSubtitle: 'Todos los canales oficiales de soporte están dentro de tu cuenta pocketoption: inicia sesión y elige el canal adecuado para tu consulta.',
    supportTitle: 'Mesa de soporte', supportDesc: 'Las consultas de cuenta, depósito, retiro y KYC las atienden los especialistas de soporte de Pocket Option mediante el sistema de tickets y el chat en vivo.', supportLink: 'Ir a la mesa de soporte',
    communityTitle: 'Chat de la comunidad', communityDesc: 'Pregunta a otros traders de Pocket Option sobre estrategias, indicadores, torneos y funciones de la plataforma en el chat general.', communityLink: 'Abrir chat general',
    guidesTitle: 'Guías en este sitio', guidesDesc: 'La mayoría de las dudas de principiantes ya están respondidas en nuestra guía Quick Start, la página de la cuenta demo y el horario de activos.', guidesLink: 'Leer Quick Start',
    socialEyebrow: 'Redes', socialTitle: 'Pocket Option en redes sociales', socialSubtitle: 'Canales oficiales con novedades de la plataforma, anuncios de torneos y códigos promocionales.',
    note: 'Este es un sitio afiliado independiente de Pocket Option. Para solicitudes sobre tu cuenta, usa siempre la mesa de soporte dentro de tu cuenta pocketoption.',
  },
  ru: {
    home: 'Главная', breadcrumb: 'Контакты',
    eyebrow: 'Контакты', title: 'Поддержка Pocket Option:', titleAccent: 'как получить помощь 24/7',
    subtitle: 'Вопросы по депозиту, выводу, верификации или торговому терминалу Pocket Option? Поддержка работает круглосуточно внутри платформы, а сообщество трейдеров отвечает в реальном времени.',
    cta: 'Открыть Pocket Option',
    facts: [
      { value: '24/7', label: 'Доступность поддержки' },
      { value: '10+', label: 'Языков поддержки' },
      { value: '~24ч', label: 'Типичная проверка вывода' },
    ],
    channelsEyebrow: 'Каналы', channelsTitle: 'Как связаться с Pocket Option', channelsSubtitle: 'Все официальные каналы поддержки находятся внутри аккаунта pocketoption — войдите и выберите подходящий канал.',
    supportTitle: 'Служба поддержки', supportDesc: 'Вопросы по аккаунту, депозиту, выводу и KYC решают специалисты поддержки Pocket Option через систему тикетов и онлайн-чат.', supportLink: 'Перейти в поддержку',
    communityTitle: 'Чат сообщества', communityDesc: 'Спросите других трейдеров Pocket Option о стратегиях, индикаторах, турнирах и функциях платформы в общем чате.', communityLink: 'Открыть общий чат',
    guidesTitle: 'Гайды на этом сайте', guidesDesc: 'Большинство вопросов новичков уже разобраны в нашем Quick Start, на странице демо-счёта и в расписании активов.', guidesLink: 'Читать Quick Start',
    socialEyebrow: 'Соцсети', socialTitle: 'Pocket Option в социальных сетях', socialSubtitle: 'Официальные каналы с новостями платформы, анонсами турниров и промокодами.',
    note: 'Это независимый партнёрский сайт Pocket Option. По вопросам вашего аккаунта всегда обращайтесь в службу поддержки внутри аккаунта pocketoption.',
  },
  id: {
    home: 'Beranda', breadcrumb: 'Kontak',
    eyebrow: 'Kontak', title: 'Dukungan Pocket Option:', titleAccent: 'cara mendapatkan bantuan 24/7',
    subtitle: 'Ada pertanyaan soal deposit, penarikan, verifikasi, atau terminal trading Pocket Option? Dukungan tersedia 24 jam di dalam platform, dan komunitas trader menjawab secara real time.',
    cta: 'Buka Pocket Option',
    facts: [
      { value: '24/7', label: 'Ketersediaan dukungan' },
      { value: '10+', label: 'Bahasa dukungan' },
      { value: '~24j', label: 'Peninjauan penarikan umum' },
    ],
    channelsEyebrow: 'Saluran', channelsTitle: 'Cara menghubungi Pocket Option', channelsSubtitle: 'Semua saluran dukungan resmi ada di dalam akun pocketoption Anda — login dulu, lalu pilih saluran yang sesuai dengan pertanyaan Anda.',
    supportTitle: 'Meja dukungan', supportDesc: 'Pertanyaan akun, deposit, penarikan, dan KYC ditangani spesialis dukungan Pocket Option melalui sistem tiket dan live chat.', supportLink: 'Ke meja dukungan',
    communityTitle: 'Chat komunitas', communityDesc: 'Tanyakan kepada trader Pocket Option lain tentang strategi, indikator, turnamen, dan fitur platform di chat umum.', communityLink: 'Buka chat umum',
    guidesTitle: 'Panduan di situs ini', guidesDesc: 'Sebagian besar pertanyaan pemula sudah dijawab di panduan Quick Start, halaman akun demo, dan jadwal aset kami.', guidesLink: 'Baca Quick Start',
    socialEyebrow: 'Sosial', socialTitle: 'Pocket Option di media sosial', socialSubtitle: 'Saluran resmi untuk berita platform, pengumuman turnamen, dan kode promo.',
    note: 'Ini adalah situs afiliasi independen Pocket Option. Untuk permintaan terkait akun, selalu gunakan meja dukungan di dalam akun pocketoption Anda.',
  },
};

const FACT_ICONS: LucideIcon[] = [Clock, Globe, ArrowUpRight];

const SOCIAL_ICONS: { match: string; icon: LucideIcon; label: string }[] = [
  { match: 'facebook', icon: Facebook, label: 'Facebook' },
  { match: 't.me', icon: Send, label: 'Telegram' },
  { match: 'instagram', icon: Instagram, label: 'Instagram' },
  { match: 'x.com', icon: Twitter, label: 'X' },
  { match: 'bit.ly', icon: Youtube, label: 'YouTube' },
  { match: 'discord', icon: MessageCircle, label: 'Discord' },
  { match: 'tiktok', icon: Music2, label: 'TikTok' },
];

const SUPPORT_URL = 'https://pocketoption.com/en/cabinet/support/';
const COMMUNITY_URL = 'https://pocketoption.com/en/cabinet/?openRoom=14906/';

export function ContactsPage({ lang = 'en' }: { lang?: string }) {
  const locale = isLocale(lang) ? lang : 'en';
  const t = T[locale];
  const lp = (path: string) => getLocalePath(locale, path);

  const channels: { icon: LucideIcon; title: string; desc: string; link: string; href: string; external: boolean }[] = [
    { icon: Headset, title: t.supportTitle, desc: t.supportDesc, link: t.supportLink, href: SUPPORT_URL, external: true },
    { icon: Users, title: t.communityTitle, desc: t.communityDesc, link: t.communityLink, href: COMMUNITY_URL, external: true },
    { icon: BookOpen, title: t.guidesTitle, desc: t.guidesDesc, link: t.guidesLink, href: lp('quick-start'), external: false },
  ];

  return (
    <>
      <BreadcrumbJsonLd lang={lang} slug="contacts" homeName={t.home} pageName={t.breadcrumb} />
      <Header lang={lang} />
      <main className="flex-1 flex flex-col">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080F20] pt-[120px] pb-16 lg:pt-[150px] lg:pb-24 text-white">
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#0099FA]/20 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[#0052cc]/25 blur-[140px]" />
        <div className="container-x relative">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[13px] text-white/50">
            <a href={lp('')} className="hover:text-white transition-colors">{t.home}</a>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/85">{t.breadcrumb}</span>
          </nav>
          <div className="max-w-[760px]">
            <span className="eyebrow eyebrow-dark mb-5">{t.eyebrow}</span>
            <h1 className="font-heading font-bold text-[34px] md:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.02em]">
              {t.title}{' '}
              <span className="bg-gradient-to-r from-[#0099FA] to-[#5cc8ff] bg-clip-text text-transparent">{t.titleAccent}</span>
            </h1>
            <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-white/65">{t.subtitle}</p>
            <div className="mt-8">
              <a href={REGISTER_URL} target="_blank" rel={AFFILIATE_REL} className="btn-brand h-12 px-7 text-[15px]">
                {t.cta}<ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-[820px]">
            {t.facts.map((f, i) => {
              const Icon = FACT_ICONS[i];
              return (
                <div key={f.label} className="glass-dark flex items-center gap-4 rounded-2xl px-5 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0099FA]/15"><Icon className="h-5 w-5 text-[#5cc8ff]" /></span>
                  <div>
                    <div className="font-heading text-[22px] font-bold leading-none">{f.value}</div>
                    <div className="mt-1 text-[13px] text-white/55">{f.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHead eyebrow={t.channelsEyebrow} title={t.channelsTitle} subtitle={t.channelsSubtitle} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {channels.map(c => (
              <a
                key={c.title}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'nofollow noopener noreferrer' : undefined}
                className="card-premium group flex flex-col p-8 no-underline"
              >
                <IconBadge icon={c.icon} size={60} />
                <h3 className="mt-6 font-heading text-[20px] font-bold text-[#080F20]">{c.title}</h3>
                <p className="mt-3 flex-1 text-[15.5px] leading-relaxed text-[#5A6A85]">{c.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#0099FA] group-hover:gap-2.5 transition-all">
                  {c.link}<ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-[760px] text-center text-[13.5px] leading-relaxed text-[#8A9BBE]">{t.note}</p>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="bg-[#F7F9FD] py-20 lg:py-24">
        <div className="container-x flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <span className="eyebrow mb-5">{t.socialEyebrow}</span>
            <h2 className="font-heading font-bold text-[28px] md:text-[36px] leading-[1.15] text-[#080F20] mb-4">{t.socialTitle}</h2>
            <p className="text-[16px] leading-relaxed text-[#5A6A85]">{t.socialSubtitle}</p>
          </div>
          <div className="lg:w-1/2 flex flex-wrap gap-3">
            {siteConfig.social.map(url => {
              const s = SOCIAL_ICONS.find(x => url.includes(x.match));
              if (!s) return null;
              const Icon = s.icon;
              return (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex items-center gap-2.5 rounded-full border border-[#E4EBF5] bg-white px-5 py-3 text-[14.5px] font-semibold text-[#0D1B2A] hover:border-[#0099FA] hover:text-[#0099FA] transition-colors">
                  <Icon className="h-4.5 w-4.5" />{s.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      </main>

      <Footer lang={lang} />
    </>
  );
}
