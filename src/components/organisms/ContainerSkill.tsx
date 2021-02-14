import { FC } from "react";
import styled from "styled-components";
import { ISkill } from "../../interface/Skill";
import { PropStyleTheme } from "../../types";
import { SkillImg } from "../../image/background";
import { GroupSkill } from "../molecules/GroupSkill";
import { IMQuery } from "../../interface/Mquery";
import { useMediaQuery } from "../../hook/useMediaQuery";
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
          <h2>Skill</h2>
          <Content>
            <Img>
              <SkillImg />
            </Img>
            <div>
              <Skills skills={skills} />
            </div>
          </Content>
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
