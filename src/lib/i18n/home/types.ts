export type HomeItem = { title: string; desc: string };
export type HomeFaq = { q: string; a: string };
export type HomeFact = { label: string; value: string };
export type HomeStat = { value: string; label: string };

export type HomeDictionary = {
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    register: string;
    login: string;
    trust: string[];
    riskNote: string;
  };
  stats: HomeStat[];
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    factsTitle: string;
    facts: HomeFact[];
    cta: string;
  };
  conditions: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: string[];
    footnote: string;
  };
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: HomeItem[];
  };
  tradeTypes: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: HomeItem[];
  };
  assets: {
    eyebrow: string;
    title: string;
    subtitle: string;
    groups: { name: string; count: string; examples: string }[];
    cta: string;
  };
  steps: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: HomeItem[];
    cta: string;
  };
  payments: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: string[];
  };
  apps: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { name: string; desc: string }[];
  };
  prosCons: {
    eyebrow: string;
    title: string;
    subtitle: string;
    prosTitle: string;
    consTitle: string;
    pros: string[];
    cons: string[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ratingLabel: string;
    items: { name: string; country: string; flag: string; text: string; date: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: HomeFaq[];
    stillQuestions: string;
    contact: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    register: string;
    demo: string;
    note: string;
  };
};
