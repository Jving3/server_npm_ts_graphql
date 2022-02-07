import { GraphQLID, GraphQLString } from "graphql";
import { Usuario } from "../../Entities/Usuario";
import { UsuarioType } from "../TypeDefs/Usuario";



export const CREAR_USUARIO = {
  type: UsuarioType,
  args: {
    nombre: { type: GraphQLString },
    apodo: { type: GraphQLString },
    clave: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { nombre, apodo, clave } = args;
    await Usuario.insert({ nombre, apodo, clave });
    return args;
  },
};
