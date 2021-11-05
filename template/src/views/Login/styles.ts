import { Spacing } from 'gatec-rn-framework';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.surfacePrimary};

  padding-left: ${Spacing.SPACING_16};
  padding-right: ${Spacing.SPACING_16};
`;
