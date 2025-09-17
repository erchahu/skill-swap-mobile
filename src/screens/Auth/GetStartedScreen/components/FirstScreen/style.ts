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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;
  background-color: aliceblue;
`

export const Logo = styled.Image`
  width: ${ms(120)}px;
  height: ${ms(120)}px;
`

export const SkillItemWrap = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${ms(60)}px;
  height: ${ms(60)}px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: ${ms(30)}px;
`

export const SkillItemImage = styled.Image`
  height: ${ms(40)}px;
  aspect-ratio: 1 / 1;
`