import { FC } from "react";
import { Link } from "../../../../styles/system/Link";
import { ILink } from "../../../cmsFaker/projects/interfaces";

export const Links: FC<ILink> = ({ nameSeo, name, link }) => (
  <Link title={nameSeo} href={link} fontSizeMd="20px" fontSizeXs="18px">
    <i className={name}></i>
  </Link>
);
