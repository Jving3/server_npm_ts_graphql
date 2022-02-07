import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";
import { OBTENER_USUARIOS } from "./Queries/Usuario";
import { CREAR_USUARIO } from "./Mutations/Usuario";
import { OBTENER_PRODUCCION } from "./Queries/Produccion";
import { CREAR_PRODUCCION } from "./Mutations/Produccion";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    obtenerUsuarios: OBTENER_USUARIOS,
    getProducciones: OBTENER_PRODUCCION,
  },
});


const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
    crearUsuario: CREAR_USUARIO,
    crearProduccion: CREAR_PRODUCCION,
  },
});


export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

