import { FC } from "react";
import { Container } from "../../../../styles/system/Container";
import { ILink } from "../../../cmsFaker/projects/interfaces";
import { css } from "styled-components";
import { LinkCategory } from "../../../types/enums/LinkCategory";
import SwichCategoryLink from "../SwtichCategoryLink";
export const Icons: FC<{ links: Array<ILink> }> = ({ links }) => {

return(
  <Container styles={linksContainer} gridColumGap=".3em">
    {links.map((link, i) => link.category === LinkCategory.ICON && (
      <SwichCategoryLink key={i} {...link}  />
    ))}
  </Container>
)};

const linksContainer = css`
  display: flex;
`;
