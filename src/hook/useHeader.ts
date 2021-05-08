import { NextRouter, useRouter } from "next/router"
import {
  useMenuMobileContext,
} from "../contexts/MenuMobileContext"

export default function useHeader() {
  const router: NextRouter = useRouter()
  const { menuMobileShow, setMenuMobileShow } = useMenuMobileContext()
  const handleChangeMenu = () => {
    setMenuMobileShow(!menuMobileShow)
  }

  return {
    router,
    handleChangeMenu,
    menuMobileShow,
  }
}
