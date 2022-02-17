import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";

export const MensajeType = new GraphQLObjectType({
  name: "Mensaje",
  fields: () => ({
    satisfactorio: { type: GraphQLBoolean },
    mensaje: { type: GraphQLString },
  }),
});
