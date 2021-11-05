import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  ConfirmBox,
  ContainerWrapper,
  Padding,
  Typography,
} from 'gaComponents';

type RootStackParamList = {
  Menu: undefined;
  ExampleConfirmBox: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleConfirmBox'>;

export default function ExampleConfirmBox({ navigation }: Props) {
  const [openConfirm, setOpenConfirm] = useState(false);

  return (
    <ContainerWrapper>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente ConfirmBox</Typography>
          <Typography variant="subtitle1">
            {
              'Nessa tela você pode observar um exemplo simples do uso do componente ConfirmBox, clicando nos botões expostos abaixo. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > ConfirmBox'
            }
          </Typography>
        </Padding>
      </Padding>
      <Padding>
        <Button text="Abrir ConfirmBox" action={setOpenConfirm} />
      </Padding>
      <ConfirmBox
        visible={openConfirm}
        textBtnConfirm="OK"
        textBtnCancel="CANCELAR"
        headerText="ExemploHeader"
        message="exemploMessage"
        closeAction={() => {
          setOpenConfirm(false);
        }}
        action={() => {
          setOpenConfirm(false);
        }}
      />
    </ContainerWrapper>
  );
}
