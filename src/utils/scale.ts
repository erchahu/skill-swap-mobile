import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window');

const [shortDimension, longDimension] = width < height ? [ width, height ] : [ height, width ];

// 设计稿基准尺寸
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

export const ms = (size: number) => (shortDimension / BASE_WIDTH) * size; // width
export const vs = (size: number) => (longDimension / BASE_HEIGHT) * size; // height