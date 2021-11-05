import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ContainerWrapper, Padding, TabModal, Typography } from 'gaComponents';

type RootStackParamList = {
  Menu: undefined;
  ExampleTabModal: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleTabModal'>;

const displayTabs = [
  {
    title: 'Primeira',
    tab: <Typography>Primeira</Typography>,
  },
  {
    title: 'Segunda',
    tab: <Typography>Segunda</Typography>,
  },
  {
    title: 'Terceira',
    tab: <Typography>Quarta</Typography>,
  },
];

export default function ExampleTabModal({ navigation }: Props) {
  const [openConfirm, setOpenConfirm] = useState(false);

  return (
    <ContainerWrapper>
      <Padding valueX={0}>
        <Typography variant="h6">Componente TabModal</Typography>
        <Typography variant="subtitle1">
          {
            'Nessa tela você pode observar um exemplo simples do uso do componente TabModal, clicando nos botões expostos abaixo. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > TabModal'
          }
        </Typography>
      </Padding>

      <TabModal title="TabModal" tabs={displayTabs} />
    </ContainerWrapper>
  );
}
