const { Router } = require("express");
const { TransacaoController } = require("../controller");
const TransacaoRouter = Router();

TransacaoRouter.get("/", TransacaoController.getAll);
TransacaoRouter.get("/ano/:ano", TransacaoController.getAno);
TransacaoRouter.get("/ano/:ano/mes/:mes", TransacaoController.getAnoMes);
TransacaoRouter.get("/ano/:ano/min/:min/max/:max", TransacaoController.getAnoValor);
TransacaoRouter.get("/ano/:ano/mes/:mes/min/:min/max/:max", TransacaoController.getAnoMesValor);
TransacaoRouter.get("/:id", TransacaoController.getId);
TransacaoRouter.post("/", TransacaoController.post);
TransacaoRouter.delete("/:id", TransacaoController.delete);
TransacaoRouter.put("/:id", TransacaoController.put);

module.exports = {TransacaoRouter};