import React from "react"

export enum TypeItem {
  VIDEO = "video",
  ICON = "icon",
  IMAGE = "image",
  CODE_LIVE = "code live",
}

export interface Item {
  src: string
  type: TypeItem
}
export interface IShowModalState {
  state: boolean
  item?: Item
  items?: Array<Item>
}

export interface IModalContext {
  showModal?: IShowModalState
  setShowModal?: React.Dispatch<React.SetStateAction<IShowModalState>>
}

export interface IonClick {
  onClick?: (e: any) => void
}
