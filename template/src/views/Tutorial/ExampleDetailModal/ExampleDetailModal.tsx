import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ContainerWrapper,
  DetailModal,
  Padding,
  Typography,
} from 'gaComponents';
import { View } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleDetailModal: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleDetailModal'>;

export default function ExampleDetailModal({ navigation }: Props) {
  return (
    <ContainerWrapper>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente DetailModal</Typography>
          <Typography variant="subtitle1">
            {
              'Nessa tela você pode observar um exemplo simples do uso do componente DetailModal. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > DetailModal'
            }
          </Typography>
        </Padding>
      </Padding>

      <DetailModal
        title="ExemploDetalhes"
        items={[
          {
            label: 'ExemploItem',
            text: 'ExemploTextoItem',
          },
        ]}
      />

      <Padding valueX={0}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Padding valueX={15}>
            <Typography>Exemplo de um modal a partir de um ícone:</Typography>
          </Padding>

          <DetailModal
            title="ExemploDetalhes"
            items={[
              {
                label: 'ExemploItem',
                text: 'Dentro do modal de ícone!!',
              },
            ]}
            icon={{
              iconName: 'info',
              source: 'fontAwesome5',
              color: 'tertiary',
            }}
          />
        </View>
      </Padding>
    </ContainerWrapper>
  );
}
