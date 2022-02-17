import { GraphQLList } from "graphql";
import { Autostore } from "../../Entities/Autostore";
import { AutostoreType } from "../TypeDefs/Autostore";


export const OBTENER_AUTOSTORE = {
  type: new GraphQLList(AutostoreType),
  resolve() {
    return Autostore.find();
  },
};