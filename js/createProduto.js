document.getElementById('form-papelaria-item').addEventListener('submit', async (event) => {
    event.preventDefault();

        const fileImg = document.getElementById('fileImg')
        var arquivo = fileImg.files[0];

        
        const localStorageId = JSON.parse(localStorage.getItem('supllierData'));
        
        const supllierIdLocalStorage = localStorageId.supllierId

        // Obter valores dos elementos do formulário
        const jsonData = {
        nomeDoProduto:document.getElementById('nomeDoProduto').value,   
        descricao: document.getElementById('Descricao').value,
        categoria: document.getElementById('categoria').value,
        preco: Number(document.getElementById('preco').value),
        estoque: Number(document.getElementById('quantidade').value),
        supplierId:supllierIdLocalStorage
        }

        console.log(jsonData.categoria)

        var formData = new FormData();
        formData.append('file', arquivo);
        formData.append('data', JSON.stringify(jsonData));

        console.log(formData)

        requestCreateProduct(formData)
        
})


async function requestCreateProduct(formData){
    
    const url = 'https://api-materialize.onrender.com/supllier/product/add'

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
} 



