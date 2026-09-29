import type { SocialTradingDictionary } from './types';
import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import { ru } from './ru';
import { id } from './id';

const dictionaries: Record<string, SocialTradingDictionary> = { en, pt, es, ru, id };

export function getSocialTradingDictionary(lang: string): SocialTradingDictionary {
  return dictionaries[lang] ?? en;
}

export type { SocialTradingDictionary } from './types';
