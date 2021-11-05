import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Accordion, Padding } from 'gaComponents';
import { Typography } from 'gatec-rn-framework';

interface AccordionProps {
  list: AccordionRowProps[];
}

type AccordionRowProps = {
  data: string | AccordionProps;
  title: string;
  options?: {
    noBackground?: boolean;
    noPadding?: boolean;
  };
};

type RootStackParamList = {
  Menu: undefined;
  ExampleAccordion: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ExampleAccordion'>;

export default function ExampleAccordion({ navigation }: Props) {
  const accordionList: AccordionRowProps[] = [
    {
      data: {
        list: [
          {
            data: 'Opa e ai',
            title: 'Oi',
          },
          {
            data: 'Hello!',
            title: 'Oi?',
            options: {
              noBackground: true,
            },
          },
        ],
      },
      title: 'Diga olá',
    },
  ];

  return (
    <>
      <Padding>
        <Padding valueX={0}>
          <Typography variant="h6">Componente Accordion</Typography>
          <Typography variant="subtitle1">
            {
              'Nessa tela você pode observar um exemplo simples do uso do componente Accordion. Para ver a documentação acesse a Wiki do Simplefarm > Especificações > Mobile > GAtecRNFramework > Accordion'
            }
          </Typography>
        </Padding>

        <Accordion list={accordionList} />
      </Padding>
    </>
  );
}
