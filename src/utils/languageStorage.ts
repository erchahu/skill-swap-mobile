import AsyncStorage from '@react-native-async-storage/async-storage';
import { LangEnum } from '@/types';

const LANGUAGE_STORAGE_KEY = 'user_preferred_language';

/**
 * Save user's language preference to storage
 */
export const saveLanguagePreference = async (language: LangEnum): Promise<void> => {
  try {
    await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    console.error('Failed to save language preference:', error);
  }
};

/**
 * Get user's language preference from storage
 * Returns null if no preference is saved
 */
export const getLanguagePreference = async (): Promise<LangEnum | null> => {
  try {
    const savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage && Object.values(LangEnum).includes(savedLanguage as LangEnum)) {
      return savedLanguage as LangEnum;
    }
    return null;
  } catch (error) {
    console.error('Failed to get language preference:', error);
    return null;
  }
};

/**
 * Clear language preference from storage
 */
export const clearLanguagePreference = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(LANGUAGE_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear language preference:', error);
  }
};