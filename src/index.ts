import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";
import { Usuario } from "./Entities/Usuario";
import { Produccion } from "./Entities/Produccion";


const main = async () => {
  await createConnection({
    type: "mysql",
    database: "exactadb",
    username: "root",
    password: "root",
    logging: true,
    synchronize: false,
    entities: [Users, Usuario, Produccion],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});