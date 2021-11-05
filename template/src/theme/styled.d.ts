import 'styled-components';
import { ThemeKeys } from 'gatec-rn-framework';

declare module 'styled-components' {
  type ThemeType = ThemeKeys;

  export interface DefaultTheme extends ThemeType {}
}
