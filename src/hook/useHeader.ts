import { NextRouter, useRouter } from "next/router"
import { useEffect } from "react"
import { useHeaderContext } from "../contexts/HeaderContext"
import {
  IMenuMobileContext,
  useMenuMobileContext,
} from "../contexts/MenuMobileContext"
interface IUseHeader extends IMenuMobileContext {
  router: NextRouter
  headerShow: boolean
  handleChangeMenu: () => void
}
export default function useHeader(): IUseHeader {
  const router: NextRouter = useRouter()
  const { pathname } = router

  const { headerShow, setHeaderShow } = useHeaderContext()
  const { menuMobileShow, setMenuMobileShow } = useMenuMobileContext()
  const handleChangeMenu = () => {
    setMenuMobileShow(!menuMobileShow)
  }
  useEffect(() => {
    if (pathname != "/detail/[project]") {
      setHeaderShow(true)
    } else {
      setHeaderShow(false)
    }
  }, [pathname])
  return {
    router,
    headerShow,
    handleChangeMenu,
    menuMobileShow,
  }
}
