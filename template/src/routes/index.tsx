import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Font } from 'gaCss';
import { useTheme } from 'gaTheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// #region [SCREENS]
import * as BaseRoutes from './base.routes';
import * as TutorialRoutes from './tutorial.routes';
// --> Import aqui suas rotas <--
// #endregion

/**
 * ============================================================================
    Navigation Stacks
 * ============================================================================
 */
const Stack = createNativeStackNavigator();

/**
 * Função responsavel por exibição do topbar/header
 * @param routeName
 * @returns retorna um boleano se exibe ou não o topbar
 */
function shouldHeaderBeShown(routeName: string) {
  switch (routeName) {
    case 'Login':
      return false;
    default:
      return true;
  }
}

function createScreens(components: any) {
  return (
    <>
      {Object.entries(components).map(([key, value]) => (
        <Stack.Screen key={key} name={key} component={value as any} />
      ))}
    </>
  );
}

export default function routes() {
  const { theme } = useTheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: theme.surfacePrimary,
            },
            headerTintColor: theme.onSurfacePrimary,
            headerTitleStyle: {
              fontFamily: Font.FONT_FAMILY_REGULAR,
              fontSize: Font.FONT_SIZE_24,
            },
            headerShown: shouldHeaderBeShown(route?.name),
            headerBackTitleVisible: false,
            gestureEnabled: false,
          })}
          initialRouteName="Login"
        >
          {createScreens(BaseRoutes)}
          {createScreens(TutorialRoutes)}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
