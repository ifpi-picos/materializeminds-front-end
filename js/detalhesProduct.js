async function getRequestProduct() {

  const url ='https://api-materialize.onrender.com/product'

  try {
		const response = await fetch(url, {
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json',
			},
		});    
	
		if (response.status == 200) {
      
			const dataProduct = await response.json();
      return dataProduct
		} else {
			console.error('Erro na requisição:', response.status);
		}
	} catch (error) {
		console.error('Erro ao realizar a requisição:', error);
	}
}


function createModalCard(dataProduct){
  var cards = document.querySelectorAll('.card');
  
  cards.forEach(function(card, index) {
    card.addEventListener('click', async function() {
      const dataProduct = await getRequestProduct()
      const product = dataProduct[index]
      console.log(product.nomeDoProduto)

      openModal(
        product.id,
        product.nomeDoProduto,
        product.descricao,
        product.preco,
        product.estoque,
        product.categoria
        )
    });  
  });

}


function openModal(id, nomeDoProduto, descricao, preco, estoque, categoria) {

  var modalHTML = `
      <div id="myModal" class="modal">
          <div class="modal-content">
              <span class="close" onclick="closeModal()">&times;</span>
              <h2 class="center">${nomeDoProduto}</h2>
              <p>${descricao}</p>
              <p><strong>Preço:</strong> R$ ${preco.toFixed(2)}</p>
              <p><strong>Estoque:</strong> ${estoque}</p>
              <p><strong>Categoria:</strong> ${categoria}</p>
              <div class="center">
                <button onclick="alert('ID: ${id}')">Editar</button>
                <button onclick="alert('ID: ${id}')">Excluir</button>
              </div>
          </div>
      </div>
  `;

  const conter = document.getElementById('container')

  conter.innerHTML = modalHTML;
  document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}
