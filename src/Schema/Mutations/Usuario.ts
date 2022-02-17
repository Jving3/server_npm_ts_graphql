import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { Usuario } from "../../Entities/Usuario";
import { MensajeType } from "../TypeDefs/Mensaje";
import { UsuarioType } from "../TypeDefs/Usuario";



export const CREAR_USUARIO = {
  type: UsuarioType,
  args: {
    nombre: { type: GraphQLString },
    correo: { type: GraphQLString },
    pin: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { nombre, correo, pin } = args;
    await Usuario.insert({ nombre, correo, pin });
    return args;
  },
};

export const ACTUALIZAR_PIN = {
  type: MensajeType,
  args: {
    correo: { type: GraphQLString },
    antiguopin: { type: GraphQLInt },
    nuevopin: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { correo, antiguopin, nuevopin } = args;
    const usuario = await Usuario.findOne({ correo: correo });

    if (!usuario) {
      throw new Error("USUARIO NO EXISTE");
    }
    const usuarioPin = usuario?.pin;

    if (antiguopin === usuarioPin) {
      await Usuario.update({ correo: correo}, { pin: nuevopin });

      return { satisfactorio: true, mensaje: "PIN ACTUALIZADO" };
    } else {
      throw new Error("PIN NO COINCIDE!");
    }
  },
};

export const ELIMINAR_USUARIO = {
  type: MensajeType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Usuario.delete(id);

    return { satisfactorio: true, mensaje: "USUARIO ELIMINADO" };
  },
};