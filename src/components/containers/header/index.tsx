import { MenuCellSize } from "../../../components/organisms/MenuMobile";
import useHeader from "../../../hook/useHeader";
import { DefaultHeader,HeaderDetails } from "./ContainerHeader";
export default function Header() {
  const { router, show, headerShow, handleChangeMenu } = useHeader();

  return (
    <>
      {show && <MenuCellSize router={router} />}
      {headerShow ? (
       <DefaultHeader
       router={router}
       handleChangeMenu={handleChangeMenu}
       /> 
      ) : (
        <HeaderDetails/>
      )}
    </>
  );
}