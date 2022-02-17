import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { Autostore } from "../../Entities/Autostore";
import { AutostoreType } from "../TypeDefs/Autostore";





export const CREAR_AUTOSTORE = {
  type: AutostoreType,
  args: {
    DateTime: { type: GraphQLString },
    Type: { type: GraphQLString },
    Message: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { DateTime, Type, Message } = args;
    await Autostore.insert({ DateTime, Type, Message });
    return args;
  },
};