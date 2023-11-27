document.getElementById('createUserForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const nome = document.getElementById('nameUser').value;
  const email = document.getElementById('emailUser').value;
  const senha = document.getElementById('passwordUser').value;
  const telefone = document.getElementById('numberUser').value;

  const user = {
    nome,
    email,
    senha,
    telefone
  };

  fazerRequisicao(user)

});

async function fazerRequisicao(user) {
  const url = 'https://api-materialize.onrender.com/user';
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.status === 200) {
      alert("usuario criado com sucesso");
      window.location.href = 'home.html';

    } else if(response.status === 400) {
      alert(data.message);;
    }

  } catch (error) {

    if (error.statusText && error.statusText.includes('Unique constraint failed on the fields: (`email`)')) {
      console.error('Erro na requisição: E-mail já está em uso.');
    } else {
      console.error('Erro na requisição:', error.message);
    }
  }
}









