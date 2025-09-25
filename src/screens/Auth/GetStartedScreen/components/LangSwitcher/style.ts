import { ms, vs } from "@/utils/scale";
import { StyleProp, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import styled from "styled-components/native";

export const LangSwitcherModal = styled(Modal)`
  margin: 0;
  justify-content: flex-end;
`

export const LangSwitcherWrap = styled.View`
  background-color: ${({ theme }) => theme.colors.bgWhite};
  padding: ${vs(10)}px ${ms(10)}px;
`

export const switcherModalStyle: StyleProp<ViewStyle> = {
  margin: 0,
  justifyContent: 'flex-end'
}