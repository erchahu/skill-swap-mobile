# SkillItem 围绕文本旋转动画实现原理

## 概述

本文档详细解析了在 SkillSwap 移动应用中实现的 SkillItem 围绕中心文本匀速旋转的 UI 效果。这种动画效果展示了多个技能图标围绕地球 emoji 旋转，形成一种动态的、引人注目的用户界面，很好地展示了技能交换的概念。

## 技术实现

### 核心技术

- **React Native Animated API**：使用 React Native 的 Animated 库创建流畅的动画效果
- **数学计算**：使用三角函数计算旋转位置
- **React Hooks**：使用 useEffect 和 useRef 管理动画状态

### 关键组件

#### SkillItem 组件

```tsx
const SkillItem = memo(({ icon, angle, distance, duration = 10000, delay = 0 }:SkillItemProps) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: duration,
        easing: Easing.linear,
        delay: delay,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim, duration, delay]);
  
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [`${angle}deg`, `${angle + 360}deg`],
  });
  
  // Calculate position based on angle and distance
  const x = Math.cos(angle * Math.PI / 180) * distance;
  const y = Math.sin(angle * Math.PI / 180) * distance;
  
  return (
    <Animated.View
      style={{
        position: 'absolute',
        transform: [{ rotate }, { translateX: x }, { translateY: y }],
      }}
    >
      <SkillItemWrap>
        <SkillItemImage source={images[icon]} />
      </SkillItemWrap>
    </Animated.View>
  )
})
```

### 实现细节解析

1. **动画初始化**
   ```tsx
   const rotateAnim = useRef(new Animated.Value(0)).current;
   ```
   使用 `useRef` 和 `Animated.Value` 创建动画值，初始值为 0。

2. **动画配置**
   ```tsx
   useEffect(() => {
     Animated.loop(
       Animated.timing(rotateAnim, {
         toValue: 1,
         duration: duration,
         easing: Easing.linear,
         delay: delay,
         useNativeDriver: true,
       })
     ).start();
   }, [rotateAnim, duration, delay]);
   ```
   - 使用 `Animated.loop` 创建循环动画
   - `Animated.timing` 定义动画从 0 到 1 的过渡
   - `duration` 控制一次完整旋转的时间（默认 10000ms）
   - `Easing.linear` 确保匀速旋转
   - `delay` 控制动画开始的延迟时间
   - `useNativeDriver: true` 使用原生动画驱动提高性能

3. **角度插值**
   ```tsx
   const rotate = rotateAnim.interpolate({
     inputRange: [0, 1],
     outputRange: [`${angle}deg`, `${angle + 360}deg`],
   });
   ```
   将 0-1 的动画值映射到从初始角度到初始角度+360度的旋转角度。

4. **位置计算**
   ```tsx
   const x = Math.cos(angle * Math.PI / 180) * distance;
   const y = Math.sin(angle * Math.PI / 180) * distance;
   ```
   使用三角函数计算每个 SkillItem 相对于中心点的 x 和 y 坐标：
   - `Math.cos(angle * Math.PI / 180)` 计算 x 轴上的相对位置
   - `Math.sin(angle * Math.PI / 180)` 计算 y 轴上的相对位置
   - `distance` 控制 SkillItem 到中心点的距离

5. **应用变换**
   ```tsx
   <Animated.View
     style={{
       position: 'absolute',
       transform: [{ rotate }, { translateX: x }, { translateY: y }],
     }}
   >
   ```
   使用 `transform` 属性应用旋转和位移变换：
   - `rotate` 控制旋转角度
   - `translateX` 和 `translateY` 控制位置偏移

## 使用方法

在 LogoContent 组件中，我们创建了 6 个不同角度的 SkillItem，围绕中心的地球 emoji 旋转：

```tsx
const LogoContent = () => {
  return (
    <SkillsContentWrap>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 40 }}>🌏</Text>
        
        <SkillItem icon="skill1" angle={0} distance={80} />
        <SkillItem icon="skill2" angle={60} distance={80} delay={500} />
        <SkillItem icon="skill3" angle={120} distance={80} delay={1000} />
        <SkillItem icon="skill4" angle={180} distance={80} delay={1500} />
        <SkillItem icon="skill5" angle={240} distance={80} delay={2000} />
        <SkillItem icon="skill6" angle={300} distance={80} delay={2500} />
      </View>
    </SkillsContentWrap>
  )
}
```

- 每个 SkillItem 的 `angle` 属性设置了它的初始角度（0°, 60°, 120°, 180°, 240°, 300°），均匀分布在圆周上
- `distance` 属性设置了到中心点的距离（80 单位）
- `delay` 属性设置了每个 SkillItem 开始动画的延迟时间，形成错落有致的启动效果

## 样式设计

```tsx
export const SkillItemWrap = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${ms(60)}px;
  height: ${ms(60)}px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: ${ms(30)}px;
`

export const SkillsContentWrap = styled.View`
  width: 100%;
  height: ${ms(300)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
```

- `SkillItemWrap` 定义了每个技能图标的容器样式，使用半透明白色背景和圆形边框
- `SkillsContentWrap` 提供了足够的空间来容纳旋转的 SkillItem

## 性能优化

1. **使用 memo**：组件使用 React.memo 减少不必要的重渲染
2. **useNativeDriver**：启用原生动画驱动提高性能
3. **适当的组件拆分**：将 SkillItem 拆分为独立组件，优化渲染逻辑

## 扩展可能性

1. **动态调整**：可以根据屏幕尺寸动态调整 distance 值
2. **交互响应**：可以添加触摸事件，使用户可以与旋转的 SkillItem 交互
3. **动画变化**：可以实现更复杂的动画效果，如缩放、透明度变化等

## 总结

通过 React Native 的 Animated API 和数学计算，我们实现了一个视觉吸引力强的 UI 效果，使技能图标围绕中心点匀速旋转。这种动画效果不仅增强了用户体验，也很好地展示了应用的核心概念——技能交换。