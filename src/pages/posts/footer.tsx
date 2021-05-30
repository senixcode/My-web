import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"
import { PropStyleTheme } from "../../types"

export const Footer = () => {
  const router = useRouter()
  return (
    <FooterS>
      <p>© 2021</p>

      <ul>
        {router.locales.map((locale) => (
          <Link key={locale} href={router.asPath} locale={locale}>
            <li>
              <a>{locale}</a>
            </li>
          </Link>
        ))}
      </ul>
    </FooterS>
  )
}
const FooterS = styled.footer`
  background-color: ${(props: PropStyleTheme) =>
    props.theme.colors.primaryVariant};
  padding: 2rem;
`
export default Footer
