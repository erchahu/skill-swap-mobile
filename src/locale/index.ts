import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as resources from './resources';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: resources.en },
            zh: { translation: resources.zh },
        },
        lng: 'en',
        fallbackLng: 'en', // 如果当前语言不存在，回退到英文
        interpolation: {
            escapeValue: false, // 不转义 HTML 特殊字符
        },
    });

export default i18n;
