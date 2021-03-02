import Link from "next/link";
import { FC } from "react";
import { getRoutes, IRoutes } from "../../../cmsFaker/getRoutes";
import { RouterProps } from "../../../types";
import { Container } from "../../../../styles/system/Container";
import { Hide } from "../../../../styles/system/Hide";
import { Nav } from "../../../../styles/system/Nav";
import { css } from "styled-components";
import Head from "next/head";
export const NavSelect: FC<RouterProps> = ({ router }) => {
  const { locale } = router;
  const t: Array<IRoutes> = getRoutes(locale);
  let { title } = t.find((route) => route.path === router.route);

  return (
    <>
      {title && (
        <Head>
          <title>{`${title} – Senixcode`} </title>
        </Head>
      )}
      <Hide maxMd="none">
        <Container gridTemplateColumnsMd={`1fr 1fr`} styles={gridColumnGap}>
          {t.map(({ path, title }, i) => {
            if(path != "/detail/[project]"){
              return (
                <Link href={path} key={i}>
                  <Nav selected={path === router.route ? true : false}>
                    {title}
                  </Nav>
                </Link>
              )
            }
          }
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
