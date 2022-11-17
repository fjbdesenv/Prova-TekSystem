const { Router } = require("express");
const { CategoriaController } = require("../controller");
const CategoriaRouter = Router();

CategoriaRouter.get("/", CategoriaController.getAll);
CategoriaRouter.get("/:id", CategoriaController.getId);
CategoriaRouter.post("/", CategoriaController.post);
CategoriaRouter.delete("/:id", CategoriaController.delete);
CategoriaRouter.put("/:id", CategoriaController.put);

module.exports = {CategoriaRouter};