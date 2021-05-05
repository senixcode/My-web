import { FC } from "react"
import { Link } from "../../../styles/system/Link"
import { ILink } from "../../interface/Project"

const IconCustom: FC<ILink> = ({ href, icon, name }) => (
  <Link title={name} href={href} fontSizeMd="20px" fontSizeXs="18px">
    <i className={icon}></i>
  </Link>
)

export default IconCustom
