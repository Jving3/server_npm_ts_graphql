import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { Connection, createConnection } from "typeorm";
import { Users } from "./Entities/Users";
import { Usuario } from "./Entities/Usuario";
import { Produccion } from "./Entities/Produccion";
import { Autostore } from "./Entities/Autostore";

async function selectValues() {
  
const oracledb = require('oracledb')

let conn = await oracledb.getConnection({
  user: 'JVING',
  password: 'ROOT',
  connectString: 'localhost:1521/orcl'
})

console.log('Conexion Satisfactoria');

const result = await conn.execute('SELECT * FROM person', [],{
  resultSet: true,
  autoFormat: oracledb.OUT_FORMAT_OBJECT
} )

let rs = result.resultSet;
let row

while ( (row = await rs.getRow())) {
  console.log(row)
}

}

selectValues()

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "exactadb",
    username: "root",
    password: "root",
    logging: true,
    synchronize: false,
    entities: [Users, Usuario, Produccion, Autostore],
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
}

main().catch((err) => {
  console.log(err);
});











// async function selectValues() {
//   try {
//     const connection = await oracledb.getConnection({
//       user:'SYSTEM',
//       password:'jving-M0vil',
//       connectString:'localhost:1521/orcl'
//     });
//     const result = await connection.execute('SELECT * FROM usuario');

//     console.log('result', result.rows);
//   } catch (e) {
//     console.log('exception', e)
//   }
// }

// selectValues();