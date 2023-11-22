export default async function enviarRequisicao() {
    const url = 'https://api-materialize.onrender.com/suppliers'; 
    
    const nomeEmpresa = document.getElementById('nome-empresa').value;
    const contato = document.getElementById('contato-empresa').value;
    const emailEmpresa = document.getElementById('email-empresa').value;
    const senhaEmpresa = document.getElementById('senha-empresa').value;
    const cepEmpresa = document.getElementById('cep').value;
    const estadoEmpresa = document.getElementById('uf').value;
    const cidadeEmpresa = document.getElementById('localidade').value;
    const bairroEmpresa = document.getElementById('bairro').value;
    const ruaEmpresa = document.getElementById('logradouro').value;

    const dadosFornecedor = {
        nomeEmpresa,
        contato,
        emailEmpresa,
        senhaEmpresa,
        endereco: {
            cepEmpresa,
            estadoEmpresa,
            cidadeEmpresa,
            bairroEmpresa,
            ruaEmpresa
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
        console.error('Erro na requisição:', erro.message);

    }

 enviarRequisicao();
}
