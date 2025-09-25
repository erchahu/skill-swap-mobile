import React, { memo, useState } from "react"
import { TouchableOpacity } from "react-native"
import i18n from "@/locale"
import { LangEnum } from "@/types"
import { useTranslation } from "react-i18next"
import { LANGUAGE_CONFIG } from "@/constants/language"
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
  const { t } = useTranslation()
  const [selectedLang, setSelectedLang] = useState<LangEnum>(i18n.language as LangEnum)
  const currentLang = i18n.language

  const handleConfirm = () => {
    if (selectedLang !== currentLang) {
      i18n.changeLanguage(selectedLang)
    }
    onClose()
  }

  const handleCancel = () => {
    setSelectedLang(currentLang as LangEnum)
    onClose()
  }

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
          <HeaderButton onPress={handleCancel}>
            <HeaderButtonText>{t('languageModal.cancel')}</HeaderButtonText>
          </HeaderButton>
          <ModalTitle>{t('languageModal.title')}</ModalTitle>
          <HeaderButton onPress={handleConfirm}>
            <HeaderButtonText isPrimary>{t('languageModal.confirm')}</HeaderButtonText>
          </HeaderButton>
        </ModalHeader>

        <ModalContent>
          {Object.entries(LANGUAGE_CONFIG).map(([code, label]) => (
            <LanguageOption 
              key={code}
              onPress={() => setSelectedLang(code as LangEnum)}
              activeOpacity={0.7} 
              isSelected={selectedLang === code}
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
  )
}

export default memo(LangSwitcher)