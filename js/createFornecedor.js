document.getElementById('form-create-supllier').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nomeDaEmpresa = document.getElementById('nomeDaEmpresa').value;
    const contato = document.getElementById('contatoEmpresa').value;
    const email = document.getElementById('emailEmpresa').value;
    const senha = document.getElementById('senhaEmpresa').value;
    const cep = document.getElementById('cep').value;
    const estado = document.getElementById('uf').value;
    const cidade = document.getElementById('localidade').value;
    const rua = document.getElementById('bairro').value;

    const endereco = {
        rua,
        cidade,
        estado,
        cep
    }

    const dadosFornecedor = {
        nomeDaEmpresa,
        contato,
        email,
        senha,
        endereco
    };

    enviarRequisicao(dadosFornecedor);
})

async function enviarRequisicao(fornecedor) {
    const url = 'https://api-materialize.onrender.com/supllier'; 

    try {
        const response =  await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(fornecedor)
        });
        
        const data = await response.json()

        if( response.status === 201) {
            alert("Papelaria cadastrada com sucesso!");
            window.location.href = './item.html';
            console.log('Fornecedor criado com sucesso!');
        } else if (response.status === 400) {
            console.log(data.message)
            alert(data.message)
        }

    } catch (erro) {
        console.error(erro);
    }
}




