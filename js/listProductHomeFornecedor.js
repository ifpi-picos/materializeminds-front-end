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
      criarCards(dataProduct)
		} else {
			console.error('Erro na requisição:', response.status);
		}
	} catch (error) {
		console.error('Erro ao realizar a requisição:', error);
	}
}

function criarCards(data) {
  const container = document.getElementById('product-list');

  container.innerHTML = '';

  data.forEach(item => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const imagem = document.createElement('img');
    imagem.src = item.imageUrl; 
    imagem.alt = '';

    const nomeProduto = document.createElement('p');
    nomeProduto.className = 'name-produt';
    nomeProduto.textContent = item.nomeDoProduto; 
    const preco = document.createElement('span');
    preco.className = 'price';
    preco.innerHTML = `R$ ${item.preco}`; 

    const linkCompra = document.createElement('button');
    linkCompra.className = 'buttonS';
    linkCompra.id = 'openModalBtn'
    linkCompra.type = 'submit'
    linkCompra.textContent = 'Detalhes';

    linkCompra.onclick = createModalCard;
    
    cardDiv.appendChild(imagem);
    cardDiv.appendChild(nomeProduto);
    cardDiv.appendChild(preco);
    cardDiv.appendChild(linkCompra);

    container.appendChild(cardDiv);
  });
}

getRequestProduct()

