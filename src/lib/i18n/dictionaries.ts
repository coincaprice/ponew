import type { Locale } from './config';

export type Dictionary = {
  nav: {
    quickStart: string;
    freeDemo: string;
    aboutUs: string;
    tradingAssets: string;
    logIn: string;
    registration: string;
  };
  hero: {
    title: string;
    subtitle: string;
    registrationBtn: string;
    or: string;
    logIn: string;
    startOneClick: string;
  };
  conditions: {
    title: string;
    minInvest: string;
    minTrade: string;
    demoMoney: string;
    paymentMethods: string;
    noCommission: string;
    assets: string;
  };
  steps: {
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    getStarted: string;
  };
  why: {
    title: string;
    subtitle: string;
    item1Title: string; item1Desc: string;
    item2Title: string; item2Desc: string;
    item3Title: string; item3Desc: string;
    item4Title: string; item4Desc: string;
    item5Title: string; item5Desc: string;
    item6Title: string; item6Desc: string;
    item7Title: string; item7Desc: string;
    item8Title: string; item8Desc: string;
    tradeOneClick: string;
    startTrading: string;
  };
  offers: {
    paymentMethods: string;
    tradingAssets: string;
    achievements: string;
    apps: string;
    tournaments: string;
    more: string;
  };
  luck: {
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    checkNow: string;
  };
  apps: {
    title: string;
    android: string; androidAction: string;
    apk: string; apkAction: string;
    webApp: string; webAppAction: string;
    telegram: string; telegramAction: string;
  };
  faq: {
    title: string;
    subtitle: string;
    q1: string; a1: string;
    q2: string; a2: string;
    q3: string; a3: string;
    q4: string; a4: string;
    q5: string; a5: string;
    q6: string; a6: string;
    stillHaveQuestions: string;
    contactSupport: string;
  };
  reviews: {
    title: string;
    subtitle: string;
    showFullReview: string;
    allReviews: string;
    feedbackText: string;
    submitReview: string;
    reviewsNote: string;
  };
  footer: {
    tagline: string;
    riskWarning: string;
    riskDisclosure: string;
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
    logIn: 'Log In',
    registration: 'Registration',
  },
  hero: {
    title: 'The Most User-Friendly Trading Interface',
    subtitle: 'Trade over 100 global assets including forex, cryptocurrencies, stocks, and commodities on Pocket Option. Start trading online with a fast, secure, and easy-to-use platform.',
    registrationBtn: 'Registration',
    or: 'or',
    logIn: 'Log In',
    startOneClick: 'Start in one click',
  },
  conditions: {
    title: 'Place your trades on best conditions',
    minInvest: 'Minimum investment\namount',
    minTrade: 'Minimum trade amount',
    demoMoney: 'Virtual money on your\nDemo account',
    paymentMethods: 'Payment methods',
    noCommission: 'No commission on deposit\nand withdrawal',
    assets: 'Assets for trading',
  },
  steps: {
    title: 'Start trading in 3 simple steps',
    subtitle: 'Get started on Pocket Option in minutes — no experience needed.',
    step1Title: 'Create Your Account',
    step1Desc: 'Sign up in under 60 seconds. No documents needed — open a free demo account instantly.',
    step2Title: 'Make a Deposit',
    step2Desc: 'Fund your account from just $5 with 50+ payment methods. Zero commissions on every deposit.',
    step3Title: 'Start Trading',
    step3Desc: '100+ assets across forex, crypto, stocks, and commodities. Earn up to 218% per trade.',
    getStarted: 'Get Started Free',
  },
  why: {
    title: 'Why choose us?',
    subtitle: 'Everything you need for professional trading — in one platform built for all levels.',
    item1Title: 'Flexible Trading', item1Desc: 'Quick and digital trading, express trades, pending trades, copy trading. Payouts of up to 218%.',
    item2Title: 'Comprehensive Education', item2Desc: 'Our help section contains tutorials, guides and various trading strategies for all levels.',
    item3Title: 'Diverse Instruments', item3Desc: 'Assets suitable for any trader: currency pairs, commodities, indices, and stocks.',
    item4Title: 'Demo Account', item4Desc: 'Try all platform benefits using virtual money. No investment needed, no risks involved.',
    item5Title: 'Easy Deposits & Withdrawals', item5Desc: 'Use the most convenient payment method for hassle-free deposits and withdrawals.',
    item6Title: 'High Customer Loyalty', item6Desc: 'Trading tournaments, regular bonuses, gifts, promo codes and contests for every trader.',
    item7Title: 'Trading Advantages', item7Desc: 'Use cashback and other advantages for a more comfortable trading experience with minimal risks.',
    item8Title: 'Indicators & Signals', item8Desc: 'Everything you need for a top-tier trading experience including popular indicators and signals.',
    tradeOneClick: 'Trade in one click',
    startTrading: 'Start Trading',
  },
  offers: {
    paymentMethods: 'PAYMENT\nMETHODS',
    tradingAssets: 'TRADING\nASSETS',
    achievements: 'ACHIEVEMENTS',
    apps: 'APPS FOR ANY\nDEVICE',
    tournaments: 'TOURNAMENTS',
    more: 'MORE',
  },
  luck: {
    title: 'Test Your Luck!',
    subtitle: 'Enter your email address and get a special offer from Pocket Option. If luck is on your side, you will receive a free gift!',
    emailPlaceholder: 'Enter your email',
    checkNow: 'Check it now',
  },
  apps: {
    title: 'Web application for\nany device',
    android: 'Android', androidAction: 'Download',
    apk: 'Apk Download', apkAction: 'Download',
    webApp: 'Web App', webAppAction: 'Open',
    telegram: 'Telegram bot', telegramAction: 'Subscribe',
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know to get started with confidence.',
    q1: 'What is Pocket Option?',
    a1: 'Pocket Option is an online trading platform that allows users to trade binary options, forex, stocks, cryptocurrencies, and commodities. It is designed for both beginners and experienced traders, offering a clean interface, demo accounts, and powerful analytical tools.',
    q2: 'How do I open an account?',
    a2: "Click the 'Registration' button at the top of the page and fill in your details. You can start with a free demo account immediately — no deposit required. Upgrading to a real account only takes a few minutes.",
    q3: 'What is the minimum deposit?',
    a3: 'The minimum deposit on Pocket Option is $5. We support a wide variety of payment methods including Visa, Mastercard, cryptocurrency, and local payment systems such as Pix, Mercado Pago, and more.',
    q4: 'Is there a demo account available?',
    a4: 'Yes. Every registered user gets access to a free demo account loaded with $10,000 in virtual funds. This lets you practice trading strategies and explore the platform without any financial risk.',
    q5: 'How fast are withdrawals processed?',
    a5: 'Withdrawals are typically processed within 1–5 business days depending on the payment method. Cryptocurrency withdrawals are usually the fastest, often completed within a few hours.',
    q6: 'Is Pocket Option safe to use?',
    a6: 'Pocket Option is operated by Gembell Limited and regulated by the IFMRRC. We use industry-standard SSL encryption to protect your data and funds. Your account security is our top priority.',
    stillHaveQuestions: 'Still have questions?',
    contactSupport: 'Contact our support team',
  },
  reviews: {
    title: 'What people say about us',
    subtitle: 'More than 10 million customers worldwide trust us and earn daily.',
    showFullReview: 'Show full review',
    allReviews: 'All reviews',
    feedbackText: 'Your feedback helps us to improve our platform and provide you with the best trading experience tailored to your needs. View ratings and post your own suggestions. We appreciate your feedback!',
    submitReview: 'Submit a review',
    reviewsNote: 'The reviews are published with no changes to the original text.',
  },
  footer: {
    tagline: 'The most user-friendly trading platform',
    riskWarning: 'RISK WARNING:',
    riskDisclosure: 'Risk Disclosure',
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
    logIn: 'Entrar',
    registration: 'Cadastro',
  },
  hero: {
    title: 'A Interface de Trading Mais Fácil de Usar',
    subtitle: 'Negocie mais de 100 ativos globais, incluindo forex, criptomoedas, ações e commodities no Pocket Option. Comece a negociar online com uma plataforma rápida, segura e fácil de usar.',
    registrationBtn: 'Cadastro',
    or: 'ou',
    logIn: 'Entrar',
    startOneClick: 'Comece com um clique',
  },
  conditions: {
    title: 'Negocie nas melhores condições',
    minInvest: 'Valor mínimo\nde investimento',
    minTrade: 'Valor mínimo de negociação',
    demoMoney: 'Dinheiro virtual em sua\nconta Demo',
    paymentMethods: 'Métodos de pagamento',
    noCommission: 'Sem comissão em depósito\ne saque',
    assets: 'Ativos para negociação',
  },
  steps: {
    title: 'Comece a negociar em 3 passos simples',
    subtitle: 'Comece no Pocket Option em minutos — sem experiência necessária.',
    step1Title: 'Crie sua conta',
    step1Desc: 'Cadastre-se em menos de 60 segundos. Sem documentos necessários — abra uma conta demo gratuita instantaneamente.',
    step2Title: 'Faça um depósito',
    step2Desc: 'Financie sua conta a partir de apenas $5 com mais de 50 métodos de pagamento. Zero comissões em cada depósito.',
    step3Title: 'Comece a negociar',
    step3Desc: 'Mais de 100 ativos em forex, cripto, ações e commodities. Ganhe até 218% por negociação.',
    getStarted: 'Comece gratuitamente',
  },
  why: {
    title: 'Por que nos escolher?',
    subtitle: 'Tudo que você precisa para negociar profissionalmente — em uma plataforma para todos os níveis.',
    item1Title: 'Trading Flexível', item1Desc: 'Negociação rápida e digital, negociações expressas, pendentes e cópia de trades. Pagamentos de até 218%.',
    item2Title: 'Educação Completa', item2Desc: 'Nossa seção de ajuda contém tutoriais, guias e diversas estratégias de negociação para todos os níveis.',
    item3Title: 'Instrumentos Diversificados', item3Desc: 'Ativos adequados para qualquer trader: pares de moedas, commodities, índices e ações.',
    item4Title: 'Conta Demo', item4Desc: 'Experimente todos os benefícios da plataforma usando dinheiro virtual. Sem investimento, sem riscos.',
    item5Title: 'Depósitos e Saques Fáceis', item5Desc: 'Use o método de pagamento mais conveniente para depósitos e saques sem complicações.',
    item6Title: 'Alta Fidelidade ao Cliente', item6Desc: 'Torneios de trading, bônus regulares, presentes, códigos promocionais e concursos para cada trader.',
    item7Title: 'Vantagens de Trading', item7Desc: 'Use cashback e outras vantagens para uma experiência de trading mais confortável com riscos mínimos.',
    item8Title: 'Indicadores e Sinais', item8Desc: 'Tudo que você precisa para uma experiência de trading de primeira linha, incluindo indicadores e sinais populares.',
    tradeOneClick: 'Negocie em um clique',
    startTrading: 'Começar a negociar',
  },
  offers: {
    paymentMethods: 'MÉTODOS DE\nPAGAMENTO',
    tradingAssets: 'ATIVOS PARA\nNEGOCIAR',
    achievements: 'CONQUISTAS',
    apps: 'APPS PARA\nQUALQUER DISPOSITIVO',
    tournaments: 'TORNEIOS',
    more: 'MAIS',
  },
  luck: {
    title: 'Teste sua sorte!',
    subtitle: 'Digite seu endereço de e-mail e receba uma oferta especial do Pocket Option. Se a sorte estiver do seu lado, você receberá um presente gratuito!',
    emailPlaceholder: 'Digite seu e-mail',
    checkNow: 'Verificar agora',
  },
  apps: {
    title: 'Aplicativo web para\nqualquer dispositivo',
    android: 'Android', androidAction: 'Baixar',
    apk: 'Download APK', apkAction: 'Baixar',
    webApp: 'App Web', webAppAction: 'Abrir',
    telegram: 'Bot Telegram', telegramAction: 'Assinar',
  },
  faq: {
    title: 'Perguntas Frequentes',
    subtitle: 'Tudo que você precisa saber para começar com confiança.',
    q1: 'O que é o Pocket Option?',
    a1: 'O Pocket Option é uma plataforma de negociação online que permite aos usuários negociar opções binárias, forex, ações, criptomoedas e commodities. É projetada para iniciantes e traders experientes, oferecendo interface limpa, contas demo e ferramentas analíticas poderosas.',
    q2: 'Como abro uma conta?',
    a2: "Clique no botão 'Cadastro' no topo da página e preencha seus dados. Você pode começar com uma conta demo gratuita imediatamente — sem depósito necessário. Atualizar para uma conta real leva apenas alguns minutos.",
    q3: 'Qual é o depósito mínimo?',
    a3: 'O depósito mínimo no Pocket Option é de $5. Suportamos uma ampla variedade de métodos de pagamento, incluindo Visa, Mastercard, criptomoeda e sistemas de pagamento locais como Pix, Mercado Pago e muito mais.',
    q4: 'Há uma conta demo disponível?',
    a4: 'Sim. Cada usuário registrado tem acesso a uma conta demo gratuita carregada com $10.000 em fundos virtuais. Isso permite praticar estratégias de negociação e explorar a plataforma sem nenhum risco financeiro.',
    q5: 'Qual é a velocidade dos saques?',
    a5: 'Os saques são processados em 1 a 5 dias úteis, dependendo do método de pagamento. Os saques em criptomoeda geralmente são os mais rápidos, muitas vezes concluídos em poucas horas.',
    q6: 'O Pocket Option é seguro?',
    a6: 'O Pocket Option é operado pela Gembell Limited e regulamentado pelo IFMRRC. Usamos criptografia SSL padrão da indústria para proteger seus dados e fundos. A segurança da sua conta é nossa prioridade.',
    stillHaveQuestions: 'Ainda tem dúvidas?',
    contactSupport: 'Entre em contato com nosso suporte',
  },
  reviews: {
    title: 'O que as pessoas dizem sobre nós',
    subtitle: 'Mais de 10 milhões de clientes em todo o mundo confiam em nós e ganham diariamente.',
    showFullReview: 'Ver avaliação completa',
    allReviews: 'Todas as avaliações',
    feedbackText: 'Seu feedback nos ajuda a melhorar nossa plataforma e oferecer a melhor experiência de negociação. Veja as avaliações e publique suas próprias sugestões. Agradecemos seu feedback!',
    submitReview: 'Enviar avaliação',
    reviewsNote: 'As avaliações são publicadas sem alterações no texto original.',
  },
  footer: {
    tagline: 'A plataforma de trading mais fácil de usar',
    riskWarning: 'AVISO DE RISCO:',
    riskDisclosure: 'Divulgação de Riscos',
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
    logIn: 'Iniciar sesión',
    registration: 'Registro',
  },
  hero: {
    title: 'La Interfaz de Trading Más Fácil de Usar',
    subtitle: 'Opera más de 100 activos globales, incluidos forex, criptomonedas, acciones y materias primas en Pocket Option. Empieza a operar online con una plataforma rápida, segura y fácil de usar.',
    registrationBtn: 'Registro',
    or: 'o',
    logIn: 'Iniciar sesión',
    startOneClick: 'Comenzar con un clic',
  },
  conditions: {
    title: 'Opera en las mejores condiciones',
    minInvest: 'Monto mínimo\nde inversión',
    minTrade: 'Monto mínimo de operación',
    demoMoney: 'Dinero virtual en tu\ncuenta Demo',
    paymentMethods: 'Métodos de pago',
    noCommission: 'Sin comisión en depósito\ny retiro',
    assets: 'Activos para operar',
  },
  steps: {
    title: 'Empieza a operar en 3 simples pasos',
    subtitle: 'Comienza en Pocket Option en minutos — sin experiencia necesaria.',
    step1Title: 'Crea tu cuenta',
    step1Desc: 'Regístrate en menos de 60 segundos. Sin documentos necesarios — abre una cuenta demo gratuita al instante.',
    step2Title: 'Realiza un depósito',
    step2Desc: 'Fondea tu cuenta desde solo $5 con más de 50 métodos de pago. Cero comisiones en cada depósito.',
    step3Title: 'Empieza a operar',
    step3Desc: 'Más de 100 activos en forex, cripto, acciones y materias primas. Gana hasta el 218% por operación.',
    getStarted: 'Comenzar gratis',
  },
  why: {
    title: '¿Por qué elegirnos?',
    subtitle: 'Todo lo que necesitas para operar profesionalmente — en una plataforma para todos los niveles.',
    item1Title: 'Trading Flexible', item1Desc: 'Trading rápido y digital, operaciones exprés, pendientes y copy trading. Pagos de hasta el 218%.',
    item2Title: 'Educación Completa', item2Desc: 'Nuestra sección de ayuda contiene tutoriales, guías y varias estrategias de trading para todos los niveles.',
    item3Title: 'Instrumentos Diversos', item3Desc: 'Activos adecuados para cualquier trader: pares de divisas, materias primas, índices y acciones.',
    item4Title: 'Cuenta Demo', item4Desc: 'Prueba todos los beneficios de la plataforma usando dinero virtual. Sin inversión, sin riesgos.',
    item5Title: 'Depósitos y Retiros Fáciles', item5Desc: 'Usa el método de pago más conveniente para depósitos y retiros sin complicaciones.',
    item6Title: 'Alta Fidelización', item6Desc: 'Torneos de trading, bonos regulares, regalos, códigos promocionales y concursos para cada trader.',
    item7Title: 'Ventajas de Trading', item7Desc: 'Usa cashback y otras ventajas para una experiencia de trading más cómoda con riesgos mínimos.',
    item8Title: 'Indicadores y Señales', item8Desc: 'Todo lo que necesitas para una experiencia de trading de primer nivel, incluidos indicadores y señales populares.',
    tradeOneClick: 'Opera con un clic',
    startTrading: 'Empezar a operar',
  },
  offers: {
    paymentMethods: 'MÉTODOS DE\nPAGO',
    tradingAssets: 'ACTIVOS DE\nTRADING',
    achievements: 'LOGROS',
    apps: 'APPS PARA\nCUALQUIER DISPOSITIVO',
    tournaments: 'TORNEOS',
    more: 'MÁS',
  },
  luck: {
    title: '¡Prueba tu suerte!',
    subtitle: 'Introduce tu dirección de correo electrónico y recibe una oferta especial de Pocket Option. ¡Si la suerte está de tu lado, recibirás un regalo gratis!',
    emailPlaceholder: 'Introduce tu email',
    checkNow: 'Comprobar ahora',
  },
  apps: {
    title: 'Aplicación web para\ncualquier dispositivo',
    android: 'Android', androidAction: 'Descargar',
    apk: 'Descargar APK', apkAction: 'Descargar',
    webApp: 'App Web', webAppAction: 'Abrir',
    telegram: 'Bot de Telegram', telegramAction: 'Suscribirse',
  },
  faq: {
    title: 'Preguntas Frecuentes',
    subtitle: 'Todo lo que necesitas saber para empezar con confianza.',
    q1: '¿Qué es Pocket Option?',
    a1: 'Pocket Option es una plataforma de trading online que permite a los usuarios operar con opciones binarias, forex, acciones, criptomonedas y materias primas. Está diseñada para principiantes y traders experimentados, ofreciendo una interfaz limpia, cuentas demo y potentes herramientas analíticas.',
    q2: '¿Cómo abro una cuenta?',
    a2: "Haz clic en el botón 'Registro' en la parte superior de la página y rellena tus datos. Puedes empezar con una cuenta demo gratuita inmediatamente, sin necesidad de depósito. Actualizar a una cuenta real solo lleva unos minutos.",
    q3: '¿Cuál es el depósito mínimo?',
    a3: 'El depósito mínimo en Pocket Option es de $5. Admitimos una amplia variedad de métodos de pago, incluidos Visa, Mastercard, criptomoneda y sistemas de pago locales como Pix, Mercado Pago y más.',
    q4: '¿Hay una cuenta demo disponible?',
    a4: 'Sí. Cada usuario registrado tiene acceso a una cuenta demo gratuita con $10.000 en fondos virtuales. Esto te permite practicar estrategias de trading y explorar la plataforma sin ningún riesgo financiero.',
    q5: '¿Qué tan rápido se procesan los retiros?',
    a5: 'Los retiros generalmente se procesan en 1–5 días hábiles según el método de pago. Los retiros en criptomoneda suelen ser los más rápidos, completados en pocas horas.',
    q6: '¿Es seguro usar Pocket Option?',
    a6: 'Pocket Option es operado por Gembell Limited y regulado por el IFMRRC. Usamos cifrado SSL estándar de la industria para proteger tus datos y fondos. La seguridad de tu cuenta es nuestra máxima prioridad.',
    stillHaveQuestions: '¿Todavía tienes preguntas?',
    contactSupport: 'Contacta a nuestro equipo de soporte',
  },
  reviews: {
    title: 'Lo que dice la gente sobre nosotros',
    subtitle: 'Más de 10 millones de clientes en todo el mundo confían en nosotros y ganan diariamente.',
    showFullReview: 'Ver reseña completa',
    allReviews: 'Todas las reseñas',
    feedbackText: 'Tu opinión nos ayuda a mejorar nuestra plataforma y brindarte la mejor experiencia de trading. Ve las calificaciones y publica tus propias sugerencias. ¡Apreciamos tus comentarios!',
    submitReview: 'Enviar reseña',
    reviewsNote: 'Las reseñas se publican sin cambios en el texto original.',
  },
  footer: {
    tagline: 'La plataforma de trading más fácil de usar',
    riskWarning: 'ADVERTENCIA DE RIESGO:',
    riskDisclosure: 'Divulgación de Riesgos',
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
    logIn: 'Войти',
    registration: 'Регистрация',
  },
  hero: {
    title: 'Самый удобный торговый интерфейс',
    subtitle: 'Торгуйте более чем 100 глобальными активами, включая форекс, криптовалюту, акции и сырьё на Pocket Option. Начните торговать онлайн на быстрой, безопасной и простой платформе.',
    registrationBtn: 'Регистрация',
    or: 'или',
    logIn: 'Войти',
    startOneClick: 'Начать в один клик',
  },
  conditions: {
    title: 'Торгуйте в лучших условиях',
    minInvest: 'Минимальная сумма\nинвестиций',
    minTrade: 'Минимальная сумма сделки',
    demoMoney: 'Виртуальные деньги на\nдемо-счёте',
    paymentMethods: 'Способов оплаты',
    noCommission: 'Без комиссии за депозит\nи вывод',
    assets: 'Активов для торговли',
  },
  steps: {
    title: 'Начните торговать за 3 простых шага',
    subtitle: 'Начните работу на Pocket Option за несколько минут — опыт не нужен.',
    step1Title: 'Создайте аккаунт',
    step1Desc: 'Зарегистрируйтесь менее чем за 60 секунд. Документы не нужны — откройте бесплатный демо-счёт мгновенно.',
    step2Title: 'Пополните счёт',
    step2Desc: 'Пополните счёт от $5 с более чем 50 способами оплаты. Нулевые комиссии на каждый депозит.',
    step3Title: 'Начните торговать',
    step3Desc: 'Более 100 активов по форексу, крипте, акциям и сырью. Зарабатывайте до 218% за сделку.',
    getStarted: 'Начать бесплатно',
  },
  why: {
    title: 'Почему выбирают нас?',
    subtitle: 'Всё необходимое для профессиональной торговли — на одной платформе для всех уровней.',
    item1Title: 'Гибкая торговля', item1Desc: 'Быстрая и цифровая торговля, экспресс-сделки, отложенные ордера, копирование. Выплаты до 218%.',
    item2Title: 'Обучение', item2Desc: 'В нашем разделе справки есть учебники, руководства и различные торговые стратегии для всех уровней.',
    item3Title: 'Разнообразие инструментов', item3Desc: 'Активы для любого трейдера: валютные пары, сырьё, индексы и акции.',
    item4Title: 'Демо-счёт', item4Desc: 'Попробуйте все преимущества платформы на виртуальных деньгах. Без вложений и рисков.',
    item5Title: 'Простые пополнения и выводы', item5Desc: 'Используйте наиболее удобный способ оплаты для пополнения и вывода средств без хлопот.',
    item6Title: 'Высокая лояльность', item6Desc: 'Торговые турниры, регулярные бонусы, подарки, промокоды и конкурсы для каждого трейдера.',
    item7Title: 'Торговые преимущества', item7Desc: 'Используйте кэшбэк и другие преимущества для более комфортной торговли с минимальными рисками.',
    item8Title: 'Индикаторы и сигналы', item8Desc: 'Всё для высококлассной торговли, включая популярные индикаторы и сигналы.',
    tradeOneClick: 'Торговать в один клик',
    startTrading: 'Начать торговлю',
  },
  offers: {
    paymentMethods: 'СПОСОБЫ\nОПЛАТЫ',
    tradingAssets: 'ТОРГОВЫЕ\nАКТИВЫ',
    achievements: 'ДОСТИЖЕНИЯ',
    apps: 'ПРИЛОЖЕНИЯ\nДЛЯ УСТРОЙСТВ',
    tournaments: 'ТУРНИРЫ',
    more: 'ЕЩЁ',
  },
  luck: {
    title: 'Испытайте удачу!',
    subtitle: 'Введите свой адрес электронной почты и получите специальное предложение от Pocket Option. Если удача на вашей стороне, вы получите бесплатный подарок!',
    emailPlaceholder: 'Введите email',
    checkNow: 'Проверить',
  },
  apps: {
    title: 'Веб-приложение для\nлюбого устройства',
    android: 'Android', androidAction: 'Скачать',
    apk: 'APK-файл', apkAction: 'Скачать',
    webApp: 'Веб-приложение', webAppAction: 'Открыть',
    telegram: 'Telegram-бот', telegramAction: 'Подписаться',
  },
  faq: {
    title: 'Часто задаваемые вопросы',
    subtitle: 'Всё, что нужно знать для уверенного старта.',
    q1: 'Что такое Pocket Option?',
    a1: 'Pocket Option — это онлайн-торговая платформа, позволяющая торговать бинарными опционами, форексом, акциями, криптовалютой и сырьём. Разработана для новичков и опытных трейдеров, предлагая чистый интерфейс, демо-счета и мощные аналитические инструменты.',
    q2: 'Как открыть счёт?',
    a2: "Нажмите кнопку 'Регистрация' вверху страницы и заполните данные. Вы можете сразу начать с бесплатного демо-счёта — депозит не нужен. Переход на реальный счёт занимает несколько минут.",
    q3: 'Каков минимальный депозит?',
    a3: 'Минимальный депозит на Pocket Option составляет $5. Мы поддерживаем широкий спектр платёжных методов, включая Visa, Mastercard, криптовалюту и местные платёжные системы.',
    q4: 'Есть ли демо-счёт?',
    a4: 'Да. Каждый зарегистрированный пользователь получает доступ к бесплатному демо-счёту с $10 000 виртуальных средств. Это позволяет практиковать торговые стратегии без финансового риска.',
    q5: 'Как быстро обрабатываются выводы?',
    a5: 'Выводы обычно обрабатываются в течение 1–5 рабочих дней в зависимости от способа оплаты. Выводы в криптовалюте, как правило, самые быстрые.',
    q6: 'Безопасно ли использовать Pocket Option?',
    a6: 'Pocket Option управляется компанией Gembell Limited и регулируется IFMRRC. Мы используем SSL-шифрование для защиты ваших данных и средств.',
    stillHaveQuestions: 'Остались вопросы?',
    contactSupport: 'Связаться с нашей службой поддержки',
  },
  reviews: {
    title: 'Что говорят люди о нас',
    subtitle: 'Более 10 миллионов клиентов по всему миру доверяют нам и зарабатывают ежедневно.',
    showFullReview: 'Показать полный отзыв',
    allReviews: 'Все отзывы',
    feedbackText: 'Ваши отзывы помогают нам улучшать платформу и предоставлять лучший торговый опыт. Смотрите рейтинги и публикуйте свои предложения. Мы ценим ваши отзывы!',
    submitReview: 'Оставить отзыв',
    reviewsNote: 'Отзывы публикуются без изменений оригинального текста.',
  },
  footer: {
    tagline: 'Самая удобная торговая платформа',
    riskWarning: 'ПРЕДУПРЕЖДЕНИЕ О РИСКАХ:',
    riskDisclosure: 'Раскрытие рисков',
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
    logIn: 'Masuk',
    registration: 'Daftar',
  },
  hero: {
    title: 'Antarmuka Trading yang Paling Mudah Digunakan',
    subtitle: 'Perdagangkan lebih dari 100 aset global termasuk forex, kripto, saham, dan komoditas di Pocket Option. Mulai trading online dengan platform yang cepat, aman, dan mudah digunakan.',
    registrationBtn: 'Daftar',
    or: 'atau',
    logIn: 'Masuk',
    startOneClick: 'Mulai dengan satu klik',
  },
  conditions: {
    title: 'Lakukan trading dengan kondisi terbaik',
    minInvest: 'Jumlah investasi\nminimum',
    minTrade: 'Jumlah trading minimum',
    demoMoney: 'Uang virtual di akun\nDemo Anda',
    paymentMethods: 'Metode pembayaran',
    noCommission: 'Tanpa komisi untuk deposit\ndan penarikan',
    assets: 'Aset untuk trading',
  },
  steps: {
    title: 'Mulai trading dalam 3 langkah mudah',
    subtitle: 'Mulai di Pocket Option dalam hitungan menit — tanpa pengalaman sekalipun.',
    step1Title: 'Buat Akun Anda',
    step1Desc: 'Daftar dalam waktu kurang dari 60 detik. Tanpa dokumen — buka akun demo gratis seketika.',
    step2Title: 'Lakukan Deposit',
    step2Desc: 'Isi akun Anda mulai dari $5 dengan lebih dari 50 metode pembayaran. Nol komisi untuk setiap deposit.',
    step3Title: 'Mulai Trading',
    step3Desc: 'Lebih dari 100 aset di forex, kripto, saham, dan komoditas. Dapatkan hingga 218% per trade.',
    getStarted: 'Mulai Gratis',
  },
  why: {
    title: 'Mengapa memilih kami?',
    subtitle: 'Semua yang Anda butuhkan untuk trading profesional — dalam satu platform untuk semua level.',
    item1Title: 'Trading Fleksibel', item1Desc: 'Trading cepat dan digital, express trades, pending trades, copy trading. Pembayaran hingga 218%.',
    item2Title: 'Edukasi Lengkap', item2Desc: 'Bagian bantuan kami berisi tutorial, panduan, dan berbagai strategi trading untuk semua level.',
    item3Title: 'Instrumen Beragam', item3Desc: 'Aset cocok untuk trader mana pun: pasangan mata uang, komoditas, indeks, dan saham.',
    item4Title: 'Akun Demo', item4Desc: 'Coba semua fitur platform menggunakan uang virtual. Tanpa investasi, tanpa risiko.',
    item5Title: 'Deposit & Penarikan Mudah', item5Desc: 'Gunakan metode pembayaran paling nyaman untuk deposit dan penarikan tanpa kerumitan.',
    item6Title: 'Loyalitas Pelanggan Tinggi', item6Desc: 'Turnamen trading, bonus reguler, hadiah, kode promo, dan kontes untuk setiap trader.',
    item7Title: 'Keunggulan Trading', item7Desc: 'Gunakan cashback dan keunggulan lainnya untuk pengalaman trading yang lebih nyaman dengan risiko minimal.',
    item8Title: 'Indikator & Sinyal', item8Desc: 'Semua yang Anda butuhkan untuk pengalaman trading terbaik, termasuk indikator dan sinyal populer.',
    tradeOneClick: 'Trading dengan satu klik',
    startTrading: 'Mulai Trading',
  },
  offers: {
    paymentMethods: 'METODE\nPEMBAYARAN',
    tradingAssets: 'ASET\nTRADING',
    achievements: 'PENCAPAIAN',
    apps: 'APPS UNTUK\nSEMUA PERANGKAT',
    tournaments: 'TURNAMEN',
    more: 'LAINNYA',
  },
  luck: {
    title: 'Uji Keberuntungan Anda!',
    subtitle: 'Masukkan alamat email Anda dan dapatkan penawaran spesial dari Pocket Option. Jika keberuntungan berpihak pada Anda, Anda akan mendapatkan hadiah gratis!',
    emailPlaceholder: 'Masukkan email Anda',
    checkNow: 'Cek sekarang',
  },
  apps: {
    title: 'Aplikasi web untuk\nperangkat apa pun',
    android: 'Android', androidAction: 'Unduh',
    apk: 'Unduh APK', apkAction: 'Unduh',
    webApp: 'Web App', webAppAction: 'Buka',
    telegram: 'Bot Telegram', telegramAction: 'Berlangganan',
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    subtitle: 'Semua yang perlu Anda ketahui untuk memulai dengan percaya diri.',
    q1: 'Apa itu Pocket Option?',
    a1: 'Pocket Option adalah platform trading online yang memungkinkan pengguna memperdagangkan opsi biner, forex, saham, kripto, dan komoditas. Dirancang untuk pemula dan trader berpengalaman, menawarkan antarmuka bersih, akun demo, dan alat analitik yang kuat.',
    q2: 'Bagaimana cara membuka akun?',
    a2: "Klik tombol 'Daftar' di bagian atas halaman dan isi data Anda. Anda bisa langsung mulai dengan akun demo gratis — tanpa deposit. Upgrade ke akun nyata hanya butuh beberapa menit.",
    q3: 'Berapa deposit minimum?',
    a3: 'Deposit minimum di Pocket Option adalah $5. Kami mendukung berbagai metode pembayaran termasuk Visa, Mastercard, kripto, dan sistem pembayaran lokal.',
    q4: 'Apakah ada akun demo?',
    a4: 'Ya. Setiap pengguna terdaftar mendapatkan akses ke akun demo gratis dengan $10.000 dana virtual. Ini memungkinkan Anda berlatih strategi trading tanpa risiko finansial.',
    q5: 'Seberapa cepat penarikan diproses?',
    a5: 'Penarikan biasanya diproses dalam 1–5 hari kerja tergantung metode pembayaran. Penarikan kripto biasanya paling cepat, sering selesai dalam beberapa jam.',
    q6: 'Apakah Pocket Option aman?',
    a6: 'Pocket Option dioperasikan oleh Gembell Limited dan diatur oleh IFMRRC. Kami menggunakan enkripsi SSL standar industri untuk melindungi data dan dana Anda.',
    stillHaveQuestions: 'Masih ada pertanyaan?',
    contactSupport: 'Hubungi tim dukungan kami',
  },
  reviews: {
    title: 'Apa kata orang tentang kami',
    subtitle: 'Lebih dari 10 juta pelanggan di seluruh dunia mempercayai kami dan menghasilkan setiap hari.',
    showFullReview: 'Tampilkan ulasan lengkap',
    allReviews: 'Semua ulasan',
    feedbackText: 'Masukan Anda membantu kami meningkatkan platform dan memberikan pengalaman trading terbaik. Lihat penilaian dan posting saran Anda. Kami menghargai masukan Anda!',
    submitReview: 'Kirim ulasan',
    reviewsNote: 'Ulasan diterbitkan tanpa perubahan pada teks aslinya.',
  },
  footer: {
    tagline: 'Platform trading paling mudah digunakan',
    riskWarning: 'PERINGATAN RISIKO:',
    riskDisclosure: 'Pengungkapan Risiko',
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
