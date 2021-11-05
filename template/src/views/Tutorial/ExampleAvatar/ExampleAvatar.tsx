import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Avatar, ContainerWrapper, Padding, Typography } from 'gaComponents';

import DefaultImage from '../../../assets/images/Avatar/default.png';

type RootStackParamList = {
  Menu: undefined;
  ExampleAvatar: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleAvatar'>;

export default function ExampleAvatar({ navigation }: Props) {
  return (
    <ContainerWrapper>
      <Padding valueX={0}>
        <Typography variant="h6">Componente Avatar</Typography>
        <Typography variant="subtitle1">
          {
            'Nessa tela você pode observar um exemplo simples do uso do componente Avatar, clicando nos botões expostos abaixo. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > Avatar'
          }
        </Typography>
      </Padding>
      <Padding>
        <Avatar background={DefaultImage} />
      </Padding>
    </ContainerWrapper>
  );
}
