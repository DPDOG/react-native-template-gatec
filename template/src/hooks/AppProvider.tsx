import React from 'react';
import { GAThemeProvider } from 'gaTheme';

import customTheme from '../theme/customTheme';
import { AuthProvider } from './useAuth';
import { I18nProvider } from './useI18n';
import { LocationProvider } from 'gatec-rn-framework/src/hooks/useLocation';

/**
 * AppProvider =>
 * Neste arquivo devem ficar todos os providers e context do projeto
 * * Importante manter a hierarquia e as dependencias entre os providers
 */

const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <GAThemeProvider customTheme={customTheme}>
    <LocationProvider>
      <I18nProvider>
        <AuthProvider>{children}</AuthProvider>
      </I18nProvider>
    </LocationProvider>
  </GAThemeProvider>
);

export default AppProvider;
