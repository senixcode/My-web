import { FC } from "react";
import { Container } from "../../../../styles/system/Container";
import { ILink } from "../../../cmsFaker/projects/interfaces";
import {Links} from "./Links"
import { css } from "styled-components";
export const Icons: FC<{ links: Array<ILink> }> = ({ links }) => (
  <Container styles={linksContainer} gridColumGap=".3em">
    {links.map((link, i) => (
      <Links key={i} {...link} />
    ))}
  </Container>
);

const linksContainer = css`
  display: flex;
`;
