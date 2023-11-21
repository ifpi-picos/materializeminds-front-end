document.getElementById('form-create-supllier').addEventListener('submit', async (event) => {
    event.preventDefault();
    
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
    };
   
    async function requestCreateSupllier(dadosFornecedor){
         try {
             const url = 'http://localhost:3333/supllier'; 

            
             const response =  await fetch(url, {
                 method: 'POST',
                 headers: {
                     'Content-type': 'application/json'
                 },
                 body: JSON.stringify(dadosFornecedor)
             });
             
             const dados = await response.json()

             if( response.status === 201) {
                 alert("Papelaria cadastrada com sucesso!");
                 window.location.href = 'item.html';

             } else if (response.status === 400) {
                if(dados.message==="Campos invalidos" || dados.message==="Endereço invalido")
                alert(dados.message)
             } else {
                 console.error(`Erro desconhecido. \n ${dados.message}`);
             }
         } catch (erro) {
             console.error('Erro na requisição:', erro.message);
         }
    }
    requestCreateSupllier(dadosFornecedor)
})