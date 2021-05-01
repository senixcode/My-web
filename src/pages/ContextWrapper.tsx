import { IHeaderContext, HeaderContext } from "../contexts/HeaderContext";
import { useState } from "react";
import {
  IMenuMobileContext,
  MenuMobileContext,
} from "../contexts/MenuMobileContext";
import ModalProvider from "../senixcode-lightbox-custom/ModalContext";

export default function ContextWrapper({ children }) {
  const [headerShow, setHeaderShow] = useState(true);
  const [menuMobileShow, setMenuMobileShow] = useState(false);
  const valueHeader: IHeaderContext = { headerShow, setHeaderShow };
  const valueMenuMobile: IMenuMobileContext = {
    menuMobileShow,
    setMenuMobileShow,
  };
  return (
    <ModalProvider>
      <HeaderContext.Provider value={valueHeader}>
        <MenuMobileContext.Provider value={valueMenuMobile}>
          {children}
        </MenuMobileContext.Provider>
      </HeaderContext.Provider>
    </ModalProvider>
  );
}
