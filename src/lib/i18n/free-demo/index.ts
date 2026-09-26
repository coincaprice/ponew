import type { FreeDemoDictionary } from './types';
import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import { ru } from './ru';
import { id } from './id';

const dictionaries: Record<string, FreeDemoDictionary> = { en, pt, es, ru, id };

export function getFreeDemoDictionary(lang: string): FreeDemoDictionary {
  return dictionaries[lang] ?? en;
}

export type { FreeDemoDictionary } from './types';
