import React, { useState, useCallback } from 'react';
import { Modal, TouchableWithoutFeedback, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { ms, vs } from '@/utils/scale';

const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

const BottomSheetContainer = styled.View`
  background-color: ${props => props.theme.colors.bgWhite};
  border-top-left-radius: ${ms(24)}px;
  border-top-right-radius: ${ms(24)}px;
  padding: ${vs(20)}px;
  padding-bottom: ${vs(40)}px;
`;

const SheetHandle = styled.View`
  width: ${ms(40)}px;
  height: ${ms(4)}px;
  background-color: ${props => props.theme.colors.gray200};
  border-radius: ${ms(2)}px;
  align-self: center;
  margin-bottom: ${vs(20)}px;
`;

const SheetTitle = styled.Text`
  font-size: ${ms(18)}px;
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  text-align: center;
  margin-bottom: ${vs(24)}px;
`;

const LanguageOption = styled.TouchableOpacity<{ isActive?: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${vs(16)}px ${ms(16)}px;
  background-color: ${props => props.isActive ? props.theme.colors.primary50 : 'transparent'};
  border-radius: ${ms(12)}px;
  margin-bottom: ${vs(8)}px;
`;

const LanguageOptionLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LanguageFlag = styled.Text`
  font-size: ${ms(24)}px;
  margin-right: ${ms(12)}px;
`;

const LanguageTextContainer = styled.View``;

const LanguageName = styled.Text`
  font-size: ${ms(16)}px;
  font-weight: 600;
  color: ${props => props.theme.colors.textPrimary};
`;

const LanguageNativeName = styled.Text`
  font-size: ${ms(13)}px;
  color: ${props => props.theme.colors.textSecondary};
  margin-top: ${vs(2)}px;
`;

const CheckIcon = styled.Text`
  font-size: ${ms(20)}px;
  color: ${props => props.theme.colors.primary};
`;

interface LanguageSelectorProps {
  visible: boolean;
  onClose: () => void;
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const languages = [
  { code: 'zh', name: '中文', nativeName: 'Chinese', flag: '🇨🇳' },
  { code: 'en', name: 'English', nativeName: '英文', flag: '🇺🇸' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  visible,
  onClose,
  currentLanguage,
  onLanguageChange,
}) => {
  const { t } = useTranslation();

  const handleLanguageSelect = useCallback((language: string) => {
    onLanguageChange(language);
    onClose();
  }, [onLanguageChange, onClose]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <ModalOverlay>
          <TouchableWithoutFeedback>
            <BottomSheetContainer>
              <SheetHandle />
              <SheetTitle>{t('getStarted.selectLanguage')}</SheetTitle>

              {languages.map(lang => (
                <LanguageOption
                  key={lang.code}
                  isActive={currentLanguage === lang.code}
                  onPress={() => handleLanguageSelect(lang.code)}
                  activeOpacity={0.7}
                >
                  <LanguageOptionLeft>
                    <LanguageFlag>{lang.flag}</LanguageFlag>
                    <LanguageTextContainer>
                      <LanguageName>{lang.name}</LanguageName>
                      <LanguageNativeName>{lang.nativeName}</LanguageNativeName>
                    </LanguageTextContainer>
                  </LanguageOptionLeft>
                  {currentLanguage === lang.code && (
                    <CheckIcon>✓</CheckIcon>
                  )}
                </LanguageOption>
              ))}
            </BottomSheetContainer>
          </TouchableWithoutFeedback>
        </ModalOverlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LanguageSelector;