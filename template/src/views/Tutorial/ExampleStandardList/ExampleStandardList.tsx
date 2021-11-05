import React, { useMemo, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  IconObjectProps,
  Padding,
  StandardList,
  StandardListDisplayProps,
  Typography,
} from 'gaComponents';
import { useStandardList, useTheme } from 'gatec-rn-framework';
import { Alert } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleStandardList: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleStandardList'>;

type DataSourceSchema = {
  Id: number;
  Value: string;
  Period: '2020/2021';
  Culture: string;
  PendingSync: boolean;
};

// #region [DATA]
const dataSource: DataSourceSchema[] = new Array(50)
  .fill(null)
  .map((_, index) => ({
    Id: index,
    Value: `Code ${index}`,
    Period: '2020/2021',
    Culture: `Cana de Açucar${index}`,
    PendingSync: false,
  }));

// #endregion

export default function ExampleStandardList({ navigation }: Props) {
  const listattrs = useStandardList();

  const { theme } = useTheme();

  const [isUpdatingList, setIsUpdatingList] = useState(false);

  const [data, setData] = useState<DataSourceSchema[]>(dataSource);

  const [keyS, setKeys] = useState('');

  // #region [DELETE]
  function handleDelete(val: DataSourceSchema) {
    const index = data.indexOf(val);
    if (index > -1) {
      const newData = data;
      newData.splice(index, 1);

      setData(newData);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      updateList();
    }
  }
  // #endregion

  // #region [FINISH]
  function handleFinish(val: DataSourceSchema) {
    const index = data.indexOf(val);
    if (index > -1) {
      const newData = data;
      newData[index].PendingSync = !newData[index].PendingSync;
      setKeys(index.toString());
      setData(newData);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      updateList();
    }
  }
  // #endregion

  // #region [LIST]
  const updateList = () => {
    setIsUpdatingList((previous) => !previous);
  };

  const displayProps: StandardListDisplayProps<DataSourceSchema>[] = [
    { label: 'Code', paramValue: 'Value' },
    { label: 'Periodo', paramValue: 'Period' },
    { label: 'Cultura', paramValue: 'Culture' },
    {
      label: 'status',
      color: (item) => (item.PendingSync ? theme.error : theme.success),
      format: (item) => (item.PendingSync ? `${'closed'}` : `${'open'}`),
    },
  ];

  const deleteButton = listattrs.deleteButton(handleDelete);

  const finishButton = listattrs.finishButton(handleFinish);

  listattrs.cardRightIcon.name = 'arrow-right';
  listattrs.cardRightIcon.color = theme.success;

  const defaultLeftCodeItem = listattrs.defaultLeftCodeItem(
    'Id',
    theme.secondary,
    theme.onPrimary,
  );

  const header = listattrs.defaultHeaderItem(
    'Value',
    () => Alert.alert('HeaderClick'),
    'info',
    theme.primary,
  );

  const filteredList = useMemo(() => data, [isUpdatingList, data]);
  // #endregion

  return (
    <>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente StandardList</Typography>
          <Typography variant="subtitle1">
            {
              'Nesta tela você irá poderá ver um exemplos do uso para o componente StandardList. Para ver a documentação completa, acesse a Wiki do SimpleFarm > Especificações > Mobile > GAtecRNFramework > StandardList'
            }
          </Typography>
        </Padding>
      </Padding>

      <StandardList
        displayProps={displayProps}
        entries={filteredList}
        onSelect={(val) => Alert.alert(`Selecionou '${val.Value}'`)}
        headerItem={header}
        cardRightIcon={listattrs.cardRightIcon}
        rightAction={deleteButton}
        leftPrimaryAction={finishButton}
        leftCodeItem={defaultLeftCodeItem}
        key={keyS}
      />
    </>
  );
}
