export type SiteRoute = {
  slug: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

/** Public pages, shared by every locale. Used for sitemap generation. */
export const siteRoutes: SiteRoute[] = [
  { slug: '', changeFrequency: 'daily', priority: 1.0 },
  { slug: 'about-us', changeFrequency: 'monthly', priority: 0.8 },
  { slug: 'quick-start', changeFrequency: 'monthly', priority: 0.8 },
  { slug: 'free-demo', changeFrequency: 'monthly', priority: 0.8 },
  { slug: 'assets', changeFrequency: 'weekly', priority: 0.8 },
  { slug: 'blog', changeFrequency: 'weekly', priority: 0.7 },
  { slug: 'contacts', changeFrequency: 'monthly', priority: 0.6 },
  { slug: 'privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { slug: 'payment-policy', changeFrequency: 'yearly', priority: 0.3 },
  { slug: 'terms-and-conditions', changeFrequency: 'yearly', priority: 0.3 },
  { slug: 'aml-policy', changeFrequency: 'yearly', priority: 0.3 },
  { slug: 'risk-disclosure', changeFrequency: 'yearly', priority: 0.3 },
];
