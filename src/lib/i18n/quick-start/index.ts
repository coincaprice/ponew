import type { QuickStartDictionary } from './types';
import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import { ru } from './ru';
import { id } from './id';

const dictionaries: Record<string, QuickStartDictionary> = { en, pt, es, ru, id };

export function getQuickStartDictionary(lang: string): QuickStartDictionary {
  return dictionaries[lang] ?? en;
}

export type { QuickStartDictionary } from './types';
