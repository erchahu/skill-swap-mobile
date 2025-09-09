import { memo } from "react";
import { FirstScreenWrap } from "./style";
import { useTheme } from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LogoContent from "./LogoContent";
import React from "react";

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
      <LogoContent />
    </FirstScreenWrap>
  )
};

export default memo(FirstScreen);