import { GetStaticProps } from "next"
import { FC, memo } from "react"
import Link from "next/link"
import { Container } from "../../styles/system/Container"
import { Small } from "../../styles/system/Small"
import { Masonry } from "../../styles/system/Masonry"
import { getSortedPostsData } from "./posts/posts"
import { css } from "styled-components"
import {
  cursorPointer,
  startContent,
  startItems,
} from "../../styles/system/styles"
import SocialNetworks from "../components/organisms/SocialNetworks"
import { Hide } from "../../styles/system/Hide"
import { PropStyleTheme } from "../types"
import Date from "./posts/date"
import { useRouter } from "next/router"
export interface IPosts {
  id: string
  title: string
  blogReading: { wordCount: number; readingTime: number }
  description?: string
  date: string,
  image?:string
}
const Posts: FC<{ allPostsData: Array<IPosts> }> = ({
  allPostsData,
}) => {
  const { locale } = useRouter()
  const readMin = locale === "es" ? "min lectura" : "min read"
  return (
    <Container
      styles={container}
      gridTemplateColumnsXs="1fr"
      gridTemplateColumnsMd={"10fr 1fr"}
      gridTemplateRowsMd={"1fr"}
      gridColumGap="2em"
    >
      <Masonry>
        {allPostsData.length > 0 &&
          allPostsData.map(
            ({ id, date, title, description, blogReading, image }, i) => (
              <Link href={`/posts/${id}`} key={i}>
                <Container key={id} styles={postCard}>
                {image && <img src={image} />}
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Small>
                    <Date dateString={date} locale={locale} />{" "}
                    {`- ${blogReading.readingTime} ${readMin}`}
                  </Small>
                </Container>
              </Link>
            )
          )}
          </Masonry>
      <Hide maxMd="none" styles={containerSocialNetworks}>
        <SocialNetworks />
      </Hide>
    </Container>
  )
}
export default memo(Posts)

const container = css`
  margin: 1rem;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: 1.5em 3em;
    align-items: start;
  }
`
const postCard = css`
  background-color: ${(props: PropStyleTheme) =>
    props.theme.colors.primaryVariant};
  ${startItems}
  ${startContent}
  padding: .5rem;
  border-radius: 0.5rem;
  height: 100%;
  grid-gap: 0.5rem;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    &:nth-child(1) {
      width: 100%;
      display: grid;
      grid-column: span 2;
      grid-row: span 2;
    }

    &:hover {
      transform: translateZ(0) scale(1.01);
      transition: all 0.5s;
      -webkit-font-smoothing: subpixel-antialiased;
      backface-visibility: hidden;
      ${cursorPointer}
    }
  }
`
const containerSocialNetworks = css`
  position: -webkit-sticky;
  position: sticky;
  top: 4em;
  padding-top: 9em;
`

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPostsData = getSortedPostsData(locale)
  return {
    props: {
      allPostsData,
    },
  }
}
