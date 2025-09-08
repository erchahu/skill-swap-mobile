import { ms } from "@/utils/scale";
import { Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

const { height } = Dimensions.get('window');

export const FirstScreenWrap = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

export const EarthBg = styled.ImageBackground`
  position: absolute;
  aspect-ratio: 375 / 812;
  z-index: -1;
  flex: 1;
`

export const LogoContentWrap = styled.View`
  margin-left: ${ms(30)}px;
  margin-right: ${ms(30)}px;

  flex: 1;
`

export const Logo = styled.Image`
  width: ${ms(120)}px;
  height: ${ms(120)}px;


`