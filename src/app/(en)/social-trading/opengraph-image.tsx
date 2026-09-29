import { OG_SIZE, OG_CONTENT_TYPE, renderPageOg } from '@/lib/seo/og';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'Pocket Option';

export default function Image() {
  return renderPageOg('social-trading', 'en');
}
