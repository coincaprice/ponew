'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

type Lang = "en" | "pt" | "es" | "ru" | "id";

const T: Record<Lang, {
  home: string; breadcrumb: string; pageTitle: string;
  supportTitle: string; supportDesc: string; supportLink: string;
  communityTitle: string; communityDesc: string; communityLink: string;
}> = {
  en: {
    home: "Home", breadcrumb: "Contacts", pageTitle: "Contacts",
    supportTitle: "Support Service",
    supportDesc: "Pocket Option support specialists are happy to answer any questions you may have via built-in:",
    supportLink: "Support Desk",
    communityTitle: "Community Help",
    communityDesc: "Find answers, ask questions, and connect with our community of traders from around the world:",
    communityLink: "General Chat",
  },
  pt: {
    home: "Início", breadcrumb: "Contatos", pageTitle: "Contatos",
    supportTitle: "Serviço de Suporte",
    supportDesc: "Os especialistas de suporte da Pocket Option estão felizes em responder qualquer dúvida que você possa ter através do:",
    supportLink: "Central de Suporte",
    communityTitle: "Ajuda da Comunidade",
    communityDesc: "Encontre respostas, faça perguntas e conecte-se com nossa comunidade de traders de todo o mundo:",
    communityLink: "Chat Geral",
  },
  es: {
    home: "Inicio", breadcrumb: "Contactos", pageTitle: "Contactos",
    supportTitle: "Servicio de Soporte",
    supportDesc: "Los especialistas de soporte de Pocket Option están encantados de responder cualquier pregunta que tengas a través del:",
    supportLink: "Escritorio de Soporte",
    communityTitle: "Ayuda de la Comunidad",
    communityDesc: "Encuentra respuestas, haz preguntas y conéctate con nuestra comunidad de traders de todo el mundo:",
    communityLink: "Chat General",
  },
  ru: {
    home: "Главная", breadcrumb: "Контакты", pageTitle: "Контакты",
    supportTitle: "Служба поддержки",
    supportDesc: "Специалисты поддержки Pocket Option рады ответить на любые ваши вопросы через встроенную:",
    supportLink: "Службу поддержки",
    communityTitle: "Помощь сообщества",
    communityDesc: "Находите ответы, задавайте вопросы и общайтесь с нашим сообществом трейдеров со всего мира:",
    communityLink: "Общий чат",
  },
  id: {
    home: "Beranda", breadcrumb: "Kontak", pageTitle: "Kontak",
    supportTitle: "Layanan Dukungan",
    supportDesc: "Spesialis dukungan Pocket Option dengan senang hati menjawab pertanyaan apa pun melalui:",
    supportLink: "Meja Dukungan",
    communityTitle: "Bantuan Komunitas",
    communityDesc: "Temukan jawaban, ajukan pertanyaan, dan terhubung dengan komunitas trader kami dari seluruh dunia:",
    communityLink: "Chat Umum",
  },
};

export function ContactsPage({ lang = "en" }: { lang?: string }) {
  const t = T[lang as Lang] ?? T.en;
  const homeHref = lang === "en" ? "/" : `/${lang}`;

  return (
    <>
      <style>{`
        .c-channels-section { padding: 60px 0 80px; }
        .c-container { max-width: 1200px; margin: 0 auto; padding: 0 30px; }
        .c-channels-row { display: flex; flex-wrap: wrap; }
        .c-channel-col { flex: 0 0 50%; max-width: 50%; padding-right: 16px; box-sizing: border-box; }
        @media (max-width: 639px) {
          .c-channels-section { padding: 40px 0 60px; }
          .c-container { padding: 0 20px; }
          .c-channels-row { gap: 32px; }
          .c-channel-col { flex: 0 0 100%; max-width: 100%; padding-right: 0; }
        }
      `}</style>

      <BreadcrumbJsonLd lang={lang} slug="contacts" homeName={t.home} pageName={t.breadcrumb} />
      <Header lang={lang} />
      <main style={{ background: "#fff", fontFamily: "'Nunito Sans', sans-serif" }}>

        {/* ─── HERO ─── */}
        <section style={{ background: "linear-gradient(135deg, #02274b 0%, #0f487c 100%)", paddingTop: 120, paddingBottom: 64, position: "relative", overflow: "hidden", color: "#fff" }}>
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "60%", backgroundImage: "url(https://pocketoption.com/themes/2017-09/img/pages/contacts/contacts-bg.png)", backgroundSize: "auto 100%", backgroundPosition: "right center", backgroundRepeat: "no-repeat", zIndex: 1 }} />
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "55%", background: "linear-gradient(to right, #02274b 40%, transparent 100%)", zIndex: 2 }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 30px", position: "relative", zIndex: 3 }}>
            <nav style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <a href={homeHref} style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, textDecoration: "none" }}>{t.home}</a>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>/</span>
              <span style={{ color: "#fff", fontSize: 14 }}>{t.breadcrumb}</span>
            </nav>
            <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 52, color: "#fff", margin: 0, lineHeight: 1.1 }}>
              {t.pageTitle}
            </h1>
          </div>
        </section>

        {/* ─── CONTACT CHANNELS ─── */}
        <section className="c-channels-section" style={{ background: "#eef2f9" }}>
          <div className="c-container">
            <div className="c-channels-row">

              <div className="c-channel-col">
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "1.25rem", lineHeight: "1.5rem", marginBottom: "1.5rem", textTransform: "uppercase", color: "#3a4a68", display: "flex", alignItems: "center", gap: 8 }}>
                  <img src="https://pocketoption.com/themes/2017-09/img/pages/contacts/ic-support.svg" alt="" loading="lazy" width={22} height={22} style={{ position: "relative", top: 4 }} />
                  {t.supportTitle}
                </p>
                <p style={{ color: "#3a4a68", lineHeight: "1.4rem", maxWidth: "30.5rem", fontSize: 16, marginBottom: 0 }}>{t.supportDesc}</p>
                <p>
                  <a href="https://pocketoption.com/en/cabinet/support/" target="_blank" rel="noopener noreferrer" style={{ color: "#3a4a68", display: "inline-block", marginTop: "1.5rem", textDecoration: "underline", fontSize: 16 }}>
                    {t.supportLink}
                  </a>
                </p>
              </div>

              <div className="c-channel-col">
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "1.25rem", lineHeight: "1.5rem", marginBottom: "1.5rem", textTransform: "uppercase", color: "#3a4a68", display: "flex", alignItems: "center", gap: 8 }}>
                  <img src="https://pocketoption.com/themes/2017-09/img/pages/contacts/ic-help.svg" alt="" loading="lazy" width={22} height={22} style={{ position: "relative", top: 4 }} />
                  {t.communityTitle}
                </p>
                <p style={{ color: "#3a4a68", lineHeight: "1.4rem", maxWidth: "30.5rem", fontSize: 16, marginBottom: 0 }}>{t.communityDesc}</p>
                <p>
                  <a href="https://pocketoption.com/en/cabinet/?openRoom=14906/" target="_blank" rel="noopener noreferrer" style={{ color: "#3a4a68", display: "inline-block", marginTop: "1.5rem", textDecoration: "underline", fontSize: 16 }}>
                    {t.communityLink}
                  </a>
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} />
    </>
  );
}
