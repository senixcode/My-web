import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useHeaderContext } from "../contexts/HeaderContext";
interface IUseHeader {
    router:NextRouter;
    show:boolean;
    headerShow:boolean;
    handleChangeMenu: () => void
}
export default function useHeader():IUseHeader{
   const router: NextRouter = useRouter();
  const { pathname } = router;

  const { headerShow, setHeaderShow } = useHeaderContext();
  const [show, setShow] = useState(false);
  const handleChangeMenu = () => {
    setShow(!show);
  };
  useEffect(() => {
    if (pathname != "/detail/[project]") {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  }, [pathname]);
  return {
      router,
      show,
      headerShow,
      handleChangeMenu
  }
}