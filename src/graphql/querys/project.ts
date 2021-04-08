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