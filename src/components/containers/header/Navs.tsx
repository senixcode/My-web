import { FC } from "react";
import { Container } from "../../../../styles/system/Container";
import {NavSelect} from './NavSelect'
import { HeaderNavProps } from ".";
export const Navs: FC<HeaderNavProps> = ({ router, routes }) => {
  return (
    <Container gridTemplateColumnsXs={`1fr`}>
      <NavSelect router={router} routes={routes} />
    </Container>
  );
};
