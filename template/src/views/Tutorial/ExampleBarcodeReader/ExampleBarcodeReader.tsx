import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BarcodeReader, ContainerWrapper, Padding } from 'gaComponents';
import { Typography } from 'gatec-rn-framework';
import { Alert } from 'react-native';

type BarcodeControlType =
  | 'weight'
  | 'quantity'
  | 'container'
  | 'truck'
  | 'cart'
  | 'temperature'
  | 'warehouse';

type BarcodeBatchItem = {
  batch: string;
  current: number;
  min?: number;
  max?: number;
};

type BarcodeControlItem = {
  type: BarcodeControlType;
  current: number;
  min?: number;
  max?: number;
  payload?: number;
};

type RootStackParamList = {
  Menu: undefined;
  ExampleBarcodeReader: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleBarcodeReader'>;

// #region [Mock]
const cItems: BarcodeControlItem[] = [
  {
    type: 'quantity',
    current: 1,
  },
];

const items: BarcodeBatchItem[] = [
  {
    batch: 'Teste',
    current: 0,
    min: 0,
    max: 3,
  },
  {
    batch: 'Teste2',
    current: 2,
    min: 0,
    max: 3,
  },
];
// #endregion

export default function ExampleBarcodeReader({ navigation }: Props) {
  const [batchItems, setBatchItem] = useState<BarcodeBatchItem[]>(items);

  function onSave(val: string) {
    const att = batchItems.map((x) => ({ ...x, current: x.current + 1 }));

    Alert.alert(`Valor resultante: ${val}`);

    setBatchItem(att);
    return true;
  }
  return (
    <>
      <ContainerWrapper>
        <Padding>
          <Padding valueX={0}>
            <Typography variant="h6">Componente BarcodeReader</Typography>
            <Typography variant="subtitle1">
              {
                'Nessa tela você pode observar um exemplo simples do uso do componente BarcodeReader. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > BarcodeReader'
              }
            </Typography>
          </Padding>
        </Padding>
      </ContainerWrapper>

      <BarcodeReader
        onSave={async (val) => onSave(val)}
        batchItems={batchItems}
        controlItems={cItems}
      />
    </>
  );
}
