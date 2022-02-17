import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";

export const UsuarioType = new GraphQLObjectType({
  name: "Usuario",
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    correo: { type: GraphQLString },
    pin: { type: GraphQLInt },
  }),
});