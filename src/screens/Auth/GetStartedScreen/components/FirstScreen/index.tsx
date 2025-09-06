import { memo } from "react";
import { EarthBg, FirstContentLogo, FirstContentWrap, FirstScreenWrap } from "./style";
import { useTheme } from "styled-components/native";
import { Text } from "react-native";
import { images } from "../../../assets/images";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FirstScreen = () => {

  const theme = useTheme();
  const insets = useSafeAreaInsets()

  return (
    <FirstScreenWrap
      colors={[theme.colors.primary, theme.colors.primaryLight]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      useAngle={true}
      angle={180}
      angleCenter={{ x: 0.4, y: 0.4 }}
    >
      <FirstContentWrap top={insets.top} bottom={insets.bottom}>
        <EarthBg source={images["earth-bg"]} />

        <FirstContentLogo source={images["logo-primary-bg"]} />
      </FirstContentWrap>
    </FirstScreenWrap>
  )
};

export default memo(FirstScreen);