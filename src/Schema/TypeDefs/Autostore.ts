import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";

export const AutostoreType = new GraphQLObjectType({
  name: "Autostore",
  fields: () => ({
    id: { type: GraphQLID },
    DateTime: { type: GraphQLString},
    Type: { type: GraphQLString },
    Message: { type: GraphQLString },
  }),
});