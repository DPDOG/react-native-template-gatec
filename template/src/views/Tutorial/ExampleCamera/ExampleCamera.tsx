import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ContainerWrapper,
  CustomCamera,
  Padding,
  Typography,
} from 'gaComponents';
import { simpleSnackbarShow } from 'gaUtils';
import { Image, View } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleCamera: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleCamera'>;

export default function ExampleCamera({ navigation }: Props) {
  const [images, setImages] = useState({});

  const onSave = (val: any) => {
    const photo = { ...val };

    if (photo?.didCancel) return;

    if (photo?.errorMessage) {
      simpleSnackbarShow(photo.errorMessage, 'error');

      return;
    }
    setImages(photo);
  };

  return (
    <>
      <ContainerWrapper>
        <Padding>
          <Padding valueX={0}>
            <Typography variant="h6">Componente de Camera</Typography>
            <Typography variant="subtitle1">
              {
                'Nesta tela você irá poderá ver alguns exemplos de uso da Camera. Para ver a documentação completa, acesse a Wiki do SimpleFarm > Especificações > Mobile > GAtecRNFramework > Camera. Importante! Veja que o componente esta em baixo do ContainerWrapper, isso é feito pois o fab button precisa disso para se posicionar de forma correta.'
              }
            </Typography>
          </Padding>

          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#ccc',
              width: '100%',
              minHeight: 300,
              borderRadius: 16,
              padding: 16,
            }}
          >
            <Typography variant="h5">Tire uma foto</Typography>
            {images && (
              <Image
                source={images}
                style={{
                  borderRadius: 16,
                  width: 300,
                  height: 300,
                }}
              />
            )}
          </View>
        </Padding>
      </ContainerWrapper>
      <CustomCamera onSave={onSave} />
    </>
  );
}
