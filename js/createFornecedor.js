export default async function enviarRequisicao() {
    const url = 'http://localhost:3333/supllier'; 
    
    const nomeEmpresa = document.getElementById('nome-empresa').value;
    const contato = document.getElementById('contato-empresa').value;
    const email = document.getElementById('email-empresa').value;
    const senha = document.getElementById('senha-empresa').value;
    const cep = document.getElementById('cep').value;
    const estado = document.getElementById('uf').value;
    const cidade = document.getElementById('localidade').value;
    // const bairro = document.getElementById('bairro').value;
    const rua = document.getElementById('logradouro').value;

    const dadosFornecedor = {
        nomeEmpresa,
        contato,
        email,
        senha,
        endereco: {
            rua,
            cidade,
            estado,
            cep
        },  
    };

    try {
        const response =  await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dadosFornecedor)
        });
        
        const data = response.json

        if( response.status === 201) {
            alert("Papelaria cadastrada com sucesso!");
            window.location.href = './item.html';
            console.log('Fornecedor criado com sucesso!');
        } else if (response.status === 400) {
            console.error('Requisição inválida.');
        } else {
            console.error('Erro desconhecido.');
        }
    } catch (erro) {
        console.error(data.mensage);

    }

}
enviarRequisicao();