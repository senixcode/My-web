import { FC, HTMLAttributes, HtmlHTMLAttributes } from "react";
import styled,{} from "styled-components";
import { PropStyleTheme } from "../../types";

type Props = {
  company: string;
  achievements: Array<string>;
};
export const CardExperience: FC<Props> = ({company, achievements }) => (
  <Card>
      <Company>{company} </Company>
      <SeparationLine />
      <Achievements>
        {achievements.map((achievement, index) => (
          <p key={index}>{achievement}</p>
        ))}
      </Achievements>
  </Card>
);
interface IDivProps{
    id:string
}
const Card = styled.div.attrs<IDivProps>(({id}) => ({id}))`
  padding:0 .5em;
`;
const Company = styled.h3`
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
`;
const Achievements = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-row-gap: 1em;
`;
const SeparationLine = styled.hr`
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
  width: 100%;
  margin-bottom: 1em;
`;
