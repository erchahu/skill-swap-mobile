import { memo, useRef } from "react"
import { Dimensions, View } from "react-native"
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { Container } from "./style";
import { ImageType } from "@images";
import FirstScreen from "./components/FirstScreen";
import { useTheme } from "styled-components/native";

const data = [...new Array(3).keys()];
const { width, height } = Dimensions.get("window");

interface SlideItem {
  id: string;
  title: string;
  subtitle: string;
  image: ImageType;
}

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

  const slides: SlideItem[] = [
    {
      id: '1',
      title: '交换技能，连接全球',
      subtitle: '用你的一小时，学习新技能，或传授你的专业知识。',
      image: 'onboarding-1', // 直接使用字符串，但受到 ImageTypes 的类型约束
    },
    {
      id: '2',
      title: '简单三步，开始交换',
      subtitle: '发现需要你技能的人，约个时间，开始你们的远程技能交换之旅。',
      image: 'onboarding-2',
    },
    {
      id: '3',
      title: '安全便捷的视频交换',
      subtitle: '内置高清视频通话，完成后自动结算，轻松又安全。',
      image: 'onboarding-3',
    },
  ];

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
            {/* <ImageSlider source={images[slides[index].image]} />
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text> */}
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