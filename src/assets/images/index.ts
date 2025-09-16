import logoPrimaryBg from './files/logo-primary-bg.webp'
import skill1 from './files/skill1.webp'
import skill2 from './files/skill2.webp'
import skill3 from './files/skill3.webp'
import skill4 from './files/skill4.webp'
import skill5 from './files/skill5.webp'
import skill6 from './files/skill6.webp'

const native_images = {
  'logo-primary-bg': logoPrimaryBg,
  'skill1': skill1,
  'skill2': skill2,
  'skill3': skill3,
  'skill4': skill4,
  'skill5': skill5,
  'skill6': skill6
}

export type ImageType = keyof typeof native_images;

export const images = {
  ...native_images
} as const;