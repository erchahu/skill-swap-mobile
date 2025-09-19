import { Column, Row } from "@/styles";
import { ms, vs } from "@/utils/scale";
import { BlurView } from "@react-native-community/blur";
import styled from "styled-components/native";

export const SecondScreenWrap = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;

  padding: 0 ${ms(100)}px;
  background-color: ${({theme}) => theme.colors.secondaryHeavy};
`

export const SecondScreenImage = styled.ImageBackground`
  position: absolute;
  height: 100%;
  aspect-ratio: 375 / 812;
`


export const SecondTitle = styled.Text`
  font-size: ${vs(26)}px;
  line-height: ${vs(30)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textWhite};
  margin-top: ${vs(60)}px;
`

export const SecondDesc = styled.Text`
  font-size: ${vs(18)}px;
  line-height: ${vs(22)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textWhite};
  text-align: center;
  margin-top: ${vs(30)}px;
  margin-bottom: ${vs(40)}px;
`

export const DescCard = styled(Row)`
  position: relative;
  padding: ${vs(20)}px ${ms(20)}px;
  border: 1px solid ${({ theme }) => theme.colors.skillItemBorder};
  border-radius: ${vs(20)}px;
  margin-bottom: ${vs(30)}px;
  gap: ${ms(20)}px;
  overflow: hidden;
`

export const DescCardIndex = styled.Text`
  width: ${vs(40)}px;
  height: ${vs(40)}px;
  font-size: ${vs(22)}px;
  line-height: ${vs(40)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondaryHeavy};
  border-radius: ${vs(40)}px;
  text-align: center;
  background-color: aliceblue;
`

export const DescCardRight = styled(Column)`
  gap: ${vs(10)}px;
`

export const DescCardRightTitle = styled.Text`
  font-size: ${vs(16)}px;
  line-height: ${vs(20)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textWhite};
`

export const DescCardRightDesc = styled.Text`
  font-size: ${vs(14)}px;
  line-height: ${vs(18)}px;
  color: ${({ theme }) => theme.colors.textWhite};
`

export const DescCardBlurView = styled(BlurView)`
  position: absolute;
  
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  border-radius: ${vs(20)}px;
`