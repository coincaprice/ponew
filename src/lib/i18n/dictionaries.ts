import type { Locale } from './config';

export type Dictionary = {
  nav: {
    quickStart: string;
    freeDemo: string;
    aboutUs: string;
    tradingAssets: string;
    paymentMethods: string;
    socialTrading: string;
    blog: string;
    logIn: string;
    registration: string;
  };
  drawer: {
    menu: string;
    language: string;
    signUp: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
    social: string;
    riskWarning: string;
    riskText: string;
    brokerage: string;
    minInvestNote: string;
    riskDisclosure: string;
    affiliateTitle: string;
    affiliateText: string;
    copyright1: string;
    copyright2: string;
    copyright3: string;
  };
};

const en: Dictionary = {
  nav: {
    quickStart: 'Quick start',
    freeDemo: 'Free demo',
    aboutUs: 'About us',
    tradingAssets: 'Trading assets',
    paymentMethods: 'Payment methods',
    socialTrading: 'Social trading',
    blog: 'Blog',
    logIn: 'Log In',
    registration: 'Registration',
  },
  drawer: {
    menu: 'Menu',
    language: 'Language',
    signUp: 'Sign up',
  },
  hero: {
    title: 'The Most User-Friendly Trading Interface',
    subtitle: 'Trade over 100 global assets including forex, cryptocurrencies, stocks, and commodities on Pocket Option. Start trading online with a fast, secure, and easy-to-use platform.',
  },
  footer: {
    tagline: 'The most user-friendly trading platform',
    social: 'Pocket Option on social media',
    riskWarning: 'RISK WARNING:',
    riskText: 'Investing in financial products involves risks. Past performance does not guarantee future returns, and values may fluctuate due to market conditions and changes in underlying assets. Any forecasts or illustrations are for reference only and are not guarantees. This website does not constitute an invitation or recommendation to invest. Before investing, seek advice from financial, legal, and tax professionals, and assess whether the product suits your goals, risk tolerance, and circumstances.',
    brokerage: 'All brokerage activity on this website provided by FX Trading LLC.',
    minInvestNote: '* The minimum investment amount varies by region and payment method.',
    riskDisclosure: 'Risk Disclosure',
    affiliateTitle: 'Affiliate disclosure',
    affiliateText: 'pocketoption.lc is an independent affiliate website and is not the official Pocket Option site. When you register or deposit via links on this site, we may earn a commission from Pocket Option at no extra cost to you. This does not influence our editorial content, which is based on our own use of the platform and publicly available information.',
    copyright1: 'All materials and services provided on this site are subject to copyright and belong to "FX Trading LLC". Any use of materials of this website must be approved by an official representative of "FX Trading LLC", and contain a link to the original resource. Any third-party companies of "Online broker" or "Online trading" type, do not have the right to use materials of this website as well as any distorted writing of "FX Trading LLC". In case of violation, they will be prosecuted in accordance with legislation of intellectual property protection.',
    copyright2: 'FX Trading LLC does not provide service to residents of the EEA countries, USA, Israel, UK, Philippines, Japan and Brazil.',
    copyright3: 'FX Trading LLC is registered at Republic of Costa Rica, San Jose-San Jose. Diagonal to La Salle High School, Las Vegas neighborhood, Mata Redonda with the registration number 4062001339764.',
  },
};

const pt: Dictionary = {
  nav: {
    quickStart: 'Início rápido',
    freeDemo: 'Demo grátis',
    aboutUs: 'Sobre nós',
    tradingAssets: 'Ativos para negociar',
    paymentMethods: 'Métodos de pagamento',
    socialTrading: 'Social trading',
    blog: 'Blog',
    logIn: 'Entrar',
    registration: 'Cadastro',
  },
  drawer: {
    menu: 'Menu',
    language: 'Idioma',
    signUp: 'Cadastrar',
  },
  hero: {
    title: 'A Interface de Trading Mais Fácil de Usar',
    subtitle: 'Negocie mais de 100 ativos globais, incluindo forex, criptomoedas, ações e commodities no Pocket Option. Comece a negociar online com uma plataforma rápida, segura e fácil de usar.',
  },
  footer: {
    tagline: 'A plataforma de trading mais fácil de usar',
    social: 'Pocket Option nas redes sociais',
    riskWarning: 'AVISO DE RISCO:',
    riskText: 'Investir em produtos financeiros envolve riscos. O desempenho passado não garante retornos futuros, e os valores podem oscilar devido às condições de mercado e a mudanças nos ativos subjacentes. Quaisquer previsões ou ilustrações são apenas para referência e não constituem garantias. Este site não constitui um convite ou recomendação para investir. Antes de investir, procure orientação de profissionais financeiros, jurídicos e fiscais e avalie se o produto é adequado aos seus objetivos, tolerância ao risco e circunstâncias.',
    brokerage: 'Toda a atividade de corretagem neste site é fornecida pela FX Trading LLC.',
    minInvestNote: '* O valor mínimo de investimento varia conforme a região e o método de pagamento.',
    riskDisclosure: 'Divulgação de Riscos',
    affiliateTitle: 'Divulgação de afiliado',
    affiliateText: 'pocketoption.lc é um site afiliado independente e não é o site oficial da Pocket Option. Ao registrar-se ou depositar através dos links deste site, podemos receber uma comissão da Pocket Option sem custo adicional para você. Isso não influencia nosso conteúdo editorial, baseado no uso da plataforma e em informações públicas.',
    copyright1: 'Todos os materiais e serviços fornecidos neste site estão sujeitos a direitos autorais e pertencem à "FX Trading LLC". Qualquer uso dos materiais deste site deve ser aprovado por um representante oficial da "FX Trading LLC".',
    copyright2: 'A FX Trading LLC não presta serviços a residentes dos países da EEE, EUA, Israel, Reino Unido, Filipinas, Japão e Brasil.',
    copyright3: 'A FX Trading LLC está registrada na República da Costa Rica, San Jose. Diagonal à La Salle High School, bairro Las Vegas, Mata Redonda com o número de registro 4062001339764.',
  },
};

const es: Dictionary = {
  nav: {
    quickStart: 'Inicio rápido',
    freeDemo: 'Demo gratis',
    aboutUs: 'Sobre nosotros',
    tradingAssets: 'Activos de trading',
    paymentMethods: 'Métodos de pago',
    socialTrading: 'Social trading',
    blog: 'Blog',
    logIn: 'Iniciar sesión',
    registration: 'Registro',
  },
  drawer: {
    menu: 'Menú',
    language: 'Idioma',
    signUp: 'Registrarse',
  },
  hero: {
    title: 'La Interfaz de Trading Más Fácil de Usar',
    subtitle: 'Opera más de 100 activos globales, incluidos forex, criptomonedas, acciones y materias primas en Pocket Option. Empieza a operar online con una plataforma rápida, segura y fácil de usar.',
  },
  footer: {
    tagline: 'La plataforma de trading más fácil de usar',
    social: 'Pocket Option en redes sociales',
    riskWarning: 'ADVERTENCIA DE RIESGO:',
    riskText: 'Invertir en productos financieros implica riesgos. El rendimiento pasado no garantiza resultados futuros, y los valores pueden fluctuar debido a las condiciones del mercado y a cambios en los activos subyacentes. Cualquier pronóstico o ilustración es solo de referencia y no constituye una garantía. Este sitio web no constituye una invitación ni una recomendación para invertir. Antes de invertir, busque asesoramiento de profesionales financieros, legales y fiscales, y evalúe si el producto se ajusta a sus objetivos, tolerancia al riesgo y circunstancias.',
    brokerage: 'Toda la actividad de corretaje en este sitio web es proporcionada por FX Trading LLC.',
    minInvestNote: '* El monto mínimo de inversión varía según la región y el método de pago.',
    riskDisclosure: 'Divulgación de Riesgos',
    affiliateTitle: 'Divulgación de afiliado',
    affiliateText: 'pocketoption.lc es un sitio afiliado independiente y no es el sitio oficial de Pocket Option. Si te registras o depositas a través de los enlaces de este sitio, podemos recibir una comisión de Pocket Option sin coste adicional para ti. Esto no influye en nuestro contenido editorial, basado en el uso de la plataforma y en información pública.',
    copyright1: 'Todos los materiales y servicios proporcionados en este sitio están sujetos a derechos de autor y pertenecen a "FX Trading LLC". Cualquier uso de los materiales de este sitio debe ser aprobado por un representante oficial de "FX Trading LLC".',
    copyright2: 'FX Trading LLC no presta servicios a residentes de los países de la EEA, EE.UU., Israel, Reino Unido, Filipinas, Japón y Brasil.',
    copyright3: 'FX Trading LLC está registrada en la República de Costa Rica, San José. Diagonal a La Salle High School, barrio Las Vegas, Mata Redonda con el número de registro 4062001339764.',
  },
};

const ru: Dictionary = {
  nav: {
    quickStart: 'Быстрый старт',
    freeDemo: 'Демо счёт',
    aboutUs: 'О нас',
    tradingAssets: 'Торговые активы',
    paymentMethods: 'Способы оплаты',
    socialTrading: 'Соцтрейдинг',
    blog: 'Блог',
    logIn: 'Войти',
    registration: 'Регистрация',
  },
  drawer: {
    menu: 'Меню',
    language: 'Язык',
    signUp: 'Регистрация',
  },
  hero: {
    title: 'Самый удобный торговый интерфейс',
    subtitle: 'Торгуйте более чем 100 глобальными активами, включая форекс, криптовалюту, акции и сырьё на Pocket Option. Начните торговать онлайн на быстрой, безопасной и простой платформе.',
  },
  footer: {
    tagline: 'Самая удобная торговая платформа',
    social: 'Pocket Option в соцсетях',
    riskWarning: 'ПРЕДУПРЕЖДЕНИЕ О РИСКАХ:',
    riskText: 'Инвестирование в финансовые продукты связано с рисками. Прошлые результаты не гарантируют будущую доходность, а стоимость может колебаться из‑за рыночных условий и изменений базовых активов. Любые прогнозы или иллюстрации приведены только для справки и не являются гарантией. Этот сайт не является приглашением или рекомендацией инвестировать. Перед инвестированием проконсультируйтесь с финансовыми, юридическими и налоговыми специалистами и оцените, соответствует ли продукт вашим целям, толерантности к риску и обстоятельствам.',
    brokerage: 'Вся брокерская деятельность на этом сайте осуществляется FX Trading LLC.',
    minInvestNote: '* Минимальная сумма инвестиций зависит от региона и способа оплаты.',
    riskDisclosure: 'Раскрытие рисков',
    affiliateTitle: 'Раскрытие партнёрства',
    affiliateText: 'pocketoption.lc — независимый партнёрский сайт, не являющийся официальным сайтом Pocket Option. При регистрации или пополнении счёта по ссылкам с этого сайта мы можем получить комиссию от Pocket Option без дополнительных расходов для вас. Это не влияет на наши материалы, основанные на использовании платформы и общедоступной информации.',
    copyright1: 'Все материалы и услуги, предоставленные на этом сайте, защищены авторским правом и принадлежат "FX Trading LLC".',
    copyright2: 'FX Trading LLC не предоставляет услуги резидентам стран ЕЭЗ, США, Израиля, Великобритании, Филиппин, Японии и Бразилии.',
    copyright3: 'FX Trading LLC зарегистрирована в Республике Коста-Рика, Сан-Хосе с регистрационным номером 4062001339764.',
  },
};

const id: Dictionary = {
  nav: {
    quickStart: 'Mulai cepat',
    freeDemo: 'Demo gratis',
    aboutUs: 'Tentang kami',
    tradingAssets: 'Aset trading',
    paymentMethods: 'Metode pembayaran',
    socialTrading: 'Social trading',
    blog: 'Blog',
    logIn: 'Masuk',
    registration: 'Daftar',
  },
  drawer: {
    menu: 'Menu',
    language: 'Bahasa',
    signUp: 'Daftar',
  },
  hero: {
    title: 'Antarmuka Trading yang Paling Mudah Digunakan',
    subtitle: 'Perdagangkan lebih dari 100 aset global termasuk forex, kripto, saham, dan komoditas di Pocket Option. Mulai trading online dengan platform yang cepat, aman, dan mudah digunakan.',
  },
  footer: {
    tagline: 'Platform trading paling mudah digunakan',
    social: 'Pocket Option di media sosial',
    riskWarning: 'PERINGATAN RISIKO:',
    riskText: 'Berinvestasi pada produk keuangan mengandung risiko. Kinerja masa lalu tidak menjamin hasil di masa depan, dan nilai dapat berfluktuasi karena kondisi pasar serta perubahan aset dasar. Prakiraan atau ilustrasi apa pun hanya sebagai referensi dan bukan jaminan. Situs web ini bukan merupakan ajakan atau rekomendasi untuk berinvestasi. Sebelum berinvestasi, mintalah saran dari profesional keuangan, hukum, dan pajak, serta nilai apakah produk ini sesuai dengan tujuan, toleransi risiko, dan kondisi Anda.',
    brokerage: 'Seluruh aktivitas perantara (brokerage) di situs web ini disediakan oleh FX Trading LLC.',
    minInvestNote: '* Jumlah investasi minimum bervariasi tergantung wilayah dan metode pembayaran.',
    riskDisclosure: 'Pengungkapan Risiko',
    affiliateTitle: 'Pengungkapan afiliasi',
    affiliateText: 'pocketoption.lc adalah situs afiliasi independen dan bukan situs resmi Pocket Option. Jika Anda mendaftar atau deposit melalui tautan di situs ini, kami dapat menerima komisi dari Pocket Option tanpa biaya tambahan bagi Anda. Hal ini tidak memengaruhi konten editorial kami, yang didasarkan pada penggunaan platform dan informasi publik.',
    copyright1: 'Semua materi dan layanan yang tersedia di situs ini tunduk pada hak cipta dan milik "FX Trading LLC".',
    copyright2: 'FX Trading LLC tidak memberikan layanan kepada penduduk negara-negara EEA, AS, Israel, Inggris, Filipina, Jepang, dan Brasil.',
    copyright3: 'FX Trading LLC terdaftar di Republik Kosta Rika, San Jose dengan nomor registrasi 4062001339764.',
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, pt, es, ru, id };

export function getDictionary(lang: string): Dictionary {
  const locale = lang as Locale;
  return dictionaries[locale] ?? dictionaries.en;
}
