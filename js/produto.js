function adicionarAoCarrinho() {
    window.location.href = 'carrinho.html';
}

const express = require('express');
const app = express();
const port = 3000;

// Array para armazenar os produtos no carrinho
const cartItems = [];

// Rota para a página do produto
app.get('/product', (req, res) => {
  res.sendFile(__dirname + '/lapis.html');
});

// Rota para a página do carrinho
app.get('/carrinho', (req, res) => {
  res.render('carrinho', { cartItems });
});

// Rota para adicionar o produto ao carrinho
app.post('/addToCart/:productId', (req, res) => {
  const productId = req.params.productId;
  // Lógica para adicionar o produto ao carrinho
  // Você pode usar o ID do produto para procurar o produto em um banco de dados ou armazenamento

  // Exemplo: adicionar o ID do produto ao array de produtos no carrinho
  cartItems.push(productId);

  res.redirect('/cart');
});

app.listen(port, () => {
  console.log(`Aplicativo rodando em http://localhost:${port}`);
});