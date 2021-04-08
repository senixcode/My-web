import { FC } from "react";
import { Link } from "../../../../styles/system/Link";
import { ILink } from "../../../cmsFaker/projects/interfaces";

export const Links: FC<ILink> = ({ href , icon, name}) => (
  <Link title={name} href={href} fontSizeMd="20px" fontSizeXs="18px">
    <i className={icon}></i>
  </Link>
);
