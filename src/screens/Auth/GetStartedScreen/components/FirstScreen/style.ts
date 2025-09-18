import { ms, vs } from "@/utils/scale";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { Animated } from "react-native";
import { Column } from "@/styles";

export const FirstScreenWrap = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
`

export const SkillsContentWrap = styled(Column)`
  width: 100%;
  align-items: center;
  position: relative;
  margin-top: ${vs(200)}px;
`

export const SkillItemWrap = styled(Column)`
  align-items: center;
  justify-content: center;
  width: ${ms(60)}px;
  height: ${ms(60)}px;
  background: ${({ theme }) => theme.colors.skillItemBg};
  border-radius: ${ms(30)}px;
  border: 1px solid ${({ theme }) => theme.colors.skillItemBorder};
`

export const SkillItemImage = styled.Image`
  height: ${ms(40)}px;
  aspect-ratio: 1 / 1;
`

export const AnimatedSkillItem = styled(Animated.View)`
  position: absolute;
`

export const CenterView = styled(Column)`
  align-items: center;
  justify-content: center;
`

export const LogoImage = styled(Animated.Image)`
  width: ${ms(60)}px;
  height: ${ms(60)}px;
`

export const Content = styled.Text`
  font-size: ${ms(16)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textWhite};
`

export const TitleText = styled.Text`
  font-size: ${ms(26)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textWhite};
`

export const ContentText = styled.Text`
  font-size: ${ms(18)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textWhite};
  text-align: center;
  margin-top: ${vs(20)}px;
`

export const ContentBox = styled(Column)`
  margin-top: ${vs(100)}px;
`