import React from 'react';

import enUs from 'assets/i18n/enUs.png';
import ptBr from 'assets/i18n/ptBr.png';
import { useI18n } from 'hooks';

import { Container, Image, ImageContainer, Text, Touchable } from './styles';

export const LanguageButton = () => {
  const { translate, handleChangeLocale, locale } = useI18n();

  // #region [NEX_LANGUAGE]
  const nextLanguage = () => {
    if (locale === 'pt_BR') return 'en_US';
    if (locale === 'en_US') return 'pt_BR';

    return 'pt_BR';
  };
  const next = nextLanguage();
  // #endregion

  // #region [IMAGE_LOADER]
  const imgRender = () => {
    if (locale === 'pt_BR') {
      return <Image source={ptBr} resizeMode="cover" />;
    }
    if (locale === 'en_US') {
      return <Image source={enUs} resizeMode="cover" />;
    }

    return <Image source={ptBr} resizeMode="cover" />;
  };
  // #endregion

  return (
    <Container>
      <Text>{translate('language')}</Text>
      <Touchable
        onPress={() => handleChangeLocale(next)}
        activeOpacity={0.8}
        hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
      >
        <ImageContainer>{imgRender()}</ImageContainer>
      </Touchable>
    </Container>
  );
};
