import React, { memo, useRef } from "react"
import { Dimensions, View } from "react-native"
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { Container } from "./style";
import FirstScreen from "./components/FirstScreen";
import { useTheme } from "styled-components/native";

const data = [...new Array(3).keys()];
const { width, height } = Dimensions.get("window");

const GetStartedScreen = () => {
  const theme = useTheme();
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const sliders = [
    <FirstScreen />,
    <FirstScreen />,
    <FirstScreen />
  ]


  return (
    <Container>
      <Carousel
        ref={ref}
        width={width}
        height={height}
        data={data}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
              backgroundColor: theme.colors.bgPrimary
            }}
          >
            {sliders[index]}
          </View>
        )}
      />
 
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", width: 30, height: 6, borderRadius: 6 }}
        containerStyle={{ gap: 15, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </Container>

  )
}

export default memo(GetStartedScreen)