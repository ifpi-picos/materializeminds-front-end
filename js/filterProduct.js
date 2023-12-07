async function getRequestProduct() {

	const params = new URLSearchParams(window.location.search);
	const category = params.get("categoria");

  const url =`https://api-materialize.onrender.com/products/filter/${category}`
  
	try {
		const response = await fetch(url, {
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json',
			},
		});    
	
		if (response.status == 200) {
      const title = document.getElementById('title');
      title.innerHTML = category
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
		const oldPrice = item.preco + 20;
    preco.innerHTML = `R$ ${item.preco} <del>R$ ${oldPrice}</del>`; 

    const buttonCardDiv = document.createElement('div');
    buttonCardDiv.className = 'button-card';

    const linkCompra = document.createElement('a');
    linkCompra.className = 'buttonS';
    linkCompra.id = 'color'
    // linkCompra.href = item.link; 
    linkCompra.textContent = 'Compra';

    const addToCartButton = document.createElement('a');
    addToCartButton.className = 'buttonS';
    addToCartButton.textContent = 'Adicionar ao Carrinho';
    // addToCartButton.onclick = addCartItemCart;

    buttonCardDiv.appendChild(linkCompra);
    buttonCardDiv.appendChild(addToCartButton);

    cardDiv.appendChild(imagem);
    cardDiv.appendChild(nomeProduto);
    cardDiv.appendChild(preco);
    cardDiv.appendChild(buttonCardDiv);

    container.appendChild(cardDiv);
  });
}

getRequestProduct()