import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  IconObjectProps,
  Padding,
  Selectable,
  SelectableDisplayProps,
  Typography,
} from 'gaComponents';
import { Alert } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleSelectable: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleSelectable'>;

type DataSourceSchema = {
  Id: number;
  Value: string;
  OpeningDate: string;
  ForecastStart: string;
  ForecastEnd: string;
  ProductUnit: string;
  Project: string;
  Period: string;
  Culture: string;
};

export default function ExampleSelectable({ navigation }: Props) {
  const [selectable1, setSelectable1] = useState<DataSourceSchema>();
  const [selectable2, setSelectable2] = useState<DataSourceSchema>();
  const [selectable3, setSelectable3] = useState<DataSourceSchema[]>([]);

  // #region [HANDLE_CHANGE]
  const onChange1 = (item: any) => {
    Alert.alert('Você selecionou um item', `${JSON.stringify(item, null, 2)}`);
    setSelectable1(item);
  };

  const onChange2 = (item: any) => {
    setSelectable2(item);
  };

  const onChange3 = (item: any) => {
    setSelectable3(item);
  };
  // #endregion

  // #region [DATA]
  const dataSource: DataSourceSchema[] = new Array(50)
    .fill(null)
    .map((_, index) => ({
      Id: index,
      Value: `Code ${index}`,
      OpeningDate: '10/10/2020',
      ForecastStart: '10/10/2020',
      ForecastEnd: '10/10/2021',
      ProductUnit: `Faz. Santa ${index}`,
      Project: '20-21',
      Period: '2020/2021',
      Culture: 'Cana de Açucar',
    }));

  const displayProps: SelectableDisplayProps<DataSourceSchema>[] = [
    { label: 'Unid. Produtora', paramValue: 'ProductUnit' },
    { label: 'Period', paramValue: 'Period' },
    { label: 'Projeto', paramValue: 'Project' },
    { label: 'Dt. Aber.', paramValue: 'OpeningDate' },
    { label: 'Dt. Prev. Inicio', paramValue: 'ForecastStart' },
    { label: 'Dt. Prev. Final', paramValue: 'ForecastEnd' },
  ];

  const preferenceValue = {
    Id: 0,
    Value: 'Code 0',
    OpeningDate: '10/10/2020',
    ForecastStart: '10/10/2020',
    ForecastEnd: '10/10/2021',
    ProductUnit: 'Faz. Santa 0',
    Project: '20-21',
    Period: '2020/2021',
    Culture: 'Cana de Açucar',
  };
  // #endregion

  const iconObj: IconObjectProps = {
    name: 'info',
    color: '#663399',
    size: 24,
    source: 'fontAwesome5',
  };

  return (
    <>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente Selectable</Typography>
          <Typography variant="subtitle1">
            {
              'Nesta tela você irá poderá ver um exemplos do uso para o componente Selectable. Para ver a documentação completa, acesse a Wiki do SimpleFarm > Especificações > Mobile > GAtecRNFramework > Selectable'
            }
          </Typography>
        </Padding>

        <Padding valueX={0} pb={4}>
          <Typography variant="h6">Selectable Simples</Typography>
        </Padding>

        <Selectable
          displayProps={displayProps}
          entries={dataSource}
          label="selectable 1"
          onChange={onChange1}
          value={selectable1}
          infoIcon={{
            ...iconObj,
            infoHeader: 'Esse é o titulo da informação',
            infoText: 'E aqui é o texto que você poderá informar',
          }}
          helperText="Caso necessário você pode passar um texto de ajuda"
        />

        <Padding valueX={0} pb={4}>
          <Typography variant="h6">Selectable com valor default</Typography>
        </Padding>

        <Selectable
          displayProps={displayProps}
          entries={dataSource}
          label="selectable 2"
          onChange={onChange2}
          value={selectable2}
          allowPreferences
          preferenceValue={preferenceValue}
          errorLog="Caso der erro ele aparece assim!"
        />

        <Padding valueX={0} pb={4}>
          <Typography variant="h6">Selectable com multSelect</Typography>
        </Padding>

        <Selectable
          displayProps={displayProps}
          entries={dataSource}
          label="selectable 3"
          onChange={onChange3}
          value={selectable3}
          multiSelect
        />
      </Padding>
    </>
  );
}
