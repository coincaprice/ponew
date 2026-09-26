import type { AssetCategoryKey } from '@/lib/i18n/assets';

export type Asset = { name: string; payout: number };

export const ASSET_CATEGORIES: AssetCategoryKey[] = ['Currency', 'Commodities', 'Stocks', 'Cryptocurrencies', 'Indices'];

export const ASSETS: Record<AssetCategoryKey, Asset[]> = {
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
