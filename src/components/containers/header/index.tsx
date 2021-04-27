import { MenuCellSize } from "./MenuMobile";
import useHeader from "../../../hook/useHeader";
import { DefaultHeader, HeaderDetails } from "./ContainerHeader";
import { GET_ROUTE } from "../../../graphql/querys/route";
import { useQuery } from "@apollo/client";
import { MiddlwareHookApolloClient } from "../../common/MiddelwareHookApolloClient";
import { IRoutes } from "../../../cmsFaker/getRoutes";
import { RouterProps } from "../../../types";
export default function Header() {
  const { router, menuMobileShow, headerShow, handleChangeMenu } = useHeader();
  const { locale } = router;
  const LANGUAGE = (locale as string).toLocaleUpperCase();
  const getRoute = useQuery(GET_ROUTE, {
    variables: { param: LANGUAGE },
  });
  const routes: Array<IRoutes> = getRoute.data && getRoute.data.data;
  const propsSend = {
    router,
    routes,
    handleChangeMenu,
  };
  return (
    <MiddlwareHookApolloClient {...getRoute}>
      {menuMobileShow && getRoute.data && (<MenuCellSize {...propsSend} />)}
      {headerShow && getRoute.data ? (
        <DefaultHeader {...propsSend} />
      ) : (
        <HeaderDetails />
      )}
    </MiddlwareHookApolloClient>
  );
}

export interface HeaderNavProps extends RouterProps {
  routes?: Array<IRoutes>;
  handleChangeMenu?: () => void;
}
