import { FC, useState } from "react"
import styled, { css } from "styled-components"
import { Container } from "../../../styles/system/Container"
import { PropStyleTheme } from "../../types"
import { Header } from "./cardProjects/Header"
import  Topics  from "./cardProjects/Topics"
import { cursorPointer } from "../../../styles/system/styles"
import GalleryMasOnry from "../../senixcode-lightbox-custom/examples/Basic"
import { parseLinksToItems } from "../../helper/parseLinksToItems"
import { useMultiLanguage } from "../../hook/useMultiLanguage"
import { IProject } from "../../hook/language/types"
interface IContent {
  descriptions: Array<string>
  seeMore: boolean
}
export const ProjectCard: FC<IProject> = (props) => {
  const { contentDisplayCardProject } = useMultiLanguage()
  const [content, setContent] = useState<IContent>({
    descriptions: [props.summary],
    seeMore: false,
  })
  const handleSeeMore = () => {
    setContent((content) => {
      const changeState = !content.seeMore
      return {
        descriptions: changeState ? props.description : [props.summary],
        seeMore: changeState,
      }
    })
  }
  const items = parseLinksToItems(props.links)
  return (
    <Container gridTemplateRowsMd={"1fr 1fr 1fr 1fr"} styles={card}>
      <Header {...props} />
      <Container gridRowGap="0.5em">
        {content?.descriptions.map((description, id) => (
          <Summary key={id}>
            {description}
            {content.seeMore === false && (
              <span onClick={handleSeeMore}>
                {contentDisplayCardProject.seeMore}
              </span>
            )}
          </Summary>
        ))}
        {content.seeMore && (
          <Summary>
            <span onClick={handleSeeMore}>
              {contentDisplayCardProject.seeLess}
            </span>
          </Summary>
        )}
      </Container>
      <Topics topics={props.topic} />
      {content.seeMore && items.length === 1 && (
        <GalleryMasOnry items={items} columnsMd={1} />
      )}

      {content.seeMore && items.length > 1 && (
        <GalleryMasOnry items={items} columnsMd={2} />
      )}
      {/* improve this hardodicated code */}
      {content.seeMore && props.titleSeo === "senixcode-lightbox-custom" && (
        <iframe
          src="https://codesandbox.io/embed/github/senixcode/gallery-custom-typescript/tree/main/?fontsize=14&hidenavigation=1&theme=dark"
          className="codesanbox-senixcode"
          title="react-typescript"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      )}
    </Container>
  )
}

const Summary = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: 300;
  & span {
    text-decoration: underline;
    ${cursorPointer};
  }
`

export const card = css`
  background-color: ${(props: PropStyleTheme) =>
    props.theme.colors.primaryVariant};
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 0.8em;
  width: 100%;

  height: auto;
  justify-items: start;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: 0.4em;
  }
`
