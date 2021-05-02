import { QueryResult } from "@apollo/client";
import { FC, Fragment } from "react";
import { SwitchLoading } from "../molecules/loadings/SwitchLoading";

interface PropsMiddlwareHookApolloClient extends QueryResult {
  typeLoading?: string;
}

export const MiddlwareHookApolloClient: FC<PropsMiddlwareHookApolloClient> = (
  props
) => {
  if (props?.error) return <p>Error {props.error.message}</p>;
  if (props?.loading) return <SwitchLoading type={props.typeLoading} />;
  // if (props?.test === "test") return <SqueletonLoadinCard />;
  return <Fragment>{props.children}</Fragment>;
};



