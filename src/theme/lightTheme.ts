import { DefaultTheme } from "styled-components/native";
import { colors } from "./colors";

export const lightTheme: DefaultTheme = {
  colors: {
    // Skill item colors
    skillItemBg: colors.transparentWhite30,
    skillItemBorder: colors.transparentWhiteHeavy,
    skillVideoBg: colors.transparentBlack20,
    skillVideoBtnBg: colors.transparentWhite90,
    skillParticleBg: colors.transparentWhite30,
    skillTextShadow: colors.transparentBlack20,
    skillTextColor: colors.transparentWhite95,
    skillFeatureIconBg: colors.transparentWhite20,
    skillFeatureIconBorderColor: colors.transparentWhite30,

    // Border transparent
    borderTransparent: colors.transparent,

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
    bgWhite: colors.neutral50,
    
    // 文本颜色
    textPrimary: colors.neutral800,
    textSecondary: colors.neutral700,
    textDisabled: colors.neutral600,
    textWhite: colors.neutral50,
    
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