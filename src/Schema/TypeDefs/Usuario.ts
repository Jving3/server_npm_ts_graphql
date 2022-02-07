import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UsuarioType = new GraphQLObjectType({
  name: "Usuario",
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    apodo: { type: GraphQLString },
    clave: { type: GraphQLString },
  }),
});