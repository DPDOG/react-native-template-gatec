import React, { useContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules, Platform } from 'react-native';

import {
  translations,
  unitSystem,
  i18nLanguageKeys,
  i18nLanguages,
  i18nUnitSystemKeys,
} from '../i18n';

// Função que irá nos auxiliar a normalizar as traduções que serão recebidas pela função getLanguageByDevice
// Isso é necessário pois no android e no iOS o retorno do mesmo idioma pode ser diferente
// Exemplo: no iOS podemos receber pt_US e no android pt_BR para o idioma português Brasil.
// * Caso uma tradução não estejá ocorrendo, verificar se o idioma esta retornando corretamente
const normalizeTranslate = (value: string) => {
  switch (value) {
    case 'en_US':
      return 'en_US';
    case 'pt_BR':
      return 'pt_BR';
    case 'en':
      return 'en_US';
    case 'pt_US':
      return 'pt_BR';
    case 'pt':
      return 'pt_BR';

    default:
      return 'pt_BR';
  }
};

interface I18nProviderProps {
  children: React.ReactNode;
  initialLocale?: i18nLanguages;
}

interface I18nContextProps {
  translate: (word: keyof i18nLanguageKeys, replaceWords?: string[]) => string;
  toCurrency: (amount: number, minDigits?: number) => string;
  toLocaleNumber: (vale: number | string) => string;
  getLanguageByDevice: () => string;
  getUnitSystem: (key: keyof i18nUnitSystemKeys) => string;
  handleChangeLocale: (language: i18nLanguages) => void;
  locale: string;
}

const I18nContext = React.createContext<I18nContextProps>(
  {} as I18nContextProps,
);

const I18nProvider = ({ children, initialLocale }: I18nProviderProps) => {
  const [locale, setLocale] = useState<i18nLanguages>(initialLocale || 'pt_BR');

  function replaceVars(value: string, replaceWords: string[]) {
    let count = 0;
    let message = value;

    replaceWords.forEach((x) => {
      message = message.replace(`var${count}`, x);
      count += 1;
    });

    return message;
  }

  function translate(word: keyof i18nLanguageKeys, replaceWords?: string[]) {
    try {
      const item = translations[locale][word];

      if (item) {
        if (replaceWords && replaceWords.length > 0) {
          return replaceVars(item, replaceWords);
        }

        return translations[locale][word];
      }

      return word;
    } catch (err) {
      return word;
    }
  }

  function toCurrency(amount = 0, minDigits = 2) {
    try {
      const options = {
        style: 'currency',
        currency: unitSystem[locale].currency,
        minimumFractionDigits: minDigits,
      };

      const region = locale.replace('_', '-');

      const formatter = Intl.NumberFormat(region, options);

      return formatter.format(amount);
    } catch (error) {
      return amount.toString();
    }
  }

  function toLocaleNumber(value: number | string) {
    try {
      const newValue = value?.toString() || '';

      if (newValue.includes('.')) {
        const formattedValue = newValue.replace(
          '.',
          unitSystem[locale].decimalSeparator,
        );
        return formattedValue;
      }

      if (newValue.includes(',')) {
        const formattedValue = newValue.replace(
          ',',
          unitSystem[locale].decimalSeparator,
        );
        return formattedValue;
      }

      return newValue;
    } catch (err) {
      return '';
    }
  }

  function getUnitSystem(key: keyof i18nUnitSystemKeys) {
    try {
      const item = unitSystem[locale][key];

      if (item) return item;

      return '';
    } catch (error) {
      return '';
    }
  }

  function getLanguageByDevice() {
    const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

    return deviceLanguage;
  }

  async function handleLocale() {
    const prevLocale = await AsyncStorage.getItem('language');
    let language: i18nLanguages = 'pt_BR';

    if (!prevLocale) {
      const deviceLanguage: i18nLanguages = getLanguageByDevice();
      language = normalizeTranslate(deviceLanguage);
    }

    AsyncStorage.setItem('language', language);
    setLocale(language);
  }

  // SET LOCALE
  async function handleChangeLocale(language: i18nLanguages) {
    AsyncStorage.setItem('language', language);
    setLocale(language);
  }

  useEffect(() => {
    handleLocale();
  }, []);

  return (
    <I18nContext.Provider
      value={{
        translate,
        toCurrency,
        toLocaleNumber,
        getLanguageByDevice,
        getUnitSystem,
        handleChangeLocale,
        locale,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

function useI18n(): I18nContextProps {
  const context = useContext(I18nContext);

  return context as I18nContextProps;
}

export { I18nProvider, I18nContext, useI18n };
