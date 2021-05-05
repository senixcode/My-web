import { FC } from "react"
import { IonClick, Item, TypeItem } from "../types"
import Image from "./Image"
import Video from "./Video"

interface PropsSwitchGalleryTypes extends IonClick {
  item: Item
  className?: string
}

const SwitchGalleryTypes: FC<PropsSwitchGalleryTypes> = ({
  item,
  className,
  onClick,
}) => {
  const { type } = item
  switch (type) {
    case TypeItem.IMAGE:
      return <Image src={item.src} className={className} onClick={onClick} />
    case TypeItem.VIDEO:
      return <Video src={item.src} className={className} onClick={onClick} />
    default:
      return <span>Error Type Gallery</span>
  }
}
export default SwitchGalleryTypes
