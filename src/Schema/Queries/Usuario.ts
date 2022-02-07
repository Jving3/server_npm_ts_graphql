import { GraphQLList } from "graphql";
import { Usuario } from "../../Entities/Usuario";
import { UsuarioType } from "../TypeDefs/Usuario";


export const OBTENER_USUARIOS = {
  type: new GraphQLList(UsuarioType),
  resolve() {
    return Usuario.find();
  },
};
