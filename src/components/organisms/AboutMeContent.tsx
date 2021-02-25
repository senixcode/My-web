import styled, { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { Button } from "../../../styles/system/Button";
import { Image } from "../../../styles/system/Image";
import { PropStyleTheme } from "../../types";
import { FC } from "react";
export const Content:FC<{content:string}> = ({content}) => (
  <Container
    gridTemplateRowsXs={`6fr 1fr`}
    gridTemplateRowsMd={`9fr 2fr`}
    styles={justifyItems}
  >
    <Title>{content}</Title>
    <Button width="6em" height="2.6em" borderRadius="12px" styles={button}>
      <Container gridTemplateColumnsXs={`1fr 1fr`} gridColumGap="0.2em">
        <Image
          alt="icon cv"
          src="/static/cv.svg"
          widthXs="20px"
          widthSm="25px"
          widthMd="30px"
        />
        <p>cv</p>
      </Container>
    </Button>
  </Container>
);
const Title = styled.h1`
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
`;
const justifyItems = css`
  text-align: center;
  justify-items: center;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    text-align: start;
    justify-items: start;
  }
`;
const button = css`
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    width: 8em;
    height: 3.5em;
  }
`;
