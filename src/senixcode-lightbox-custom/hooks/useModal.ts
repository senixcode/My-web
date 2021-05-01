import React from "react";
import { ModalContext, INITIALIZED_MODAL } from "../ModalContext";
import { IModalContext } from "../types";
export interface IUseModal {
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  closeModal: () => void;
  currentSlide: number;
}
export default function useModal(): IUseModal {
  const { showModal, setShowModal } = React.useContext<IModalContext>(
    ModalContext
  );
  const [currentSlide, setCurrentSlide] = React.useState<number>(1);
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  function closeModal(): void {
    modalRef.current?.classList.remove("open");
    setShowModal && setShowModal(INITIALIZED_MODAL);
  }

  function getCurrentIndexItems(): number {
    if (showModal && showModal.item && showModal.items) {
      const currentIndex = showModal.items.findIndex(
        (item) => item.src === showModal.item?.src
      );
      return currentIndex + 1;
    }
    return currentSlide;
  }

  React.useEffect(() => {
    if (showModal?.state) {
      setCurrentSlide(getCurrentIndexItems());
      modalRef.current?.classList.add("open");
    }
  }, [showModal, setCurrentSlide]);

  return { modalRef, closeModal, currentSlide };
}
