const { Router } = require("express");
const {
  getVideogamesByNameHandler,
  getVideogamesByIdHandler,
  createVideogamesHandler,
  deleteVideogameByIdHandler,
} = require("../handlers/videogamesHandlers");

const videogamesRouter = Router();

videogamesRouter.get("/", getVideogamesByNameHandler);
videogamesRouter.get("/:idVideogame", getVideogamesByIdHandler);
videogamesRouter.post("/", createVideogamesHandler);
videogamesRouter.delete("/:idVideogame", deleteVideogameByIdHandler);

module.exports = videogamesRouter;
