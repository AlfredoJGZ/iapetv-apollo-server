import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadFilesSync } from "@graphql-tools/load-files";
import { courseResolvers } from "./course/course.resolver";

const typeDefs = loadFilesSync("./**/*.graphql");
const server = new ApolloServer({
  typeDefs,
  resolvers: [courseResolvers],
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);
