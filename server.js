const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let viagens = [];

// LISTAR
app.get("/viagens", (req, res) => {
  res.json(viagens);
});

// CRIAR
app.post("/viagens", (req, res) => {
  const { nome, destino, data } = req.body;

  const novaViagem = {
    id: viagens.length,
    nome,
    destino,
    data,
    status: "Pendente"
  };

  viagens.push(novaViagem);

  res.json({ mensagem: "Cadastrado!" });
});

// APROVAR
app.put("/viagens/:id", (req, res) => {
  const id = req.params.id;
  viagens[id].status = "Aprovado";

  res.json({ mensagem: "Aprovado!" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});