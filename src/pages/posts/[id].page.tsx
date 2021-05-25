import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { PropStyleTheme } from "../../types"
import styled, { css } from "styled-components"
import Date from "./date"
import Image from "next/image"
import Style from "./image.module.css"
import { getAllPostIds, getPostData } from "./posts"
import { Container } from "../../../styles/system/Container"
import { Hide } from "../../../styles/system/Hide"
import SocialNetworks from "../../components/organisms/SocialNetworks"
import { centerContent } from "../../../styles/system/styles"
export const Post = ({
  postData,
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) => {
  const { locale } = useRouter()

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <img
      src={"/posts/mi-experiencia-con-react.png"}
      className={Style.imageBlog}
      />
      <Container
        gridTemplateColumnsXs="1fr"
        gridTemplateColumnsMd={"10.8fr 1fr"}
        gridTemplateRowsMd={"1fr"}
        gridColumGap="2em"
        styles={container}
      >
        {/* <Layout> */}
          <Article>
            <h1>{postData.title}</h1>
            <small>
              <Date dateString={postData.date} locale={locale} />
            </small>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </Article>
        {/* </Layout> */}
          <Hide maxMd="none" styles={containerSocialNetworks}>
            <SocialNetworks />
          </Hide>
      </Container>
    </>
  )
}
const container = css`
  padding: 0.5em;
/* background-color: red; */
width: 100%;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: 1.5em 3em;
    align-items: start;
  }
`
const Article =styled.article`
display: flex;
flex-direction: column;
/* ${centerContent}; */
width: 100%;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
display: grid;
    padding: 1rem 10rem;
  }
 /* max-width: 40rem;
  padding: 0 1rem;
  margin: .5rem auto 6rem; */
`
const containerSocialNetworks = css`
  position: -webkit-sticky;
  position: sticky;
  top: 4em;
  padding-top: 8em;
`

export default Post

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = getAllPostIds(locales)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const postData = await getPostData(params.id as string, locale)
  // console.log("postData",postData)
  return {
    props: {
      postData,
    },
  }
}
