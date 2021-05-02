import { FC } from "react";
import Loading from "./Loading";
import {SkeletonLoaderCard} from "./SkeletonLoaderCard"
export const SwitchLoading: FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case TypeSwitchLoading.CARD:
      return <SkeletonLoaderCard />;
    default:
      return <Loading />;
  }
};

export enum TypeSwitchLoading {
    CARD = "CARD",
    TOPIC = "TOPIC"
}