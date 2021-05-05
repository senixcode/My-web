import styled, { css } from "styled-components"
import { FC } from "react"
import { Container } from "../../../../styles/system/Container"
import { PropStyleTheme } from "../../../types"
import { IProjects } from "../../../interface/Project"
import { Icons } from "./IconsHeader"

export const Header: FC<IProjects> = ({ title, links }) => (
  <Container gridTemplateColumnsXs={"12fr 1fr"} styles={header}>
    <Title>{title.toUpperCase()}</Title>
    <Icons links={links} />
  </Container>
)
const Title = styled.h3`
  font-size: 18px;
  font-weight: normal;
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
  width: 100%;
`
const header = css`
  width: 100%;
`
