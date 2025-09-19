import React, { memo } from "react";
import { ThirdScreenWrap } from "./style";
import { useTheme } from "styled-components/native";

const ThirdScreen = () => {

  const theme = useTheme();

  return (
    <ThirdScreenWrap
      colors={[theme.colors.primary, theme.colors.secondaryHeavy]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      useAngle={true}
      angle={150}
      angleCenter={{ x: 1, y: 0.4 }}
    >
      
    </ThirdScreenWrap>
  )
};

export default memo(ThirdScreen);