import { FC, CSSProperties } from "react"
import { IonClick } from "../types"

interface PropsImage extends IonClick {
  className?: string
  style?: CSSProperties
  alt?: string
  src: string
}
const Image: FC<PropsImage> = (props) => (
  <img
    src={props.src}
    alt={props.alt}
    className={props.className}
    style={props.style}
    onClick={props.onClick}
  />
)
export default Image
