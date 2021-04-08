import Link from "next/link";
import { FC } from "react";
import { Container } from "../../../../styles/system/Container";
import { Hide } from "../../../../styles/system/Hide";
import { Nav } from "../../../../styles/system/Nav";
import { css } from "styled-components";
import Head from "next/head";
import { SEO_SEPARATOR } from "../../../globalVariables";
import { HeaderNavProps } from ".";
export const NavSelect: FC<HeaderNavProps> = ({ router, routes }) => {
  let { title } = routes.find((route) => route.path === router.route);

  return (
    <>
      {title && (
        <Head>
          <title>{`${title} ${SEO_SEPARATOR} Senixcode`} </title>
        </Head>
      )}
      <Hide maxMd="none">
        <Container gridTemplateColumnsMd={`1fr 1fr`} styles={gridColumnGap}>
          {routes.map(
            ({ path, title }, i) =>
              path != "/detail/[project]" && (
                <Link href={path} key={i}>
                  <Nav selected={path === router.route ? true : false}>
                    {title}
                  </Nav>
                </Link>
              )
          )}
        </Container>
      </Hide>

      <Hide minMd="none">
        <Nav>{title}</Nav>
      </Hide>
    </>
  );
};

const gridColumnGap = css`
  grid-column-gap: 3em;
`;
