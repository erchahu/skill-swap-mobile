import { ms, vs } from "@/utils/scale";
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

  position: relative;
`

export const Logo = styled.Image`
  width: ${ms(120)}px;
  height: ${ms(120)}px;
`

export const SkillItemWrap = styled.View`
  position: absolute;
  top: ${vs(1)}px;
`

export const SkillItemImage = styled.Image`
  width: ${ms(20)}px;
  height: ${vs(20)}px;
  aspect-ratio: 1 / 1;
`