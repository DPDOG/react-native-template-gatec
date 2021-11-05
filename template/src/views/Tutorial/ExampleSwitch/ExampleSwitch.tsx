import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  Carroussel,
  ContainerWrapper,
  CustomModal,
  Padding,
  StyledStatusBar,
  SwitchInput,
  Typography,
} from 'gaComponents';
import { Alert, View } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleSwitch: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleSwitch'>;

export default function ExampleSwitch({ navigation }: Props) {
  const [switchText, setSwitchText] = useState('Acionado!');

  return (
    <ContainerWrapper>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente Switch</Typography>
          <Typography variant="subtitle1">
            {
              'Nessa tela você pode observar um exemplo simples do uso do componente Switch, clicando nos botões expostos abaixo. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > Switch'
            }
          </Typography>
        </Padding>
      </Padding>

      <SwitchInput
        label={switchText}
        value={switchText === 'Acionado!'}
        onChange={(val) =>
          val ? setSwitchText('Acionado!') : setSwitchText('Desativado :(')
        }
      />
    </ContainerWrapper>
  );
}
