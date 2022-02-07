import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";

export const ProduccionType = new GraphQLObjectType({
  name: "Produccion",
  fields: () => ({
    id: { type: GraphQLID },
    estacion: { type: GraphQLInt},
    actividad: { type: GraphQLString },
    cantidad: { type: GraphQLInt },
  }),
});