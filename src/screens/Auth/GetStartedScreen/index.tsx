import React, { memo, useCallback, useMemo, useRef, useState } from "react"
import { Dimensions } from "react-native"
import { Extrapolation, interpolate, useAnimatedReaction, useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { Container, paginationDot, RowButton, RowButtonText, RowWrap } from "./style";
import FirstScreen from "./components/FirstScreen";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components/native";
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";

const data = [...new Array(3).keys()];
const { width, height } = Dimensions.get("window");

const GetStartedScreen = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const [currentIndex, setCurrentIndex] = useState(0);

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
    </Container>

  )
}

export default memo(GetStartedScreen)
