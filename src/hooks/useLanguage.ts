import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/locale';
import { LangEnum } from '@/types';
import { saveLanguagePreference, getLanguagePreference } from '@/utils/languageStorage';
import { LANGUAGE_CONFIG } from '@/constants/language';

interface UseLanguageReturn {
  // Current language
  currentLanguage: LangEnum;
  // Language label for display
  currentLanguageLabel: string;
  // All available languages
  languages: typeof LANGUAGE_CONFIG;
  // Change language function
  changeLanguage: (lang: LangEnum) => Promise<void>;
  // Check if a language is current
  isCurrentLanguage: (lang: LangEnum) => boolean;
  // Translation function
  t: ReturnType<typeof useTranslation>['t'];
  // Loading state
  isChangingLanguage: boolean;
}

/**
 * Custom hook for language management
 * Provides all language-related functionality
 */
export const useLanguage = (): UseLanguageReturn => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<LangEnum>(i18n.language as LangEnum);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  // Update current language when i18n language changes
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng as LangEnum);
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  // Change language with persistence
  const changeLanguage = useCallback(async (lang: LangEnum) => {
    if (lang === currentLanguage) return;

    setIsChangingLanguage(true);
    try {
      // Change i18n language
      await i18n.changeLanguage(lang);
      // Save to storage
      await saveLanguagePreference(lang);
      setCurrentLanguage(lang);
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setIsChangingLanguage(false);
    }
  }, [currentLanguage]);

  // Check if a language is currently selected
  const isCurrentLanguage = useCallback((lang: LangEnum) => {
    return currentLanguage === lang;
  }, [currentLanguage]);

  // Get current language label
  const currentLanguageLabel = LANGUAGE_CONFIG[currentLanguage] || LANGUAGE_CONFIG[LangEnum.EN];

  return {
    currentLanguage,
    currentLanguageLabel,
    languages: LANGUAGE_CONFIG,
    changeLanguage,
    isCurrentLanguage,
    t,
    isChangingLanguage,
  };
};

/**
 * Hook to initialize language from storage
 * Should be called once at app startup
 */
export const useInitializeLanguage = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initLanguage = async () => {
      try {
        const savedLanguage = await getLanguagePreference();
        if (savedLanguage && savedLanguage !== i18n.language) {
          await i18n.changeLanguage(savedLanguage);
        }
      } catch (error) {
        console.error('Failed to initialize language:', error);
      } finally {
        setIsInitialized(true);
      }
    };

    initLanguage();
  }, []);

  return isInitialized;
};