import React, { FC } from "react";
import { IonClick } from "../types";

interface PropsVideo extends IonClick {
  className?: string;
  style?: React.CSSProperties;
  src: string;
}

const Video: FC<PropsVideo> = (props) => (
  <video
    className={props.className}
    style={props.style}
    onClick={props.onClick}
    controls
  >
    <source src={props.src} />
  </video>
);
export default Video;
