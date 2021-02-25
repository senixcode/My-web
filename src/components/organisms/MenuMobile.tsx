import styled from "styled-components";
import { PropStyleTheme, RouterProps } from "../../types";
import { ITheme } from "../../interface/Theme";
import { getRoutes, IRoutes } from "../../cmsFaker/getRoutes";
import { FC } from "react";
import Link from "next/link";

const Content: FC<RouterProps>  = ({router}) => {
   const { locale } = router;
  const t: Array<IRoutes> = getRoutes(locale); 
  return (
    <Navs>
       {t.map(({ path, title }, i) => (
            <Link href={path} key={i}>
              <Nav selected={path === router.route ? true : false}>{title}</Nav>
            </Link>
          ))}
    </Navs>
  );
};

export const MenuMobile: FC<RouterProps>  = ({router}) => (
  <Container>
    <Content router={router}/>
  </Container>
);
const Container = styled.div`
  background: ${({ theme }: PropStyleTheme) => theme.colors.primaryVariant};
  position: fixed;
  width: 75%;
  height: 100%;
  padding: 1.5em;
  z-index: 100;
`;

const Navs = styled.div`
  padding-top: 3em;
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-row-gap: 2em;
`;

const Nav = styled.h2<{ selected: boolean }>`
  color: ${({ selected, theme }: { selected: boolean; theme: ITheme }) =>
    selected ? theme.colors.secondary : theme.colors.textPrimary};
`;