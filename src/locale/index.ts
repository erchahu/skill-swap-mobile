import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as resources from './resources';

// Get saved language preference or default to Chinese
AsyncStorage.getItem('app_language').then(savedLanguage => {
    const defaultLng = savedLanguage || 'zh';

    i18n
        .use(initReactI18next)
        .init({
            resources: {
                en: { translation: resources.en },
                zh: { translation: resources.zh },
            },
            lng: defaultLng,
            fallbackLng: 'zh', // 如果当前语言不存在，回退到中文
            interpolation: {
                escapeValue: false, // 不转义 HTML 特殊字符
            },
        });
});

export default i18n;
