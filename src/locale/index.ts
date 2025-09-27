import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';
import { getLanguagePreference } from '@/utils/languageStorage';
import { LangEnum } from '@/types';
import * as translationResources from './resources';

// Constants
const SUPPORTED_LANGUAGES = [LangEnum.EN, LangEnum.ZH];
const DEFAULT_LANGUAGE = LangEnum.EN;

/**
 * Get the appropriate initial language
 */
const getInitialLanguage = async (): Promise<LangEnum> => {
  // Try to get user's saved language preference first
  const savedLanguage = await getLanguagePreference();
  if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage;
  }

  // Fall back to device language
  const deviceLocales = getLocales();
  const deviceLanguage = deviceLocales[0]?.languageCode;
  
  if (deviceLanguage && SUPPORTED_LANGUAGES.includes(deviceLanguage as LangEnum)) {
    return deviceLanguage as LangEnum;
  }

  return DEFAULT_LANGUAGE;
};

/**
 * Initialize i18n
 */
const initializeI18n = async (): Promise<void> => {
  const initialLanguage = await getInitialLanguage();

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        [LangEnum.EN]: { translation: translationResources.en },
        [LangEnum.ZH]: { translation: translationResources.zh },
      },
      lng: initialLanguage,
      fallbackLng: DEFAULT_LANGUAGE,
      interpolation: {
        escapeValue: false,
      },
    });
};

// Initialize i18n
initializeI18n();

export default i18n;