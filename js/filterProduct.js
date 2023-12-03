async function getRequestProduct() {

	const params = new URLSearchParams(window.location.search);
	const produto = params.get("categoria");

  const url =`https://api-materialize.onrender.com/products/filter/${produto}`
  
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
	console.log(data)
	const container = document.getElementById('product-list');
  container.innerHTML = '';

  let htmlString = '';

  data.forEach(item => {
    htmlString += `
      <li class="product-item" id="produto1">
        <div class="img-lapis">
          <img src="${item.imageUrl}" alt="" class="product-image">
        </div>
        <div class="description-lapis">
          <div class="product-description">
            <h2>${item.nome}</h2>
            <p>${item.descricao}</p>
          </div>
          <div class="product-price">${item.preco}</div>
          <div class="btns-de-categoria">
            <button class="btn-adicionar-ao-carrinho" onclick="adicionarAoCarrinho('${item.nome}', ${item.preco})">Adicionar ao carrinho</button>
            <button class="btn-comprar-agora">Comprar agora</button>
          </div>
        </div>
      </li>`;
  });

  container.innerHTML = htmlString;
}

getRequestProduct()