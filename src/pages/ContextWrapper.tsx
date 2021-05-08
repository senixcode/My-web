import { useState } from "react"
import {
  IMenuMobileContext,
  MenuMobileContext,
} from "../contexts/MenuMobileContext"
import ModalProvider from "../senixcode-lightbox-custom/ModalContext"

export default function ContextWrapper({ children }) {
  const [menuMobileShow, setMenuMobileShow] = useState(false)
  const valueMenuMobile: IMenuMobileContext = {
    menuMobileShow,
    setMenuMobileShow,
  }
  return (
    <ModalProvider>
      <MenuMobileContext.Provider value={valueMenuMobile}>
        {children}
      </MenuMobileContext.Provider>
    </ModalProvider>
  )
}
