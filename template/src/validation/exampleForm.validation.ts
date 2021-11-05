import * as yup from 'yup';

const OBJECT_SCHEMA = {
  Id: yup.number(),
  Value: yup.string().required('mustNotBeEmpty'),
};

export const exampleFormValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Não pode ser vazio')
    .transform((value) => value || ''),
  age: yup
    .number()
    .transform((value) => value || undefined)
    .required('Não pode ser vazio')
    .min(1, 'Idade nao pode ser menor que 1')
    .max(120, 'Idade não pode ser maior que 120'),
  workType: yup
    .object()
    .transform((value) => value || {})
    .shape(OBJECT_SCHEMA),
  birthDate: yup
    .string()
    .transform((value) => value || '')
    .required('Não pode ser vazio'),
});
