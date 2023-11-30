document.getElementById('formLoginSupllier').addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const email = document.getElementById('email').value
  const senha = document.getElementById('password').value

  
  const supllierData = {
    email,
    senha,
  }

  requestLoginSupllier(supllierData)

})


async function requestLoginSupllier(supllierData){
	const url = 'http://localhost:3333/supllier/login';
  console.log(supllierData)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(supllierData),
    });

    const data = await response.json();

    if (response.status === 201) {
      console.log('ss')
      localStorage.clear();
      const supllierDataString = JSON.stringify(data);
      localStorage.setItem('supllierData', supllierDataString);
      window.location.href = '/homeFornecedor.html'

    } else if(response.status === 400) {
      console.log(data.error);
    }

  } catch (error) {
    console.error
  }
}