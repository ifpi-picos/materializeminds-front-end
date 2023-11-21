const openPixModal = document.getElementById('openPixModal');
const pixModal = document.getElementById('pixModal');
const closePixModal = document.getElementById('closePixModal');

const openCardModal = document.getElementById('openCartaoModal');
const cardModal = document.getElementById('cartaoModal');
const closeCardModal = document.getElementById('closeCartaoModal');

const successModal = document.getElementById('successModal');
const opensucesso = document.getElementById('openSucesso');
const closeSucesso = document.getElementById('closeSucesso');


openPixModal.addEventListener('click', () => {
  pixModal.style.display = 'block';
});

closePixModal.addEventListener('click', () => {
  pixModal.style.display = 'none';
});

openCardModal.addEventListener('click', () => {
  cardModal.style.display = 'block';
});

closeCardModal.addEventListener('click', () => {
  cardModal.style.display = 'none';
});
opensucesso.addEventListener('click' , () => {
  successModal.style.display = 'block';
});

closeSucesso.addEventListener('click', () => {
  successModal.style.display = 'none';
});


// Fechar o modal de sucesso após 3 segundos (pode ajustar o tempo)
setTimeout(() => {
  successModal.style.display = 'none';
}, 3000);