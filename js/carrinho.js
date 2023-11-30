
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
function IrparaPaginaPagsamento() {
    window.location.href = 'pagamento.html';
    alert('Ir para a página de pagamento!');
}