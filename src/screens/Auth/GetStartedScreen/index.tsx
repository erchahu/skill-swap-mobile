import React, { memo, useCallback, useRef, useState } from "react"
import { Dimensions } from "react-native"
import { Extrapolation, interpolate, useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { Container, paginationDot, RowButton, RowButtonText, RowWrap, LanguageButton, LanguageButtonText, LanguageIcon } from "./style";
import FirstScreen from "./components/FirstScreen";
import { useTheme } from "styled-components/native";
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";
import LangSwitcher from "./components/LangSwitcher";
import { GLOBE_ICON } from "@/constants/language";
import { useLanguage, useInitializeLanguage } from "@/hooks/useLanguage";

const data = [...new Array(3).keys()];
const { width, height } = Dimensions.get("window");

const GetStartedScreen = () => {
  const theme = useTheme();
  const { t, currentLanguageLabel } = useLanguage();

  // Initialize language from storage on app startup
  useInitializeLanguage();

  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [langModalVisible, setLangModalVisible] = useState(false);

  const onPressPagination = useCallback((index: number) => {
    ref.current?.scrollTo({ index, animated: true });
  }, [])

  const sliders = [
    <FirstScreen />,
    <SecondScreen />,
    <ThirdScreen />
  ]

  return (
    <Container>
      <Carousel
        ref={ref}
        width={width}
        height={height}
        data={data}
        onProgressChange={progress}
        onSnapToItem={(index) => setCurrentIndex(index)} // 监听切换事件
        renderItem={({ index }) => sliders[index]}
      />
 
      <Pagination.Custom
        progress={progress}
        data={data}
        dotStyle={{ ...paginationDot.inactive, backgroundColor: theme.colors.skillItemBorder }}
        activeDotStyle={{ ...paginationDot.active, backgroundColor: theme.colors.bgWhite }}
        containerStyle={{ gap: 15, position: "absolute", bottom: 160 }}
        onPress={onPressPagination}
        customReanimatedStyle={(progress, index, length) => {
					let val = Math.abs(progress - index);
					if (index === 0 && progress > length - 1) {
						val = Math.abs(progress - length);
					}
 
					return {
						transform: [
							{
								translateY: interpolate(
									val,
									[0, 1],
									[0, 0],
									Extrapolation.CLAMP,
								),
							},
						],
					};
				}}
      />

      <RowWrap justifyContent="center">
        <RowButton onPress={() => onPressPagination(Math.round(progress.value) + 1)}>
          <RowButtonText>
            {currentIndex === 2 ? t('getStarted.start') : t('getStarted.continue')}
          </RowButtonText>
        </RowButton>
      </RowWrap>

      <LanguageButton onPress={() => setLangModalVisible(true)}>
        <LanguageButtonText>{currentLanguageLabel}</LanguageButtonText>
        <LanguageIcon>{GLOBE_ICON}</LanguageIcon>
      </LanguageButton>

      {langModalVisible && (
        <LangSwitcher
          visible={langModalVisible}
          onClose={() => setLangModalVisible(false)}
        />
      )}
    </Container>

  )
}

export default memo(GetStartedScreen)
