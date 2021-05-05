import { gql } from "@apollo/client"
export const GET_TOPIC = gql`
  query {
    data: topics {
      id
      name
    }
  }
`
