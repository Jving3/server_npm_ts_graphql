import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { Produccion } from "../../Entities/Produccion";
import { ProduccionType } from "../TypeDefs/Produccion";




export const CREAR_PRODUCCION = {
  type: ProduccionType,
  args: {
    estacion: { type: GraphQLInt },
    actividad: { type: GraphQLString },
    cantidad: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { estacion, actividad, cantidad } = args;
    await Produccion.insert({ estacion, actividad, cantidad });
    return args;
  },
};