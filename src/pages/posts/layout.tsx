import Head from "next/head"
import Link from "next/link"
import { ReactNode } from "react"

import styles from "./layout.module.css"
import styled from "styled-components"
import Footer from "./footer"
import { PropStyleTheme } from "../../types"
// import Nav from './nav';

// const name = '[Your Name]';
export const siteTitle = "Next.js Sample Website"

export const Layout = ({
  children,
  home,
}: {
  children: ReactNode
  home?: boolean
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>{children}</main>
      {!home && (
        <Link href="/posts">
          <BackLink>
            <a>← Back to home</a>
          </BackLink>
        </Link>
      )}
      <Footer />
    </div>
  )
}
const BackLink = styled("p")`
   color: ${(props: PropStyleTheme) => props.theme.colors.secondaryVariant};
`
export default Layout
