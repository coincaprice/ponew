export type FreeDemoDictionary = {
  home: string;
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
    login: string;
    note: string;
    balanceLabel: string;
    balance: string;
    accountTag: string;
    facts: { value: string; label: string }[];
  };
  highlights: { title: string; desc: string }[];
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    points: string[];
  };
  compare: {
    eyebrow: string;
    title: string;
    subtitle: string;
    demoCol: string;
    liveCol: string;
    rows: { feature: string; demo: string; live: string }[];
    note: string;
  };
  steps: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
    cta: string;
  };
  practice: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  transition: {
    eyebrow: string;
    title: string;
    subtitle: string;
    checklist: string[];
    cta: string;
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
