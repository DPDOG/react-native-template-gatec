import React, { useEffect, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ContainerWrapper,
  InputText,
  Padding,
  InputCoords,
  NumberPicker,
  SwitchInput,
  Checkbox,
  Typography,
  Datepicker,
  DatetimePicker,
} from 'gaComponents';
import { getPosition, parseStringToDate, simpleSnackbarShow } from 'gaUtils';
import { View } from 'react-native';

type RootStackParamList = {
  Menu: undefined;
  ExampleInputs: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleInputs'>;

type LatLongObj = {
  latitude: number | null;

  longitude: number | null;
};

export default function ExampleInputs({ navigation }: Props) {
  const [num, setNum] = useState<number | undefined>();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [dateTime, setDateTime] = useState('');

  const [txt, setTxt] = useState('');
  const [bool, setBool] = useState(false);
  const [check, setCheck] = useState(false);
  const [position, setPosition] = useState<LatLongObj>();

  const loadData = async () => {
    try {
      const { coords } = await getPosition();
      setPosition({ latitude: coords.latitude, longitude: coords.longitude });
    } catch (error) {
      simpleSnackbarShow('Erro ao obter coordenadas', 'error', 1000);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ContainerWrapper>
      <Padding>
        <Typography variant="h6">Componente de Inputs</Typography>
        <Typography variant="subtitle1">
          {
            'Nesta tela você irá poderá ver alguns exemplos de utilização de Inputs. Para ver a documentação completa, acesse a Wiki do SimpleFarm > Especificações > Mobile > GAtecRNFramework > Inputs'
          }
        </Typography>
      </Padding>
      <Padding>
        <InputText
          label="Esse é um input de texto"
          value={txt}
          onChangeText={setTxt}
        />
      </Padding>

      <Padding>
        <InputText
          label="Esse é um input de texto multline"
          value={txt}
          onChangeText={setTxt}
          multiline
        />
      </Padding>

      <Padding>
        <InputCoords
          label="Esse é para coordenadas"
          polygons={[]}
          value={position}
          onChange={setPosition}
        />
      </Padding>

      <Padding>
        <NumberPicker
          value={num}
          onSave={setNum}
          label="Input para numeros"
          labelEnterButton="Salvar"
          validation={{
            max: 100,
            min: 2,
          }}
        />
      </Padding>

      <Padding>
        <Datepicker
          onChange={(el) => setDate(el)}
          value={date}
          labelDatePicker="Esse é um input de data "
          mode="date"
          maximumDate={parseStringToDate('22/10/2021')}
          minimumDate={parseStringToDate('22/09/2021')}
        />
      </Padding>

      <Padding>
        <Datepicker
          onChange={(el) => setTime(el)}
          value={time}
          labelDatePicker="esse é um input de tempo"
          mode="time"
          showSeconds
        />
      </Padding>

      <Padding>
        <DatetimePicker
          onChange={(el) => setDateTime(el)}
          value={dateTime}
          labelDateTimePicker="Esse é um input de Data e Tempo"
          maximumDate={parseStringToDate('22/10/2021')}
          minimumDate={parseStringToDate('22/09/2021')}
        />
      </Padding>

      <View style={{ flexDirection: 'row', padding: 16 }}>
        <SwitchInput value={bool} onChange={setBool} errorLog="" />
        <Typography variant="h6">Switch</Typography>
      </View>

      <View style={{ flexDirection: 'row', padding: 16 }}>
        <Typography variant="h6">Switch</Typography>
        <SwitchInput value={bool} onChange={setBool} errorLog="" />
      </View>

      <View style={{ flexDirection: 'row', padding: 16 }}>
        <Checkbox
          value={check}
          onChange={() => setCheck(!check)}
          checkBoxTextLabel="CheckBox"
        />
      </View>
    </ContainerWrapper>
  );
}
