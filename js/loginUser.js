document.getElementById('formLogin').addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const email = document.getElementById('email').value
  const senha = document.getElementById('password').value

  
  const userDate = {
    email,
    senha,
  }

  requestLogin(userDate)

})


async function requestLogin(userDate){
	const url = 'https://api-materialize.onrender.com/login';
	// const url = 'http://localhost:3333/login';


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
      localStorage.clear();

      const userDataString = JSON.stringify(data.token);
      const cartUserString = JSON.stringify(data.cart);

      localStorage.setItem('userData', userDataString);
      localStorage.setItem('cartUserData', cartUserString);
      
      window.location.href = '/home.html'

    } else if(response.status === 400) {
      console.log(data.error);
      alert(data.error)
    }

  } catch (error) {
    console.error
  }
}