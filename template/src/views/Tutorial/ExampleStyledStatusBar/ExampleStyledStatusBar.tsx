import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Button,
  Carroussel,
  ContainerWrapper,
  CustomModal,
  Padding,
  StyledStatusBar,
  Typography,
} from 'gaComponents';
import { Alert, View } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleStyledStatusBar: undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  'ExampleStyledStatusBar'
>;

/* Objeto exemplo */
const items = [
  {
    id: 1,
    title: '1',
    color: '#ff0000',
  },
  {
    id: 2,

    title: '2',
    color: '#ff5e00',
  },
  {
    id: 3,

    title: '3',
    color: '#91ff00',
  },
  {
    id: 4,

    title: '4',
    color: '#00ffb3',
  },
  {
    id: 5,

    title: '5',
    color: '#0059ff',
  },
  {
    id: 6,

    title: '6',
    color: '#ff00ff',
  },
];

export default function ExampleStyledStatusBar({ navigation }: Props) {
  const [selected, SetSelected] = useState(1);

  function switchSelected(param: number) {
    switch (param) {
      case 1:
        return <StyledStatusBar background="#ff0000" />;
      case 2:
        return <StyledStatusBar background="#ff5e00" />;
      case 3:
        return <StyledStatusBar background="#91ff00" />;
      case 4:
        return <StyledStatusBar background="#00ffb3" />;
      case 5:
        return <StyledStatusBar background="#0059ff" />;
      case 6:
        return <StyledStatusBar background="#ff00ff" />;

      default:
        return <StyledStatusBar background="#ff00c8" />;
    }
  }

  return (
    <ContainerWrapper>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente StyledStatusBar</Typography>
          <Typography variant="subtitle1">
            {
              'Nessa tela você pode observar um exemplo simples do uso do componente StyledStatusBar, clicando nos botões expostos no carousel abaixo. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > StyledStatusBar'
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
              type="contained"
              background={x.color}
              action={() => SetSelected(x.id)}
            />
          </View>
        ))}
      </Carroussel>
      <Padding>{switchSelected(selected)}</Padding>
    </ContainerWrapper>
  );
}
