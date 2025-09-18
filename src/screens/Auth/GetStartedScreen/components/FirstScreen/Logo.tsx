import React, { memo, useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

import { images } from "@/assets/images";

import { LogoImage } from "./style";

const LogoBox = () => {

  const imageAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(imageAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [imageAnim]);

  const scale = imageAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.2, 1],
  });

  return (
    <LogoImage 
        source={images["logo-primary-bg"]} 
        style={{
            transform: [{ scale }],
        }}
    />
  )
};

export default memo(LogoBox);