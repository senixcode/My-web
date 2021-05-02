import { QueryResult } from "@apollo/client";
import { FC, Fragment } from "react";
import Loading from "../molecules/Loading";

export const MiddlwareHookApolloClient: FC<QueryResult> = (props) => {
  if (props?.error) return <p>Error {props.error.message}</p>;
  if (props?.loading) return <Loading/>;
  return <Fragment>{props.children}</Fragment>;
};