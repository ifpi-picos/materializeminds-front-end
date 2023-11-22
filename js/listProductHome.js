
async function getRequestProduct() {
	const url = ' https://api-materialize.onrender.com/product';

	try {
		const response = await fetch(url, {
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json',
			},
		});
	
		if (response.status == 200) {
			const dataProduct = await response.json();
			console.log("DFD")
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
		const oldPrice = item.preco+20
    preco.innerHTML = `R$ ${item.preco} <del>R$ ${oldPrice}</del>`; 

    const linkCompra = document.createElement('a');
    linkCompra.className = 'button';
    linkCompra.href = item.link; 
    linkCompra.textContent = 'Compra';

    cardDiv.appendChild(imagem);
    cardDiv.appendChild(nomeProduto);
    cardDiv.appendChild(preco);
    cardDiv.appendChild(linkCompra);

    container.appendChild(cardDiv);
  });
}

getRequestProduct()