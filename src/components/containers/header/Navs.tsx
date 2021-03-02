import { FC } from "react";
import { RouterProps } from "../../../types";
import { Container } from "../../../../styles/system/Container";
import {NavSelect} from './NavSelect'
export const Navs: FC<RouterProps> = ({ router }) => {
  return (
    <Container gridTemplateColumnsXs={`1fr`}>
      <NavSelect router={router} />
    </Container>
  );
};
