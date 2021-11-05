import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, InputText, StyledStatusBar } from 'gaComponents';
import { useTheme } from 'gaTheme';

import { Logo } from 'components';
import { useAuth, useI18n } from 'hooks';

import { Container } from './styles';

type RootStackParamList = {
  Login: undefined;
  Menu: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
  // #region [STATE]
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  // #endregion

  // #region [HOOKS]
  const { theme } = useTheme();
  const { loginOffline } = useAuth();
  const { translate } = useI18n();
  // #endregion

  // #region [HANDLERS]
  const handleLogin = async () => {
    const isLogged = await loginOffline();

    if (isLogged) navigation.navigate('Menu');
  };
  // #endregion

  return (
    <>
      <StyledStatusBar />
      <Container>
        <Logo />
        <InputText
          label={translate('user')}
          value={user}
          onChangeText={setUser}
        />
        <InputText
          label={translate('password')}
          value={password}
          onChangeText={setPassword}
          type="password"
        />
        <Button
          text="Login"
          background={[theme.primary, theme.primaryVariant]}
          action={handleLogin}
        />
      </Container>
    </>
  );
}
