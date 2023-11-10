var img = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");



function abrirModalCartao() {
    modal.style.display = "block";

}
function close() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const modalpix = document.getElementById("modal-pix");
const pagamentopix = document.getElementById("pix-pagamento");

function modalPix() {
    pagamentopix.style.display = "block";
}