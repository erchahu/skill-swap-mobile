import { DefaultTheme } from "styled-components/native";
import { colors } from "./colors";

export const lightTheme: DefaultTheme = {
  colors: {
    primary: colors.primary500,
    primaryLight: colors.primary300,
    primaryHeavy: colors.primary700,
    secondary: colors.accent500,
    secondaryLight: colors.accent300,
    secondaryHeavy: colors.accent700,

    // 按钮颜色
    btnPrimary: colors.primary500,
    btnPrimaryHover: colors.primary300,
    btnPrimaryDisabled: colors.neutral200,
    btnAccent: colors.accent500,
    btnAccentHover: colors.accent300,
    
    // 边框颜色
    borderPrimary: colors.neutral500,
    borderSecondary: colors.neutral200,
    borderDisabled: colors.neutral100,
    
    // 背景颜色
    bgPrimary: colors.neutral50,
    bgSecondary: colors.neutral100,
    bgTertiary: colors.neutral200,
    
    // 文本颜色
    textPrimary: colors.neutral800,
    textSecondary: colors.neutral700,
    textDisabled: colors.neutral600,
    
    // 状态颜色
    statusSuccess: colors.success500,
    statusWarning: colors.warning500,
    statusError: colors.error500,
    statusInfo: colors.info500
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
  },
};