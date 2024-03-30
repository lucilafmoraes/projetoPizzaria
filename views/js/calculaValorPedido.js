import { fazFetch } from "./funcoesUtil.js";

async function valorPedido(itensPedido){
    let valor = 0;
    await fazFetch("POST", "../../controllers/pedidoPreco.php", itensPedido)
    .then(resposta => {
        console.log(resposta);
        resposta.dados.forEach(produto => {
            valor += produto.preco;
        });
    })
    return valor;
}

export { valorPedido }