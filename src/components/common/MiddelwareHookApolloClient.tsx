import { QueryResult } from "@apollo/client";
import { FC, Fragment } from "react";

export const MiddlwareHookApolloClient: FC<QueryResult> = (props) => {
  if (props.error) return <p>Error {props.error.message}</p>;
  if (props.loading) return <p>Loading</p>;
  return <Fragment>{props.children}</Fragment>;
};