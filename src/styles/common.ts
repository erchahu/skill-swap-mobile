import styled from 'styled-components/native';
import { ViewProps } from 'react-native';

interface FlexProps extends ViewProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

export const Row = styled.View<FlexProps>`
  flex-direction: row;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;

export const Column = styled.View<FlexProps>`
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;