import Link from "next/link"
import { FC } from "react"
import { Container } from "../../../../styles/system/Container"
import { Nav } from "../../../../styles/system/Nav"
import { Image } from "../../../../styles/system/Image"
import { RouterProps } from "../../../types"
export const Languages: FC<RouterProps> = ({ router }) => (
  <Container gridTemplateColumnsXs={"1fr 1fr"} gridColumGap="1em">
    {router.locales.map((locale) => (
      <Nav key={locale} selected={locale === router.locale}>
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
)
