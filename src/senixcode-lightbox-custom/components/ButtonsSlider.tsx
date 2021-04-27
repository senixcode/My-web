import { FC, Fragment } from "react";

export const ButtonsSlider: FC<{ plusSlides: (n: number) => void }> = ({
  plusSlides
}) => (
  <Fragment>
    <span className="prev" onClick={() => plusSlides(-1)}>
      ❮
    </span>
    <span className="next" onClick={() => plusSlides(1)}>
      ❯
    </span>
  </Fragment>
);
