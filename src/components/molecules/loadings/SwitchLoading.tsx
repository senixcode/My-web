import { FC } from "react"
import Loading from "./Loading"
import { SkeletonLoaderCard } from "./SkeletonLoaderCard"
export enum TypeSwitchLoading {
  CARD = "CARD",
  TOPIC = "TOPIC",
}
export const SwitchLoading: FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case TypeSwitchLoading.CARD:
      return <SkeletonLoaderCard />
    default:
      return <Loading />
  }
}
