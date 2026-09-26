import type { AboutDictionary } from './types';
import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import { ru } from './ru';
import { id } from './id';

const dictionaries: Record<string, AboutDictionary> = { en, pt, es, ru, id };

export function getAboutDictionary(lang: string): AboutDictionary {
  return dictionaries[lang] ?? en;
}

export type { AboutDictionary } from './types';
