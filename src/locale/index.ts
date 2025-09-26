import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguagePreference } from '@/utils/languageStorage';
import { LangEnum } from '@/types';

import * as resources from './resources';

// Initialize i18n with default language
const initializeI18n = async () => {
    // Get saved language preference or use English as default
    const savedLanguage = await getLanguagePreference();
    const defaultLanguage = savedLanguage || LangEnum.EN;

    i18n
        .use(initReactI18next)
        .init({
            resources: {
                en: { translation: resources.en },
                zh: { translation: resources.zh },
            },
            lng: defaultLanguage,
            fallbackLng: LangEnum.EN, // Fallback to English if language doesn't exist
            interpolation: {
                escapeValue: false, // Don't escape HTML special characters
            },
        });
};

// Initialize i18n on module load
initializeI18n();

export default i18n;