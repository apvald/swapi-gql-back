import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas"

const port = 4000;

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port })
  .then(({ url }: any) => {
    console.log(`🚀 Server Star Wars API GQL ready at ${url}`);
  })
  .catch((err: any) => {
    console.error(err);
  });
