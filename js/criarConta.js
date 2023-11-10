
const URL:  https://api-materialize.onrender.com/user
cconst axios = require('axios');

axios.get(url).then(response => {
    const usuario = response.data
    console.log(usuario);
})
//requesicçao pro bory envia dados dentro do bory


novo-usuario = {
    "nome": "string",
    "email": "user@example.com",
    "senha": "string",
    "telefone": "string"
  }


 bory = {'Content-Type': 'application/json'}

 response = requests.post(url, json=novo_usuario, bory=bory)


 if response.status_code == 201:
    print("Usuário criado com sucesso!");
else:
    print("Falha ao criar o usuári");