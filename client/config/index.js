import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://unilomobile.unikhlo.site/",
  cache: new InMemoryCache(),
});

console.log(client.uri);

export default client;
