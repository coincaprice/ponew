/**
 * Affiliate link config. External targets are read from env so they can be
 * rotated without a code change; the /go routes redirect to them.
 */
const DEFAULT_AFFILIATE =
  'https://u3.shortink.io/register?utm_campaign=65155&utm_source=affiliate&utm_medium=sr&a=bsNUQyo6TJ9wXJ&ac=lk';

export const AFFILIATE_URL = process.env.AFFILIATE_URL ?? DEFAULT_AFFILIATE;
export const AFFILIATE_LOGIN_URL = process.env.AFFILIATE_LOGIN_URL ?? AFFILIATE_URL;

export const REGISTER_URL = '/go';
export const LOGIN_URL = '/go/login';

export const AFFILIATE_REL = 'nofollow sponsored noopener noreferrer';
