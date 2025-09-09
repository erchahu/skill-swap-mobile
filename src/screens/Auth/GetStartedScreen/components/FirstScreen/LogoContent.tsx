import React, { memo } from "react"
import { SkillItemWrap, SkillsContentWrap } from "./style";
import { Text } from "react-native";

interface SkillItemProps {
  icon: string;
}

const SkillItem = memo(({ icon }:SkillItemProps) => {
  return <SkillItemWrap>
    <Text>{icon}</Text>
  </SkillItemWrap>
})

const LogoContent = () => {
  return (
    <SkillsContentWrap>
      <Text>🌏</Text>
    </SkillsContentWrap>
  )
}

export default memo(LogoContent);
