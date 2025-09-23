import { ms, vs } from "@/utils/scale";
import LinearGradient from "react-native-linear-gradient";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const ThirdScreenWrap = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
`

export const ParticlesContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const Particle = styled(Animated.View)<{ index: number }>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.skillParticleBg};
  border-radius: ${props => {
    const sizes = [5, 7.5, 4, 6, 10];
    return sizes[props.index] || 5;
  }}px;
  width: ${props => {
    const sizes = [10, 15, 8, 12, 20];
    return sizes[props.index] || 10;
  }}px;
  height: ${props => {
    const sizes = [10, 15, 8, 12, 20];
    return sizes[props.index] || 10;
  }}px;
  left: ${props => {
    const positions = ['10%', '30%', '50%', '70%', '85%'];
    return positions[props.index] || '10%';
  }};
`

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: ${vs(40)}px ${ms(30)}px;
  padding-top: ${vs(100)}px;
  z-index: 2;
`

export const VideoDemo = styled.View`
  width: ${ms(280)}px;
  height: ${vs(180)}px;
  background-color: ${({ theme }) => theme.colors.skillVideoBg};
  border-radius: ${vs(20)}px;
  margin-bottom: ${vs(30)}px;
  justify-content: center;
  align-items: center;
`

export const VideoPlayButton = styled.TouchableOpacity`
  width: ${ms(60)}px;
  height: ${ms(60)}px;
  background-color: ${({ theme }) => theme.colors.skillVideoBtnBg};
  border-radius: ${ms(30)}px;
  justify-content: center;
  align-items: center;
`

export const PlayIcon = styled.View`
  width: 0;
  height: 0;
  border-left-width: ${vs(12)}px;
  border-left-color: ${props => props.theme.colors.primary};
  border-top-width: ${vs(12)}px;
  border-top-color: transparent;
  border-bottom-width: ${vs(12)}px;
  border-bottom-color: transparent;
  margin-left: ${ms(6)}px;;
`

export const TitleText = styled.Text`
  font-size: ${vs(32)}px;
  font-weight: 800;
  color: ${props => props.theme.colors.bgWhite};
  text-align: center;
  margin-bottom: ${vs(15)}px;
  text-shadow: 0px 2px 10px ${props => props.theme.colors.skillTextShadow};
  line-height: ${vs(40)}px;
`

export const SubtitleText = styled.Text`
  font-size: ${vs(18)}px;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  line-height: ${vs(26)}px;
  margin-bottom: ${vs(30)}px;
  text-shadow: 0px ${ms(1)}px ${vs(5)}px ${props => props.theme.colors.skillTextShadow};
  max-width: ${ms(280)}px;
`

export const FeaturesRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 0 ${ms(10)}px;
  margin-top: ${vs(20)}px;
`

export const FeatureItem = styled.View`
  flex: 1;
  align-items: center;
`

export const FeatureIcon = styled.View`
  width: ${ms(60)}px;
  height: ${ms(60)}px;
  background-color: ${({ theme }) => theme.colors.skillFeatureIconBg};
  border-radius: ${vs(30)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${vs(10)}px;
  border-width: ${vs(2)}px;
  border-color: ${({ theme }) => theme.colors.skillFeatureIconBorderColor};
`

export const FeatureLabel = styled.Text`
  color: ${props => props.theme.colors.bgWhite};
  font-size: ${vs(14)}px;
  font-weight: 600;
  text-align: center;
`

export const FeatureLabelIcon = styled(FeatureLabel)`
  font-size: ${vs(24)}px;
`