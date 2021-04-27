import { FC } from "react";
import { ILink } from "../../interface/Project";
import { LinkCategory } from "../../types/enums/LinkCategory";
import  Icon from "../atoms/IconCustom";
import Video from "../atoms/VideoCustom"

const SwichCategoryLink:FC<ILink> = (props) => {
    switch (props.category) {
        case LinkCategory.ICON:
            return <Icon {...props} />
        case LinkCategory.VIDEO:
            return <Video url={props.href} />
        case LinkCategory.IMAGE:
            return <p>Image </p>
        default:
            return null;
    }
}

export default SwichCategoryLink