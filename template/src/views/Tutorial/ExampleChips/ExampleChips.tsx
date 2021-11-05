import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  Chip,
  ConfirmBox,
  ContainerWrapper,
  Padding,
  Typography,
} from 'gaComponents';

type RootStackParamList = {
  Menu: undefined;
  ExampleChips: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleChips'>;

export default function ExampleChips({ navigation }: Props) {
  const [openConfirm, setOpenConfirm] = useState(false);

  return (
    <ContainerWrapper>
      <Padding valueX={0}>
        <Typography variant="h6">Componente ConfirmBox</Typography>
        <Typography variant="subtitle1">
          {
            'Nessa tela você pode observar um exemplo simples do uso do componente ConfirmBox, clicando nos botões expostos abaixo. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > ConfirmBox'
          }
        </Typography>
      </Padding>

      <Chip text="Exemplo" />
    </ContainerWrapper>
  );
}
