const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routers = require("./router");
const app = express();
const port = 5000;
const optionCors ={
    // Origens aceitas
    origin: "http://localhost:3000"
}

// Configurando CORS
app.use(cors(optionCors));

// Configiurando JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

// URL base da API
app.get("/", (res, rep) =>{
    rep.status(200).json({message: `Servidor esta rodando em http://localhost:${port}`})
})

//Rotas usadas
app.use("/categoria", routers.CategoriaRouter);
app.use("/transacao", routers.TransacaoRouter);

// Adicionando porta
app.listen(port, () => {
    console.log(`Servidor esta rodando em http://localhost:${port}/`);
});
