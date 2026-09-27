import type { Locale } from '@/lib/i18n/config';

export type BlogCategory = 'tutorial' | 'payments' | 'platform' | 'strategy';

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'tip'; title: string; text: string }
  | { type: 'warn'; title: string; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'cta'; text: string; label: string };

export type BlogPostContent = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  coverAlt: string;
  blocks: BlogBlock[];
  faq: { q: string; a: string }[];
  keyTakeaways: string[];
};

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  cover: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  author: string;
  rating?: { value: number; best: number };
  content: Record<Locale, BlogPostContent>;
};

export type BlogDictionary = {
  home: string;
  breadcrumb: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  latest: string;
  readMore: string;
  minRead: string;
  published: string;
  updated: string;
  author: string;
  onThisPage: string;
  keyTakeaways: string;
  faqTitle: string;
  faqEyebrow: string;
  related: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  ctaSecondary: string;
  categories: Record<BlogCategory, string>;
  disclaimer: string;
  affiliateNotice: string;
};
