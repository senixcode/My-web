import styled,{css} from 'styled-components'
import { FC } from "react";
import { Container } from "../../../../styles/system/Container";
import { Image } from "../../../../styles/system/Image";
import { PropStyleTheme } from '../../../types';
import { Link } from '../../../../styles/system/Link';
import { ILink, IProjects } from '../../../cmsFaker/projects/interfaces';

export const Header: FC<IProjects> = ({ title,links }) => {
  const Icons = () => {
    const ContainerImage: FC<ILink> = ({ nameSeo, name,link }) => (
      <Link title={nameSeo} href={link} fontSizeMd="20px" fontSizeXs="18px">
        <i className={name}></i>
      </Link>
    );

    return (
      <Container gridTemplateColumnsXs={`1fr 1fr`} gridColumGap=".3em">
        {links.map((link,i) => (
          <ContainerImage key={i} {...link} />
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