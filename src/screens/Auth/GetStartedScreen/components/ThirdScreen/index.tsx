import React, { memo } from "react";
import { useTheme } from "styled-components/native";
import { useTranslation } from "react-i18next";
import ParticleAnimation from "./ParticleAnimation";
import {
  ThirdScreenWrap,
  ContentContainer,
  VideoDemo,
  VideoPlayButton,
  PlayIcon,
  TitleText,
  SubtitleText,
  FeaturesRow,
  FeatureItem,
  FeatureIcon,
  FeatureLabel,
  ParticlesContainer,
} from "./style";

const ThirdScreen = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const features = [
    { icon: "🔒", label: t('getStarted.screen3Feature1') },
    { icon: "⏱️", label: t('getStarted.screen3Feature2') },
    { icon: "💰", label: t('getStarted.screen3Feature3') },
  ];

  return (
    <ThirdScreenWrap
      colors={[theme.colors.primary, theme.colors.secondaryHeavy]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      useAngle={true}
      angle={150}
      angleCenter={{ x: 1, y: 0.4 }}
    >
      <ParticlesContainer>
        {[...Array(5)].map((_, index) => (
          <ParticleAnimation key={index} index={index} />
        ))}
      </ParticlesContainer>

      <ContentContainer>
        <VideoDemo>
          <VideoPlayButton>
            <PlayIcon />
          </VideoPlayButton>
        </VideoDemo>

        <TitleText>{t('getStarted.screen3Title1')}</TitleText>
        <SubtitleText>{t('getStarted.screen3Subtitle1')}</SubtitleText>

        <FeaturesRow>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <FeatureIcon>
                <FeatureLabel style={{ fontSize: 28 }}>{feature.icon}</FeatureLabel>
              </FeatureIcon>
              <FeatureLabel>{feature.label}</FeatureLabel>
            </FeatureItem>
          ))}
        </FeaturesRow>
      </ContentContainer>
    </ThirdScreenWrap>
  );
};

export default memo(ThirdScreen);