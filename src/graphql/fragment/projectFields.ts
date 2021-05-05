import { gql } from "@apollo/client"

export const PROJECT_FIELDS = gql`
  fragment project_data on Project {
    id
    title
    titleSeo
    summary
    descriptions: descriptionParse
    topics: topicsParse {
      id
      name
    }
    links: linksParse {
      id
      name
      href
      icon
      category
    }
    language
  }
`
