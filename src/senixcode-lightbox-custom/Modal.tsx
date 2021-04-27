import useModal from "./hooks/useModal";
import Slider from "./Slider";
import { IconsModal } from "./components/IconsModal";

const Modal = () => {
  const { modalRef, closeModal, currentSlide } = useModal();
  return (
    <div className="modal_senixcode_gallery_custom" ref={modalRef}>
      <IconsModal onClick={closeModal} />
      <Slider currentSlide={currentSlide} />
      {/* <p className="modal_senixcode_gallery_custom__caption">Test caption</p> */}
    </div>
  );
};

export default Modal;
