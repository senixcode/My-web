import { gql } from "@apollo/client"
export const GET_ABOUTME = gql`
  query getByLanguage($param: Language = ES) {
    data: aboutMeFindByLanguage(language: $param) {
      id
      name
      language
    }
  }
`
