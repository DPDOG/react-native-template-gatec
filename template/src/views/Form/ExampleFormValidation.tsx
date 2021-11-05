import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  BottomButton,
  ContainerWrapper,
  Datepicker,
  InputBase,
  NumberPicker,
  Padding,
  Selectable,
} from 'gaComponents';
import { MobReferenceObjectType } from 'gatec-rn-framework/src/components/FilterList/types';
import {
  getValidationError,
  buildDisplayStringDate,
  buildDisplayDate,
  buildSaveDateTime,
  parseStringToDate,
} from 'gatec-rn-framework/src/utils';
import { Alert } from 'react-native';
import * as yup from 'yup';

import { exampleFormValidationSchema } from '../../validation/exampleForm.validation';

type RootStackParamList = {
  Menu: undefined;
  ExampleFormValidation: undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  'ExampleFormValidation'
>;

export interface Errors {
  [key: string]: string | undefined;
}

const entries: MobReferenceObjectType[] = [
  {
    Value: 'Remunerado',
    Id: 0,
  },
  {
    Value: 'Voluntário',
    Id: 1,
  },
];

export default function ExampleFormValidation({ navigation }: Props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [workType, setWorkType] = useState<MobReferenceObjectType[]>();
  const [birthDate, setBirthDate] = useState('');
  const [errors, setErrors] = useState<Errors>();

  const handleErrors = (errorList: Errors) => {
    setErrors(errorList);
  };

  async function handleSave() {
    try {
      const values = {
        name,
        age,
        workType,
        birthDate,
      };

      await exampleFormValidationSchema.validate(values, {
        abortEarly: false,
      });
      setErrors({});
      Alert.alert('Validado!');
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorsList = getValidationError(err);
        handleErrors(errorsList);
      }
    }
  }

  return (
    <>
      <ContainerWrapper>
        <Padding>
          <Padding valueX={0}>
            <InputBase
              label="Nome"
              value={name}
              onChangeText={setName}
              errorLog={errors?.name}
            />
            <NumberPicker
              label="Idade"
              labelEnterButton="Pronto"
              onSave={(val) => setAge(val || 0)}
              errorLog={errors?.age}
              validation={{ min: 1, max: 120 }}
            />
            <Datepicker
              onChange={(el) => setBirthDate(el)}
              value={birthDate}
              errorLog={errors?.birthDate}
              labelDatePicker="Data de nascimento"
              mode="date"
              maximumDate={parseStringToDate('22/10/2021')}
              minimumDate={parseStringToDate('22/09/2021')}
            />
            <Selectable
              entries={entries}
              label="Tipo de trabalho"
              value={workType}
              onChange={(val) => setWorkType(val)}
              errorLog={errors?.workType}
            />
          </Padding>
        </Padding>
      </ContainerWrapper>
      <BottomButton btnText="Salvar" btnAction={() => handleSave()} />
    </>
  );
}
