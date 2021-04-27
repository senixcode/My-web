import { FC } from "react";
import SwitchGalleryTypes from "./assets/SwitchGalleryTypes";
import useSlider from "./hooks/useSlider";
import { Item } from "./types";
import { ButtonsSlider } from "./components/ButtonsSlider";

interface PropsSlider {
  currentSlide: number;
}

const Slider: FC<PropsSlider> = ({ currentSlide }) => {
  const { showModal, plusSlides, currentItemNumber } = useSlider(currentSlide);

  if (!showModal?.items) return <p>Error slider</p>;

  return (
    <div className="slider_senixcode_gallery_custom modal_senixcode_gallery_custom__showGalleryType">
      {showModal.items?.length > 0 &&
        showModal.items.map((item: Item, index: number) => (
          <div
            key={item.src}
            className="slider_senixcode_gallery_custom__GalleryType"
          >
            <div className="slider_senixcode_gallery_custom__GalleryType_length">
              {currentItemNumber(index)}
            </div>
            <SwitchGalleryTypes item={item} />
          </div>
        ))}
      <ButtonsSlider plusSlides={plusSlides} />
    </div>
  );
};
export default Slider;
