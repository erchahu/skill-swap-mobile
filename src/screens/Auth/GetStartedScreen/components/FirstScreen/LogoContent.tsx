import React, { memo } from "react"
import { images } from "@images";
import { Logo, LogoContentWrap } from "./style";

const LogoContent = () => {
  return (
    <LogoContentWrap>
      <Logo source={images["logo-primary-bg"]} />
    </LogoContentWrap>
  )
}

export default memo(LogoContent);
