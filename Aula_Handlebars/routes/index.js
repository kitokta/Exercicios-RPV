const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  const objUsuario = {
    nome: "Gab",
    genero: "M",
    profissao: "Programadora",
    email: "gabzanini.dev@gmail.com",
    dtNascimento: "25/01/1996",
  };

  if (objUsuario.genero === "M") {
    var genero = true;
  } else {
    var genero = false;
  }
  res.render("home", { usuario: objUsuario, genero});
});

router.get("/produtos", (req, res) => {
  const produtos = [
    { descricao: "Arroz", preco: 20 },
    { descricao: "Feijao", preco: 10 },
    { descricao: "Macarrao", preco: 6 },
    { descricao: "Milho", preco: 10 },
  ];

  res.render("produtos", { produtos });
});

module.exports = router;
