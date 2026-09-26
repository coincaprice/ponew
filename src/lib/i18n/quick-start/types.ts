export type QuickStartStep = {
  title: string;
  desc: string;
  bullets: string[];
  tip: string;
  cta: string;
};

export type QuickStartDictionary = {
  home: string;
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    register: string;
    login: string;
    facts: { value: string; label: string }[];
  };
  steps: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stepLabel: string;
    tipLabel: string;
    items: QuickStartStep[];
  };
  firstTrade: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
    exampleTitle: string;
    example: { label: string; value: string }[];
    exampleNote: string;
  };
  demo: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    points: string[];
    cta: string;
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
    register: string;
    demo: string;
    note: string;
  };
};
