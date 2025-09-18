import React, { memo, useEffect, useRef } from "react"
import { Animated, Easing } from "react-native";

import Logo from "./Logo";

import { images, ImageType } from "@images";

import { AnimatedSkillItem, CenterView, SkillItemImage, SkillItemWrap, SkillsContentWrap } from "./style";

interface SkillItemProps {
  icon: ImageType;
  angle: number;
}

const DISTANCE = 80;
const DURATION = 18000;
const SkillItem = memo(({ icon, angle }:SkillItemProps) => {
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
  const x = Math.cos(angle * Math.PI / 180) * DISTANCE;
  const y = Math.sin(angle * Math.PI / 180) * DISTANCE;
  
  return (
    <AnimatedSkillItem
      style={{
        transform: [{ rotate }, { translateX: x }, { translateY: y }],
      }}
    >
      <SkillItemWrap>
        <SkillItemImage source={images[icon]} />
      </SkillItemWrap>
    </AnimatedSkillItem>
  )
})

const LogoContent = () => {
  return (
    <SkillsContentWrap>
      <CenterView>
        <Logo />
        
        <SkillItem icon="skill1" angle={0} />
        <SkillItem icon="skill2" angle={30} />
        <SkillItem icon="skill3" angle={120} />
        <SkillItem icon="skill4" angle={154} />
        <SkillItem icon="skill5" angle={240} />
        <SkillItem icon="skill6" angle={280} />
      </CenterView>
    </SkillsContentWrap>
  )
}

export default memo(LogoContent);