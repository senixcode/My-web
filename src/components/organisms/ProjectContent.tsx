import { css } from "styled-components"
import { Container } from "../../../styles/system/Container"
import { PropStyleTheme } from "../../types"
import { ProjectCard } from "../molecules/ProjectCard"
import { useMultiLanguage,TypeReducerMultiLanguage } from "../../hook/useMultiLanguage"

export const ProjectContent = () => {
  const {projects} = useMultiLanguage(TypeReducerMultiLanguage.PROJECT)
  return (
    <Container
      gridTemplateRowsMd={"1fr 12fr"}
      gridRowGap="1em"
      styles={container}
    >
        {projects && (
          <Container gridRowGap="1em" styles={projectStyles}>
            {projects.map((project,i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </Container>
        )}
    </Container>
  )
}

const container = css`
  width: 100%;
  justify-items: start;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    grid-template-rows: 1fr;
    width: 100%;
    justify-items: start;
  }
`

export const projectStyles = css`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-items: start;
  transition: 0.3s all ease;

  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`
