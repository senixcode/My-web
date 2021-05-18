import { css } from "styled-components"
import { MenuCellSize } from "./MenuMobile"
import useHeader from "../../../hook/useHeader"
import { Container } from "../../../../styles/system/Container"
import { Hide } from "../../../../styles/system/Hide"
import { Languages } from "./Languages"
import { Image as Logo } from "../../../../styles/system/Image"
import { NavSelect } from "./NavSelect"
import { PropStyleTheme } from "../../../types"
import { useMultiLanguage } from "../../../hook/useMultiLanguage"
export default function Header() {
  const { router, menuMobileShow, handleChangeMenu } = useHeader()
  const { navbar } = useMultiLanguage()
  return (
    <>
      {menuMobileShow && (
        <MenuCellSize
          router={router}
          navbar={navbar}
          handleChangeMenu={handleChangeMenu}
        />
      )}
      <Container
        gridTemplateColumnsXs={"1fr 8fr 1fr"}
        gridTemplateRowsXs={"1fr"}
        gridTemplateRowsMd="1fr"
        styles={container}
      >
        <Logo widthXs="20px" widthMd="30px" />
        <Container gridTemplateColumnsXs={"1fr"}>
          <NavSelect router={router} navbar={navbar} />
        </Container>
        <Hide minMd="none" onClick={handleChangeMenu} styles={iconNavbar}>
          <i className="fas fa-bars" />
        </Hide>
        <Hide maxMd="none">
          <Languages router={router} />
        </Hide>
      </Container>
    </>
  )
}

const container = css`
  padding-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
`

const iconNavbar = css`
  & > i {
    color: ${(props: PropStyleTheme) => props.theme.colors.secondary};
    font-size: 23px;
  }
`
