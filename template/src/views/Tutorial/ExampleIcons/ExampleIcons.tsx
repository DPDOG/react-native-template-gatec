import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Icon, Padding, Typography } from 'gaComponents';
import { View } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleIcons: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleIcons'>;

export default function ExampleIcons({ navigation }: Props) {
  return (
    <>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente de Icone</Typography>
          <Typography variant="subtitle1">
            {
              'Nesta tela você irá poderá ver alguns exemplos de Icons. Para ver a documentação completa, acesse a Wiki do SimpleFarm > Especificações > Mobile > GAtecRNFramework > Icons'
            }
          </Typography>
        </Padding>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Icon
            icon={{
              name: 'plus',
              source: 'feather',
              color: 'primary',
              size: 40,
            }}
          />

          <Icon
            icon={{
              name: 'truck',
              source: 'fontAwesome5',
              color: 'red',
              size: 40,
            }}
          />

          <Icon
            icon={{
              name: 'tractor',
              source: 'fontAwesome5',
              color: 'green',
              size: 40,
            }}
          />

          <Icon
            icon={{
              name: 'minus',
              source: 'materialCommunity',
              color: 'pink',
              size: 40,
            }}
          />

          <Icon
            icon={{
              name: 'info',
              source: 'simpleLine',
              color: 'purple',
              size: 40,
            }}
          />
        </View>
      </Padding>
    </>
  );
}
