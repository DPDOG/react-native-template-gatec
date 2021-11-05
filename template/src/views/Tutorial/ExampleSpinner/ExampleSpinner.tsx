import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Padding, Spinner, Typography } from 'gaComponents';

type RootStackParamList = {
  Menu: undefined;
  ExampleSpinner: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleSpinner'>;

export default function ExampleSpinner({ navigation }: Props) {
  const [visible, setVisible] = useState(false);

  const handleShow = () => {
    setVisible(true);
    // Alguma ação longa...
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  return (
    <>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente de Spinner</Typography>
          <Typography variant="subtitle1">
            {
              'Nesta tela você irá poderá ver alguns exemplos de utilização do Spinner. Para ver a documentação completa, acesse a Wiki do SimpleFarm > Especificações > Mobile > GAtecRNFramework > Spinner'
            }
          </Typography>
        </Padding>

        <Button text="Clique para abrir" action={handleShow} />
      </Padding>

      <Spinner type="default" labelLegend="Carregando..." visible={visible} />
    </>
  );
}
