import { createContext, FC, useState } from "react"
import Modal from "./Modal"
import { IModalContext, IShowModalState } from "./types"
export const INITIALIZED_MODAL: IShowModalState = {
  state: false,
  item: undefined,
  items: undefined,
}
export const ModalContext = createContext<IModalContext>({})
const ModalProvider: FC = ({ children }) => {
  const [showModal, setShowModal] = useState<IShowModalState>(INITIALIZED_MODAL)
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  )
}
export default ModalProvider
