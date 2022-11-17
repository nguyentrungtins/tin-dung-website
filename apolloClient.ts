import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.hygraph.com/v2/claduit661awo01t5h4lzadcv/master",
  cache: new InMemoryCache(),
});

export default client;
