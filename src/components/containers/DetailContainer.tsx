import { css } from "styled-components"
import { FC } from "react"
import { Container } from "../../../styles/system/Container"
import { startContent, startItems } from "../../../styles/system/styles"
import { PropStyleTheme } from "../../types"
import Topics from "../molecules/cardProjects/Topics"
import { Icons } from "../molecules/cardProjects/IconsHeader"
import { IProject } from "../../hook/language/types"

export const DetailContainer: FC<IProject> = ({
  title,
  description,
  topic,
  links,
}) => {
  return (
    <Container gridRowGap="1em" styles={container}>
      <h2>{title}</h2>
      <Container gridRowGap="1em" styles={start}>
        {description &&
          description.map((description, id) => <p key={id}>{description}</p>)}
      </Container>
      <Container styles={start}>
        <Icons links={links} />
      </Container>
      <Topics topics={topic} />
    </Container>
  )
}

const container = css`
  padding: 0 1em;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: 0 3em;
  }
`

const start = css`
  width: 100%;
  ${startContent}
  ${startItems}
`
