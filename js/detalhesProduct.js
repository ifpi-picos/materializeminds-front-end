// Função para criar o modal card dinamicamente dentro de uma div e preencher com dados
function createModalCard(containerId, productData) {
  
  var container = document.getElementById(containerId);

  // Criação dos elementos do modal card
  var modalCard = document.createElement("div");
  modalCard.classList.add("modal-card");

  var closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.id = "closeModalBtn";
  closeBtn.innerHTML = "&times;";

  var modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  var modalTitle = document.createElement("h2");
  modalTitle.innerText = "Informações do Produto";

  var productName = document.createElement("p");
  productName.innerHTML = "<strong>Nome:</strong> <span id='productName'></span>";

  var productId = document.createElement("p");
  productId.innerHTML = "<strong>ID:</strong> <span id='productId'></span>";

  var productDescription = document.createElement("p");
  productDescription.innerHTML = "<strong>Descrição:</strong> <span id='productDescription'></span>";

  var productCategory = document.createElement("p");
  productCategory.innerHTML = "<strong>Categoria:</strong> <span id='productCategory'></span>";

  var productValue = document.createElement("p");
  productValue.innerHTML = "<strong>Valor:</strong> <span id='productValue'></span>";

  var productStock = document.createElement("p");
  productStock.innerHTML = "<strong>Estoque:</strong> <span id='productStock'></span>";
  
  // Adicionando os elementos ao modal card
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(productName);
  modalContent.appendChild(productId);
  modalContent.appendChild(productDescription);
  modalContent.appendChild(productCategory);
  modalContent.appendChild(productValue);
  modalContent.appendChild(productStock);
  
  modalCard.appendChild(closeBtn);
  modalCard.appendChild(modalContent);
  
  container.appendChild(modalCard);

  // Função para preencher o modal com dados do produto
  function fillModalWithData(productData) {
    document.getElementById("productName").innerText = productData.name;
    document.getElementById("productId").innerText = productData.id;
    document.getElementById("productDescription").innerText = productData.description;
    document.getElementById("productCategory").innerText = productData.category;
    document.getElementById("productValue").innerText = productData.value;
    document.getElementById("productStock").innerText = productData.stock;
    
    modalCard.style.display = "none";
  }
  
  openModalBtn.onclick = function() {
    alert('oi')
    // Simulando dados do produto (substitua com dados reais)
    modalCard.style.display = "block";
  }
  

  // Evento para fechar o modal
  closeBtn.onclick = function() {
    modalCard.style.display = "none";
  }

  // Fechar o modal se o usuário clicar fora da área do modal
  window.onclick = function(event) {
    if (event.target == modalCard) {
      modalCard.style.display = "none";
    }
  }
}

// Simulando dados do produto (substitua com dados reais)
var productData = {
  name: "Produto Exemplo",
  id: "123456",
  description: "Descrição do produto...",
  category: "Categoria Exemplo",
  value: "$19.99",
  stock: 50
};

// Chamando a função para criar o modal card dentro da div com o ID "modalContainer"
