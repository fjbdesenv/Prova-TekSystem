const { Router } = require("express");
const { TransacaoController } = require("../controller");
const TransacaoRouter = Router();

TransacaoRouter.get("/", TransacaoController.getAll);
TransacaoRouter.get("/:id", TransacaoController.getId);
TransacaoRouter.post("/", TransacaoController.post);
TransacaoRouter.delete("/:id", TransacaoController.delete);
TransacaoRouter.put("/:id", TransacaoController.put);

module.exports = {TransacaoRouter};