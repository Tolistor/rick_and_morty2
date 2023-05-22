const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/${id}`)
    .then((response) => response.data)
    .then(({ status, name, species, origin, image, gender }) => {
      if (name) {
        const character = {
          id,
          name,
          gender,
          species,
          origin,
          image,
          status,
        };

        return res.status(200).json(character);
      }
      return res.status(404).send("Not found");
    })
    .catch((error) => res.status(500).send(error.message));
};

//*primer intento    segunda vez
//   axios
//     .get(`${URL}/${id}`)
//     .then((response) => {
//       if (!response.data.error) {
//         const { id, name, gender, species, origin, image, status } =
//           response.data;
//         const personaje = { id, name, gender, species, origin, image, status };
//         res.json(personaje);
//       } else {
//         res.status(404).json({ message: " Not fount" });
//       }
//     })
//     .catch((error) => {
//       res.status(error.code).json({ message: error.message });
//     });
// };

module.exports = getCharById;

//* primera vez
// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       const { id, name, gender, species, origin, image, status } =
//         response.data;
//       const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin,
//         image,
//         status,
//       };
//       res
//         .writeHead(200, { "Content-type": "application/json" })
//         .end(JSON.stringify(character));
//     })
//     .catch((err) => {
//       res.writeHead(500, { "Content-type": "tex/plain" }).end(err.message);
//     });
// };

// module.exports = getCharById;
