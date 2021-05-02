import styled, { css } from "styled-components";
import { Container } from "../../../styles/system/Container";
import { Button } from "../../../styles/system/Button";
import { Image } from "../../../styles/system/Image";
import { PropStyleTheme } from "../../types";
import { FC, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { PropsAboutMe } from "../../pages/index.page";
import Typed, { TypedOptions } from "typed.js";
import { titleConvertOptions, getOptions } from "../../helper/typedjs";

export const Content: FC<PropsAboutMe> = ({ data }) => {
  const { locale } = useRouter();
  const testRef = useRef<HTMLHeadingElement>(null);
  const { first, surplus } = titleConvertOptions(data.name);
  const options: TypedOptions = getOptions(surplus);

  let typed: Typed;
  useEffect(() => {
    if (testRef?.current && options) {
      typed = new Typed(testRef?.current, options);
    }
    return () => {
      typed.destroy();
    };
  }, [data.name]);

  return (
    <Container
      gridTemplateRowsXs={`6fr 1fr`}
      gridTemplateRowsMd={`9fr 2fr`}
      styles={justifyItems}
    >
      <Title>
        {`${first} `}
        <span ref={testRef}></span>
      </Title>
      <a
        href={`pdf/cv-${locale}.pdf`}
        target="_blank"
        style={{ textDecoration: "none", color: "#fff" }}
      >
        <Button width="6em" height="2.6em" borderRadius="12px" styles={button}>
          <Container
            gridTemplateColumnsXs={`1fr 1fr`}
            gridColumGap="0.2em"
            styles={fileDownload}
          >
            <i className="fas fa-file-download" />
            <p>cv</p>
          </Container>
        </Button>
      </a>
    </Container>
  );
};
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
const fileDownload = css`
  & > i {
    font-size: 20px;
  }
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.sm}) {
    & > i {
      font-size: 25px;
    }
  }

  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    & > i {
      font-size: 30px;
    }
  }
`;
