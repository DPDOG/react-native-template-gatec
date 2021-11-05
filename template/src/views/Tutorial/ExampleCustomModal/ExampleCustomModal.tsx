import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  ContainerWrapper,
  CustomModal,
  Padding,
  Typography,
} from 'gaComponents';
import { Alert } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleCustomModal: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleCustomModal'>;

export default function ExampleCustomModal({ navigation }: Props) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <ContainerWrapper>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente CustomModal</Typography>
          <Typography variant="subtitle1">
            {
              'Nessa tela você pode observar um exemplo simples do uso do componente DetailModal. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > CustomModal'
            }
          </Typography>
        </Padding>
      </Padding>

      <Button text="Abrir CustomModal" action={() => setOpenModal(true)} />
      <CustomModal
        onClose={() => setOpenModal(false)}
        title="Exemplo"
        visible={openModal}
        actions={[
          {
            title: 'ActionExample1',
            onPress: () => {
              Alert.alert('Clicou na ação de exemplo dentro do CustomModal!!');
            },
          },
          {
            title: 'ActionExample2',
            background: '#990099',
            onPress: () => {
              Alert.alert('Clicou na ação de exemplo2 dentro do CustomModal!!');
            },
          },
        ]}
      >
        <Typography>Dentro do modal</Typography>
        <Button text="Botao Exemplo" />
      </CustomModal>
    </ContainerWrapper>
  );
}
