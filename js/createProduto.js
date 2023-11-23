//document.getElementById('form-papelaria-item').addEventListener('submit', async (event) => {
  //  event.preventDefault();
  
 async function criarProduto (dadosProduto, idFornecedor) {
    const url = ' https://api-materialize.onrender.com/create-product';
 

    const imagemPro = document.getElementById('imagem-produto').value;
    const descricaoPro = document.getElementById('descricao-produto').value;
    const categoriaPro = document.getElementById('categoria-produto').value;
    const valorPro = document.getElementById('valor-produto').value;
    const quantidadePro = document.getElementById('Quantidade-produto').value;

    const dadosProduto = {
        imagemPro,
        descricaoPro,
        categoriaPro,
        valorPro,
        quantidadePro
    }
    const idFornecedor = "id-for";
    //Adiciona o ID do fornecedor aos dados do produto
    dadosProduto.supplierId = idFornecedor;
    const formData = new FormData ();
    const dadosProduto = {

    }
    
    console.log(typeof(formData))

    Object.entries(dadosProduto).forEach(([chave, valor]) => {
        formData.append(chave, valor);
    });
    console.log(typeof(formData))
    console.log('|')
    console.log(formData)
    
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
};

