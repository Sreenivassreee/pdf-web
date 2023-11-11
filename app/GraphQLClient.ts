import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { HYGRAPH_URL, HYGRAPH_PERMANENTAUTH_TOKEN } from "./constants";
import { setContext } from "@apollo/client/link/context";
import { GraphQLClient } from "graphql-request";
import Cookies from "js-cookie";
const jwtToken = Cookies.get("jwtToken");
console.log(jwtToken, "------jwtToken----");
const client = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${jwtToken}`,
  },
});

export default client;
