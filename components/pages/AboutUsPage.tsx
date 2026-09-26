'use client';

import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { REGISTER_URL } from "@/lib/links";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

type Lang = "en" | "pt" | "es" | "ru" | "id";

const T: Record<Lang, {
  home: string; breadcrumb: string; heroTitle: string; heroPara1: string; heroPara2: string;
  whyTitle: string; whyIntro: string;
  stat1Label: string; stat2Label: string; stat3Label: string; stat4Label: string;
  card1: string; card2: string; card3: string;
  howTitle: string; q1: string; q2: string; q3: string; q4: string; authorTitle: string;
  docsTitle: string; docLinks: { label: string; href: string }[];
  coreTitle: string; values: { title: string; text: string }[];
  newsTitle: string; newsSub: string;
  joinTitle: string; joinText: string; joinBtn: string;
  privacyLink: string;
}> = {
  en: {
    home: "Home", breadcrumb: "About us",
    heroTitle: "About Pocket Option",
    heroPara1: "Pocket Option was founded in 2017 by a team of talented IT and FinTech specialists who wanted to prove that people don't need to compromise to earn on financial markets — that trading should be accessible, convenient and more fun",
    heroPara2: "Today, we continue to develop, improve and constantly innovate trading experience. We do believe that trading should be available to anyone in the world.",
    whyTitle: "Why choose us?",
    whyIntro: "We started as a small company with a handful of customers. We were new, our services were not as polished and popular as today. By the end of 2017 we had:",
    stat1Label: "active users", stat2Label: "trading turnover", stat3Label: "countries and regions", stat4Label: "average trader income per month",
    card1: "The number of active users who appreciate our service increases rapidly.",
    card2: "By the end of 2018 we hit our first million users mark.",
    card3: "In 2019 we already had more than 10 million registered users.",
    howTitle: "How we work with our clients?",
    q1: "Client satisfaction has been our top priority since the very beginning.",
    q2: "We aim not only to provide excellent customer support, but also on listening to clients' feedback carefully.",
    q3: "Many wonderful ideas were inspired by our customers.",
    q4: "By the traders and for the traders!",
    authorTitle: "Head of Pocket Option customer support",
    docsTitle: "Documents",
    docLinks: [
      { label: "Terms and Conditions", href: "#" },
      { label: "Information disclosure", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "AML and KYC policy", href: "#" },
      { label: "Payment policy", href: "#" },
    ],
    coreTitle: "What we believe. Our core values",
    values: [
      { title: "Driving innovations", text: "We stand on a constant pursuit of perfection. The introduction of new cutting-edge features and setting trends makes us the industry leaders." },
      { title: "Customer loyalty", text: "Enabling clients to become high-performance traders and creating long-term relationships by being responsive and relevant, and by consistently delivering top-notch service." },
      { title: "Truly social", text: "We believe in the community. It drives us, it inspires us. Comfort and truly social interaction among our customers is our top priority." },
      { title: "Sustainability", text: "Attracting, developing and retaining the best talent for our project, challenging our people, demonstrating a \"can-do\" attitude and fostering a collaborative and supportive environment." },
      { title: "Integrity", text: "Personal integrity and legal compliance are essential to our operation as a global enterprise. We're committed to international policies and practices that benefit our company and its clients." },
      { title: "Shared success", text: "Our mission is to bring easy and accessible trading to customers worldwide, making possible to benefit from financial markets anytime and anywhere." },
    ],
    newsTitle: "In the news",
    newsSub: "Discover how our community, services and innovations are making headlines in the industry, in every country, every day",
    joinTitle: "Join us",
    joinText: "A trader career with Pocket Option puts you at the forefront of innovation in the digital age. Work with the brightest minds in business to imagine and invent the future.",
    joinBtn: "Try demo in one click",
    privacyLink: "/privacy-policy",
  },
  pt: {
    home: "Início", breadcrumb: "Sobre nós",
    heroTitle: "Sobre a Pocket Option",
    heroPara1: "A Pocket Option foi fundada em 2017 por uma equipe de especialistas talentosos em TI e FinTech que queriam provar que as pessoas não precisam abrir mão para ganhar nos mercados financeiros — que o trading deve ser acessível, conveniente e mais divertido.",
    heroPara2: "Hoje, continuamos desenvolvendo, melhorando e inovando constantemente a experiência de trading. Acreditamos que o trading deve estar disponível para qualquer pessoa no mundo.",
    whyTitle: "Por que nos escolher?",
    whyIntro: "Começamos como uma pequena empresa com poucos clientes. Éramos novos, nossos serviços não eram tão refinados e populares como hoje. Até o final de 2017 tínhamos:",
    stat1Label: "usuários ativos", stat2Label: "volume de negociação", stat3Label: "países e regiões", stat4Label: "renda média mensal do trader",
    card1: "O número de usuários ativos que apreciam nosso serviço aumenta rapidamente.",
    card2: "Até o final de 2018, atingimos nossa primeira marca de um milhão de usuários.",
    card3: "Em 2019, já tínhamos mais de 10 milhões de usuários registrados.",
    howTitle: "Como trabalhamos com nossos clientes?",
    q1: "A satisfação do cliente tem sido nossa principal prioridade desde o início.",
    q2: "Nosso objetivo não é apenas fornecer excelente suporte ao cliente, mas também ouvir atentamente o feedback dos clientes.",
    q3: "Muitas ideias maravilhosas foram inspiradas por nossos clientes.",
    q4: "Pelos traders e para os traders!",
    authorTitle: "Chefe do suporte ao cliente da Pocket Option",
    docsTitle: "Documentos",
    docLinks: [
      { label: "Termos e Condições", href: "#" },
      { label: "Divulgação de informações", href: "#" },
      { label: "Política de privacidade", href: "#" },
      { label: "Política AML e KYC", href: "#" },
      { label: "Política de pagamento", href: "#" },
    ],
    coreTitle: "No que acreditamos. Nossos valores fundamentais",
    values: [
      { title: "Impulsionando inovações", text: "Estamos em busca constante da perfeição. A introdução de novos recursos de ponta e a definição de tendências nos tornam líderes do setor." },
      { title: "Fidelidade do cliente", text: "Permitindo que os clientes se tornem traders de alto desempenho e criando relacionamentos de longo prazo sendo responsivos e relevantes, e entregando consistentemente serviço de alta qualidade." },
      { title: "Verdadeiramente social", text: "Acreditamos na comunidade. Ela nos impulsiona, nos inspira. O conforto e a interação verdadeiramente social entre nossos clientes é nossa prioridade." },
      { title: "Sustentabilidade", text: "Atrair, desenvolver e reter os melhores talentos para nosso projeto, desafiando nossas pessoas e promovendo um ambiente colaborativo e de apoio." },
      { title: "Integridade", text: "A integridade pessoal e o cumprimento legal são essenciais para nossa operação como empresa global. Estamos comprometidos com políticas e práticas internacionais que beneficiem nossa empresa e seus clientes." },
      { title: "Sucesso compartilhado", text: "Nossa missão é trazer trading fácil e acessível para clientes em todo o mundo, tornando possível se beneficiar dos mercados financeiros a qualquer hora e em qualquer lugar." },
    ],
    newsTitle: "Na mídia",
    newsSub: "Descubra como nossa comunidade, serviços e inovações estão sendo destaque no setor, em todos os países, todos os dias",
    joinTitle: "Junte-se a nós",
    joinText: "Uma carreira de trader com a Pocket Option coloca você na vanguarda da inovação na era digital. Trabalhe com as mentes mais brilhantes dos negócios para imaginar e inventar o futuro.",
    joinBtn: "Experimente a demo em um clique",
    privacyLink: "/pt/privacy-policy",
  },
  es: {
    home: "Inicio", breadcrumb: "Sobre nosotros",
    heroTitle: "Sobre Pocket Option",
    heroPara1: "Pocket Option fue fundada en 2017 por un equipo de talentosos especialistas en TI y FinTech que querían demostrar que las personas no necesitan comprometerse para ganar en los mercados financieros — que el trading debe ser accesible, conveniente y más divertido.",
    heroPara2: "Hoy, continuamos desarrollando, mejorando e innovando constantemente la experiencia de trading. Creemos firmemente que el trading debe estar disponible para cualquier persona en el mundo.",
    whyTitle: "¿Por qué elegirnos?",
    whyIntro: "Comenzamos como una pequeña empresa con unos pocos clientes. Éramos nuevos, nuestros servicios no eran tan refinados y populares como hoy. A finales de 2017 teníamos:",
    stat1Label: "usuarios activos", stat2Label: "volumen de trading", stat3Label: "países y regiones", stat4Label: "ingreso promedio mensual del trader",
    card1: "El número de usuarios activos que aprecian nuestro servicio aumenta rápidamente.",
    card2: "A finales de 2018 alcanzamos nuestro primer millón de usuarios.",
    card3: "En 2019 ya teníamos más de 10 millones de usuarios registrados.",
    howTitle: "¿Cómo trabajamos con nuestros clientes?",
    q1: "La satisfacción del cliente ha sido nuestra máxima prioridad desde el principio.",
    q2: "Nuestro objetivo no es solo brindar un excelente soporte al cliente, sino también escuchar atentamente los comentarios de los clientes.",
    q3: "Muchas ideas maravillosas fueron inspiradas por nuestros clientes.",
    q4: "¡Por los traders y para los traders!",
    authorTitle: "Jefe de atención al cliente de Pocket Option",
    docsTitle: "Documentos",
    docLinks: [
      { label: "Términos y Condiciones", href: "#" },
      { label: "Divulgación de información", href: "#" },
      { label: "Política de privacidad", href: "#" },
      { label: "Política AML y KYC", href: "#" },
      { label: "Política de pago", href: "#" },
    ],
    coreTitle: "Lo que creemos. Nuestros valores fundamentales",
    values: [
      { title: "Impulsando innovaciones", text: "Nos esforzamos constantemente por la perfección. La introducción de nuevas funciones de vanguardia y el establecimiento de tendencias nos convierte en líderes de la industria." },
      { title: "Lealtad del cliente", text: "Permitiendo a los clientes convertirse en traders de alto rendimiento y creando relaciones a largo plazo siendo receptivos y relevantes, y ofreciendo consistentemente un servicio de primera." },
      { title: "Verdaderamente social", text: "Creemos en la comunidad. Nos impulsa, nos inspira. La comodidad y la interacción verdaderamente social entre nuestros clientes es nuestra máxima prioridad." },
      { title: "Sostenibilidad", text: "Atrayendo, desarrollando y reteniendo el mejor talento para nuestro proyecto, desafiando a nuestra gente y fomentando un entorno colaborativo y de apoyo." },
      { title: "Integridad", text: "La integridad personal y el cumplimiento legal son esenciales para nuestra operación como empresa global. Estamos comprometidos con políticas y prácticas internacionales que beneficien a nuestra empresa y sus clientes." },
      { title: "Éxito compartido", text: "Nuestra misión es llevar un trading fácil y accesible a clientes de todo el mundo, haciendo posible beneficiarse de los mercados financieros en cualquier momento y lugar." },
    ],
    newsTitle: "En las noticias",
    newsSub: "Descubre cómo nuestra comunidad, servicios e innovaciones están siendo titulares en la industria, en cada país, cada día",
    joinTitle: "Únete a nosotros",
    joinText: "Una carrera como trader con Pocket Option te pone a la vanguardia de la innovación en la era digital. Trabaja con las mentes más brillantes de los negocios para imaginar e inventar el futuro.",
    joinBtn: "Prueba la demo en un clic",
    privacyLink: "/es/privacy-policy",
  },
  ru: {
    home: "Главная", breadcrumb: "О нас",
    heroTitle: "О Pocket Option",
    heroPara1: "Pocket Option была основана в 2017 году командой талантливых специалистов в области IT и FinTech, которые хотели доказать, что людям не нужно идти на компромисс, чтобы зарабатывать на финансовых рынках — что трейдинг должен быть доступным, удобным и более увлекательным.",
    heroPara2: "Сегодня мы продолжаем развиваться, совершенствоваться и постоянно внедрять инновации в торговый опыт. Мы твёрдо убеждены, что трейдинг должен быть доступен каждому в мире.",
    whyTitle: "Почему выбирают нас?",
    whyIntro: "Мы начинали как небольшая компания с горсткой клиентов. Мы были новыми, наши услуги не были такими отточенными и популярными, как сейчас. К концу 2017 года у нас было:",
    stat1Label: "активных пользователей", stat2Label: "торговый оборот", stat3Label: "стран и регионов", stat4Label: "средний доход трейдера в месяц",
    card1: "Число активных пользователей, которые ценят наш сервис, стремительно растёт.",
    card2: "К концу 2018 года мы достигли первого миллиона пользователей.",
    card3: "В 2019 году у нас уже было более 10 миллионов зарегистрированных пользователей.",
    howTitle: "Как мы работаем с клиентами?",
    q1: "Удовлетворённость клиентов была нашим главным приоритетом с самого начала.",
    q2: "Мы стремимся не только обеспечивать отличную поддержку клиентов, но и внимательно прислушиваться к их отзывам.",
    q3: "Многие замечательные идеи были вдохновлены нашими клиентами.",
    q4: "От трейдеров и для трейдеров!",
    authorTitle: "Руководитель службы поддержки Pocket Option",
    docsTitle: "Документы",
    docLinks: [
      { label: "Условия и положения", href: "#" },
      { label: "Раскрытие информации", href: "#" },
      { label: "Политика конфиденциальности", href: "#" },
      { label: "Политика AML и KYC", href: "#" },
      { label: "Платёжная политика", href: "#" },
    ],
    coreTitle: "Во что мы верим. Наши основные ценности",
    values: [
      { title: "Движение инноваций", text: "Мы стремимся к постоянному совершенству. Внедрение передовых функций и задание трендов делает нас лидерами отрасли." },
      { title: "Лояльность клиентов", text: "Мы помогаем клиентам становиться высокопроизводительными трейдерами и выстраиваем долгосрочные отношения, неизменно предоставляя первоклассный сервис." },
      { title: "Истинная социальность", text: "Мы верим в сообщество. Оно нас движет, вдохновляет. Комфорт и подлинное социальное взаимодействие среди наших клиентов — наш главный приоритет." },
      { title: "Устойчивость", text: "Привлечение, развитие и удержание лучших талантов для нашего проекта, стимулирование людей и формирование совместной и поддерживающей среды." },
      { title: "Честность", text: "Личная порядочность и соблюдение законодательства необходимы для работы нашей глобальной компании. Мы привержены международным политикам и практикам, которые приносят пользу нашей компании и её клиентам." },
      { title: "Общий успех", text: "Наша миссия — сделать трейдинг лёгким и доступным для клиентов по всему миру, давая возможность получать выгоду от финансовых рынков в любое время и в любом месте." },
    ],
    newsTitle: "В новостях",
    newsSub: "Узнайте, как наше сообщество, услуги и инновации попадают в заголовки новостей отрасли в каждой стране каждый день",
    joinTitle: "Присоединяйтесь к нам",
    joinText: "Карьера трейдера с Pocket Option ставит вас в авангард инноваций в эпоху цифровых технологий. Работайте с лучшими умами бизнеса, чтобы представлять и изобретать будущее.",
    joinBtn: "Попробовать демо в один клик",
    privacyLink: "/ru/privacy-policy",
  },
  id: {
    home: "Beranda", breadcrumb: "Tentang kami",
    heroTitle: "Tentang Pocket Option",
    heroPara1: "Pocket Option didirikan pada tahun 2017 oleh tim spesialis IT dan FinTech berbakat yang ingin membuktikan bahwa orang tidak perlu berkompromi untuk menghasilkan di pasar keuangan — bahwa trading harus mudah diakses, nyaman, dan lebih menyenangkan.",
    heroPara2: "Hari ini, kami terus berkembang, meningkatkan, dan berinovasi secara terus-menerus dalam pengalaman trading. Kami percaya bahwa trading harus tersedia untuk siapa saja di seluruh dunia.",
    whyTitle: "Mengapa memilih kami?",
    whyIntro: "Kami memulai sebagai perusahaan kecil dengan sedikit pelanggan. Kami baru, layanan kami belum sehalus dan sepopuler sekarang. Pada akhir 2017 kami memiliki:",
    stat1Label: "pengguna aktif", stat2Label: "volume trading", stat3Label: "negara dan wilayah", stat4Label: "pendapatan rata-rata trader per bulan",
    card1: "Jumlah pengguna aktif yang menghargai layanan kami terus meningkat pesat.",
    card2: "Pada akhir 2018 kami mencapai satu juta pengguna pertama.",
    card3: "Pada 2019 kami sudah memiliki lebih dari 10 juta pengguna terdaftar.",
    howTitle: "Bagaimana kami bekerja dengan klien?",
    q1: "Kepuasan klien telah menjadi prioritas utama kami sejak awal.",
    q2: "Kami bertujuan tidak hanya memberikan dukungan pelanggan yang luar biasa, tetapi juga mendengarkan umpan balik klien dengan seksama.",
    q3: "Banyak ide luar biasa terinspirasi dari pelanggan kami.",
    q4: "Dari trader dan untuk trader!",
    authorTitle: "Kepala dukungan pelanggan Pocket Option",
    docsTitle: "Dokumen",
    docLinks: [
      { label: "Syarat dan Ketentuan", href: "#" },
      { label: "Pengungkapan informasi", href: "#" },
      { label: "Kebijakan privasi", href: "#" },
      { label: "Kebijakan AML dan KYC", href: "#" },
      { label: "Kebijakan pembayaran", href: "#" },
    ],
    coreTitle: "Apa yang kami percayai. Nilai-nilai inti kami",
    values: [
      { title: "Mendorong inovasi", text: "Kami selalu berusaha mencapai kesempurnaan. Pengenalan fitur-fitur canggih baru dan penetapan tren menjadikan kami pemimpin industri." },
      { title: "Loyalitas pelanggan", text: "Memungkinkan klien menjadi trader berkinerja tinggi dan menciptakan hubungan jangka panjang dengan responsif dan relevan, serta memberikan layanan terbaik secara konsisten." },
      { title: "Benar-benar sosial", text: "Kami percaya pada komunitas. Itu mendorong kami, menginspirasi kami. Kenyamanan dan interaksi sosial yang nyata di antara pelanggan kami adalah prioritas utama kami." },
      { title: "Keberlanjutan", text: "Menarik, mengembangkan, dan mempertahankan talenta terbaik untuk proyek kami, menantang orang-orang kami, menunjukkan sikap 'bisa dilakukan' dan mendorong lingkungan yang kolaboratif dan mendukung." },
      { title: "Integritas", text: "Integritas pribadi dan kepatuhan hukum sangat penting untuk operasi kami sebagai perusahaan global. Kami berkomitmen pada kebijakan dan praktik internasional yang menguntungkan perusahaan dan kliennya." },
      { title: "Kesuksesan bersama", text: "Misi kami adalah membawa trading yang mudah dan terjangkau kepada pelanggan di seluruh dunia, memungkinkan manfaat dari pasar keuangan kapan saja dan di mana saja." },
    ],
    newsTitle: "Di media",
    newsSub: "Temukan bagaimana komunitas, layanan, dan inovasi kami membuat berita di industri ini, di setiap negara, setiap hari",
    joinTitle: "Bergabunglah dengan kami",
    joinText: "Karir trader dengan Pocket Option menempatkan Anda di garis terdepan inovasi di era digital. Bekerja dengan pikiran-pikiran paling cemerlang dalam bisnis untuk membayangkan dan menciptakan masa depan.",
    joinBtn: "Coba demo dalam satu klik",
    privacyLink: "/id/privacy-policy",
  },
};

function StatCardBlock({ value, prefix = "", suffix = "", label }: { value: number; prefix?: string; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const step = value / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="stat-block">
      <div className="stat-num">{prefix}{count.toLocaleString()}{suffix}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}

export function AboutUsPage({ lang = "en" }: { lang?: string }) {
  const t = T[lang as Lang] ?? T.en;
  const homeHref = lang === "en" ? "/" : `/${lang}`;

  return (
    <>
      <BreadcrumbJsonLd lang={lang} slug="about-us" homeName={t.home} pageName={t.breadcrumb} />
      <Header lang={lang} />
      <main style={{ background: "#0c1523", color: "#fff", fontFamily: "'Nunito Sans', sans-serif" }}>

        {/* ─── HERO ─── */}
        <section className="hero-section" style={{
          position: "relative",
          overflow: "hidden",
          minHeight: 580,
          paddingTop: 155,
          paddingBottom: 70,
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(/images/about/about-bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(10,30,80,0.88) 30%, rgba(10,30,80,0.55) 100%)",
          }} />

          <div style={{ position: "absolute", top: 86, left: 0, right: 0, zIndex: 2 }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
              <a href={homeHref} style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{t.home}</a>
              <span style={{ margin: "0 8px" }}>/</span>
              <span style={{ color: "rgba(255,255,255,0.85)" }}>{t.breadcrumb}</span>
            </div>
          </div>

          <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 24px", zIndex: 2 }}>
            <h1 style={{ fontSize: "clamp(26px, 4.2vw, 54px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 30, color: "#fff", maxWidth: 760 }}>
              {t.heroTitle}
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.80)", maxWidth: 740, marginBottom: 14 }}>
              {t.heroPara1}
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.80)", maxWidth: 740 }}>
              {t.heroPara2}
            </p>
          </div>
        </section>

        {/* ─── WHY CHOOSE US ─── */}
        <section style={{ background: "#edf2f7", padding: "72px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, marginBottom: 14, color: "#0d1e35" }}>
              {t.whyTitle}
            </h2>
            <p style={{ fontSize: 17, color: "#4a5568", maxWidth: 600, lineHeight: 1.75, marginBottom: 44 }}>
              {t.whyIntro}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 40, alignItems: "start" }} className="why-grid">
              <div className="stats-inner-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 40px" }}>
                {[
                  { value: ">100\u00a0000", label: t.stat1Label },
                  { value: ">$500\u00a0000\u00a0000", label: t.stat2Label },
                  { value: ">95", label: t.stat3Label },
                  { value: "$850+", label: t.stat4Label },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, color: "#0099fa", lineHeight: 1.1, marginBottom: 8 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: 14, color: "#4a5568" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: "#fff", borderRadius: 12, padding: "28px 28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
                <img src="/images/about/why-icon.webp" alt="" loading="lazy" style={{ width: 100, marginBottom: 18, display: "block" }} />
                <p style={{ fontSize: 14, color: "#2d3748", lineHeight: 1.8, marginBottom: 12 }}>{t.card1}</p>
                <p style={{ fontSize: 14, color: "#2d3748", lineHeight: 1.8, marginBottom: 12 }}>{t.card2}</p>
                <p style={{ fontSize: 14, color: "#2d3748", lineHeight: 1.8 }}>{t.card3}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW WE WORK ─── */}
        <section style={{ background: "#0f2550", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 64, alignItems: "center" }} className="about-two-col">
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#fff", lineHeight: 1.3, margin: 0 }}>
                {t.howTitle}
              </h2>
              <div>
                <div style={{ fontSize: 64, lineHeight: 1, color: "#0099fa", marginBottom: 16, fontFamily: "Georgia, serif", opacity: 0.9 }}>&ldquo;&ldquo;</div>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 10 }}>{t.q1}</p>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 10 }}>{t.q2}</p>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 10 }}>{t.q3}</p>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.85, marginBottom: 24 }}>{t.q4}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: "#0099fa", fontWeight: 600, fontSize: 17 }}>Victor</span>
                  <span style={{ width: 1, height: 16, background: "rgba(255,255,255,0.35)" }} />
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{t.authorTitle}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── DOCUMENTS ─── */}
        <section style={{ background: "#0f2550", padding: "56px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ background: "#fff", borderRadius: 14, padding: "36px 40px", display: "grid", gridTemplateColumns: "120px 200px 1fr", gap: "0 40px", alignItems: "center" }} className="docs-grid">
              <img src="/images/about/mail.webp" alt="" loading="lazy" style={{ width: 110, display: "block" }} />
              <h3 style={{ fontSize: 28, fontWeight: 700, color: "#0d1e35", margin: 0 }}>{t.docsTitle}</h3>
              <div className="docs-links-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 32px" }}>
                {t.docLinks.map((doc, i) => (
                  <a key={i} href={doc.href} style={{ color: "#2d3748", textDecoration: "none", fontSize: 14, fontWeight: 500, borderBottom: "1px solid #e2e8f0", paddingBottom: 12 }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#0099fa")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#2d3748")}
                  >{doc.label}</a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CORE VALUES ─── */}
        <section style={{ background: "#0f2550", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, marginBottom: 48, color: "#fff" }}>
              {t.coreTitle}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }} className="core-values-grid">
              {t.values.map((val, i) => (
                <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ width: 56, height: 56, flexShrink: 0, background: "rgba(0,153,250,0.12)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", padding: 12 }}>
                    <img src={`/images/about/icon-${i + 1}.svg`} alt={val.title} loading="lazy" style={{ width: 32, height: 32 }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", marginBottom: 10 }}>{val.title}</h3>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>{val.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── IN THE NEWS ─── */}
        <section style={{ background: "#fff", padding: "72px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#0d1e35", marginBottom: 14 }}>
              {t.newsTitle}
            </h2>
            <p style={{ fontSize: 17, color: "#718096", lineHeight: 1.7, marginBottom: 44, maxWidth: 620, margin: "0 auto 44px" }}>
              {t.newsSub}
            </p>

            <div className="social-row" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 14 }}>
              <a href="https://www.facebook.com/pocketbrokerglobal" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, background: "#1877f2", color: "#fff", padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 17, minWidth: 150 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a href="https://t.me/pocketbrokerglobal" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, background: "#229ED9", color: "#fff", padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 17, minWidth: 150 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Telegram
              </a>
              <a href="https://www.instagram.com/pocketbrokerglobal/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", color: "#fff", padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 17, minWidth: 150 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                Instagram
              </a>
              <a href="https://x.com/pocketbrokergl" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, background: "#000", color: "#fff", padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 17, minWidth: 150 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Twitter
              </a>
            </div>

            <div className="social-row" style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <a href="https://bit.ly/4pMrVCR" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, background: "#FF0000", color: "#fff", padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 17, minWidth: 150 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
              <a href="https://discord.gg/pocketbroker" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, background: "#5865F2", color: "#fff", padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 17, minWidth: 150 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                Discord
              </a>
              <a href="https://tiktok.com/@pocketbrokerglobal" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, background: "#010101", color: "#fff", padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 17, minWidth: 150 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                Tiktok
              </a>
            </div>
          </div>
        </section>

        {/* ─── JOIN US ─── */}
        <section className="join-section" style={{ position: "relative", overflow: "hidden", padding: "100px 24px", background: "linear-gradient(180deg, #1B5FA9 0%, #2B8CCF 100%)", textAlign: "center" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/images/about/join-bg.webp)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.12 }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fff", marginBottom: 20 }}>
              {t.joinTitle}
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.9)", lineHeight: 1.8, marginBottom: 40 }}>
              {t.joinText}
            </p>
            <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer" style={{ display: "inline-block", background: "#fff", color: "#1B5FA9", fontWeight: 600, fontSize: 14, padding: "14px 40px", borderRadius: 8, border: "2px solid #fff", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {t.joinBtn}
            </a>
          </div>
        </section>

      </main>
      <Footer lang={lang} />

      <style>{`
        @media (max-width: 900px) {
          .about-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .docs-grid { grid-template-columns: 1fr 1fr !important; text-align: center; }
          .docs-grid img { margin: 0 auto; }
        }
        @media (max-width: 640px) {
          .hero-section { min-height: 480px !important; padding-top: 110px !important; padding-bottom: 50px !important; }
          .docs-grid { grid-template-columns: 1fr !important; padding: 28px 20px !important; gap: 20px !important; }
          .docs-links-grid { grid-template-columns: 1fr !important; }
          .social-row a { min-width: 120px !important; font-size: 13px !important; padding: 10px 14px !important; }
          .core-values-grid { grid-template-columns: 1fr !important; }
          .join-section { padding: 70px 20px !important; }
        }
        @media (max-width: 400px) {
          .stats-inner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
