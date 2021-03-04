import { MenuCellSize } from "./MenuMobile";
import useHeader from "../../../hook/useHeader";
import { DefaultHeader, HeaderDetails } from "./ContainerHeader";
export default function Header() {
  const { router, menuMobileShow, headerShow, handleChangeMenu } = useHeader();

  return (
    <>
      {menuMobileShow && (
        <MenuCellSize router={router} handleChangeMenu={handleChangeMenu} />
      )}
      {headerShow ? (
        <DefaultHeader router={router} handleChangeMenu={handleChangeMenu} />
      ) : (
        <HeaderDetails />
      )}
    </>
  );
}
