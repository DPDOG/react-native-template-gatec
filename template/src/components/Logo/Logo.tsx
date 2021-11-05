import React from 'react';

import Image from 'assets/images/Logo/gatec.png';

import { LogoImage } from './styles';
import { LogoProps } from './types';

export const Logo = ({ width = 200, height = 200 }: LogoProps) => (
  <LogoImage
    source={Image}
    resizeMode="contain"
    width={width}
    height={height}
  />
);
