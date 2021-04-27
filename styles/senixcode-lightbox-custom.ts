import {css} from "styled-components"

export const styles = css`

*,
*::before,
*::after {
  box-sizing: border-box;
}
.gallery_masonry__complet_space {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-out;
  cursor: pointer;
  min-width: 100%;
  min-height: 100%;
}
@media (min-width: ${(props) => props.theme.screen.sm}) {
  .gallery_masonry__complet_space:hover {
    transform: scale(1.2);
  }
}

.modal_senixcode_gallery_custom {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  transition: 0.25s ease-out;
}

.modal_senixcode_gallery_custom.open {
  opacity: 1;
  pointer-events: all;
}

.modal_senixcode_gallery_custom__showGalleryType {
  position: absolute;
  vertical-align: middle;
  width: 100%;
  max-height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  transition: all 0.25s ease-out;
}

.modal_senixcode_gallery_custom__showGalleryType.open {
  transform: translate(-50%, -50%) scale(1);
}

.modal_senixcode_gallery_custom__closeIcon {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 30px;
  cursor: pointer;
}

.modal_senixcode_gallery_custom__zoomIcon {
  color: white;
  position: absolute;
  top: 12px;
  right: 65px;
  font-size: 25px;
  cursor: pointer;
}

.modal_senixcode_gallery_custom__caption {
  color: white;
  font-size: 1.2rem;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -5%);
  pointer-events: none;
}
.slider_senixcode_gallery_custom {
  position: relative;
  max-height: 80vh;
  max-width: 100%;
  box-sizing: border-box;
}
.slider_senixcode_gallery_custom img,
video {
  vertical-align: middle;
  width: auto;
  height: auto;

  transition: all 0.3s ease-out;
  max-height: 90vh;
  max-width: 100%;
}
.slider_senixcode_gallery_custom__GalleryType {
  display: none;
}
.slider_senixcode_gallery_custom__GalleryType_length {
  color: #f2f2f2;
  font-size: 18px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
.slider_senixcode_gallery_custom__GalleryType img,
video {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 58%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  background-color: rgba(0, 0, 0, 0.3);
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

`