import { gql } from "@apollo/client";
export const GET_ROUTE = gql`
  query getByLanguage($param: Language = ES) {
    data: routeFindByLanguage(language: $param) {
      id
      title
      path
      language
    }
  }
`;
