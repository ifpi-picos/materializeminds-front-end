document.getElementById('createUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nameUser').value;
    const email =  document.getElementById('emailUser').value;
    const senha = document.getElementById('passwordUser').value;
    const numero = document.getElementById('numberUser').value;

    const telefone = String(numero)

    const user = {
        nome,
        email,
        senha,
        telefone
    };

    const url = 'http://localhost:3333/user';

    // Fazendo a requisição com o método fetch
    fetch(url, {
        method: 'POST', // Mude para POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      .then(response => {
        // Verifica se a resposta foi bem-sucedida (status 2xx)
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        // Converte a resposta para JSON e retorna
        return response.json();
      })
      .then(data => {
        // Manipula os dados recebidos
        console.log('Dados recebidos:', data);
      })
      .catch(error => {
        // Manipula erros
        console.error('Erro na requisição:', error);
      });

});
        



    





