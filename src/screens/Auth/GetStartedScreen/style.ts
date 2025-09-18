import { Row } from "@/styles";
import { ms, vs } from "@/utils/scale";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
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