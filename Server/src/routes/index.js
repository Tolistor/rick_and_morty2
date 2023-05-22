const express = require("express");
const router = express.Router();

const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

// router.get("/character/:id", getCharById);
// router.get("/login", login);
// router.post("/fav", postFav);
// router.delete("/fav/:id", deleteFav);

//?estos es lo mismo que la anterior se puede hacer de calquiera de las dos maneras

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

router.get("/login", (req, res) => {
  login(req, res);
});

router.post("/fav", (req, res) => {
  postFav(req, res);
});

router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});

module.exports = router;
