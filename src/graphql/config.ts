import { ApolloClient, InMemoryCache } from "@apollo/client"
const URI = process.env.NEXT_PUBLIC_API_URL
export const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
})
