import { ms, vs } from "@/utils/scale";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { Row, Column } from "@/styles";

export const LangSwitcherWrap = styled.View`
  background-color: ${({ theme }) => theme.colors.bgWhite};
  border-top-left-radius: ${vs(20)}px;
  border-top-right-radius: ${vs(20)}px;
`;

export const ModalHeader = styled(Row)`
  justify-content: space-between;
  align-items: center;
  padding: ${vs(16)}px ${ms(16)}px;
  border-bottom-width: ${vs(1)}px;
  border-bottom-color: ${({ theme }) => theme.colors.borderSecondary};
`;

export const HeaderButton = styled.TouchableOpacity`
  padding: ${vs(4)}px ${ms(8)}px;
`;

interface HeaderButtonTextProps {
  isPrimary?: boolean;
}

export const HeaderButtonText = styled.Text<HeaderButtonTextProps>`
  font-size: ${vs(16)}px;
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : theme.colors.textSecondary};
  font-weight: ${({ isPrimary }) => isPrimary ? '600' : '400'};
`;

export const ModalTitle = styled.Text`
  font-size: ${vs(18)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  flex: 1;
  text-align: center;
`;

export const ModalContent = styled(Column)`
  padding: ${vs(20)}px 0;
  padding-bottom: ${vs(30)}px;
`;

interface LanguageOptionProps {
  isSelected: boolean;
}

export const LanguageOption = styled(TouchableOpacity)<LanguageOptionProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${vs(16)}px ${ms(20)}px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.bgSecondary : theme.colors.bgWhite};
`;

export const LanguageText = styled.Text`
  font-size: ${vs(16)}px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  flex: 1;
`;

export const LanguageFlag = styled.Text`
  font-size: ${vs(20)}px;
`;

export const CheckIcon = styled.View`
  width: ${ms(24)}px;
  height: ${ms(24)}px;
  border-radius: ${ms(12)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const SelectedIndicator = styled.Text`
  font-size: ${vs(14)}px;
  color: ${({ theme }) => theme.colors.textWhite};
  font-weight: bold;
`;

export const switcherModalStyle: StyleProp<ViewStyle> = {
  margin: 0,
  justifyContent: 'flex-end'
}