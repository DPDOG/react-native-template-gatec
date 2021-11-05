import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Padding, Image, ContainerWrapper, Typography } from 'gaComponents';

import simpleFarm from '../../../assets/images/Logo/simplefarm.png';

type RootStackParamList = {
  Menu: undefined;
  ExampleButtons: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleButtons'>;

export default function ExampleImagems({ navigation }: Props) {
  return (
    <>
      <ContainerWrapper>
        <Padding>
          <Typography variant="h6">Componente Imagem</Typography>
          <Typography variant="subtitle1">
            {
              'Nessa tela você pode observar alguns exemplos simples do uso do componente Imagem, utilizando algumas das possibilidades que o componente trás. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > Imagem'
            }
          </Typography>

          <Image
            source={simpleFarm}
            size="extend"
            title={{
              text: 'Logo da empresa',
              align: 'center',
            }}
            subtitle={{ text: 'País europeu', align: 'center' }}
          />

          <Image source={simpleFarm} size="large" />
          <Image source={simpleFarm} size="medium" />
          <Image source={simpleFarm} size="mini" />
        </Padding>
        <Image
          source={simpleFarm}
          size="full"
          title={{
            text: 'Pode ser um hero banner',
          }}
          hero={{
            text: 'UM HERO BANNER',
            fontSize: 36,
            fontStyle: 'bold',
          }}
        />
        <Padding />
      </ContainerWrapper>
    </>
  );
}
