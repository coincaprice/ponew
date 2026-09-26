'use client';

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

type Lang = "en" | "pt" | "es" | "ru" | "id";

const T: Record<Lang, {
  home: string; breadcrumb: string; heroTitle: string; heroDesc: string;
  datePrefix: string; assetsCol: string; payoutCol: string; footerNote: string;
  catCurrency: string; catCommodities: string; catStocks: string; catCrypto: string; catIndices: string;
  tabCurrent: string; tabGeneral: string; tabOtc: string;
}> = {
  en: {
    home: "Home", breadcrumb: "Assets trading schedule",
    heroTitle: "Assets trading schedule",
    heroDesc: "Use the asset schedule to determine the best time to trade. Plan your session based on exchange and OTC asset availability.",
    datePrefix: "Current list of available assets with corresponding payouts. Relevant for:",
    assetsCol: "Assets", payoutCol: "Payout",
    footerNote: "* The payout percentage may change depending on market conditions. OTC (Over-The-Counter) assets are available 24/7.",
    catCurrency: "Currency", catCommodities: "Commodities", catStocks: "Stocks", catCrypto: "Cryptocurrencies", catIndices: "Indices",
    tabCurrent: "CURRENT", tabGeneral: "GENERAL", tabOtc: "OTC",
  },
  pt: {
    home: "Início", breadcrumb: "Calendário de ativos",
    heroTitle: "Calendário de ativos",
    heroDesc: "Use o calendário de ativos para determinar o melhor momento para negociar. Planeje sua sessão com base na disponibilidade de ativos de câmbio e OTC.",
    datePrefix: "Lista atual de ativos disponíveis com os respectivos pagamentos. Válido para:",
    assetsCol: "Ativos", payoutCol: "Retorno",
    footerNote: "* O percentual de retorno pode mudar dependendo das condições de mercado. Os ativos OTC (Over-The-Counter) estão disponíveis 24/7.",
    catCurrency: "Moedas", catCommodities: "Commodities", catStocks: "Ações", catCrypto: "Criptomoedas", catIndices: "Índices",
    tabCurrent: "ATUAL", tabGeneral: "GERAL", tabOtc: "OTC",
  },
  es: {
    home: "Inicio", breadcrumb: "Calendario de activos",
    heroTitle: "Calendario de activos",
    heroDesc: "Usa el calendario de activos para determinar el mejor momento para operar. Planifica tu sesión según la disponibilidad de activos de bolsa y OTC.",
    datePrefix: "Lista actual de activos disponibles con sus correspondientes pagos. Válido para:",
    assetsCol: "Activos", payoutCol: "Pago",
    footerNote: "* El porcentaje de pago puede cambiar según las condiciones del mercado. Los activos OTC (Over-The-Counter) están disponibles las 24 horas, los 7 días de la semana.",
    catCurrency: "Divisas", catCommodities: "Materias primas", catStocks: "Acciones", catCrypto: "Criptomonedas", catIndices: "Índices",
    tabCurrent: "ACTUAL", tabGeneral: "GENERAL", tabOtc: "OTC",
  },
  ru: {
    home: "Главная", breadcrumb: "Расписание активов",
    heroTitle: "Расписание активов",
    heroDesc: "Используйте расписание активов, чтобы определить лучшее время для торговли. Планируйте свою сессию на основе доступности биржевых и OTC-активов.",
    datePrefix: "Текущий список доступных активов с соответствующими выплатами. Актуально для:",
    assetsCol: "Активы", payoutCol: "Выплата",
    footerNote: "* Процент выплат может меняться в зависимости от рыночных условий. OTC-активы (внебиржевые) доступны 24/7.",
    catCurrency: "Валюты", catCommodities: "Товары", catStocks: "Акции", catCrypto: "Криптовалюты", catIndices: "Индексы",
    tabCurrent: "ТЕКУЩИЕ", tabGeneral: "ОБЩИЕ", tabOtc: "OTC",
  },
  id: {
    home: "Beranda", breadcrumb: "Jadwal aset trading",
    heroTitle: "Jadwal aset trading",
    heroDesc: "Gunakan jadwal aset untuk menentukan waktu terbaik untuk trading. Rencanakan sesi Anda berdasarkan ketersediaan aset bursa dan OTC.",
    datePrefix: "Daftar aset tersedia saat ini dengan payout yang sesuai. Berlaku untuk:",
    assetsCol: "Aset", payoutCol: "Payout",
    footerNote: "* Persentase payout dapat berubah tergantung kondisi pasar. Aset OTC (Over-The-Counter) tersedia 24/7.",
    catCurrency: "Mata Uang", catCommodities: "Komoditas", catStocks: "Saham", catCrypto: "Kripto", catIndices: "Indeks",
    tabCurrent: "SAAT INI", tabGeneral: "UMUM", tabOtc: "OTC",
  },
};

type Asset = { name: string; payout: number };
const ASSETS: Record<string, Asset[]> = {
  Currency: [
    { name: "EUR/USD OTC", payout: 92 }, { name: "AUD/CAD OTC", payout: 92 }, { name: "AUD/CHF OTC", payout: 92 },
    { name: "AUD/USD OTC", payout: 92 }, { name: "CHF/JPY OTC", payout: 92 }, { name: "GBP/AUD OTC", payout: 92 },
    { name: "USD/DZD OTC", payout: 92 }, { name: "USD/ARS OTC", payout: 92 }, { name: "YER/USD OTC", payout: 92 },
    { name: "LBP/USD OTC", payout: 92 }, { name: "BHD/CNY OTC", payout: 92 }, { name: "AED/CNY OTC", payout: 92 },
    { name: "ZAR/USD OTC", payout: 92 }, { name: "UAH/USD OTC", payout: 92 }, { name: "CHF/NOK OTC", payout: 91 },
    { name: "EUR/HUF OTC", payout: 91 }, { name: "EUR/GBP OTC", payout: 90 }, { name: "USD/CNH OTC", payout: 90 },
    { name: "USD/MXN OTC", payout: 90 }, { name: "CAD/CHF OTC", payout: 88 }, { name: "USD/CAD OTC", payout: 87 },
    { name: "EUR/NZD OTC", payout: 86 }, { name: "USD/CHF OTC", payout: 85 }, { name: "USD/CLP OTC", payout: 85 },
    { name: "GBP/USD OTC", payout: 83 }, { name: "USD/JPY OTC", payout: 80 }, { name: "EUR/RUB OTC", payout: 79 },
    { name: "EUR/JPY OTC", payout: 77 }, { name: "USD/THB OTC", payout: 76 }, { name: "USD/IDR OTC", payout: 76 },
    { name: "AUD/NZD OTC", payout: 75 }, { name: "AUD/JPY OTC", payout: 74 }, { name: "JOD/CNY OTC", payout: 72 },
    { name: "USD/INR OTC", payout: 69 }, { name: "USD/MYR OTC", payout: 67 }, { name: "USD/COP OTC", payout: 67 },
    { name: "EUR/TRY OTC", payout: 66 }, { name: "USD/BRL OTC", payout: 62 }, { name: "TND/USD OTC", payout: 60 },
    { name: "CAD/JPY OTC", payout: 59 }, { name: "KES/USD OTC", payout: 57 }, { name: "NGN/USD OTC", payout: 56 },
    { name: "QAR/CNY OTC", payout: 53 }, { name: "USD/EGP OTC", payout: 52 }, { name: "USD/RUB OTC", payout: 51 },
    { name: "USD/PKR OTC", payout: 49 }, { name: "MAD/USD OTC", payout: 47 }, { name: "USD/VND OTC", payout: 43 },
    { name: "USD/PHP OTC", payout: 41 }, { name: "USD/SGD OTC", payout: 39 }, { name: "EUR/CHF OTC", payout: 38 },
    { name: "NZD/USD OTC", payout: 36 }, { name: "GBP/JPY OTC", payout: 35 }, { name: "OMR/CNY OTC", payout: 30 },
    { name: "NZD/JPY OTC", payout: 28 }, { name: "SAR/CNY OTC", payout: 28 }, { name: "USD/BDT OTC", payout: 25 },
  ],
  Commodities: [
    { name: "Gold OTC", payout: 80 }, { name: "Brent Oil OTC", payout: 80 }, { name: "WTI Crude Oil OTC", payout: 80 },
    { name: "Silver OTC", payout: 80 }, { name: "Natural Gas OTC", payout: 45 }, { name: "Platinum spot OTC", payout: 45 },
    { name: "Palladium spot OTC", payout: 45 },
  ],
  Stocks: [
    { name: "NVIDIA OTC", payout: 96 }, { name: "Apple OTC", payout: 92 }, { name: "McDonald's OTC", payout: 92 },
    { name: "FACEBOOK INC OTC", payout: 92 }, { name: "Tesla OTC", payout: 92 }, { name: "Boeing Company OTC", payout: 92 },
    { name: "Amazon OTC", payout: 92 }, { name: "FedEx OTC", payout: 92 }, { name: "VISA OTC", payout: 92 },
    { name: "Palantir Technologies OTC", payout: 92 }, { name: "American Express OTC", payout: 84 },
    { name: "GameStop Corp OTC", payout: 83 }, { name: "Marathon Digital Holdings OTC", payout: 83 },
    { name: "Advanced Micro Devices OTC", payout: 82 }, { name: "Microsoft OTC", payout: 72 },
    { name: "Intel OTC", payout: 65 }, { name: "Pfizer Inc OTC", payout: 58 }, { name: "Johnson & Johnson OTC", payout: 56 },
    { name: "VIX OTC", payout: 52 }, { name: "Citigroup Inc OTC", payout: 50 }, { name: "Alibaba OTC", payout: 48 },
    { name: "Netflix OTC", payout: 46 }, { name: "Cisco OTC", payout: 38 }, { name: "Coinbase Global OTC", payout: 23 },
    { name: "ExxonMobil OTC", payout: 20 },
  ],
  Cryptocurrencies: [
    { name: "Solana OTC", payout: 92 }, { name: "Toncoin OTC", payout: 92 }, { name: "Polygon OTC", payout: 92 },
    { name: "Bitcoin ETF OTC", payout: 92 }, { name: "Bitcoin OTC", payout: 91 }, { name: "Avalanche OTC", payout: 86 },
    { name: "Dogecoin OTC", payout: 77 }, { name: "TRON OTC", payout: 64 }, { name: "Polkadot OTC", payout: 61 },
    { name: "BNB OTC", payout: 51 }, { name: "Litecoin OTC", payout: 44 }, { name: "Cardano OTC", payout: 25 },
    { name: "Chainlink OTC", payout: 25 }, { name: "Ethereum OTC", payout: 21 }, { name: "Bitcoin", payout: 15 },
  ],
  Indices: [
    { name: "AUS 200 OTC", payout: 67 }, { name: "E35EUR OTC", payout: 45 }, { name: "100GBP OTC", payout: 45 },
    { name: "F40EUR OTC", payout: 45 }, { name: "JPN225 OTC", payout: 45 }, { name: "D30EUR OTC", payout: 45 },
    { name: "E50EUR OTC", payout: 45 }, { name: "SP500 OTC", payout: 45 }, { name: "DJI30 OTC", payout: 45 },
    { name: "US100 OTC", payout: 45 },
  ],
};

function PayoutBar({ payout }: { payout: number }) {
  return (
    <div style={{ flex: 1, minWidth: 0, height: 28, position: "relative" }}>
      <div style={{ width: `${payout}%`, height: "100%", background: "linear-gradient(90deg, #0b1f5e 0%, #1553c7 55%, #3a9df8 100%)", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 10, minWidth: 36, transition: "width 0.4s ease" }}>
        <span style={{ color: "#fff", fontSize: 13, fontWeight: 600, fontFamily: "Montserrat, sans-serif", whiteSpace: "nowrap" }}>{payout}%</span>
      </div>
    </div>
  );
}

function Section({ title, assets, visible }: { title: string; assets: Asset[]; visible: boolean }) {
  const [open, setOpen] = useState(true);
  if (!visible) return null;
  return (
    <>
      <div className="assets-category-header" onClick={() => setOpen(o => !o)}>
        <span style={{ fontSize: 17, fontWeight: 600, color: "#0b1a35", fontFamily: "Montserrat, sans-serif" }}>{title}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s", flexShrink: 0 }}>
          <path d="M6 9l6 6 6-6" stroke="#7a8fa6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {open && assets.map((asset, i) => (
        <div key={asset.name} className="assets-row" style={{ borderTop: i === 0 ? "none" : "1px solid #f0f2f7" }}>
          <div className="live-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
          <span className="assets-row-name">{asset.name}</span>
          <PayoutBar payout={asset.payout} />
        </div>
      ))}
    </>
  );
}

export function AssetsPage({ lang = "en" }: { lang?: string }) {
  const t = T[lang as Lang] ?? T.en;
  const homeHref = lang === "en" ? "/" : `/${lang}`;

  const [activeTab, setActiveTab] = useState<"CURRENT" | "GENERAL" | "OTC">("CURRENT");
  const [filters, setFilters] = useState({ Currency: true, Commodities: true, Stocks: true, Cryptocurrencies: true, Indices: true });
  const [timeLabel, setTimeLabel] = useState("");

  useEffect(() => {
    const now = new Date();
    const t2 = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    const d = now.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }).replace(/\//g, ".");
    setTimeLabel(`${t2}, ${d}`);
  }, []);

  const toggleFilter = (key: string) => setFilters(f => ({ ...f, [key]: !f[key as keyof typeof f] }));

  const categoryLabels: Record<string, string> = {
    Currency: t.catCurrency,
    Commodities: t.catCommodities,
    Stocks: t.catStocks,
    Cryptocurrencies: t.catCrypto,
    Indices: t.catIndices,
  };

  const CATEGORY_ORDER = ["Currency", "Commodities", "Stocks", "Cryptocurrencies", "Indices"];

  return (
    <>
      <BreadcrumbJsonLd lang={lang} slug="assets" homeName={t.home} pageName={t.breadcrumb} />
      <Header lang={lang} />

      <section className="assets-hero" style={{ background: "linear-gradient(180deg, #080f20 0%, #0d1a38 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.08, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='200'%3E%3Cpolyline points='0,150 80,130 160,140 240,90 320,110 400,70 480,80 560,50 640,60 720,40 800,55 880,35 960,45 1040,30 1120,50 1200,25 1280,40 1360,20 1440,30' fill='none' stroke='%2322c55e' stroke-width='2'/%3E%3Cpolyline points='0,170 80,155 160,165 240,115 320,130 400,95 480,100 560,75 640,85 720,65 800,75 880,55 960,65 1040,50 1120,70 1200,45 1280,60 1360,40 1440,50' fill='none' stroke='%23ef4444' stroke-width='2'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center bottom" }} />

        <div className="assets-hero-inner">
          <nav style={{ display: "flex", gap: 6, alignItems: "center", fontSize: 13, color: "#7a8fa6", marginBottom: 20 }}>
            <a href={homeHref} style={{ color: "#7a8fa6", textDecoration: "none" }}>{t.home}</a>
            <span style={{ color: "#3a4a6a" }}>/</span>
            <span style={{ color: "#c0cfe0" }}>{t.breadcrumb}</span>
          </nav>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, color: "#fff", margin: "0 0 16px", lineHeight: 1.2 }}>
            {t.heroTitle}
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", color: "#8fa3c0", margin: 0, maxWidth: 560, lineHeight: 1.6 }}>
            {t.heroDesc}
          </p>
        </div>
      </section>

      <div style={{ background: "#080f20", borderBottom: "1px solid #1a2740" }}>
        <div className="assets-tabs-inner">
          {([
            { key: "CURRENT", label: t.tabCurrent },
            { key: "GENERAL", label: t.tabGeneral },
            { key: "OTC", label: t.tabOtc },
          ] as const).map(({ key, label }) => (
            <button key={key} onClick={() => setActiveTab(key)} style={{ padding: "14px 24px", background: activeTab === key ? "#0b1530" : "transparent", border: "none", borderBottom: activeTab === key ? "2px solid #2a6ff5" : "2px solid transparent", color: activeTab === key ? "#fff" : "#7a8fa6", fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 13, cursor: "pointer", letterSpacing: "0.05em", transition: "all 0.15s", whiteSpace: "nowrap" }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <main style={{ background: "#f0f3f8", minHeight: "60vh", padding: "48px 0 100px" }}>
        <div className="assets-outer">
          <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px rgba(0,0,0,0.07)", overflow: "hidden" }}>

            <div className="assets-date-label" style={{ padding: "20px 24px 4px", fontSize: 13, color: "#7a8fa6", fontFamily: "Nunito Sans, sans-serif" }}>
              {t.datePrefix} {timeLabel || "14:54, 14.03.2026"}*
            </div>

            <div className="assets-table-header">
              <div className="assets-table-header-left">
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0b1a35", fontFamily: "Montserrat, sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.assetsCol}</span>
                <span style={{ fontSize: 11, color: "#7a8fa6", marginLeft: 4 }}>(UTC+2)</span>
              </div>
              <div className="assets-table-header-payout">
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0b1a35", fontFamily: "Montserrat, sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>{t.payoutCol}</span>
              </div>
              <div className="assets-table-header-filters">
                {CATEGORY_ORDER.map(key => (
                  <label key={key} style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer", fontSize: 13, color: "#0b1a35", fontFamily: "Nunito Sans, sans-serif", userSelect: "none" }}>
                    <input type="checkbox" checked={filters[key as keyof typeof filters]} onChange={() => toggleFilter(key)} style={{ width: 15, height: 15, accentColor: "#2a6ff5", cursor: "pointer" }} />
                    <span>{categoryLabels[key]}</span>
                  </label>
                ))}
              </div>
            </div>

            {CATEGORY_ORDER.map(cat => (
              <Section key={cat} title={categoryLabels[cat]} assets={ASSETS[cat] ?? []} visible={filters[cat as keyof typeof filters]} />
            ))}
          </div>

          <p style={{ marginTop: 16, fontSize: 12, color: "#7a8fa6", fontFamily: "Nunito Sans, sans-serif", lineHeight: 1.6 }}>
            {t.footerNote}
          </p>
        </div>
      </main>

      <Footer lang={lang} />
    </>
  );
}
