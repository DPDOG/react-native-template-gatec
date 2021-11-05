import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Padding, Thumbnail } from 'gaComponents';
import { Typography } from 'gatec-rn-framework';
import { useTheme } from 'gaTheme';
import { View } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleThumbnail: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleThumbnail'>;

export default function ExampleThumbnail({ navigation }: Props) {
  const { theme } = useTheme();

  return (
    <>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente Thumbnail</Typography>
          <Typography variant="subtitle1">
            {
              'Nessa tela você pode observar um exemplo simples do uso do componente Thumbnail. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > Thumbnail'
            }
          </Typography>
        </Padding>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Padding>
            <Thumbnail
              background="error"
              text="Raissa da Silva"
              color={theme.onPrimary}
              elevation
              isAvatar
            />
          </Padding>
          <Padding>
            <Thumbnail
              background="primary"
              text="Matheus Costa Francisco"
              color="#FFFFFF"
              elevation
              isAvatar
            />
          </Padding>
          <Typography variant="subtitle2">
            {'Somente com as iniciais do \nusuário'}
          </Typography>
        </View>

        <Padding>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Thumbnail
              variant="icon"
              background="secondary"
              color="#FFFFFF"
              icon="plus"
              elevation
              isAvatar
            />
            <Padding>
              <Typography variant="subtitle2">Exemplo com ícone</Typography>
            </Padding>
          </View>
        </Padding>

        <Padding>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Thumbnail
              variant="icon"
              background="onPrimary"
              color="#ff04d5"
              icon="plus"
              elevation
              isAvatar
            />
            <Padding>
              <Typography variant="subtitle2">
                Exemplo alterando a cor do ícone
              </Typography>
            </Padding>
          </View>
        </Padding>

        <Padding>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Thumbnail
              variant="icon"
              background="#FFF"
              color={theme.onBackground}
              icon="tractor"
              elevation
            />
            <Padding>
              <Typography variant="subtitle2">Exemplo com elevation</Typography>
            </Padding>
          </View>
        </Padding>

        <Padding>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Thumbnail
              variant="icon"
              background="#FFF"
              color={theme.onBackground}
              icon="tractor"
            />
            <Padding>
              <Typography variant="subtitle2">Exemplo sem elevation</Typography>
            </Padding>
          </View>
        </Padding>
      </Padding>
    </>
  );
}
