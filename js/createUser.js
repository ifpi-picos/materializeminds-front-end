document.getElementById('createUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nameUser').value;
    const email =  document.getElementById('emailUser').value;
    const senha = document.getElementById('passwordUser').value;
    const telefone = document.getElementById('numberUser').value;

    

    const user = {
        nome,
        email,
        senha,
        telefone
    };

    // Fazendo a requisição com o método fetch
    async function fazerRequisicao() {
      const url = ' https://api-materialize.onrender.com/user';

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        
        if(response.status === 201){
          window.location.href = 'inicio.html';
          alert("usuario criado com sucesso");
          const data = await response.json();
          console.log('Dados do servidor:', data);

        } else{
            const error = await response.json();
            alert("usuario existe ");
            console.error('Erro no servidor:', error);
            throw new Error(error.statusText || 'Erro desconhecido');
        }

      } catch (error) {

        if (error.statusText && error.statusText.includes('Unique constraint failed on the fields: (`email`)')) {
          console.error('Erro na requisição: E-mail já está em uso.');
        } else {
          console.error('Erro na requisição:', error.message);
          
         
      }
      }
    }
    fazerRequisicao(user)
});
        



    





