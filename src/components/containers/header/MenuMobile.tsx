import styled from "styled-components";
import { PropStyleTheme } from "../../../types";
import { ITheme } from "../../../interface/Theme";
import { FC } from "react";
import Link from "next/link";
import { Languages } from "./Languages";
import { SocialNetworks } from "../../organisms/SocialNetworks";
import { HeaderNavProps } from ".";

const Content: FC<HeaderNavProps> = ({ router, routes, handleChangeMenu }) => {

  return (
    <Navs>
      <Flex onClick={handleChangeMenu}>
        <i className="fas fa-times" />
      </Flex>
      <div style={{ width: "25%" }}>
        <Languages router={router} />
      </div>
      {routes.map(
        ({ path, title }, i) =>
          path != "/detail/[project]" && (
            <div key={i} onClick={handleChangeMenu}>
              <Link href={path}>
                <Nav selected={path === router.route ? true : false}>
                  {title}
                </Nav>
              </Link>
            </div>
          )
      )}
      <SocialNetworks />
    </Navs>
  );
};

export const MenuCellSize: FC<HeaderNavProps> = (props) => (
  <Container>
    <Content {...props} />
  </Container>
);
const Container = styled.div`
  background: ${({ theme }: PropStyleTheme) => theme.colors.primaryVariant};
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 1.5em;
  z-index: 100;
`;

const Navs = styled.div`
  padding-top: 1em;
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-row-gap: 1.5em;
`;

const Nav = styled.h2<{ selected: boolean }>`
  color: ${({ selected, theme }: { selected: boolean; theme: ITheme }) =>
    selected ? theme.colors.secondary : theme.colors.textPrimary};
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  & > i {
    font-size: 25px;
    color: ${({ theme }: PropStyleTheme) => theme.colors.secondary};
  }
`;
