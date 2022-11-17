const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  let produtos = [
    {descricao: "Arroz", link: "/arroz"},
    {descricao: "Feijao", link: "/feijao"},
    {descricao: "Milho", link: "/milho"},
    {descricao: "Macarrão", link: "/macarrao"}
  ];

  res.render("produtos", {produtos});
});

router.get("/Arroz", (req, res) => {
  const produto = {
    descricao: "Arroz", 
    preco: 20, 
    img: "https://img.itdg.com.br/tdg/images/recipes/000/000/770/323683/323683_original.jpg?mode=crop&width=710&height=400"};
  res.render('descricaoProduto', {produto});
})

router.get("/Feijao", (req, res) => {
  const produto = {
    descricao: "Feijao", 
    preco: 9, 
    img: "https://www.distribuidoracaue.com.br/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/m/a/maximo_feij_o_preto.png?v=1"};
  res.render('descricaoProduto', {produto});
})

router.get("/Milho", (req, res) => {
  const produto = {
    descricao: "Milho", 
    preco: 10, 
    img: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/33256/medium/milho-verde-quero-170g-lt_90062.png"};
  res.render('descricaoProduto', {produto});
})

router.get("/Macarrao", (req, res) => {
  const produto = {
    descricao: "Macarrao", 
    preco: 6, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nYrnn_-Vdqe7ZtLh6RT-FDWtUxEo84-LIQ&usqp=CAU"};
  res.render('descricaoProduto', {produto});
})

module.exports = router;
