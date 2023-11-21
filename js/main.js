import { enviarRequisicao } from './createFornecedor';
import { criarProduto } from './createProduto';


// Chame a função para enviar a requisição quando necessário
enviarRequisicao();

const dadosProduto = {
    nomeDoProduto: 'Nome do produto',
    descricao: 'Descrição do produto',
    preco: 29.99,
    estoque: 100,
    categoria: 'lapis',
    supplierId: 'ID_DO_FORNECEDOR'
};
 criarProduto(dadosProduto);