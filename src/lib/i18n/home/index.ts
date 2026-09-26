import type { HomeDictionary } from './types';
import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import { ru } from './ru';
import { id } from './id';

const homeDictionaries: Record<string, HomeDictionary> = { en, pt, es, ru, id };

export function getHomeDictionary(lang: string): HomeDictionary {
  return homeDictionaries[lang] ?? en;
}

export type { HomeDictionary } from './types';
