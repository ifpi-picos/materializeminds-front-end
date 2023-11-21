const carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    console.log(`${produto.nome} adicionado ao carrinho.`);
    window.location.href = 'carrinho.html';
};

adicionarAoCarrinho(produto);