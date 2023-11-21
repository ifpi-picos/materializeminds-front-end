export async function criarProduto (dadosProduto) {
    const url = ' https://api-materialize.onrender.com/create-product';

    const formData = new FormData ();
    Object.entries(dadosProduto).forEach(([chave, valor]) => {
        formData.append(chave, valor);
    });
    
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
        console.error('Erro na requisição:', erro.message);
    }
}