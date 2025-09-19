import { ms, vs } from "@/utils/scale";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { Animated } from "react-native";
import { Column } from "@/styles";
import { BlurView } from "@react-native-community/blur";

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
  position: relative;
  align-items: center;
  justify-content: center;
  width: ${ms(60)}px;
  height: ${ms(60)}px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${ms(30)}px;
  border: 1px solid ${({ theme }) => theme.colors.skillItemBorder};
  overflow: hidden;
`

export const SkillItemBlurView = styled(BlurView)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: -1;
`

export const SkillItemImage = styled.Image`
  height: ${ms(30)}px;
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
  font-size: ${vs(26)}px;
  line-height: ${vs(30)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textWhite};
`

export const ContentText = styled.Text`
  font-size: ${vs(18)}px;
  line-height: ${vs(22)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textWhite};
  text-align: center;
  margin-top: ${vs(20)}px;
`

export const ContentBox = styled(Column)`
  margin-top: ${vs(100)}px;
`
