const express = require("express");
const rotas = require("./routes");
const tratadorDeErrors = require("./middlewares/tratadorDeErros");
const logRequest = require("./middlewares/log")
const server = express();

server.use(express.json());

server.use(logRequest())
server.use(rotas);

server.use(tratadorDeErrors)

server.use((_req, res, _next) =>
  res.status(404).json({ erro: "Rota não existe" })
);

server.listen(3000, () => console.log("Servidor está rodando!"));
