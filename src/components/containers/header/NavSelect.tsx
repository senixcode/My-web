import Link from "next/link"
import { FC } from "react"
import { Container } from "../../../../styles/system/Container"
import { Hide } from "../../../../styles/system/Hide"
import { Nav } from "../../../../styles/system/Nav"
import { css } from "styled-components"
import Head from "next/head"
import { SEO_SEPARATOR } from "../../../globalVariables"
import { INavbar } from "../../../hook/language/types"
import { NextRouter } from "next/router"
import { centerContent, centerItems } from "../../../../styles/system/styles"
export const NavSelect: FC<{
  router: NextRouter
  navbar: INavbar
}> = ({ router, navbar }) => {
  const title = router.route === "/" ? navbar.aboutMe : navbar.projects

  return (
    <>
      {title && (
        <Head>
          <title>{`${title} ${SEO_SEPARATOR} Senixcode`} </title>
        </Head>
      )}
      <Hide maxMd="none">
        <Container gridTemplateColumnsMd={"1fr 1fr 1fr"} styles={gridColumnGap}>
          <div>
            <Link href="/">
              <Nav selected={router.route === "/"}>{navbar.aboutMe}</Nav>
            </Link>
          </div>
          <div>
            <Link href="/projects">
              <Nav selected={router.route === "/projects"}>
                {navbar.projects}
              </Nav>
            </Link>
          </div>
          <div>
            <Link href="/posts">
              <Nav selected={router.route === "/posts"}>{navbar.posts}</Nav>
            </Link>
          </div>
        </Container>
      </Hide>

      <Hide minMd="none">
        <Nav>{title}</Nav>
      </Hide>
    </>
  )
}

const gridColumnGap = css`
  display: grid;
  /* ${centerItems} */
  /* ${centerContent} */
  /* grid-column-gap: .5rem; */
`
