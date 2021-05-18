import { FC } from "react"
import { Container } from "../../../../styles/system/Container"
import { ILink } from "../../../interface/Project"
import { css } from "styled-components"
import IconCustom from "../../atoms/IconCustom"
import { CategoryLink } from "../../../hook/language/types"
export const Icons: FC<{ links: Array<ILink> }> = ({ links }) => {
  return (
    <Container styles={linksContainer} gridColumGap=".3em">
      {links.map(
        (link, i) =>
          link.category === CategoryLink.ICON && (
            <IconCustom key={i} {...link} />
          )
      )}
    </Container>
  )
}

const linksContainer = css`
  display: flex;
`
