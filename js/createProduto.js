document.getElementById('form-papelaria-item').addEventListener('submit', async (event) => {
    event.preventDefault();
  

    var formData = new FormData(this);

    var produtoInfo = {
        nomeDoProduto: document.getElementById('nomeProduto').value,
        descricao: document.getElementById('nomeProduto').value,
        preco: document.getElementById('nomeProduto').value,
        estoque: document.getElementById('nomeProduto').value,
        categoria: document.getElementById('nomeProduto').value,
        supplierId: document.getElementById('nomeProduto').value,
    };

    formData.append('produtoInfo', JSON.stringify(produtoInfo));


})
    
try {
    const response = await fetch(url, {
        method : 'POST',
        body : formData
    });

    if (response.status === 201) {
        alert("Produto criado com sucesso!");
        console.log('produto criado com sucesso!');
    } else if (response.status === 400) {
        console.error('Requisição inválida.');
    } else {
        console.error('Erro desconhecido.');
    }
} catch (error) {
    console.error('Erro na requisição:', error.message);
}

criarProduto(dadosProduto, idFornecedor);


