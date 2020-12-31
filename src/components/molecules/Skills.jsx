import React from "react";
import { ChipCustom } from "../atoms/ChipCustom";

export const Skills = ({ items }) => (
  <>
    {items.map((item, index) => (
      <ChipCustom key={index} {...item} />
    ))}
  </>
);
