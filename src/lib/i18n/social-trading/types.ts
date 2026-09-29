export type SocialTradingDictionary = {
  home: string;
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
    secondary: string;
    note: string;
    facts: { value: string; label: string }[];
    copyLabel: string;
    profitableLabel: string;
    payoutLabel: string;
  };
  what: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    points: string[];
    topTraders: string;
    tradesLabel: string;
  };
  how: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
    cta: string;
  };
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  audience: {
    eyebrow: string;
    title: string;
    beginnersTab: string;
    proTab: string;
    beginners: { title: string; desc: string }[];
    pro: { title: string; desc: string }[];
  };
  settings: {
    eyebrow: string;
    title: string;
    subtitle: string;
    rows: { setting: string; meaning: string; tip: string }[];
    settingCol: string;
    meaningCol: string;
    tipCol: string;
  };
  risk: {
    eyebrow: string;
    title: string;
    p: string;
    points: string[];
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
