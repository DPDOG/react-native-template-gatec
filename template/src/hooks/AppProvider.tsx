import React from 'react';

import { GAThemeProvider } from 'gaTheme';

import customTheme from '../theme/customTheme';
import { AuthProvider } from './useAuth';
import { I18nProvider } from './useI18n';

/**
 * AppProvider =>
 * Neste arquivo devem ficar todos os providers e context do projeto
 * * Importante manter a hierarquia e as dependencias entre os providers
 */

const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <GAThemeProvider customTheme={customTheme}>
    <I18nProvider>
      <AuthProvider>{children}</AuthProvider>
    </I18nProvider>
  </GAThemeProvider>
);

export default AppProvider;
