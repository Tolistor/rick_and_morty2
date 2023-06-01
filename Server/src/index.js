const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");

const { conn } = require("./DB_connection");

//?sincronizamos
conn.sync({ force: false });

//?creamos el erver
const server = express();
//? puerto
const PORT = 3001;

//! middelwares
server.use(express.json());
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use("/rickandmorty", router);

//? inicializamos server
server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

//******************************************** */

// const http = require("http");
// const data = require("./utils/data");
// const getCharById = require("./controllers/getCharById");

// //* segunda vez
// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").at(-1);

//       getCharById(res, id);
//     }
//   })
//   .listen(3001, "localhost");

//* primera vez
// if (req.url.includes("/rickandmorty/character")) {
//   //? me traigo el ultimo elemento del url que es el 'id' del personaje
//   const id = req.url.split("/").at(-1);

//   //? si dentro de 'data' esta el 'id' retorno el personaje
//   const characterFound = data.find((character) => {
//     //? el '+' antes del "id "lo convierte en numero ya que es un 'string'
//     return character.id === +id;
//   });

//   //? repondo devolviendo el personaje como un 'Json'
//   res
//     .writeHead(200, { "Content-type": "application/json" })
//     .end(JSON.stringify(characterFound));
// }
