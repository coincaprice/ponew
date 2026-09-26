import type { AssetsDictionary } from './types';
import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import { ru } from './ru';
import { id } from './id';

const dictionaries: Record<string, AssetsDictionary> = { en, pt, es, ru, id };

export function getAssetsDictionary(lang: string): AssetsDictionary {
  return dictionaries[lang] ?? en;
}

export type { AssetsDictionary } from './types';
export type { AssetCategoryKey } from './types';
