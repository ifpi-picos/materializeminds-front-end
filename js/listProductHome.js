function adicionarConteudoDinamico() {
	// Obtém o elemento onde o conteúdo será adicionado
	var elemento = document.getElementById("conteudo-dinamico");

	// Cria um novo elemento de parágrafo
	var paragrafo = document.createElement("p");

	// Adiciona texto ao parágrafo
	paragrafo.textContent = "Este é um conteúdo dinâmico adicionado com JavaScript.";

	// Adiciona o parágrafo ao elemento principal
	elemento.appendChild(paragrafo);
}