// import React, { memo, useEffect, useRef } from "react"
// import { SkillItemImage, SkillItemWrap, SkillItemWrapProps, SkillsContentWrap } from "./style";
// import { Text, Animated, Easing, View } from "react-native";
// import { images, ImageType } from "@images";

// interface SkillItemProps extends SkillItemWrapProps {
//   icon: ImageType;
//   angle: number;
//   distance: number;
//   duration?: number;
//   delay?: number;
// }

// const SkillItem = memo(({ icon, angle, distance, duration = 10000, delay = 0 }:SkillItemProps) => {
//   const rotateAnim = useRef(new Animated.Value(0)).current;
  
//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotateAnim, {
//         toValue: 1,
//         duration: duration,
//         easing: Easing.linear,
//         delay: delay,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, [rotateAnim, duration, delay]);
  
//   const rotate = rotateAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: [`${angle}deg`, `${angle + 360}deg`],
//   });
  
//   // Calculate position based on angle and distance
//   const x = Math.cos(angle * Math.PI / 180) * distance;
//   const y = Math.sin(angle * Math.PI / 180) * distance;
  
//   return (
//     <Animated.View
//       style={{
//         position: 'absolute',
//         transform: [{ rotate }, { translateX: x }, { translateY: y }],
//       }}
//     >
//       <SkillItemWrap>
//         <SkillItemImage source={images[icon]} />
//       </SkillItemWrap>
//     </Animated.View>
//   )
// })

// const LogoContent = () => {
//   return (
//     <SkillsContentWrap>
//       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={{ fontSize: 40 }}>🌏</Text>
        
//         <SkillItem icon="skill1" angle={0} distance={80} />
//         <SkillItem icon="skill2" angle={60} distance={80} delay={500} />
//         <SkillItem icon="skill3" angle={120} distance={80} delay={1000} />
//         <SkillItem icon="skill4" angle={180} distance={80} delay={1500} />
//         <SkillItem icon="skill5" angle={240} distance={80} delay={2000} />
//         <SkillItem icon="skill6" angle={300} distance={80} delay={2500} />
//       </View>
//     </SkillsContentWrap>
//   )
// }

// export default memo(LogoContent);


import React, { memo, useEffect, useRef } from "react"
import { SkillItemImage, SkillItemWrap, SkillsContentWrap } from "./style";
import { Text, Animated, Easing, View } from "react-native";
import { images, ImageType } from "@images";

interface SkillItemProps {
  icon: ImageType;
  x: number;
  y: number;
}

const SkillItem = memo(({ icon, x, y }:SkillItemProps) => {
  
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(Animated.timing(rotateAnim, {
      toValue: 1,
      delay: 100,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    })).start();
  }, [rotateAnim])

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ position: 'absolute', transform: [{ rotate: spin }, { translateX: x }, { translateY: y }] }}>
      <SkillItemWrap>
        <SkillItemImage source={images[icon]} />
      </SkillItemWrap>
    </Animated.View>
  )
})

const LogoContent = () => {
  return (
    <SkillsContentWrap>
      <Text style={{ fontSize: 80 }}>🌏</Text>
      <SkillItem icon="skill1" x={120} y={120} />
      {/* <SkillItem icon="skill2" x={-30} y={30} />
      <SkillItem icon="skill3" x={-30} y={-30} />
      <SkillItem icon="skill4" x={30} y={-30} />
      <SkillItem icon="skill5" x={0} y={0} />
      <SkillItem icon="skill6" x={0} y={0} /> */}
    </SkillsContentWrap>
  )
}

export default memo(LogoContent);
