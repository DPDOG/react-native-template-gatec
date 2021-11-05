import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  Carroussel,
  ContainerWrapper,
  Padding,
  Typography,
} from 'gaComponents';
import { View } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleCarrousel: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleCarrousel'>;

/* Objeto exemplo */
const items = [
  {
    id: 1,
    title: '1',
  },
  {
    id: 2,

    title: '2',
  },
  {
    id: 3,

    title: '3',
  },
  {
    id: 4,

    title: '4',
  },
  {
    id: 5,

    title: '5',
  },
  {
    id: 6,

    title: '6',
  },
];

export default function ExampleCarrousel({ navigation }: Props) {
  const [selected, SetSelected] = useState(1);

  function switchSelected(param: number) {
    switch (param) {
      case 1:
        return <Typography>Você clicou no primeiro item!</Typography>;
      case 2:
        return <Typography>Você clicou no segundo item!</Typography>;
      case 3:
        return <Typography>Você clicou no terceiro item!</Typography>;
      case 4:
        return <Typography>Você clicou no quarto item!</Typography>;
      case 5:
        return <Typography>Você clicou no quinto item!</Typography>;
      case 6:
        return <Typography>Você clicou no sexto item!</Typography>;
      default:
        return <Typography>Nenhum item selecionado!</Typography>;
    }
  }

  return (
    <ContainerWrapper>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente Carrousel</Typography>
          <Typography variant="subtitle1">
            {
              'Nessa tela você pode observar um exemplo simples do uso do componente Carrousel. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > Carrousel'
            }
          </Typography>
        </Padding>
      </Padding>
      <Carroussel>
        {items.map((x) => (
          <View
            style={{
              margin: 10,
              borderRadius: 10,
              padding: 6,
              minHeight: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              text={x.title}
              size="small"
              action={() => SetSelected(x.id)}
            />
          </View>
        ))}
      </Carroussel>
      <Padding>{switchSelected(selected)}</Padding>
    </ContainerWrapper>
  );
}
