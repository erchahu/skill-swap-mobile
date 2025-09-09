import { ms } from "@/utils/scale";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

export const FirstScreenWrap = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

export const SkillsContentWrap = styled.View`
  margin-left: ${ms(30)}px;
  margin-right: ${ms(30)}px;

  flex: 1;
`

export const Logo = styled.Image`
  width: ${ms(120)}px;
  height: ${ms(120)}px;
`

export const SkillItemWrap = styled.View`

`