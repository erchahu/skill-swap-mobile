import React, { memo } from "react"
import { SkillItemImage, SkillItemWrap, SkillsContentWrap } from "./style";
import { Image, Text } from "react-native";
import { images, ImageType } from "@images";

interface SkillItemProps {
  icon: ImageType;
}

const SkillItem = memo(({ icon }:SkillItemProps) => {
  return <SkillItemWrap>
    {/* <Text>{icon}</Text> */}
    <SkillItemImage source={images[icon]} />
  </SkillItemWrap>
})

const LogoContent = () => {
  return (
    <SkillsContentWrap>
      <Text>🌏</Text>

      <SkillItem icon="skill1"></SkillItem>
    </SkillsContentWrap>
  )
}

export default memo(LogoContent);
