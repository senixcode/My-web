import { gql } from "@apollo/client";
import { PROJECT_FIELDS } from "../fragment/projectFields";

export const GET_PROJECT = gql`
  ${PROJECT_FIELDS}
  query findLanguage($param: Language, $all: Boolean = false) {
    data: projectFinByLanguage(language: $param, all: $all) {
      ...project_data
    }
  }
`;

export const GET_PROJECT_ONE = gql`
  ${PROJECT_FIELDS}
  query findTitleSeo($titleSeo: String!, $language: Language!) {
    data: projectFindByTitleSeo(titleSeo: $titleSeo, language: $language) {
      ...project_data
    }
  }
`;
