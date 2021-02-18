import { FC } from "react";
import styled from "styled-components";
import { ISkill } from "../../interface/Skill";
import { PropStyleTheme } from "../../types";
import { SkillImg } from "../../image/background";
import { GroupSkill } from "../molecules/GroupSkill";
import { IMQuery } from "../../interface/Mquery";
import { useMediaQuery } from "../../hook/useMediaQuery";
import { LinkIcon } from "../../image/icons";
type Props = {
  skills: Array<ISkill>;
};
export const ContainerSkill: FC<Props> = ({ skills }) => {
  const { mQuery }: { mQuery: IMQuery } = useMediaQuery();
  const Skills: FC<Props> = ({ skills }) => (
    <>
      {skills.map(({ icon, name }, index) => (
        <GroupSkill key={index} icon={icon} name={name} />
      ))}
    </>
  );

  return (
    <Container>
      {mQuery && !mQuery.matches ? (
        <Skills skills={skills} />
      ) : (
        <>
          <h2>Skill </h2>

          <Content>
            <Img>
              <SkillImg />
            </Img>
            <div>
              <Skills skills={skills} />
            </div>
          </Content>
          <Project>
            <LinkIcon />
          </Project>
        </>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: grid;
    grid-template-rows: 1.5fr 8fr;
  }
`;
const Img = styled.div`
  display: flex;
  justify-content: center;
  width: 30em;
  height: auto;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
    width: 30em;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.lg}) {
    grid-template-columns: 6fr 6fr;
    /* background-color:red; */
  }
`;
const Project = styled.a.attrs((props) => ({
  title: "Project-Ecommerce",
  href: "https://lightweight-ecommerce-template.netlify.app/",
  target: "_blank",
}))`
  background-color: ${(props: PropStyleTheme) =>
    props.theme.colors.secondaryVariant};
  width: 3.5em;
  height: 3.5em;
  position: relative;
  right:-2em;
  bottom: 24em;
  border-radius: 500%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    position: relative;
  -webkit-transform: scale(1.8);
      -ms-transform: scale(1.8);
      transform: scale(1.8);
  }

  &[title]:hover:aflter {
    content: attr(title);
    padding: 4px 8px;
    color: #ffff;
    position: absolute;
    left: 0;
    top: 100%;
    white-space: nowrap;
    z-index: 20px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-box-shadow: 0px 0px 4px #222;
    -webkit-box-shadow: 0px 0px 4px #222;
    box-shadow: 0px 0px 4px #222;
    background-image: -moz-linear-gradient(top, #eeeeee, #cccccc);
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0, #eeeeee),
      color-stop(1, #cccccc)
    );
    background-image: -webkit-linear-gradient(top, #eeeeee, #cccccc);
    background-image: -moz-linear-gradient(top, #eeeeee, #cccccc);
    background-image: -ms-linear-gradient(top, #eeeeee, #cccccc);
    background-image: -o-linear-gradient(top, #eeeeee, #cccccc);
  }
`;