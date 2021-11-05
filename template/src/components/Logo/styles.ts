import { Spacing } from 'gaCss';
import styled, { css } from 'styled-components/native';

type LogoImageProps = {
  width?: number;
  height?: number;
};

export const LogoImage = styled.Image`
  width: ${Spacing.SPACING_204};
  height: ${Spacing.SPACING_204};

  ${(props: LogoImageProps) =>
    props.width &&
    css`
      width: ${props.width};
    `};

  ${(props: LogoImageProps) =>
    props.height &&
    css`
      height: ${props.height};
    `};
`;
