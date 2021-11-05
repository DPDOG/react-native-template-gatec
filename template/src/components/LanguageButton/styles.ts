import { Font, Spacing } from 'gaCss';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${Spacing.SPACING_56};
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: ${Spacing.SPACING_56};
  height: ${Spacing.SPACING_56};
  border-radius: ${Spacing.SPACING_8};
`;

export const Image = styled.Image`
  width: ${Spacing.SPACING_40};
  height: ${Spacing.SPACING_40};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${Spacing.SPACING_8};
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.onSurfacePrimary};
  font-size: ${Font.FONT_SIZE_16};
  line-height: ${Font.LINE_HEIGHT_20};
  font-family: ${Font.FONT_FAMILY_REGULAR};
`;

export const Touchable = styled.TouchableOpacity`
  width: ${Spacing.SPACING_56};
  height: ${Spacing.SPACING_56};
  border-radius: ${Spacing.SPACING_8};
`;
