
async function requestCreateCartItem(userDate){
	
	const url = 'https://api-materialize.onrender.com/add/cartItem/cart';
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDate),
    });

    const data = await response.json();

    if (response.status === 200) {
     
      alert(data.mensage)

    } else if(response.status === 400) {
      console.log(data.error);
      alert(data.error)
    }
  } catch (error) {
    console.error
  }
}

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
      console.log(dataProduct)
		} else {
			console.error('Erro na requisição:', response.status);
		}
	} catch (error) {
		console.error('Erro ao realizar a requisição:', error);
	}
}

function addCartItemCart(){
  var cards = document.querySelectorAll('.card');
  const dataUserJson = localStorage.getItem('userData')
	const dataUser = JSON.parse(dataUserJson)

  cards.forEach(function(card, index) {
    
		card.addEventListener('click', async function() {
      const dataProduct = await getRequestProduct()

      const product = dataProduct[index]
      
			alert('Você clicou no produto')
			const userDate = {
				quantity: 1,
				cartId: dataUser.cart.id,
				productId: product.id,
			}

      requestCreateCartItem(userDate)

    });  
  });

}


addCartItemCart()