import { memo } from "react";
import { EarthBg, FirstScreenWrap } from "./style";
import { useTheme } from "styled-components/native";
import { Text } from "react-native";
import { images } from "@images";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import LogoContent from "./LogoContent";

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
      <SafeAreaView style={{ width: '100%', flex: 1, position: 'relative' }}>
        <EarthBg source={images["earth-bg"]} />
        <LogoContent />
      </SafeAreaView>
    </FirstScreenWrap>
  )
};

export default memo(FirstScreen);