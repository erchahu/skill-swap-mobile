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
  background-color: rgba(255, 255, 255, 0.3);
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
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  z-index: 2;
`

export const VideoDemo = styled.View`
  width: 280px;
  height: 180px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`

export const VideoPlayButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`

export const PlayIcon = styled.View`
  width: 0;
  height: 0;
  border-left-width: 20px;
  border-left-color: ${props => props.theme.colors.primary};
  border-top-width: 12px;
  border-top-color: transparent;
  border-bottom-width: 12px;
  border-bottom-color: transparent;
  margin-left: 5px;
`

export const TitleText = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: ${props => props.theme.colors.bgWhite};
  text-align: center;
  margin-bottom: 15px;
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  line-height: 40px;
`

export const SubtitleText = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  line-height: 26px;
  margin-bottom: 30px;
  text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  max-width: 280px;
`

export const FeaturesRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 0 10px;
  margin-top: 20px;
`

export const FeatureItem = styled.View`
  flex: 1;
  align-items: center;
`

export const FeatureIcon = styled.View`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.3);
`

export const FeatureLabel = styled.Text`
  color: ${props => props.theme.colors.bgWhite};
  font-size: 13px;
  font-weight: 600;
  text-align: center;
`