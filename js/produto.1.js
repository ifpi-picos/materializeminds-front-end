function adicionarAoCarrinho(nome, id, preco, foto, descricao) {
    // const produto = { nome, id, preco };
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoExistente = carrinho.find(item => item.id === id);
    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        const produto = {id, nome, preco, foto, descricao, quantidade:1};
        carrinho.push(produto);
    }

    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    alert('Produto adicionado ao carrinho!');
}
function aumentarQuantidade(id) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produto = carrinho.find(item => item.id === id);
    if (produto) {
        produto.quantidade += 1;
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}
function excluirDoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(item => item.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

}