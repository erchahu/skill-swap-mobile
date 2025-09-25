import React, { memo, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import i18n from "@/locale"
import { LangEnum } from "@/types"
import { LangSwitcherWrap, switcherModalStyle } from "./style"
import Modal from "react-native-modal"

const LangSwitcher = () => {
  const [open, setOpen] = useState<boolean>(true)

  const onChangeLang = (lang: LangEnum) => {
    i18n.changeLanguage(lang)
  }
  
  return (
    <>
      <Modal isVisible={open} style={switcherModalStyle}>
        <LangSwitcherWrap>
          <TouchableOpacity onPress={() => onChangeLang(LangEnum.ZH)}><Text>中文</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => onChangeLang(LangEnum.EN)}><Text>English</Text></TouchableOpacity>
        </LangSwitcherWrap>
      </Modal>
    </>
  )
}

export default memo(LangSwitcher)