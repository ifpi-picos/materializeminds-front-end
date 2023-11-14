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

    // Fazendo a requisição com o método fetch
    async function fazerRequisicao(user) {
      
      const url = 'https://api-materialize.onrender.com';

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        
        if(response.status === 201){
          const data = await response.json();
          console.log('Dados do servidor:', data);

        } else{
            const error = await response.json();
            console.error('Erro no servidor:', error);
            throw new Error(error.statusText || 'Erro desconhecido');
        }

      } catch (error) {
        console.error('Erro na requisição:', error.message);
      }
    }
  
    fazerRequisicao(user)






  // fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(user),
  // })
    // .then(response => {
    //   if (!response.ok) {
    //     return response.json().then(error => {
    //       console.error('Erro no servidor:', error);
    //       throw new Error(error.statusText || 'Erro desconhecido');
    //     });
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   console.log('Dados do servidor:', data);
    // })
    // .catch(error => {
    //   console.error('Erro na requisição:', error.message);
    // });

});
        



    





