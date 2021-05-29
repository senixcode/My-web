import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { PropStyleTheme } from "../../types"
import { css } from "styled-components"
import Date from "./date"
import Style from "./image.module.css"
import { getAllPostIds, getPostData } from "./posts" // eslint-disable-line
import { Container } from "../../../styles/system/Container"
import { Hide } from "../../../styles/system/Hide"
import { Article } from "../../../styles/system/Article"
import SocialNetworks from "../../components/organisms/SocialNetworks"
import { IPosts } from "../posts.page"
import { FC } from "react"
interface IPost extends IPosts {
  contentHtml: string
}
export const Post: FC<IPost> = ({ title, date, contentHtml, image }) => {
  const { locale } = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {image && <img src={image} className={Style.imageBlog} />}
      <Container
        gridTemplateColumnsXs="1fr"
        gridTemplateColumnsMd={"10.8fr 1fr"}
        gridTemplateRowsMd={"1fr"}
        gridColumGap="2em"
        styles={container}
      >
        {/* <Layout> */}
        <Article>
          <h1>{title}</h1>
          <small>
            <Date dateString={date} locale={locale} />
          </small>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
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
  width: 100%;
  @media screen and (min-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    padding: 1.5em 3em;
    align-items: start;
  }
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
  const postData: IPost = (await getPostData(
    params.id as string,
    locale
  )) as IPost
  console.log("postData", postData)
  return {
    props: postData,
  }
}
