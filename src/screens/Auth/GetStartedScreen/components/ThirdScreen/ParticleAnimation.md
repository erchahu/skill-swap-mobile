# 粒子动画效果文档

## 概述
第三页实现了5个浮动粒子的动画效果，粒子从底部上升并旋转，营造出动态的视觉效果。

## 动画特性

### 1. 粒子配置
- **粒子数量**: 5个
- **粒子大小**:
  - 粒子1: 10px
  - 粒子2: 15px
  - 粒子3: 8px
  - 粒子4: 12px
  - 粒子5: 20px
- **水平位置分布**: 10%, 30%, 50%, 70%, 85%
- **颜色**: rgba(255, 255, 255, 0.3) - 半透明白色

### 2. 动画参数

#### 上升动画
- **方向**: 从底部向上移动
- **距离**: 1000px
- **持续时间**: 15秒
- **缓动函数**: Easing.linear (线性匀速)
- **循环**: 无限循环

#### 旋转动画
- **旋转角度**: 0° → 360°
- **持续时间**: 15秒
- **缓动函数**: Easing.linear (线性匀速)
- **循环**: 无限循环

#### 透明度动画
- **透明度变化**:
  - 底部 (0px): 透明度 0
  - 上升初期 (-100px): 透明度 1
  - 中间阶段 (-900px): 透明度 1
  - 顶部 (-1000px): 透明度 0
- **效果**: 粒子在底部淡入，在顶部淡出

#### 延迟启动
- **延迟计算**: index * 2000ms
- **效果**: 每个粒子依次启动，间隔2秒
  - 粒子1: 0秒后启动
  - 粒子2: 2秒后启动
  - 粒子3: 4秒后启动
  - 粒子4: 6秒后启动
  - 粒子5: 8秒后启动

## 视觉效果
- 粒子从屏幕底部缓缓上升
- 上升过程中持续旋转
- 底部和顶部渐变透明，中间完全可见
- 错开的启动时间创造层次感
- 循环播放，形成连续的粒子流效果

## 技术实现

### 使用的动画库
- `react-native-reanimated` v4.1.0

### 核心动画API
- `useSharedValue`: 管理动画值
- `useAnimatedStyle`: 创建动画样式
- `withRepeat`: 实现无限循环
- `withTiming`: 定时动画
- `withDelay`: 延迟启动
- `interpolate`: 插值计算透明度

### 性能优化
- 使用 `React.memo` 避免不必要的重渲染
- 使用原生动画驱动，在UI线程执行
- 合理的粒子数量（5个）平衡视觉效果和性能

## 代码示例

```typescript
// 动画值初始化
const translateY = useSharedValue(0);
const opacity = useSharedValue(0);
const rotate = useSharedValue(0);

// 上升动画
translateY.value = withDelay(
  delay,
  withRepeat(
    withTiming(-1000, {
      duration: 15000,
      easing: Easing.linear,
    }),
    -1, // 无限循环
    false
  )
);

// 透明度插值
const opacityValue = interpolate(
  translateY.value,
  [-1000, -900, -100, 0],
  [0, 1, 1, 0]
);
```

## 自定义调整建议

### 调整粒子数量
修改 `ThirdScreen/index.tsx` 中的数组大小：
```typescript
{[...Array(5)].map((_, index) => (  // 修改数字5
  <ParticleAnimation key={index} index={index} />
))}
```

### 调整动画速度
修改 `ParticleAnimation.tsx` 中的 `duration` 值：
```typescript
const duration = 15000; // 毫秒，可改为更快或更慢
```

### 调整粒子大小和位置
修改 `style.ts` 中的 `Particle` 组件配置：
```typescript
const sizes = [10, 15, 8, 12, 20]; // 调整粒子大小
const positions = ['10%', '30%', '50%', '70%', '85%']; // 调整水平分布
```

### 调整颜色和透明度
修改 `style.ts` 中的背景颜色：
```typescript
background-color: rgba(255, 255, 255, 0.3); // 修改RGBA值
```

## 注意事项
1. 确保设备性能足够支撑动画流畅运行
2. 在低端设备上可考虑减少粒子数量
3. 避免同时运行过多动画影响性能
4. 测试不同屏幕尺寸的显示效果