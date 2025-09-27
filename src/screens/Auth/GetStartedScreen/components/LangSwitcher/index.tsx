import React, { memo, useState } from "react"
import { useLanguage } from "@/hooks/useLanguage"
import { LangEnum } from "@/types"
import {
  LangSwitcherWrap,
  switcherModalStyle,
  ModalTitle,
  LanguageOption,
  LanguageText,
  SelectedIndicator,
  ModalContent,
  ModalHeader,
  HeaderButton,
  HeaderButtonText,
  CheckIcon
} from "./style"
import Modal from "react-native-modal"

interface LangSwitcherProps {
  visible: boolean;
  onClose: () => void;
}

const LangSwitcher = ({ visible, onClose }: LangSwitcherProps) => {
  const {
    currentLanguage,
    languages,
    changeLanguage,
    isCurrentLanguage,
    t,
    isChangingLanguage
  } = useLanguage();

  const [selectedLang, setSelectedLang] = useState<LangEnum>(currentLanguage);

  const handleConfirm = async () => {
    if (selectedLang !== currentLanguage) {
      await changeLanguage(selectedLang);
    }
    onClose();
  };

  const handleCancel = () => {
    setSelectedLang(currentLanguage);
    onClose();
  };

  // Reset selected language when modal opens
  React.useEffect(() => {
    if (visible) {
      setSelectedLang(currentLanguage);
    }
  }, [visible, currentLanguage]);

  return (
    <Modal
      isVisible={visible}
      style={switcherModalStyle}
      onBackdropPress={() => {}}
      onBackButtonPress={() => {}}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <LangSwitcherWrap>
        <ModalHeader>
          <HeaderButton onPress={handleCancel} disabled={isChangingLanguage}>
            <HeaderButtonText>{t('languageModal.cancel')}</HeaderButtonText>
          </HeaderButton>
          <ModalTitle>{t('languageModal.title')}</ModalTitle>
          <HeaderButton onPress={handleConfirm} disabled={isChangingLanguage}>
            <HeaderButtonText isPrimary>{t('languageModal.confirm')}</HeaderButtonText>
          </HeaderButton>
        </ModalHeader>

        <ModalContent>
          {Object.entries(languages).map(([code, label]) => (
            <LanguageOption
              key={code}
              onPress={() => setSelectedLang(code as LangEnum)}
              activeOpacity={0.7}
              isSelected={selectedLang === code}
              disabled={isChangingLanguage}
            >
              <LanguageText>{label}</LanguageText>
              {selectedLang === code && (
                <CheckIcon>
                  <SelectedIndicator>✓</SelectedIndicator>
                </CheckIcon>
              )}
            </LanguageOption>
          ))}
        </ModalContent>
      </LangSwitcherWrap>
    </Modal>
  );
};

export default memo(LangSwitcher);