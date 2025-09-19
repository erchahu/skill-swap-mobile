import React, { memo, useMemo } from "react"
import { useTranslation } from "react-i18next";
import { DescCard, DescCardIndex, DescCardRight, DescCardRightDesc, DescCardRightTitle, SecondDesc, SecondScreenImage, SecondScreenWrap, SecondTitle } from "./style";
import { images } from "@/assets/images";

const SecondScreen = () => {
  const { t } = useTranslation();

  const descs = useMemo(() => [
    { index: 1, title: t('getStarted.screen2DescTitle1'), desc: t('getStarted.screen2DescSubtitle1') },
    { index: 2, title: t('getStarted.screen2DescTitle2'), desc: t('getStarted.screen2DescSubtitle2') },
    { index: 3, title: t('getStarted.screen2DescTitle3'), desc: t('getStarted.screen2DescSubtitle3') },
  ], [t])

  return (
    <SecondScreenWrap>
      <SecondScreenImage source={images.wave} />
      <SecondTitle>{t('getStarted.screen2Title1')}</SecondTitle>
      <SecondDesc>{t('getStarted.screen2Subtitle1')}</SecondDesc>

      {
        descs.map((desc) => (
          <DescCard>
            <DescCardIndex>{desc.index}</DescCardIndex>

            <DescCardRight>
              <DescCardRightTitle>{desc.title}</DescCardRightTitle>
              <DescCardRightDesc>{desc.desc}</DescCardRightDesc>
            </DescCardRight>
          </DescCard>
        ))
      }
    </SecondScreenWrap>
  )
};

export default memo(SecondScreen)