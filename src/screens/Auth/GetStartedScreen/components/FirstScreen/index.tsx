import React, { memo } from "react";
import { useTheme } from "styled-components/native";
import { useLanguage } from "@/hooks/useLanguage";

import LogoContent from "./LogoContent";

import { ContentBox, ContentText, FirstScreenWrap, TitleText } from "./style";

const FirstScreen = () => {

  const { t } = useLanguage();
  const theme = useTheme();

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

      <ContentBox alignItems="center" justifyContent="center">
        <TitleText>{t('getStarted.title1')}</TitleText>
        <TitleText>{t('getStarted.title2')}</TitleText>
        <ContentText>{t('getStarted.description')}</ContentText>
      </ContentBox>
    </FirstScreenWrap>
  )
};

export default memo(FirstScreen);