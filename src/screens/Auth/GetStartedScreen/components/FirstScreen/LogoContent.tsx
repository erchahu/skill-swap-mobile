import React, { memo } from "react"
import { SkillItemImage, SkillItemWrap, SkillItemWrapProps, SkillsContentWrap } from "./style";
import { Image, Text } from "react-native";
import { images, ImageType } from "@images";

interface SkillItemProps extends SkillItemWrapProps {
  icon: ImageType;
}

const SkillItem = memo(({ icon, top, left }:SkillItemProps) => {
  return (
    <SkillItemWrap top={top} left={left}>
      <SkillItemImage source={images[icon]} />
    </SkillItemWrap>
  )
})

const LogoContent = () => {
  return (
    <SkillsContentWrap>
      <Text>🌏</Text>

      <SkillItem icon="skill1" top={-30} left={50} />
      <SkillItem icon="skill2" top={30} left={80} />
      <SkillItem icon="skill3" top={30} left={50} />
      <SkillItem icon="skill1" top={30} left={50} />
      <SkillItem icon="skill1" top={30} left={50} />
      <SkillItem icon="skill1" top={30} left={50} />
    </SkillsContentWrap>
  )
}

export default memo(LogoContent);
