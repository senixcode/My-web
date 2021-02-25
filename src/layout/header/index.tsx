import {css} from 'styled-components'
import { Image } from "../../../styles/system/Image";
import { useRouter, NextRouter } from "next/router";
import { Container } from "../../../styles/system/Container";
import { Hide } from "../../../styles/system/Hide";
import { Navs } from "./Navs";
import { Languages } from "./Languages";
import { PropStyleTheme } from '../../types';

export default function Header() {
  const router: NextRouter = useRouter();

  return (
    <Container
      gridTemplateColumnsXs={`1fr 8fr 1fr`}
      gridTemplateRowsXs={`1fr 1fr`}
      gridTemplateRowsMd="1fr"
      styles={container}
    >
      <Image widthXs="20px" widthMd="30px" />
      <Navs router={router} />
      <Hide minMd="none">
        <Image
          alt="icon navbar"
          src="/static/open-navbar-mobil.svg"
          widthXs="20px"
        />
      </Hide>
      <Languages router={router} />
    </Container>
  );
}
const container = css`
padding-top:1em;
padding-left:1em;
padding-right:1em;
`
