document.getElementById('createUserForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('nameUser').value;
    const email =  document.getElementById('emailUser').value;
    const password = document.getElementById('passwordUser').value;
    const celular = document.getElementById('numberUser').value;

    const user = {
        email,
        name,
        password,
        celular
    };

    try {
        const response = await fetch('https://api-materialize.onrender.com/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(user)
         });
         if (response.status === 200) {
            window.location.href = 'inicio.html';
            alert("usuario criado com sucesso");
         } if (response.status === 400) {
            alert("Error na criação do usuario");
         }
    }  catch (error) {
        console.error(error);
    }
});
        



    





