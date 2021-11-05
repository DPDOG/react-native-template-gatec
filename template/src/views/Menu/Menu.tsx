import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ContainerWrapper,
  Padding,
  Typography,
  ThemeButton,
  CustomLink,
  IconObjectProps,
} from 'gaComponents';

import { LanguageButton } from 'components';
import { useI18n } from 'hooks';

type RootStackParamList = {
  Login: undefined;

  Menu: undefined;

  ExampleAccordion: undefined;

  ExampleBarcodeReader: undefined;

  ExampleBottomButton: undefined;

  ExampleButtons: undefined;

  ExampleCamera: undefined;

  ExampleCarrousel: undefined;

  ExampleChips: undefined;

  ExampleConfirmBox: undefined;

  ExampleCustomModal: undefined;

  ExampleDetailModal: undefined;

  ExampleIcons: undefined;

  ExampleImagems: undefined;

  ExampleInputs: undefined;

  ExampleSelectable: undefined;

  ExampleSpinner: undefined;

  ExampleStyledStatusBar: undefined;

  ExampleSwitch: undefined;

  ExampleTab: undefined;

  ExampleThumbnail: undefined;

  ExampleTabModal: undefined;

  ExampleAvatar: undefined;

  ExampleFab: undefined;

  ExampleFormValidation: undefined;

  ExampleStandardList: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Menu'>;

type ComponentListProps = { name: string; link: keyof RootStackParamList }[];

export default function Menu({ navigation }: Props) {
  const { translate } = useI18n();

  const handleNavigate = (link: keyof RootStackParamList) => {
    navigation.navigate(link);
  };

  const iconForLink: IconObjectProps = {
    name: 'arrow-right',
    source: 'simpleLine',
    size: 24,
    color: 'primaryVariant',
  };

  const components: ComponentListProps = [
    { name: 'Accordion', link: 'ExampleAccordion' },
    { name: 'BarcodeReader', link: 'ExampleBarcodeReader' },
    { name: 'BottomButton', link: 'ExampleBottomButton' },
    { name: 'Buttons', link: 'ExampleButtons' },
    { name: 'Camera', link: 'ExampleCamera' },
    { name: 'Carrousel', link: 'ExampleCarrousel' },
    { name: 'Chips', link: 'ExampleChips' },
    { name: 'ConfirmBox', link: 'ExampleConfirmBox' },
    { name: 'CustomModal', link: 'ExampleCustomModal' },
    { name: 'DetailModal', link: 'ExampleDetailModal' },
    { name: 'Icons', link: 'ExampleIcons' },
    { name: 'Imagem', link: 'ExampleImagems' },
    { name: 'Inputs', link: 'ExampleInputs' },
    { name: 'Selectable', link: 'ExampleSelectable' },
    { name: 'Spinner', link: 'ExampleSpinner' },
    { name: 'StyledStatusBar', link: 'ExampleStyledStatusBar' },
    { name: 'Switch', link: 'ExampleSwitch' },
    { name: 'Tab', link: 'ExampleTab' },
    { name: 'Thumbnail', link: 'ExampleThumbnail' },
    { name: 'TabModal', link: 'ExampleTabModal' },
    { name: 'Avatar', link: 'ExampleAvatar' },
    { name: 'Fab', link: 'ExampleFab' },
    { name: 'StandardList', link: 'ExampleStandardList' },
  ];

  return (
    <ContainerWrapper>
      <Padding>
        <Typography variant="h5">
          {translate('helloUser', ['GAtec'])}
        </Typography>
      </Padding>

      <Padding>
        <Typography variant="h5">{translate('settings')}</Typography>

        <LanguageButton />

        <ThemeButton />
      </Padding>

      <Padding>
        <Typography variant="h5">Form Exemplo</Typography>

        <CustomLink
          key="FormExample"
          title="FormExample"
          icon={iconForLink}
          action={() => handleNavigate('ExampleFormValidation')}
        />
      </Padding>

      <Padding>
        <Typography variant="h5">{translate('tutorial')}</Typography>

        {components.map((component) => (
          <CustomLink
            key={component.name}
            title={component.name}
            icon={iconForLink}
            action={() => handleNavigate(component.link)}
          />
        ))}
      </Padding>
    </ContainerWrapper>
  );
}
