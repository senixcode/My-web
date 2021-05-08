import styled from "styled-components"
import { PropStyleTheme } from "../../../types"
import { ITheme } from "../../../interface/Theme"
import { FC } from "react"
import Link from "next/link"
import { Languages } from "./Languages"
import { SocialNetworks } from "../../organisms/SocialNetworks"
import { INavbar } from "../../../hook/useLanguage"
import { NextRouter } from "next/router"

export const MenuCellSize: FC<{
  router: NextRouter
  handleChangeMenu: () => void
  navbar: INavbar
}> = ({ router, handleChangeMenu, navbar }) => (
  <Container>
    <Navs>
      <Flex onClick={handleChangeMenu}>
        <i className="fas fa-times" />
      </Flex>
      <div style={{ width: "25%" }}>
        <Languages router={router} />
      </div>
      <div onClick={handleChangeMenu}>
        <Link href="/aboutme">
          <Nav selected={router.route === "/"}>{navbar.aboutMe}</Nav>
        </Link>
      </div>
      <div onClick={handleChangeMenu}>
        <Link href="/projects">
          <Nav selected={router.route === "/projects"}>{navbar.projects}</Nav>
        </Link>
      </div>
      <SocialNetworks />
    </Navs>
  </Container>
)

const Container = styled.div`
  background: ${({ theme }: PropStyleTheme) => theme.colors.primaryVariant};
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 1.5em;
  z-index: 100;
`

const Navs = styled.div`
  padding-top: 1em;
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-row-gap: 1.5em;
`

const Nav = styled.h2<{ selected: boolean }>`
  color: ${({ selected, theme }: { selected: boolean; theme: ITheme }) =>
    selected ? theme.colors.secondary : theme.colors.textPrimary};
`

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  & > i {
    font-size: 25px;
    color: ${({ theme }: PropStyleTheme) => theme.colors.secondary};
  }
`
