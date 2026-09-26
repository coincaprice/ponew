'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { REGISTER_URL, LOGIN_URL } from "@/lib/links";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

type Lang = "en" | "pt" | "es" | "ru" | "id";

const T: Record<Lang, {
  home: string; breadcrumb: string;
  heroTitle1: string; heroTitle2: string;
  regBtn: string; logIn: string; or: string; startClick: string;
  sectionTitle: string;
  steps: { title: string; desc: string }[];
  learnMore: string;
  socialTitle: string; socialDesc1: string; socialDesc2: string; startCopying: string;
  chatTitle: string; chatDesc: string; chatDesc2: string; openChat: string;
  ctaTitle: string; ctaDesc: string; ctaBtn: string;
}> = {
  en: {
    home: "Home", breadcrumb: "Quick start",
    heroTitle1: "How to trade", heroTitle2: "on financial markets",
    regBtn: "Registration", logIn: "Log In", or: "or", startClick: "Start in one click",
    sectionTitle: "Get started in a few easy steps",
    steps: [
      { title: "Registration", desc: "Create a free trading account by using your email address or simply authorize via your Google account." },
      { title: "Verification", desc: "Make your account personalized. Enter your personal information in the profile and upload both ID document and address documents." },
      { title: "Deposit", desc: "Add funds to your trading account balance by using the most comfortable deposit method. Processing time depends on the chosen option." },
      { title: "Trading", desc: "Trading on Pocket Option is easy as 123. Choose a trading asset, set up the preferred chart layout and enable indicators for better market analysis. Set the trade amount, purchase time and place either a price decrease or increase order." },
      { title: "Profit", desc: "Each correct forecast results in a profitable trade order. The order amount plus the generated profit are automatically added to your account balance. Manage your income properly, invest further or withdraw profit if necessary." },
      { title: "Withdrawal", desc: "You can withdraw your trading account balance at any time without any restrictions on the amount. Place a withdrawal request via one of the methods previously used for depositing and wait for it to be processed and sent." },
    ],
    learnMore: "Learn more",
    socialTitle: "Social trading", socialDesc1: "Social Trading is one of the many unique features Pocket Option has to offer. It allows you to monitor progress, view ratings, as well as set up automatic trading orders copy of the most successful traders.", socialDesc2: "Start your passive income with social trading and copy PRO traders.", startCopying: "Start copying",
    chatTitle: "Chat", chatDesc: "Chat is another exclusive feature offered by Pocket Option. Contact the support service and receive a reply in a timely manner, communicate with other traders, create your own chat groups. Get instant analytics information, stay abreast of the latest news and promotions.", chatDesc2: "Truly social trading experience at your fingertips.", openChat: "Open chat",
    ctaTitle: "Ready to start trading?", ctaDesc: "Join millions of traders on Pocket Option. Open a free account and start in minutes.", ctaBtn: "Create Free Account",
  },
  pt: {
    home: "Início", breadcrumb: "Início rápido",
    heroTitle1: "Como negociar", heroTitle2: "nos mercados financeiros",
    regBtn: "Cadastrar", logIn: "Entrar", or: "ou", startClick: "Começar em um clique",
    sectionTitle: "Comece em poucos passos simples",
    steps: [
      { title: "Cadastro", desc: "Crie uma conta de trading gratuita usando seu endereço de e-mail ou simplesmente autorize via sua conta Google." },
      { title: "Verificação", desc: "Personalize sua conta. Insira suas informações pessoais no perfil e envie o documento de identidade e comprovante de endereço." },
      { title: "Depósito", desc: "Adicione fundos ao saldo da sua conta de trading usando o método de depósito mais conveniente. O tempo de processamento depende da opção escolhida." },
      { title: "Trading", desc: "Negociar na Pocket Option é fácil como 1-2-3. Escolha um ativo, configure o layout do gráfico e ative indicadores para melhor análise de mercado. Defina o valor, o prazo e faça um pedido de alta ou baixa de preço." },
      { title: "Lucro", desc: "Cada previsão correta resulta em uma ordem lucrativa. O valor da ordem mais o lucro gerado são automaticamente adicionados ao saldo da sua conta. Gerencie sua renda, invista mais ou retire o lucro se necessário." },
      { title: "Saque", desc: "Você pode sacar o saldo da sua conta de trading a qualquer momento, sem restrições de valor. Faça uma solicitação de saque pelo método usado anteriormente para depositar e aguarde o processamento." },
    ],
    learnMore: "Saiba mais",
    socialTitle: "Trading social", socialDesc1: "O Trading Social é uma das muitas funcionalidades exclusivas que a Pocket Option oferece. Ele permite monitorar o progresso, ver classificações e configurar cópias automáticas das ordens dos traders mais bem-sucedidos.", socialDesc2: "Comece sua renda passiva com trading social e copie traders PRO.", startCopying: "Começar a copiar",
    chatTitle: "Chat", chatDesc: "O Chat é outra funcionalidade exclusiva da Pocket Option. Entre em contato com o suporte, comunique-se com outros traders, crie seus próprios grupos. Receba análises instantâneas, fique por dentro das últimas notícias e promoções.", chatDesc2: "Uma experiência de trading verdadeiramente social na ponta dos seus dedos.", openChat: "Abrir chat",
    ctaTitle: "Pronto para começar a negociar?", ctaDesc: "Junte-se a milhões de traders na Pocket Option. Abra uma conta gratuita e comece em minutos.", ctaBtn: "Criar Conta Gratuita",
  },
  es: {
    home: "Inicio", breadcrumb: "Inicio rápido",
    heroTitle1: "Cómo operar", heroTitle2: "en los mercados financieros",
    regBtn: "Registrarse", logIn: "Iniciar sesión", or: "o", startClick: "Comenzar en un clic",
    sectionTitle: "Comienza en unos pocos pasos sencillos",
    steps: [
      { title: "Registro", desc: "Crea una cuenta de trading gratuita usando tu dirección de correo electrónico o autoriza simplemente a través de tu cuenta de Google." },
      { title: "Verificación", desc: "Personaliza tu cuenta. Ingresa tu información personal en el perfil y sube tu documento de identidad y comprobante de domicilio." },
      { title: "Depósito", desc: "Agrega fondos a tu saldo de cuenta de trading usando el método de depósito más cómodo. El tiempo de procesamiento depende de la opción elegida." },
      { title: "Trading", desc: "Operar en Pocket Option es fácil como 1-2-3. Elige un activo, configura el diseño del gráfico y activa indicadores para un mejor análisis del mercado. Establece el monto, el tiempo de compra y coloca una orden de aumento o disminución de precio." },
      { title: "Ganancia", desc: "Cada pronóstico correcto resulta en una orden rentable. El monto de la orden más la ganancia generada se agregan automáticamente a tu saldo. Administra tus ingresos, invierte más o retira ganancias si es necesario." },
      { title: "Retiro", desc: "Puedes retirar el saldo de tu cuenta de trading en cualquier momento sin restricciones de monto. Realiza una solicitud de retiro mediante uno de los métodos usados anteriormente para depositar." },
    ],
    learnMore: "Saber más",
    socialTitle: "Trading social", socialDesc1: "El Trading Social es una de las muchas características únicas que Pocket Option tiene para ofrecer. Te permite monitorear el progreso, ver clasificaciones y configurar copias automáticas de las órdenes de los traders más exitosos.", socialDesc2: "Comienza tu ingreso pasivo con trading social y copia traders PRO.", startCopying: "Empezar a copiar",
    chatTitle: "Chat", chatDesc: "El Chat es otra característica exclusiva de Pocket Option. Contacta al servicio de soporte, comunícate con otros traders y crea tus propios grupos. Obtén información analítica instantánea y mantente al día con las últimas noticias y promociones.", chatDesc2: "Una experiencia de trading verdaderamente social al alcance de tus manos.", openChat: "Abrir chat",
    ctaTitle: "¿Listo para empezar a operar?", ctaDesc: "Únete a millones de traders en Pocket Option. Abre una cuenta gratuita y empieza en minutos.", ctaBtn: "Crear Cuenta Gratuita",
  },
  ru: {
    home: "Главная", breadcrumb: "Быстрый старт",
    heroTitle1: "Как торговать", heroTitle2: "на финансовых рынках",
    regBtn: "Регистрация", logIn: "Войти", or: "или", startClick: "Начать в один клик",
    sectionTitle: "Начните за несколько простых шагов",
    steps: [
      { title: "Регистрация", desc: "Создайте бесплатный торговый счёт, используя адрес электронной почты, или авторизуйтесь через аккаунт Google." },
      { title: "Верификация", desc: "Персонализируйте свой аккаунт. Введите личные данные в профиле и загрузите документ, удостоверяющий личность, и документ с адресом проживания." },
      { title: "Депозит", desc: "Пополните баланс торгового счёта наиболее удобным способом. Время обработки зависит от выбранного варианта." },
      { title: "Торговля", desc: "Торговля на Pocket Option проста как 1-2-3. Выберите торговый актив, настройте предпочтительный вид графика и включите индикаторы для лучшего анализа рынка. Установите сумму сделки, время покупки и сделайте ставку на рост или снижение цены." },
      { title: "Прибыль", desc: "Каждый верный прогноз приносит прибыльный торговый ордер. Сумма ордера плюс полученная прибыль автоматически добавляются на баланс вашего счёта. Грамотно управляйте доходом, инвестируйте дальше или выводите прибыль при необходимости." },
      { title: "Вывод средств", desc: "Вы можете вывести средства с торгового счёта в любое время без ограничений по сумме. Сделайте запрос на вывод одним из методов, ранее использованных для пополнения, и дождитесь обработки." },
    ],
    learnMore: "Узнать больше",
    socialTitle: "Социальный трейдинг", socialDesc1: "Социальный трейдинг — одна из многих уникальных функций Pocket Option. Он позволяет отслеживать прогресс, просматривать рейтинги и настраивать автоматическое копирование сделок наиболее успешных трейдеров.", socialDesc2: "Начните получать пассивный доход с социальным трейдингом и копируйте PRO-трейдеров.", startCopying: "Начать копировать",
    chatTitle: "Чат", chatDesc: "Чат — ещё одна эксклюзивная функция Pocket Option. Свяжитесь со службой поддержки, общайтесь с другими трейдерами, создавайте собственные чат-группы. Получайте мгновенную аналитику, будьте в курсе последних новостей и акций.", chatDesc2: "По-настоящему социальный торговый опыт у вас под рукой.", openChat: "Открыть чат",
    ctaTitle: "Готовы начать торговлю?", ctaDesc: "Присоединяйтесь к миллионам трейдеров на Pocket Option. Откройте бесплатный счёт и начните за несколько минут.", ctaBtn: "Создать бесплатный счёт",
  },
  id: {
    home: "Beranda", breadcrumb: "Mulai cepat",
    heroTitle1: "Cara trading", heroTitle2: "di pasar keuangan",
    regBtn: "Daftar", logIn: "Masuk", or: "atau", startClick: "Mulai dalam satu klik",
    sectionTitle: "Mulai dalam beberapa langkah mudah",
    steps: [
      { title: "Pendaftaran", desc: "Buat akun trading gratis menggunakan alamat email Anda atau cukup otorisasi melalui akun Google Anda." },
      { title: "Verifikasi", desc: "Personalisasikan akun Anda. Masukkan informasi pribadi di profil dan unggah dokumen identitas serta dokumen alamat." },
      { title: "Deposit", desc: "Tambahkan dana ke saldo akun trading Anda menggunakan metode deposit yang paling nyaman. Waktu pemrosesan tergantung pada opsi yang dipilih." },
      { title: "Trading", desc: "Trading di Pocket Option semudah 1-2-3. Pilih aset trading, atur tata letak grafik yang diinginkan, dan aktifkan indikator untuk analisis pasar yang lebih baik. Tetapkan jumlah trade, waktu pembelian, dan tempatkan order kenaikan atau penurunan harga." },
      { title: "Keuntungan", desc: "Setiap prediksi yang benar menghasilkan order trade yang menguntungkan. Jumlah order ditambah keuntungan yang dihasilkan secara otomatis ditambahkan ke saldo akun Anda. Kelola pendapatan Anda, investasikan lebih lanjut, atau tarik keuntungan jika diperlukan." },
      { title: "Penarikan", desc: "Anda dapat menarik saldo akun trading kapan saja tanpa batasan jumlah. Ajukan permintaan penarikan melalui salah satu metode yang sebelumnya digunakan untuk deposit dan tunggu hingga diproses." },
    ],
    learnMore: "Pelajari lebih lanjut",
    socialTitle: "Social trading", socialDesc1: "Social Trading adalah salah satu dari banyak fitur unik yang ditawarkan Pocket Option. Ini memungkinkan Anda memantau kemajuan, melihat peringkat, serta mengatur salin otomatis order trading dari trader paling sukses.", socialDesc2: "Mulai penghasilan pasif Anda dengan social trading dan salin trader PRO.", startCopying: "Mulai menyalin",
    chatTitle: "Chat", chatDesc: "Chat adalah fitur eksklusif lain dari Pocket Option. Hubungi layanan dukungan, berkomunikasi dengan trader lain, buat grup chat Anda sendiri. Dapatkan informasi analitik instan, selalu ikuti berita dan promosi terbaru.", chatDesc2: "Pengalaman trading yang benar-benar sosial di ujung jari Anda.", openChat: "Buka chat",
    ctaTitle: "Siap mulai trading?", ctaDesc: "Bergabunglah dengan jutaan trader di Pocket Option. Buka akun gratis dan mulai dalam hitungan menit.", ctaBtn: "Buat Akun Gratis",
  },
};

const BASE_IMG = "/images/quick-start";

function StepIllustration({ n }: { n: number }) {
  return (
    <div className="qs-illustration" style={{ position: "relative", width: "100%", aspectRatio: "1.3 / 1", flexShrink: 0, overflow: "hidden" }}>
      <img src={`${BASE_IMG}/0.webp`} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", opacity: 0.45, pointerEvents: "none" }} />
      <img src={`${BASE_IMG}/${n}_1.webp`} alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }} />
      <img src={`${BASE_IMG}/${n}_2.webp`} alt="" loading="lazy" style={{ position: "absolute", bottom: "2%", right: "2%", width: "48%", objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(0,80,200,0.18))" }} />
    </div>
  );
}

function IconSocialTrading() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="18" r="8" stroke="white" strokeWidth="2" opacity="0.9"/>
      <circle cx="10" cy="28" r="6" stroke="white" strokeWidth="2" opacity="0.7"/>
      <circle cx="42" cy="28" r="6" stroke="white" strokeWidth="2" opacity="0.7"/>
      <path d="M2 46c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M34 46c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M14 46c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect x="4" y="8" width="36" height="26" rx="6" stroke="#1565c0" strokeWidth="2.5"/>
      <circle cx="14" cy="21" r="3" fill="#1565c0"/>
      <circle cx="22" cy="21" r="3" fill="#1565c0"/>
      <circle cx="30" cy="21" r="3" fill="#1565c0"/>
      <path d="M4 34l8 8V34" fill="#1565c0" opacity="0.7"/>
      <rect x="20" y="28" width="28" height="20" rx="6" fill="#0099fa" opacity="0.15" stroke="#0099fa" strokeWidth="2"/>
      <line x1="27" y1="36" x2="41" y2="36" stroke="#0099fa" strokeWidth="2" strokeLinecap="round"/>
      <line x1="27" y1="42" x2="36" y2="42" stroke="#0099fa" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function QuickStartPage({ lang = "en" }: { lang?: string }) {
  const t = T[lang as Lang] ?? T.en;
  const homeHref = lang === "en" ? "/" : `/${lang}`;

  return (
    <>
      <style>{`
        .qs-hero-content { padding: 110px 60px 0; }
        .qs-steps-section { padding: 88px 0 96px; }
        .qs-section-container { max-width: 1200px; margin: 0 auto; padding: 0 60px; }
        .qs-steps-title { margin-bottom: 80px; }
        .qs-step-row { display: flex; align-items: center; gap: 72px; flex-direction: row; margin-bottom: 96px; }
        .qs-step-row:last-child { margin-bottom: 0; }
        .qs-step-row--reverse { flex-direction: row-reverse; }
        .qs-step-text { flex: 1; min-width: 0; }
        .qs-step-number { font-size: clamp(72px, 9vw, 110px); }
        .qs-illustration { max-width: 440px; }
        .qs-features-section { padding: 80px 0; }
        .qs-features-container { max-width: 1200px; margin: 0 auto; padding: 0 60px; display: flex; gap: 28px; flex-wrap: wrap; }
        .qs-feature-card { padding: 56px 52px; }
        .qs-cta-section { padding: 96px 60px; }
        @media (max-width: 639px) {
          .qs-hero-content { padding: 100px 20px 0; }
          .qs-steps-section { padding: 48px 0 64px; }
          .qs-section-container { padding: 0 20px; }
          .qs-steps-title { margin-bottom: 40px; }
          .qs-step-row { flex-direction: column !important; gap: 20px; margin-bottom: 48px; }
          .qs-step-number { font-size: 64px; }
          .qs-illustration { max-width: 280px; margin: 0 auto; }
          .qs-features-section { padding: 48px 0; }
          .qs-features-container { padding: 0 20px; }
          .qs-feature-card { padding: 40px 28px; }
          .qs-cta-section { padding: 64px 20px; }
        }
      `}</style>

      <BreadcrumbJsonLd lang={lang} slug="quick-start" homeName={t.home} pageName={t.breadcrumb} />
      <Header lang={lang} />
      <main style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

        {/* ── HERO ── */}
        <section style={{ position: "relative", minHeight: 440, background: "#071428", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 72 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/quick-start/quick-start-bg.webp')", backgroundSize: "cover", backgroundPosition: "center center", opacity: 1 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(5,18,48,0.88) 0%, rgba(5,18,48,0.70) 45%, rgba(5,18,48,0.25) 100%)" }} />

          <div className="qs-hero-content" style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", width: "100%" }}>
            <nav style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 36, letterSpacing: "0.02em" }}>
              <a href={homeHref} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{t.home}</a>
              <span style={{ margin: "0 10px" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.85)" }}>{t.breadcrumb}</span>
            </nav>

            <h1 style={{ fontSize: "clamp(26px, 3.2vw, 40px)", fontWeight: 600, color: "#fff", lineHeight: 1.15, marginBottom: 36, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>
              {t.heroTitle1}<br />{t.heroTitle2}
            </h1>

            <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" style={{ display: "inline-block", background: "#0099fa", color: "#fff", fontWeight: 600, fontSize: 13, padding: "14px 44px", borderRadius: 6, textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 22, fontFamily: "'Montserrat', sans-serif" }}>
              {t.regBtn}
            </a>

            <div style={{ fontSize: 17, color: "rgba(255,255,255,0.8)" }}>
              <a href={LOGIN_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>{t.logIn}</a>
              <span style={{ margin: "0 10px", color: "rgba(255,255,255,0.35)" }}>{t.or}</span>
              <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>{t.startClick}</a>
            </div>
          </div>
        </section>

        {/* ── STEPS ── */}
        <section className="qs-steps-section" style={{ background: "#f0f4f8" }}>
          <div className="qs-section-container">
            <h2 className="qs-steps-title" style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#0d1b2a", fontFamily: "'Montserrat', sans-serif" }}>
              {t.sectionTitle}
            </h2>

            {t.steps.map((step, idx) => (
              <div key={idx} className={`qs-step-row${idx % 2 === 1 ? " qs-step-row--reverse" : ""}`}>
                <div className="qs-step-text">
                  <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 20 }}>
                    <span className="qs-step-number" style={{ fontWeight: 900, color: "#0099fa", lineHeight: 0.85, fontFamily: "'Montserrat', sans-serif", flexShrink: 0 }}>
                      {idx + 1}
                    </span>
                    <h3 style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 700, color: "#0d1b2a", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Montserrat', sans-serif", margin: 0 }}>
                      {step.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: 16, color: "#4a5a70", lineHeight: 1.8, marginBottom: 28, maxWidth: 500 }}>
                    {step.desc}
                  </p>
                  <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "#0d1b2a", textDecoration: "none", fontSize: 17, fontWeight: 600, borderBottom: "1px solid rgba(13,27,42,0.35)", paddingBottom: 3 }}>
                    {t.learnMore}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
                <StepIllustration n={idx + 1} />
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE CARDS ── */}
        <section className="qs-features-section" style={{ background: "#e8edf5" }}>
          <div className="qs-features-container">

            <div className="qs-feature-card" style={{ flex: "1 1 300px", borderRadius: 16, background: "linear-gradient(135deg, #0a2550 0%, #0d3266 100%)", position: "relative", overflow: "hidden", minHeight: 400, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "60%", height: "100%", backgroundImage: "url('/images/header-bg.webp')", backgroundSize: "cover", backgroundPosition: "right center", opacity: 0.12, borderRadius: "0 16px 16px 0" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ marginBottom: 22 }}><IconSocialTrading /></div>
                <h3 style={{ fontSize: 30, fontWeight: 700, color: "#fff", marginBottom: 16, fontFamily: "'Montserrat', sans-serif" }}>{t.socialTitle}</h3>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: 12 }}>{t.socialDesc1}</p>
                <p style={{ fontSize: 17, color: "#fff", fontWeight: 700, lineHeight: 1.6, marginBottom: 32 }}>{t.socialDesc2}</p>
                <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" style={{ display: "inline-block", background: "#0099fa", color: "#fff", fontWeight: 600, fontSize: 13, padding: "14px 32px", borderRadius: 6, textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>
                  {t.startCopying}
                </a>
              </div>
            </div>

            <div className="qs-feature-card" style={{ flex: "1 1 300px", borderRadius: 16, background: "#fff", position: "relative", overflow: "hidden", minHeight: 400, display: "flex", flexDirection: "column", justifyContent: "flex-end", boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", backgroundImage: "url('/images/iphone.webp')", backgroundSize: "contain", backgroundPosition: "right bottom", backgroundRepeat: "no-repeat", opacity: 0.1 }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ marginBottom: 22 }}><IconChat /></div>
                <h3 style={{ fontSize: 30, fontWeight: 700, color: "#0d1b2a", marginBottom: 16, fontFamily: "'Montserrat', sans-serif" }}>{t.chatTitle}</h3>
                <p style={{ fontSize: 17, color: "#4a5a70", lineHeight: 1.75, marginBottom: 16 }}>{t.chatDesc}</p>
                <p style={{ fontSize: 17, color: "#0d1b2a", fontWeight: 700, lineHeight: 1.6, marginBottom: 32 }}>{t.chatDesc2}</p>
                <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" style={{ display: "inline-block", background: "#0099fa", color: "#fff", fontWeight: 600, fontSize: 13, padding: "14px 32px", borderRadius: 6, textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>
                  {t.openChat}
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="qs-cta-section" style={{ background: "linear-gradient(135deg, #0a2550 0%, #0052cc 100%)", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 800, color: "#fff", marginBottom: 18, fontFamily: "'Montserrat', sans-serif" }}>
            {t.ctaTitle}
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 500, margin: "0 auto 40px", lineHeight: 1.7 }}>
            {t.ctaDesc}
          </p>
          <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" style={{ display: "inline-block", background: "#fff", color: "#0052cc", fontWeight: 700, fontSize: 14, padding: "17px 52px", borderRadius: 8, textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>
            {t.ctaBtn}
          </a>
        </section>

      </main>
      <Footer lang={lang} />
    </>
  );
}
