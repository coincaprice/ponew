export type AssetCategoryKey = 'Currency' | 'Commodities' | 'Stocks' | 'Cryptocurrencies' | 'Indices';

export type AssetsDictionary = {
  home: string;
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
    secondary: string;
    facts: { value: string; label: string }[];
  };
  categories: {
    eyebrow: string;
    title: string;
    subtitle: string;
    countLabel: string;
    topPayoutLabel: string;
    items: Record<AssetCategoryKey, { name: string; desc: string }>;
  };
  table: {
    eyebrow: string;
    title: string;
    subtitle: string;
    search: string;
    all: string;
    otcOnly: string;
    assetCol: string;
    payoutCol: string;
    updated: string;
    showing: string;
    empty: string;
    note: string;
  };
  hours: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; time: string; desc: string }[];
    note: string;
  };
  tips: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
    secondary: string;
    note: string;
  };
};
