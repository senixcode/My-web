import React, { FC } from "react";
import Modal from "./Modal";
import { IModalContext, IShowModalState } from "./types";
export const INITIALIZED_MODAL: IShowModalState = {
  state: false,
  item: undefined,
  items: undefined
};
export const ModalContext = React.createContext<IModalContext>({});
const ModalProvider: FC = ({ children }) => {
  const [showModal, setShowModal] = React.useState<IShowModalState>(
    INITIALIZED_MODAL
  );
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};
export default ModalProvider;
