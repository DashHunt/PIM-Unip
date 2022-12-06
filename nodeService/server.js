const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");

const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors({
    origin: '*'
}));

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/getQuantidadeDeSolicitacoesMes", db.getQuantidadeDeSolicitacoesMes);
app.get("/getQuantidadeSolicitacoesAno", db.getQuantidadeSolicitacoesAno);
app.get("/getValoresTotaisCoberturas", db.getValoresTotaisCoberturas);
app.get("/getValoresPorMes", db.getValoresPorMes);
app.get("/getValorTotalSolicitacoes", db.getValorTotalSolicitacoes);
app.get("/getQuantidadeDeSolicitacoesAtivas", db.getQuantidadeDeSolicitacoesAtivas);
app.get("/getTotalRequisicoes", db.getTotalRequisicoes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
