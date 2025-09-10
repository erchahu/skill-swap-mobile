import onboarding1 from './files/onboarding1.webp';
import onboarding2 from './files/onboarding2.webp';
import onboarding3 from './files/onboarding3.webp';
import logoPrimaryBg from './files/logo-primary-bg.webp'
import skill1 from './files/skill1.webp'
const native_images = {
  'onboarding-1': onboarding1,
  'onboarding-2': onboarding2,
  'onboarding-3': onboarding3,
  'logo-primary-bg': logoPrimaryBg,
  'skill1': skill1
}

export type ImageType = keyof typeof native_images;

export const images = {
  ...native_images
} as const;