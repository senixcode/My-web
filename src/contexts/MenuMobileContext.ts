import { createContext, useContext } from "react"
export interface IMenuMobileContext {
  menuMobileShow?: boolean
  setMenuMobileShow?: (h: boolean) => void
}
export const MenuMobileContext = createContext<IMenuMobileContext>({
  menuMobileShow: false,
  setMenuMobileShow: () => {},
})
export const useMenuMobileContext = () => useContext(MenuMobileContext)
