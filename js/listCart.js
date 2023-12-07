function getCartLocalStorage(){

  const jsonUserDate = localStorage.getItem('userData')
  const userdate = JSON.parse(jsonUserDate)

  const cart = userdate.cart
  
  criarCardsCartItem(cart)
  // addPriceTotal()
}


function criarCardsCartItem(data) {
  const valorTotal =  document.getElementById('totalCarrinho');
  const container = document.getElementById('product-list');

  container.innerHTML = '';

  data.cartItems.forEach(item => {
    console.log(item)
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    console.log(item.product.imageUrl)
    const imagem = document.createElement('img');
    imagem.src = item.product.imageUrl; 
    imagem.alt = '';

    const nomeProduto = document.createElement('p');
    nomeProduto.className = 'name-produt';
    nomeProduto.textContent = item.product.nomeDoProduto; 
    const preco = document.createElement('span');
    preco.className = 'price';
    preco.innerHTML = `R$ ${item.product.preco}`; 
    
    const linkCompra = document.createElement('button');
    linkCompra.className = 'buttonS';
    linkCompra.id = 'openModalBtn'
    linkCompra.type = 'submit'
    linkCompra.textContent = 'Detalhes';
    
    cardDiv.appendChild(imagem);
    cardDiv.appendChild(nomeProduto);
    cardDiv.appendChild(preco);
    cardDiv.appendChild(linkCompra);

    container.appendChild(cardDiv);
  });

  valorTotal.innerHTML = data.total
}

getCartLocalStorage()


