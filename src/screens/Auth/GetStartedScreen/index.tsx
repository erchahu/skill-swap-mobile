import { memo, useRef } from "react"
import { Dimensions, Text, View } from "react-native"
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { Container } from "./style";

const data = [...new Array(3).keys()];
const width = Dimensions.get("window").width;

const GetStartedScreen = () => {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <Container>
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={data}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
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