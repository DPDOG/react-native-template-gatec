import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ContainerWrapper, FabButton, Padding, Typography } from 'gaComponents';
import { Alert } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleFab: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleFab'>;

export default function ExampleFab({ navigation }: Props) {
  return (
    <>
      <ContainerWrapper>
        <Padding valueX={0}>
          <Typography variant="h6">Componente TabModal</Typography>
          <Typography variant="subtitle1">
            {
              'Nessa tela você pode observar um exemplo simples do uso do componente Fab, clicando nos botões expostos abaixo. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > Fab'
            }
          </Typography>
        </Padding>
      </ContainerWrapper>
      <FabButton
        action={() => Alert.alert('Fab clicked!')}
        icon={{
          name: 'plus',
          source: 'fontAwesome5',
          color: 'onSecondary',
          size: 24,
        }}
        background="#FF0FF0"
      />
    </>
  );
}
