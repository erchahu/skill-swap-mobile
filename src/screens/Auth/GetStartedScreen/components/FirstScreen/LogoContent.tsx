import React, { memo, useEffect, useRef } from "react"
import { Animated, Easing } from "react-native";

import Logo from "./Logo";

import { images, ImageType } from "@images";

import { AnimatedSkillItem, CenterView, SkillItemBlurView, SkillItemImage, SkillItemWrap, SkillsContentWrap } from "./style";

interface SkillItemProps {
  icon: ImageType;
  angle: number;
  distance: number;
}

const DURATION = 18000;
const SkillItem = memo(({ icon, angle, distance }:SkillItemProps) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);
  
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [`${angle}deg`, `${angle + 360}deg`],
  });
  
  // Calculate position based on angle and distance
  const x = Math.cos(angle * Math.PI / 180) * distance;
  const y = Math.sin(angle * Math.PI / 180) * distance;
  
  return (
    <AnimatedSkillItem
      style={{
        transform: [{ rotate }, { translateX: x }, { translateY: y }],
      }}
    >
      <SkillItemWrap>
        <SkillItemImage source={images[icon]} />
        <SkillItemBlurView 
          blurType="light" 
          blurAmount={100} 
          reducedTransparencyFallbackColor="white"
        />
      </SkillItemWrap>
    </AnimatedSkillItem>
  )
})

const LogoContent = () => {
  return (
    <SkillsContentWrap>
      <CenterView>
        <Logo />
        
        <SkillItem icon="skill1" angle={20} distance={90} />
        <SkillItem icon="skill2" angle={46} distance={100} />
        <SkillItem icon="skill3" angle={138} distance={90} />
        <SkillItem icon="skill4" angle={154} distance={100} />
        <SkillItem icon="skill5" angle={260} distance={90} />
        <SkillItem icon="skill6" angle={280} distance={80} />
      </CenterView>
    </SkillsContentWrap>
  )
}

export default memo(LogoContent);