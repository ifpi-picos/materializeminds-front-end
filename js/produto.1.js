function adicionarAoCarrinho(nome, id, preco) {
    const produto = { nome, id, preco };
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    alert('Produto adicionado ao carrinho!');
}