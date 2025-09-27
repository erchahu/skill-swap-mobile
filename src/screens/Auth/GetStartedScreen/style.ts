import { Row } from "@/styles";
import { ms, vs } from "@/utils/scale";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`

export const RowWrap = styled(Row)`
  paddingHorizontal: 20px;
`

export const RowButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgWhite};
  padding-vertical: ${vs(10)}px;
  border-radius: ${vs(25)}px;

  position: absolute;
  bottom: ${vs(80)}px;
`

export const RowButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.btnPrimary};
  font-size: ${vs(16)}px;
  font-weight: 600;
`

export const paginationDot = {
  active: {
    width: ms(30),
    height: vs(6),
    borderRadius: ms(10)
  },
  inactive: {
    width: ms(6),
    height: vs(6),
    borderRadius: ms(3)
  },
}

export const LanguageButton = styled(TouchableOpacity)`
  position: absolute;
  top: ${vs(60)}px;
  right: ${ms(20)}px;
  z-index: 999;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.skillItemBg};
  padding: ${vs(8)}px ${ms(12)}px;
  border-radius: ${vs(20)}px;
  border-width: ${vs(1)}px;
  border-color: ${({ theme }) => theme.colors.skillItemBorder};
  gap: ${ms(6)}px;
`

export const LanguageButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: ${vs(14)}px;
  margin-left: ${ms(6)}px;
`

export const LanguageIcon = styled.Text`
  font-size: ${vs(16)}px;
`