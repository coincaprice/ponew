import type { PaymentMethodsDictionary } from './types';
import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import { ru } from './ru';
import { id } from './id';

const dictionaries: Record<string, PaymentMethodsDictionary> = { en, pt, es, ru, id };

export function getPaymentMethodsDictionary(lang: string): PaymentMethodsDictionary {
  return dictionaries[lang] ?? en;
}

export type { PaymentMethodsDictionary } from './types';
