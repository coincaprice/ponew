'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { REGISTER_URL } from '@/lib/links';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { CheckCircle2, ChevronDown, PlayCircle, BarChart2, RefreshCw, Layers, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

type Lang = 'en' | 'pt' | 'es' | 'ru' | 'id';

const T: Record<Lang, {
  home: string;
  breadcrumb: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroBtn: string;
  heroNote: string;
  balance: string;
  balanceLabel: string;
  features: { icon: string; title: string; desc: string }[];
  whatTitle: string;
  whatDesc1: string;
  whatDesc2: string;
  featuresTitle: string;
  featuresList: string[];
  stepsTitle: string;
  stepsSubtitle: string;
  steps: { num: string; title: string; desc: string }[];
  transitionTitle: string;
  transitionSubtitle: string;
  transitionSteps: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaBtn: string;
  ctaNote: string;
}> = {
  en: {
    home: 'Home', breadcrumb: 'Free Demo',
    heroTitle: 'Start Trading with a Free Demo Account',
    heroSubtitle: 'Practice with $50,000 in virtual funds. No risk, no deposit required. Experience real market conditions before trading live.',
    heroBadge: 'Free · No Deposit · Unlimited',
    heroBtn: 'Start Free Demo',
    heroNote: 'No credit card required',
    balance: '$50,000', balanceLabel: 'Virtual Balance',
    features: [
      { icon: 'shield', title: 'Zero Risk', desc: 'Trade with virtual funds. No real money involved.' },
      { icon: 'chart', title: 'Real Market Data', desc: 'Live quotes, identical to real trading conditions.' },
      { icon: 'refresh', title: 'Unlimited Top-ups', desc: 'Replenish your virtual balance anytime, instantly.' },
      { icon: 'layers', title: '100+ Assets', desc: 'Forex, crypto, stocks and commodities at your fingertips.' },
    ],
    whatTitle: 'What Is a Trading Demo Account?',
    whatDesc1: 'A trading demo account is a simulated environment that allows users to practice trading using virtual funds. It provides a risk-free way to explore markets and test strategies without using real money.',
    whatDesc2: 'With a demo account, traders can access real-time market data, advanced charting tools, and the same interface used in live trading. This helps users build confidence and develop trading skills before switching to a real account.',
    featuresTitle: 'Key Features of Pocket Option Demo',
    featuresList: [
      'Real-time market data — accurate trade execution based on live quotes',
      'Wide range of assets — diversify your strategy across 100+ instruments',
      'Advanced charting tools & indicators — analyze market trends effectively',
      'Unlimited virtual balance top-ups — keep learning without restrictions',
      'Identical conditions to real trading — seamless transition to live account',
      'User-friendly interface — suitable for beginners and professionals alike',
    ],
    stepsTitle: 'How to Open a Trade on Demo',
    stepsSubtitle: 'Getting started takes less than 60 seconds. Here\'s how:',
    steps: [
      { num: '1', title: 'Select an Asset', desc: 'Choose from currency pairs, stocks, commodities, and cryptocurrencies. Over 100 instruments available.' },
      { num: '2', title: 'Enter the Trade Amount', desc: 'The minimum trade amount starts at just $1, allowing you to practice with small investments.' },
      { num: '3', title: 'Set the Trade Duration', desc: 'Choose an expiration time starting from 30 seconds or longer, depending on your strategy.' },
      { num: '4', title: 'Predict the Price Movement', desc: 'Click "Buy" if you believe the price will rise, or "Sell" if you expect it to drop. Monitor results in real-time.' },
    ],
    transitionTitle: 'Ready to Go Live?',
    transitionSubtitle: 'When you\'ve built consistency in demo, follow these steps for a smooth transition:',
    transitionSteps: [
      'Confirm your strategies are consistently profitable in demo',
      'Start with a small live balance to manage risk',
      'Use both demo and live accounts simultaneously',
      'Gradually increase your live trading volume',
      'Continuously analyze and refine your approach',
    ],
    faqTitle: 'Frequently Asked Questions',
    faq: [
      { q: 'What is the main purpose of a demo account?', a: 'To provide a risk-free environment for traders to practice strategies, learn platform features, and gain experience without using real money.' },
      { q: 'How long should I practice before switching to live trading?', a: 'There\'s no fixed timeframe. You should consistently achieve profitability and feel confident in your strategy before transitioning — this could take weeks or months.' },
      { q: 'Can I use the same strategies in demo and live trading?', a: 'While strategies can be similar, it\'s important to account for factors like slippage and emotional pressures in live trading that may not be present in demo environments.' },
      { q: 'Is the Pocket Option demo account completely free?', a: 'Yes. Pocket Option offers a completely free demo account with no deposit, no time limit, and no restrictions on balance top-ups.' },
      { q: 'How can I make the most of my demo account?', a: 'Treat demo trading seriously, maintain a trading journal, analyze your performance regularly, and gradually increase the complexity of your trades as you improve.' },
    ],
    ctaTitle: 'Start Practicing Today — It\'s Free',
    ctaSubtitle: 'Join millions of traders who started with a demo account. No deposit, no credit card, no risk.',
    ctaBtn: 'Open Free Demo Account',
    ctaNote: 'Instant access · No credit card required',
  },
  pt: {
    home: 'Início', breadcrumb: 'Demo Grátis',
    heroTitle: 'Comece a Negociar com uma Conta Demo Gratuita',
    heroSubtitle: 'Pratique com $50.000 em fundos virtuais. Sem risco, sem depósito. Experiencie condições reais de mercado antes de operar com dinheiro real.',
    heroBadge: 'Grátis · Sem Depósito · Ilimitado',
    heroBtn: 'Abrir Demo Grátis',
    heroNote: 'Sem cartão de crédito',
    balance: '$50.000', balanceLabel: 'Saldo Virtual',
    features: [
      { icon: 'shield', title: 'Zero Risco', desc: 'Opere com fundos virtuais. Sem dinheiro real envolvido.' },
      { icon: 'chart', title: 'Dados Reais de Mercado', desc: 'Cotações ao vivo, idênticas às condições reais de trading.' },
      { icon: 'refresh', title: 'Recargas Ilimitadas', desc: 'Recarregue seu saldo virtual a qualquer momento, instantaneamente.' },
      { icon: 'layers', title: '100+ Ativos', desc: 'Forex, cripto, ações e commodities ao seu alcance.' },
    ],
    whatTitle: 'O Que É uma Conta Demo de Trading?',
    whatDesc1: 'Uma conta demo de trading é um ambiente simulado que permite aos usuários praticar o trading usando fundos virtuais. É uma forma sem risco de explorar mercados e testar estratégias sem usar dinheiro real.',
    whatDesc2: 'Com uma conta demo, os traders têm acesso a dados de mercado em tempo real, ferramentas avançadas de gráficos e a mesma interface usada no trading real. Isso ajuda os usuários a construir confiança e desenvolver habilidades antes de migrar para uma conta real.',
    featuresTitle: 'Principais Recursos da Demo Pocket Option',
    featuresList: [
      'Dados de mercado em tempo real — execução precisa com base em cotações ao vivo',
      'Ampla variedade de ativos — diversifique sua estratégia com 100+ instrumentos',
      'Ferramentas avançadas e indicadores — analise tendências de mercado com eficácia',
      'Recargas ilimitadas de saldo virtual — continue aprendendo sem restrições',
      'Condições idênticas ao trading real — transição tranquila para conta real',
      'Interface intuitiva — adequada para iniciantes e profissionais',
    ],
    stepsTitle: 'Como Abrir uma Operação na Demo',
    stepsSubtitle: 'Comece em menos de 60 segundos. Veja como:',
    steps: [
      { num: '1', title: 'Selecione um Ativo', desc: 'Escolha entre pares de moedas, ações, commodities e criptomoedas. Mais de 100 instrumentos disponíveis.' },
      { num: '2', title: 'Insira o Valor da Operação', desc: 'O valor mínimo começa em apenas $1, permitindo praticar com pequenos investimentos.' },
      { num: '3', title: 'Defina a Duração', desc: 'Escolha um tempo de expiração a partir de 30 segundos ou mais, dependendo da sua estratégia.' },
      { num: '4', title: 'Preveja o Movimento do Preço', desc: 'Clique em "Comprar" se acredita que o preço vai subir, ou "Vender" se espera que caia. Monitore em tempo real.' },
    ],
    transitionTitle: 'Pronto para Operar ao Vivo?',
    transitionSubtitle: 'Quando tiver consistência na demo, siga estes passos para uma transição tranquila:',
    transitionSteps: [
      'Confirme que suas estratégias são consistentemente lucrativas na demo',
      'Comece com um pequeno saldo real para gerenciar o risco',
      'Use as contas demo e real simultaneamente',
      'Aumente gradualmente seu volume de trading ao vivo',
      'Analise e refine continuamente sua abordagem',
    ],
    faqTitle: 'Perguntas Frequentes',
    faq: [
      { q: 'Qual é o principal objetivo de uma conta demo?', a: 'Fornecer um ambiente sem risco para os traders praticarem estratégias, aprenderem os recursos da plataforma e ganharem experiência sem usar dinheiro real.' },
      { q: 'Quanto tempo devo praticar antes de operar ao vivo?', a: 'Não há prazo fixo. Você deve alcançar lucratividade consistente e sentir confiança na sua estratégia antes de fazer a transição.' },
      { q: 'Posso usar as mesmas estratégias na demo e ao vivo?', a: 'As estratégias podem ser semelhantes, mas é importante considerar fatores como slippage e pressões emocionais no trading real.' },
      { q: 'A conta demo da Pocket Option é totalmente gratuita?', a: 'Sim. A Pocket Option oferece uma conta demo completamente gratuita, sem depósito, sem prazo e sem restrições de recarga.' },
      { q: 'Como aproveitar ao máximo minha conta demo?', a: 'Trate o trading demo a sério, mantenha um diário, analise seu desempenho regularmente e aumente gradualmente a complexidade das suas operações.' },
    ],
    ctaTitle: 'Comece a Praticar Hoje — É Grátis',
    ctaSubtitle: 'Junte-se a milhões de traders que começaram com uma conta demo. Sem depósito, sem cartão, sem risco.',
    ctaBtn: 'Abrir Conta Demo Grátis',
    ctaNote: 'Acesso instantâneo · Sem cartão de crédito',
  },
  es: {
    home: 'Inicio', breadcrumb: 'Demo Gratis',
    heroTitle: 'Empieza a Operar con una Cuenta Demo Gratuita',
    heroSubtitle: 'Practica con $50,000 en fondos virtuales. Sin riesgo, sin depósito. Experimenta condiciones reales de mercado antes de operar con dinero real.',
    heroBadge: 'Gratis · Sin Depósito · Ilimitado',
    heroBtn: 'Iniciar Demo Gratis',
    heroNote: 'Sin tarjeta de crédito',
    balance: '$50,000', balanceLabel: 'Saldo Virtual',
    features: [
      { icon: 'shield', title: 'Cero Riesgo', desc: 'Opera con fondos virtuales. Sin dinero real involucrado.' },
      { icon: 'chart', title: 'Datos Reales del Mercado', desc: 'Cotizaciones en vivo, idénticas a condiciones reales de trading.' },
      { icon: 'refresh', title: 'Recargas Ilimitadas', desc: 'Recarga tu saldo virtual en cualquier momento, instantáneamente.' },
      { icon: 'layers', title: '100+ Activos', desc: 'Forex, cripto, acciones y materias primas a tu alcance.' },
    ],
    whatTitle: '¿Qué Es una Cuenta Demo de Trading?',
    whatDesc1: 'Una cuenta demo de trading es un entorno simulado que permite a los usuarios practicar el trading usando fondos virtuales. Es una forma sin riesgo de explorar mercados y probar estrategias sin usar dinero real.',
    whatDesc2: 'Con una cuenta demo, los traders pueden acceder a datos de mercado en tiempo real, herramientas avanzadas de gráficos y la misma interfaz usada en el trading real. Esto ayuda a los usuarios a ganar confianza y desarrollar habilidades antes de cambiar a una cuenta real.',
    featuresTitle: 'Características Clave de la Demo de Pocket Option',
    featuresList: [
      'Datos de mercado en tiempo real — ejecución precisa basada en cotizaciones en vivo',
      'Amplia variedad de activos — diversifica tu estrategia con 100+ instrumentos',
      'Herramientas avanzadas e indicadores — analiza tendencias del mercado eficazmente',
      'Recargas ilimitadas de saldo virtual — sigue aprendiendo sin restricciones',
      'Condiciones idénticas al trading real — transición perfecta a cuenta real',
      'Interfaz intuitiva — adecuada para principiantes y profesionales',
    ],
    stepsTitle: 'Cómo Abrir una Operación en Demo',
    stepsSubtitle: 'Empezar toma menos de 60 segundos. Así funciona:',
    steps: [
      { num: '1', title: 'Selecciona un Activo', desc: 'Elige entre pares de divisas, acciones, materias primas y criptomonedas. Más de 100 instrumentos disponibles.' },
      { num: '2', title: 'Ingresa el Monto de Operación', desc: 'El monto mínimo comienza en solo $1, permitiéndote practicar con pequeñas inversiones.' },
      { num: '3', title: 'Establece la Duración', desc: 'Elige un tiempo de vencimiento desde 30 segundos o más, según tu estrategia.' },
      { num: '4', title: 'Predice el Movimiento del Precio', desc: 'Haz clic en "Comprar" si crees que el precio subirá, o "Vender" si esperas que baje. Monitorea en tiempo real.' },
    ],
    transitionTitle: '¿Listo para Operar en Vivo?',
    transitionSubtitle: 'Cuando hayas logrado consistencia en demo, sigue estos pasos:',
    transitionSteps: [
      'Confirma que tus estrategias son consistentemente rentables en demo',
      'Comienza con un pequeño saldo real para gestionar el riesgo',
      'Usa las cuentas demo y real simultáneamente',
      'Aumenta gradualmente tu volumen de trading en vivo',
      'Analiza y refina continuamente tu enfoque',
    ],
    faqTitle: 'Preguntas Frecuentes',
    faq: [
      { q: '¿Cuál es el propósito principal de una cuenta demo?', a: 'Proporcionar un entorno sin riesgo para que los traders practiquen estrategias, aprendan las funciones de la plataforma y ganen experiencia sin usar dinero real.' },
      { q: '¿Cuánto tiempo debo practicar antes de operar en vivo?', a: 'No hay un plazo fijo. Debes lograr rentabilidad consistente y sentirte seguro con tu estrategia antes de hacer la transición.' },
      { q: '¿Puedo usar las mismas estrategias en demo y en vivo?', a: 'Las estrategias pueden ser similares, pero es importante considerar factores como el deslizamiento y las presiones emocionales en el trading real.' },
      { q: '¿La cuenta demo de Pocket Option es completamente gratuita?', a: 'Sí. Pocket Option ofrece una cuenta demo completamente gratuita, sin depósito, sin límite de tiempo y sin restricciones de recarga.' },
      { q: '¿Cómo aprovechar al máximo mi cuenta demo?', a: 'Trata el trading demo en serio, mantén un diario, analiza tu rendimiento regularmente y aumenta gradualmente la complejidad de tus operaciones.' },
    ],
    ctaTitle: 'Empieza a Practicar Hoy — Es Gratis',
    ctaSubtitle: 'Únete a millones de traders que comenzaron con una cuenta demo. Sin depósito, sin tarjeta, sin riesgo.',
    ctaBtn: 'Abrir Cuenta Demo Gratis',
    ctaNote: 'Acceso instantáneo · Sin tarjeta de crédito',
  },
  ru: {
    home: 'Главная', breadcrumb: 'Демо счёт',
    heroTitle: 'Начните Торговать с Бесплатным Демо-счётом',
    heroSubtitle: 'Торгуйте на $50 000 виртуальных средств. Без риска, без депозита. Ощутите реальные рыночные условия до начала реальной торговли.',
    heroBadge: 'Бесплатно · Без депозита · Без ограничений',
    heroBtn: 'Открыть Демо бесплатно',
    heroNote: 'Карта не нужна',
    balance: '$50 000', balanceLabel: 'Виртуальный баланс',
    features: [
      { icon: 'shield', title: 'Нулевой риск', desc: 'Торгуйте на виртуальные средства без реальных потерь.' },
      { icon: 'chart', title: 'Реальные данные рынка', desc: 'Живые котировки, идентичные реальным торговым условиям.' },
      { icon: 'refresh', title: 'Неограниченное пополнение', desc: 'Пополняйте виртуальный баланс в любое время мгновенно.' },
      { icon: 'layers', title: '100+ активов', desc: 'Форекс, крипто, акции и товары — всё в вашем распоряжении.' },
    ],
    whatTitle: 'Что Такое Демо-счёт для Трейдинга?',
    whatDesc1: 'Демо-счёт для трейдинга — это симулированная среда, позволяющая пользователям практиковать торговлю с использованием виртуальных средств. Это безрисковый способ изучить рынки и протестировать стратегии без использования реальных денег.',
    whatDesc2: 'С демо-счётом трейдеры получают доступ к рыночным данным в реальном времени, продвинутым инструментам графического анализа и тому же интерфейсу, что и в реальной торговле. Это помогает пользователям обрести уверенность и развить торговые навыки перед переходом на реальный счёт.',
    featuresTitle: 'Ключевые особенности демо Pocket Option',
    featuresList: [
      'Рыночные данные в реальном времени — точное исполнение по живым котировкам',
      'Широкий выбор активов — диверсифицируйте стратегию на 100+ инструментах',
      'Продвинутые графики и индикаторы — эффективный анализ рыночных тенденций',
      'Неограниченное пополнение виртуального баланса — учитесь без ограничений',
      'Идентичные условия реальной торговли — плавный переход на реальный счёт',
      'Удобный интерфейс — подходит для новичков и профессионалов',
    ],
    stepsTitle: 'Как открыть сделку на демо-счёте',
    stepsSubtitle: 'Начать можно менее чем за 60 секунд:',
    steps: [
      { num: '1', title: 'Выберите актив', desc: 'Выбирайте из валютных пар, акций, сырьевых товаров и криптовалют. Доступно более 100 инструментов.' },
      { num: '2', title: 'Введите сумму сделки', desc: 'Минимальная сумма начинается от $1, что позволяет практиковаться с небольшими вложениями.' },
      { num: '3', title: 'Установите длительность', desc: 'Выберите время экспирации от 30 секунд и выше в зависимости от вашей стратегии.' },
      { num: '4', title: 'Предскажите движение цены', desc: 'Нажмите «Купить», если считаете, что цена вырастет, или «Продать», если ожидаете падения. Следите за результатами в реальном времени.' },
    ],
    transitionTitle: 'Готовы к реальной торговле?',
    transitionSubtitle: 'Когда вы достигнете стабильных результатов на демо, следуйте этим шагам:',
    transitionSteps: [
      'Убедитесь, что ваши стратегии стабильно прибыльны на демо',
      'Начните с небольшого реального баланса для управления рисками',
      'Используйте одновременно демо и реальный счёт',
      'Постепенно увеличивайте объём реальной торговли',
      'Постоянно анализируйте и совершенствуйте свой подход',
    ],
    faqTitle: 'Часто задаваемые вопросы',
    faq: [
      { q: 'В чём главная цель демо-счёта?', a: 'Предоставить безопасную среду для отработки стратегий, изучения функций платформы и получения опыта без использования реальных денег.' },
      { q: 'Сколько времени практиковаться перед реальной торговлей?', a: 'Фиксированных сроков нет. Важно достичь стабильной прибыльности и уверенности в своей стратегии — это может занять недели или месяцы.' },
      { q: 'Можно ли использовать одни и те же стратегии в демо и реальной торговле?', a: 'Стратегии могут быть похожими, однако нужно учитывать такие факторы, как проскальзывание и эмоциональное давление, характерные для реальной торговли.' },
      { q: 'Демо-счёт Pocket Option бесплатный?', a: 'Да. Pocket Option предлагает полностью бесплатный демо-счёт без депозита, без ограничений по времени и по количеству пополнений.' },
      { q: 'Как максимально использовать демо-счёт?', a: 'Относитесь к демо-торговле серьёзно, ведите торговый журнал, регулярно анализируйте результаты и постепенно усложняйте свои сделки по мере роста мастерства.' },
    ],
    ctaTitle: 'Начните практиковаться сегодня — это бесплатно',
    ctaSubtitle: 'Присоединяйтесь к миллионам трейдеров, начавших с демо-счёта. Без депозита, без карты, без риска.',
    ctaBtn: 'Открыть бесплатный демо-счёт',
    ctaNote: 'Мгновенный доступ · Карта не требуется',
  },
  id: {
    home: 'Beranda', breadcrumb: 'Demo Gratis',
    heroTitle: 'Mulai Trading dengan Akun Demo Gratis',
    heroSubtitle: 'Berlatih dengan $50.000 dana virtual. Tanpa risiko, tanpa deposit. Rasakan kondisi pasar nyata sebelum trading sungguhan.',
    heroBadge: 'Gratis · Tanpa Deposit · Tak Terbatas',
    heroBtn: 'Mulai Demo Gratis',
    heroNote: 'Tanpa kartu kredit',
    balance: '$50.000', balanceLabel: 'Saldo Virtual',
    features: [
      { icon: 'shield', title: 'Nol Risiko', desc: 'Trading dengan dana virtual. Tidak ada uang nyata yang terlibat.' },
      { icon: 'chart', title: 'Data Pasar Nyata', desc: 'Harga live, identik dengan kondisi trading sungguhan.' },
      { icon: 'refresh', title: 'Top-up Tak Terbatas', desc: 'Isi ulang saldo virtual kapan saja, secara instan.' },
      { icon: 'layers', title: '100+ Aset', desc: 'Forex, kripto, saham, dan komoditas tersedia lengkap.' },
    ],
    whatTitle: 'Apa Itu Akun Demo Trading?',
    whatDesc1: 'Akun demo trading adalah lingkungan simulasi yang memungkinkan pengguna berlatih trading menggunakan dana virtual. Ini adalah cara bebas risiko untuk menjelajahi pasar dan menguji strategi tanpa menggunakan uang nyata.',
    whatDesc2: 'Dengan akun demo, trader dapat mengakses data pasar real-time, alat charting canggih, dan antarmuka yang sama dengan trading nyata. Ini membantu pengguna membangun kepercayaan diri dan mengembangkan keterampilan trading sebelum beralih ke akun nyata.',
    featuresTitle: 'Fitur Utama Demo Pocket Option',
    featuresList: [
      'Data pasar real-time — eksekusi akurat berdasarkan harga live',
      'Berbagai pilihan aset — diversifikasi strategi dengan 100+ instrumen',
      'Alat charting & indikator canggih — analisis tren pasar secara efektif',
      'Top-up saldo virtual tak terbatas — terus belajar tanpa batasan',
      'Kondisi identik dengan trading nyata — transisi mulus ke akun real',
      'Antarmuka ramah pengguna — cocok untuk pemula dan profesional',
    ],
    stepsTitle: 'Cara Membuka Transaksi di Demo',
    stepsSubtitle: 'Mulai dalam kurang dari 60 detik. Begini caranya:',
    steps: [
      { num: '1', title: 'Pilih Aset', desc: 'Pilih dari pasangan mata uang, saham, komoditas, dan kripto. Lebih dari 100 instrumen tersedia.' },
      { num: '2', title: 'Masukkan Jumlah Transaksi', desc: 'Jumlah minimum dimulai dari $1, memungkinkan Anda berlatih dengan investasi kecil.' },
      { num: '3', title: 'Tentukan Durasi', desc: 'Pilih waktu kedaluwarsa mulai dari 30 detik atau lebih, tergantung strategi Anda.' },
      { num: '4', title: 'Prediksi Pergerakan Harga', desc: 'Klik "Beli" jika yakin harga akan naik, atau "Jual" jika perkiraan harga akan turun. Pantau hasilnya secara real-time.' },
    ],
    transitionTitle: 'Siap untuk Trading Nyata?',
    transitionSubtitle: 'Setelah konsisten di demo, ikuti langkah-langkah ini:',
    transitionSteps: [
      'Pastikan strategi Anda konsisten menghasilkan keuntungan di demo',
      'Mulai dengan saldo kecil di akun nyata untuk manajemen risiko',
      'Gunakan akun demo dan nyata secara bersamaan',
      'Tingkatkan volume trading nyata secara bertahap',
      'Terus analisis dan sempurnakan pendekatan Anda',
    ],
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faq: [
      { q: 'Apa tujuan utama akun demo?', a: 'Memberikan lingkungan bebas risiko bagi trader untuk berlatih strategi, mempelajari fitur platform, dan mendapatkan pengalaman tanpa menggunakan uang nyata.' },
      { q: 'Berapa lama harus berlatih sebelum trading nyata?', a: 'Tidak ada batas waktu yang pasti. Anda harus mencapai profitabilitas yang konsisten dan merasa yakin dengan strategi sebelum beralih.' },
      { q: 'Bisakah menggunakan strategi yang sama di demo dan trading nyata?', a: 'Strategi bisa serupa, namun penting untuk mempertimbangkan faktor seperti slippage dan tekanan emosional yang mungkin tidak ada di lingkungan demo.' },
      { q: 'Apakah akun demo Pocket Option benar-benar gratis?', a: 'Ya. Pocket Option menawarkan akun demo yang sepenuhnya gratis, tanpa deposit, tanpa batas waktu, dan tanpa batasan top-up.' },
      { q: 'Bagaimana memaksimalkan akun demo?', a: 'Perlakukan trading demo dengan serius, buat jurnal trading, analisis performa secara rutin, dan tingkatkan kompleksitas transaksi seiring perkembangan Anda.' },
    ],
    ctaTitle: 'Mulai Berlatih Hari Ini — Gratis',
    ctaSubtitle: 'Bergabunglah dengan jutaan trader yang memulai dengan akun demo. Tanpa deposit, tanpa kartu, tanpa risiko.',
    ctaBtn: 'Buka Akun Demo Gratis',
    ctaNote: 'Akses instan · Tanpa kartu kredit',
  },
};

const FEATURE_ICONS: Record<string, React.ReactNode> = {
  shield: <ShieldCheck style={{ width: 28, height: 28, color: '#0099FA' }} />,
  chart: <BarChart2 style={{ width: 28, height: 28, color: '#0099FA' }} />,
  refresh: <RefreshCw style={{ width: 28, height: 28, color: '#0099FA' }} />,
  layers: <Layers style={{ width: 28, height: 28, color: '#0099FA' }} />,
};

export function FreeDemoPage({ lang }: { lang: Lang }) {
  const t = T[lang] ?? T.en;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: "'Montserrat', 'Inter', sans-serif" }}>
      <BreadcrumbJsonLd lang={lang} slug="free-demo" homeName={t.home} pageName={t.breadcrumb} />
      <Header lang={lang} />

      {/* HERO */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #020d1a 0%, #061829 40%, #0a2540 70%, #082038 100%)', paddingTop: '120px', paddingBottom: '90px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/header-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center right', opacity: 0.07 }} />
        <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '55%', height: '140%', background: 'radial-gradient(ellipse, rgba(0,153,250,0.12) 0%, transparent 65%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '40%', height: '100%', background: 'radial-gradient(ellipse, rgba(0,82,204,0.1) 0%, transparent 65%)', borderRadius: '50%' }} />

        <div className="container mx-auto px-6 max-w-7xl" style={{ position: 'relative', zIndex: 2 }}>
          {/* BREADCRUMB inside hero */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginBottom: '36px' }}>
            <a href={lang === 'en' ? '/' : `/${lang}`} style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{t.home}</a>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{t.breadcrumb}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
            {/* LEFT: text */}
            <div style={{ flex: '1 1 0', minWidth: 0 }}>
              <h1 style={{ fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-0.01em' }}>
                {t.heroTitle}
              </h1>

              <p style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: '40px', maxWidth: '520px' }}>
                {t.heroSubtitle}
              </p>

              <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(90deg, #0099FA, #0052cc)', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', letterSpacing: '0.02em', boxShadow: '0 8px 30px rgba(0,153,250,0.35)', transition: 'opacity 0.2s' }}>
                <PlayCircle style={{ width: 18, height: 18 }} />
                {t.heroBtn}
              </a>
            </div>

            {/* RIGHT: image */}
            <div className="hidden md:flex" style={{ flex: '0 0 420px', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/images/free-demo-hero.png"
                alt="Pocket Option trading demo account on mobile"
                style={{ width: '100%', maxWidth: '420px', objectFit: 'contain', filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES CARDS */}
      <section style={{ background: '#fff', padding: '0' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderBottom: '1px solid #E8EDF5' }}>
            {t.features.map((f, i) => (
              <div key={i} style={{ padding: '36px 28px', borderRight: i < 3 ? '1px solid #E8EDF5' : 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(0,153,250,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {FEATURE_ICONS[f.icon]}
                </div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: '#0D1B2A' }}>{f.title}</div>
                <div style={{ fontSize: '13px', color: '#6B7E99', lineHeight: 1.65 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS */}
      <section style={{ background: '#F8FAFC', padding: '80px 0' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#0D1B2A', lineHeight: 1.25, marginBottom: '20px' }}>{t.whatTitle}</h2>
              <p style={{ fontSize: '16px', color: '#4A5E78', lineHeight: 1.8, marginBottom: '16px' }}>{t.whatDesc1}</p>
              <p style={{ fontSize: '16px', color: '#4A5E78', lineHeight: 1.8 }}>{t.whatDesc2}</p>
              <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '32px', background: 'linear-gradient(90deg, #0099FA, #0052cc)', color: '#fff', fontWeight: 700, fontSize: '14px', padding: '13px 28px', borderRadius: '6px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,153,250,0.25)' }}>
                {t.heroBtn}
              </a>
            </div>
            <div>
              <div style={{ background: '#0D1B2A', borderRadius: '16px', padding: '32px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0099FA', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '24px' }}>{t.featuresTitle}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {t.featuresList.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle2 style={{ width: 18, height: 18, color: '#22c55e', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO TRADE STEPS */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: '#0D1B2A', lineHeight: 1.25, marginBottom: '14px' }}>{t.stepsTitle}</h2>
            <p style={{ fontSize: '16px', color: '#6B7E99', maxWidth: '480px', margin: '0 auto' }}>{t.stepsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.steps.map((step, i) => (
              <div key={i} style={{ position: 'relative', background: '#F8FAFC', borderRadius: '14px', padding: '32px 24px', border: '1px solid #E8EDF5' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'linear-gradient(135deg, #0099FA, #0052cc)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 4px 16px rgba(0,153,250,0.25)' }}>
                  <span style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>{step.num}</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0D1B2A', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: '#6B7E99', lineHeight: 1.7 }}>{step.desc}</p>
                {i < t.steps.length - 1 && (
                  <div className="hidden lg:block" style={{ position: 'absolute', top: '42px', right: '-14px', width: '28px', height: '2px', background: 'linear-gradient(90deg, #0099FA, rgba(0,153,250,0.2))', zIndex: 1 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSITION TO LIVE */}
      <section style={{ background: 'linear-gradient(135deg, #061829 0%, #0a2540 50%, #061829 100%)', padding: '80px 0' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: '16px' }}>{t.transitionTitle}</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '36px' }}>{t.transitionSubtitle}</p>
              <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(90deg, #0099FA, #0052cc)', color: '#fff', fontWeight: 700, fontSize: '14px', padding: '13px 28px', borderRadius: '6px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,153,250,0.3)' }}>
                {t.ctaBtn}
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {t.transitionSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '16px 20px' }}>
                  <div style={{ minWidth: '28px', height: '28px', borderRadius: '50%', background: 'rgba(0,153,250,0.18)', border: '1px solid rgba(0,153,250,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#0099FA' }}>{i + 1}</span>
                  </div>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F8FAFC', padding: '80px 0' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, color: '#0D1B2A' }}>{t.faqTitle}</h2>
          </div>
          <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {t.faq.map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '12px', border: `1px solid ${openFaq === i ? '#0099FA' : '#E8EDF5'}`, overflow: 'hidden', transition: 'border-color 0.2s' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: '#0D1B2A', lineHeight: 1.5 }}>{item.q}</span>
                  <ChevronDown style={{ width: 18, height: 18, color: '#0099FA', flexShrink: 0, transition: 'transform 0.25s', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', fontSize: '14px', color: '#4A5E78', lineHeight: 1.8 }}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0099FA 0%, #0052cc 50%, #002EA8 100%)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '50%', height: '160%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 65%)', borderRadius: '50%' }} />
        <div className="container mx-auto px-6 max-w-7xl" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.25 }}>{t.ctaTitle}</h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', maxWidth: '520px', margin: '0 auto 40px' }}>{t.ctaSubtitle}</p>
          <a href={REGISTER_URL} target="_blank" rel="nofollow sponsored noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: '#0052cc', fontWeight: 800, fontSize: '15px', padding: '17px 40px', borderRadius: '6px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.2)', letterSpacing: '0.01em' }}>
            <PlayCircle style={{ width: 18, height: 18 }} />
            {t.ctaBtn}
          </a>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
