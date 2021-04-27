import React from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { Container } from "../../../styles/system/Container";
import { PropStyleTheme } from "../../types";
import { Header } from "./cardProjects/Header";
import { Topics } from "./cardProjects/Topics";
import { cursorPointer } from "../../../styles/system/styles";
import { IProjects } from "../../interface/Project"
import Gallery from "../../senixcode-lightbox-custom/examples/Basic";
import { parseLinksToItems } from "../../helper/parseLinksToItems";
interface IContent {
  descriptions: Array<string>;
  seeMore: boolean;
}
export const ProjectCard: FC<{
    project: IProjects;
  seeMoreLang: string;
  seeLessLang: string;
}> = ({project, seeMoreLang, seeLessLang}) => {
  const [content, setContent] = React.useState<IContent>({
    descriptions: [project.summary],
    seeMore: false,
  });
  const handleSeeMore = () => {
    setContent((content) => {
      const changeState = !content.seeMore;
      return {
        descriptions: changeState ? project.descriptions : [project.summary],
        seeMore: changeState,
      };
    });
  };
  return (
    <Container
      gridTemplateRowsXs={`.2fr 1fr .5fr`}
      gridTemplateRowsMd={`1fr 1fr 1fr 1fr`}
      styles={card}
    >
      <Header {...project} />
      <Container gridRowGap="0.5em">
        {content?.descriptions.map((description, id) => (
          <Summary key={id}>
            {description}
            {content.seeMore === false && (
              <span onClick={handleSeeMore}>{seeMoreLang}</span>
            )}
          </Summary>
        ))}
        {content.seeMore && (
          <Summary>
            <span onClick={handleSeeMore}>{seeLessLang}</span>
          </Summary>
        )}
      </Container>
      <Topics topics={project.topics} />
      <Gallery items={parseLinksToItems(project.links)} />
    </Container>
  );
};

const Summary = styled.p`
  width: 100%;
  font-size: 18px;
  font-weight: 300;
  & span {
    text-decoration: underline;
    ${cursorPointer};
  }
`;

const card = css`
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
    height: auto;
    padding: 0.5em;
  }
`;
