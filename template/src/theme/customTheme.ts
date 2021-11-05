import { themes } from 'gaTheme';

const customTheme = { ...themes };

// #region [CUSTOMIZATION]
/**
 * * Customização do theme
 * Caso você customizar seu tema, basta alterar as propriedades das três chaves abaixo.
 */
customTheme.light = {
  ...customTheme.light,
  primary: '#264653',
  primaryVariant: '#2a9d8f',
  secondary: '#e9c46a',
  secondaryVariant: '#f4a261',
};

customTheme.dark = {
  ...customTheme.dark,
  primary: '#2f4f5f',
  primaryVariant: '#2f9f8f',
  secondary: '#efcf6f',
  secondaryVariant: '#ffaf6f',
};

customTheme.sunYellow = {
  ...customTheme.sunYellow,
  primary: '#214151',
  primaryVariant: '#219181',
  secondary: '#e1c161',
  secondaryVariant: '#f1a161',
};
// #region

export default customTheme;
