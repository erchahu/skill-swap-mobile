import 'styled-components/native';

declare module 'styled-components/native' {
  export interface ColorPalette {
    primary50: string;
    primary100: string;
    primary200: string;
    primary300: string;
    primary400: string;
    primary500: string;
    primary600: string;
    primary700: string;
    primary800: string;
    primary900: string;
    accent50: string;
    accent100: string;
    accent200: string;
    accent300: string;
    accent400: string;
    accent500: string;
    accent600: string;
    accent700: string;
    accent800: string;
    accent900: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
    success50: string;
    success500: string;
    error50: string;
    error500: string;
    warning50: string;
    warning500: string;
    info50: string;
    info500: string;
  }

  export interface SemanticColors {
    primary: string;
    primaryLight: string;
    primaryHeavy: string;
    secondary: string;
    secondaryLight: string;
    secondaryHeavy: string;
    // 按钮颜色
    btnPrimary: string;
    btnPrimaryHover: string;
    btnPrimaryDisabled: string;
    btnAccent: string;
    btnAccentHover: string;
    
    // 边框颜色
    borderPrimary: string;
    borderSecondary: string;
    borderDisabled: string;
    
    // 背景颜色
    bgPrimary: string;
    bgSecondary: string;
    bgTertiary: string;
    
    // 文本颜色
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    
    // 状态颜色
    statusSuccess: string;
    statusWarning: string;
    statusError: string;
    statusInfo: string;
  }

  export interface ThemeColors extends ColorPalette, SemanticColors {}

  interface SemanticSpacing {
    s: number;
    m: number;
    l: number;
    xl: number;
  }

  interface SemanticBorderRadius {
    small: number;
    medium: number;
    large: number;
  }

  // export interface Theme {
  //   colors: SemanticColors;
  //   spacing: SemanticSpacing;
  //   borderRadius: SemanticBorderRadius;
  // }
  export interface DefaultTheme {
    colors: SemanticColors;
    spacing: SemanticSpacing;
    borderRadius: SemanticBorderRadius;
  }
}