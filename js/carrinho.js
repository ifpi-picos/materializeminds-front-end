
document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrinho();
});
function atualizarCarrinho() {
    const  carrinhoList =  document.getElementById('carrinho-list');
    const totalElement = document.getElementById('totalCarrinho');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];


    carrinhoList.innerHTML = '';
    let total = 0;


    carrinho.forEach((produto) => {
        const listItem = document.createElement('li');
        const precoFormatado = typeof produto.preco === 'number' ? produto.preco.toFixed(2) : 'preço não disponivel';
        listItem.textContent = `${produto.nome} - R$ ${precoFormatado}`;
        carrinhoList.appendChild(listItem);

        total += produto.preco || 0;
    });

    totalElement.textContent = total.toFixed(2);

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
function IrparaPaginaPagsamento() {
    window.location.href = 'pagamento.html';
    alert('Ir para a página de pagamento!');
}