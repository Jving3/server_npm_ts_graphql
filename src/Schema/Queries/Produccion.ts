import { GraphQLList } from "graphql";
import { Produccion } from "../../Entities/Produccion";
import { ProduccionType } from "../TypeDefs/Produccion";


export const OBTENER_PRODUCCION = {
  type: new GraphQLList(ProduccionType),
  resolve() {
    return Produccion.find();
  },
};
