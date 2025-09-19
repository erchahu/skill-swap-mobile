import React, { memo, useEffect } from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
  interpolate,
} from 'react-native-reanimated';
import { Particle } from './style';

interface ParticleAnimationProps {
  index: number;
}

const ParticleAnimation: React.FC<ParticleAnimationProps> = ({ index }) => {
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);
  const rotate = useSharedValue(0);

  useEffect(() => {
    const delay = index * 2000;
    const duration = 15000;

    translateY.value = withDelay(
      delay,
      withRepeat(
        withTiming(-1000, {
          duration,
          easing: Easing.linear,
        }),
        -1,
        false
      )
    );

    opacity.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: duration * 0.2,
          easing: Easing.out(Easing.ease),
        }),
        -1,
        false
      )
    );

    rotate.value = withDelay(
      delay,
      withRepeat(
        withTiming(360, {
          duration,
          easing: Easing.linear,
        }),
        -1,
        false
      )
    );
  }, [index, opacity, rotate, translateY]);

  const animatedStyle = useAnimatedStyle(() => {
    const opacityValue = interpolate(
      translateY.value,
      [-1000, -900, -100, 0],
      [0, 1, 1, 0]
    );

    return {
      transform: [
        { translateY: translateY.value },
        { rotate: `${rotate.value}deg` },
      ],
      opacity: opacityValue,
      bottom: 0,
    };
  });

  return <Particle index={index} style={animatedStyle} />;
};

export default memo(ParticleAnimation);