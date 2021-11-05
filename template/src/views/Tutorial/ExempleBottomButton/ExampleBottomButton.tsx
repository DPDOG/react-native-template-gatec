import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomButton, ContainerWrapper, Padding } from 'gaComponents';
import { Typography } from 'gatec-rn-framework';
import { useTheme } from 'gaTheme';
import { Alert } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleAccordion: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleAccordion'>;

export default function ExampleAccordion({ navigation }: Props) {
  const { theme } = useTheme();

  return (
    <>
      <ContainerWrapper>
        <Padding>
          <Padding valueX={0}>
            <Typography variant="h6">Componente Botão Inferior</Typography>
            <Typography variant="subtitle1">
              {
                'Nessa tela você pode observar um exemplo simples do uso do componente BottomButton. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > BottomButton'
              }
            </Typography>
          </Padding>
        </Padding>
      </ContainerWrapper>

      <BottomButton
        btnText="Small"
        btnSize="small"
        btnAction={() => Alert.alert('Botão Inferior pressionado!!')}
      />

      <BottomButton
        btnText="Default"
        btnSize="default"
        btnAction={() => Alert.alert('Botão Inferior pressionado!!')}
      />

      <BottomButton
        btnText="Large"
        btnSize="large"
        btnAction={() => Alert.alert('Botão Inferior pressionado!!')}
      />

      <BottomButton
        btnText="Extended"
        btnSize="extended"
        btnAction={() => Alert.alert('Botão Inferior pressionado!!')}
      />

      <BottomButton
        btnText="Botão texto"
        btnType="text"
        background="#440099"
        btnAction={() => Alert.alert('Botão Inferior pressionado!!')}
      />

      <BottomButton
        btnText="Botão outlined com loading"
        btnType="outlined"
        background="#440099"
        loading
        btnAction={() => Alert.alert('Botão Inferior pressionado!!')}
      />

      <BottomButton
        btnText="Sem padding e fundo theme.tertiary"
        noPadding
        background={theme.tertiary}
        btnAction={() => Alert.alert('Botão Inferior pressionado!!')}
      />
    </>
  );
}
