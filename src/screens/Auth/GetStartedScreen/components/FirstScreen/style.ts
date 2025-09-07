import { Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

const { height } = Dimensions.get('window');

export const FirstScreenWrap = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

export const FirstContentWrap = styled.View<{
  top: number;
  bottom: number;
}>`
  height: ${({ top, bottom }) => height - top - bottom}px;
`

export const EarthBg = styled.Image`
  height: 100%;
  aspect-ratio: 1 / 1;
`

export const FirstContentLogo = styled.Image`
  width: 120px;
  height: ${120}px;

  position: absolute;
  top: ${100}px;
  left: 80%;
`