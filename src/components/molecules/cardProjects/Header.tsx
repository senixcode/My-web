import styled,{css} from 'styled-components'
import { FC } from "react";
import { Container } from "../../../../styles/system/Container";
import { Image } from "../../../../styles/system/Image";
import { PropStyleTheme } from '../../../types';

export const Header: FC<{ title: string }> = ({ title }) => {
  const Icons = () => {
    const ContainerImage: FC<{ icon: string }> = ({ icon }) => (
      <Image
        alt={`icon ${icon}`}
        src={`/static/projects/${icon}.svg`}
        widthMd="20px"
      />
    );

    return (
      <Container gridTemplateColumnsXs={`1fr 1fr`} gridColumGap=".3em">
        {["github", "link"].map((icon) => (
          <ContainerImage key={icon} icon={icon} />
        ))}
      </Container>
    );
  };
  return (
    <Container gridTemplateColumnsXs={`12fr 1fr`} styles={header}>
      <Title>{title.toUpperCase()}</Title>
      <Icons />
    </Container>
  );
};
const Title = styled.h3`
  font-size: 18px;
  font-weight: normal;
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
  width: 100%;
`;
const header = css`
  width: 100%;
`;