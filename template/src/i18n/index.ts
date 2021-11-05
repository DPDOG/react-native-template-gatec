/* eslint-disable camelcase */
import { en_US, us_en_US } from './en_US';
import { pt_BR, us_pt_BR } from './pt_BR';

export type i18nLanguageKeys = Record<keyof typeof pt_BR, string>;
export type i18nUnitSystemKeys = Record<keyof typeof us_pt_BR, string>;

// * Quando adicionar uma nova linguagem, adicionar aqui sua key
export type i18nLanguages = 'pt_BR' | 'en_US';

type i18nLanguageType = Record<i18nLanguages, i18nLanguageKeys>;
type i18nUnitSystemType = Record<i18nLanguages, i18nUnitSystemKeys>;

export const translations: i18nLanguageType = {
  pt_BR,
  en_US,
};

export const unitSystem: i18nUnitSystemType = {
  pt_BR: us_pt_BR,
  en_US: us_en_US,
};
