import type { PaymentRegion, PaymentType } from '@/data/payment-methods';

export type PaymentMethodsDictionary = {
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
  types: {
    eyebrow: string;
    title: string;
    subtitle: string;
    countLabel: string;
    items: Record<PaymentType, { name: string; desc: string }>;
  };
  directory: {
    eyebrow: string;
    title: string;
    subtitle: string;
    search: string;
    all: string;
    allRegions: string;
    regions: Record<PaymentRegion, string>;
    showing: string;
    empty: string;
    note: string;
  };
  compare: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cols: { method: string; minDeposit: string; speed: string; fee: string; withdrawal: string };
    rows: { method: string; minDeposit: string; speed: string; fee: string; withdrawal: string }[];
    note: string;
  };
  deposit: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  withdrawal: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
    note: string;
  };
  tips: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  guides: {
    eyebrow: string;
    title: string;
    items: { title: string; desc: string; href: string }[];
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
