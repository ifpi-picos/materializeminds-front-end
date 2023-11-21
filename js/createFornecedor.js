export default async function enviarRequisicao() {
    const url = 'https://api-materialize.onrender.com/suppliers'; 
    const dadosFornecedor = {
        nomeDaEmpresa: 'Nome da Empresa',
        contato: '89981401967',
        email: 'endereco@gmail.com',
        senha: "Som2013",
        endereco: {
            rua: 'Parinha',
            cidade: 'picos',
            estado: 'PI',
            cep: '646405'
        },
        contato: 'Nome do Contato',
        email: 'endereco@email.com'
    };

    try {
        const response =  await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dadosFornecedor)
        });

        if( response.status === 201) {
            alert("Papelaria cadastrada com sucesso!");
            console.log('Fornecedor criado com sucesso!');
            window.location.href = 'item.html';
        } else if (response.status === 400) {
            console.error('Requisição inválida.');
        } else {
            console.error('Erro desconhecido.');
        }
    } catch (erro) {
        console.error('Erro na requisição:', erro.message);

    }

 enviarRequisicao();
}
