import { FC, Fragment } from "react"
import { IonClick } from "../types"

export const IconsModal: FC<IonClick> = ({ onClick }) => (
  <Fragment>
    <span className="modal_senixcode_gallery_custom__closeIcon">
      <i className="fas fa-times" onClick={onClick}></i>
    </span>
    {/* <span className="modal_senixcode_gallery_custom__zoomIcon">
      <i className="fas fa-search-plus"></i>
    </span> */}
  </Fragment>
)
