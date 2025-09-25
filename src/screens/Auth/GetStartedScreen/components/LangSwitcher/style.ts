import { ms, vs } from "@/utils/scale";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { Row, Column } from "@/styles";

export const LangSwitcherWrap = styled.View`
  background-color: ${({ theme }) => theme.colors.bgWhite};
  border-top-left-radius: ${vs(20)}px;
  border-top-right-radius: ${vs(20)}px;
  padding-bottom: ${vs(20)}px;
`;

export const ModalContent = styled(Column)`
  padding: ${vs(24)}px ${ms(20)}px;
`;

export const ModalTitle = styled.Text`
  font-size: ${vs(20)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  margin-bottom: ${vs(24)}px;
`;

interface LanguageOptionProps {
  isSelected: boolean;
}

export const LanguageOption = styled(Row)<LanguageOptionProps>`
  justify-content: space-between;
  align-items: center;
  padding: ${vs(16)}px ${ms(16)}px;
  border-radius: ${vs(12)}px;
  margin-bottom: ${vs(12)}px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.bgSecondary : theme.colors.bgTertiary};
  border-width: ${vs(2)}px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.borderTransparent};
`;

export const LanguageText = styled.Text`
  font-size: ${vs(16)}px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
`;

export const LanguageFlag = styled.Text`
  font-size: ${vs(20)}px;
  margin-right: ${ms(8)}px;
`;

export const SelectedIndicator = styled.Text`
  font-size: ${vs(20)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const ButtonContainer = styled(Row)`
  justify-content: space-between;
  margin-top: ${vs(24)}px;
  gap: ${ms(12)}px;
`;

export const CancelButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  padding: ${vs(14)}px;
  border-radius: ${vs(12)}px;
  align-items: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${vs(14)}px;
  border-radius: ${vs(12)}px;
  align-items: center;
`;

interface ButtonTextProps {
  isCancel?: boolean;
}

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${({ theme, isCancel }) =>
    isCancel ? theme.colors.textPrimary : theme.colors.textWhite};
  font-size: ${vs(16)}px;
  font-weight: 600;
`;

export const switcherModalStyle: StyleProp<ViewStyle> = {
  margin: 0,
  justifyContent: 'flex-end'
}