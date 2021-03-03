import Link from "next/link";
import { FC } from "react";
import { css } from "styled-components";
import { Container } from "../../../../styles/system/Container";
import { Nav } from "../../../../styles/system/Nav";
import { Image } from "../../../../styles/system/Image";
import { PropStyleTheme, RouterProps } from "../../../types";
export const Languages: FC<RouterProps> = ({ router }) => {
  const style = css`
    grid-column-gap: 1em;
    @media screen and (max-width: ${(props: PropStyleTheme) =>
        props.theme.screen.md}) {
      position: absolute;
      top: 3em;
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
    }
  `;
  return (
    <Container gridTemplateColumnsMd={`1fr 1fr`} styles={style}>
      {router.locales.map((locale) => (
        <Nav key={locale} selected={locale === router.locale ? true : false}>
          <Link href={router.asPath} locale={locale}>
            <Image
              alt={`icon ${locale}`}
              src={`/static/${locale}.svg`}
              widthXs="20px"
              widthMd="30px"
            />
          </Link>
        </Nav>
      ))}
    </Container>
  );
};
