import styled, { css } from "styled-components";
import { Container } from "../../../../styles/system/Container";
import { Image } from "../../../../styles/system/Image";
import { Hide } from "../../../../styles/system/Hide";
import { Navs } from "./Navs";
import { Languages } from "./Languages";
import { FC } from "react";
import { NextRouter } from "next/router";
import Link from "next/link";
import { cursorPointer } from "../../../../styles/system/styles";
import { PropStyleTheme } from "../../../types";

export const DefaultHeader: FC<{
  router: NextRouter;
  handleChangeMenu: () => void;
}> = ({ router, handleChangeMenu }) => (
  <Container
    gridTemplateColumnsXs={`1fr 8fr 1fr`}
    gridTemplateRowsXs={`1fr`}
    gridTemplateRowsMd="1fr"
    styles={container}
  >
    <Image widthXs="20px" widthMd="30px" />
    <Navs router={router} />
    <Hide minMd="none" onClick={handleChangeMenu}>
      <Image
        alt="icon navbar"
        src="/static/open-navbar-mobil.svg"
        widthXs="20px"
      />
    </Hide>
    <Hide maxMd="none">
      <Languages router={router} />
    </Hide>
  </Container>
);

export const HeaderDetails = () => (
  <Flex>
    <Link href="/projects">
      <i className="fas fa-arrow-left"></i>
    </Link>
  </Flex>
);

const container = css`
  padding-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
`;

const Flex = styled.div`
  padding-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  ${cursorPointer}
  & > i {
    color: ${(props: PropStyleTheme) => props.theme.colors.secondary};
    font-size: 25px;
  }
`;
