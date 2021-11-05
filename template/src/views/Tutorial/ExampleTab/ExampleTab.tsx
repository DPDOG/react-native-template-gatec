import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Padding, Tab, Typography } from 'gaComponents';
import { View } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleTab: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleTab'>;

export default function ExampleTab({ navigation }: Props) {
  const displayTabs = [
    {
      key: '1',
      title: 'Primeira',
      component: () => (
        <View
          style={{
            flex: 1,
            backgroundColor: 'purple',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" color="white">
            Conteúdo primeira tab
          </Typography>
        </View>
      ),
    },
    {
      key: '2',
      title: 'Segunda',
      component: () => (
        <View
          style={{
            flex: 1,
            backgroundColor: 'lightblue',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" color="white">
            Conteúdo segunda tab
          </Typography>
        </View>
      ),
    },
    {
      key: '3',
      title: 'Terceira',
      component: () => (
        <View
          style={{
            flex: 1,
            backgroundColor: 'lightyellow',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" color="black">
            Conteúdo terceira tab
          </Typography>
        </View>
      ),
    },
    {
      key: '4',
      title: 'Quarta',
      component: () => (
        <View
          style={{
            flex: 1,
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" color="white">
            Conteúdo quarta tab
          </Typography>
        </View>
      ),
    },
    {
      key: '5',
      title: 'Quinta',
      component: () => (
        <View
          style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h5" color="white">
            Conteúdo quinta tab
          </Typography>
        </View>
      ),
    },
  ];

  return (
    <>
      <Padding>
        <Typography variant="h6">Componente de Tab</Typography>
        <Typography variant="subtitle1">
          {
            'Nesta tela você irá poderá ver alguns exemplos de utilização do Tab. Para ver a documentação completa, acesse a Wiki do SimpleFarm > Especificações > Mobile > GAtecRNFramework > Tab'
          }
        </Typography>
      </Padding>
      <Tab tabs={displayTabs} scrollEnabled swipeEnabled />
    </>
  );
}
