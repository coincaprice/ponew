export type AboutDictionary = {
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
  overview: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    rows: { label: string; value: string }[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { year: string; title: string; desc: string }[];
  };
  platform: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  values: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  trust: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
    docsTitle: string;
    docs: { label: string; slug: string }[];
  };
  community: {
    eyebrow: string;
    title: string;
    subtitle: string;
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
