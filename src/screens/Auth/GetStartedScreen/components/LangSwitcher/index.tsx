import React, { memo, useState } from "react"
import { TouchableOpacity } from "react-native"
import i18n from "@/locale"
import { LangEnum } from "@/types"
import { useTranslation } from "react-i18next"
import {
  LangSwitcherWrap,
  switcherModalStyle,
  ModalTitle,
  LanguageOption,
  LanguageText,
  SelectedIndicator,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  ButtonText,
  ModalContent,
  LanguageFlag
} from "./style"
import Modal from "react-native-modal"

const LangSwitcher = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState<boolean>(true)
  const [selectedLang, setSelectedLang] = useState<LangEnum>(i18n.language as LangEnum)
  const currentLang = i18n.language

  const languages = [
    { code: LangEnum.EN, label: 'English', flag: '🇺🇸' },
    { code: LangEnum.ZH, label: '中文', flag: '🇨🇳' }
  ]

  const handleConfirm = () => {
    if (selectedLang !== currentLang) {
      i18n.changeLanguage(selectedLang)
    }
    setOpen(false)
  }

  const handleCancel = () => {
    setSelectedLang(currentLang as LangEnum)
    setOpen(false)
  }

  return (
    <Modal
      isVisible={open}
      style={switcherModalStyle}
      onBackdropPress={() => {}}
      onBackButtonPress={() => {}}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <LangSwitcherWrap>
        <ModalContent>
          <ModalTitle>{t('languageModal.title')}</ModalTitle>

          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              onPress={() => setSelectedLang(lang.code)}
              activeOpacity={0.7}
            >
              <LanguageOption isSelected={selectedLang === lang.code}>
                <LanguageText>
                  <LanguageFlag>{lang.flag}</LanguageFlag> {lang.label}
                </LanguageText>
                {selectedLang === lang.code && <SelectedIndicator>✓</SelectedIndicator>}
              </LanguageOption>
            </TouchableOpacity>
          ))}

          <ButtonContainer>
            <CancelButton onPress={handleCancel}>
              <ButtonText isCancel>{t('languageModal.cancel')}</ButtonText>
            </CancelButton>
            <ConfirmButton onPress={handleConfirm}>
              <ButtonText>{t('languageModal.confirm')}</ButtonText>
            </ConfirmButton>
          </ButtonContainer>
        </ModalContent>
      </LangSwitcherWrap>
    </Modal>
  )
}

export default memo(LangSwitcher)