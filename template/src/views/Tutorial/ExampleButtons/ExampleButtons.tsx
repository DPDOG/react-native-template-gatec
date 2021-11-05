import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, IconObjectProps, Padding, Typography } from 'gaComponents';
import { useTheme } from 'gaTheme';
import { Alert } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleButtons: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleButtons'>;

export default function ExampleButtons({ navigation }: Props) {
  const { theme } = useTheme();

  const printExample = () => {
    Alert.alert('Isso é um exemplo', 'É apenas um teste');
  };

  const iconObj: IconObjectProps = {
    name: 'info',
    color: '#fefefe',
    size: 24,
    source: 'fontAwesome5',
  };

  return (
    <>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente de Botão</Typography>
          <Typography variant="subtitle1">
            {
              'Nesta tela você irá poderá ver alguns exemplos de botões com diferentes configurações. Para ver a documentação completa, acesse a Wiki do SimpleFarm > Especificações > Mobile > GAtecRNFramework > Buttons'
            }
          </Typography>
        </Padding>

        <Button text="Exemplo" action={printExample} />

        <Button text="Small" action={printExample} size="small" />
        <Button text="Default" action={printExample} size="default" />
        <Button text="Large" action={printExample} size="large" />
        <Button text="Extended" action={printExample} size="extended" />

        <Button
          text="Background Gradient"
          action={printExample}
          size="extended"
          background={[theme.primary, theme.primaryVariant]}
        />

        <Button
          text="Background"
          type="contained"
          action={printExample}
          size="extended"
          background={theme.error}
        />

        <Button
          text="Background"
          type="contained"
          action={printExample}
          size="extended"
          background="success"
        />

        <Button
          text="Colors N' Icons"
          type="contained"
          action={printExample}
          size="extended"
          background="#0a0a0a"
          color="#fefefe"
          icon={iconObj}
        />
      </Padding>
    </>
  );
}
