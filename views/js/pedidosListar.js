import { fazFetch } from "./funcoesUtil.js";

async function listarPedidos(){
    await fazFetch("GET", "../../controllers/pedidosListar.php")
    .then(resposta => {
        if(resposta.erro){
            throw new Error("Erro ao listar pedidos");
        }
        else{
            montarHtmlPedidos(resposta.dados)
        }
    })
}

function montarHtmlPedidos(pedidos){
        const divPedidos = document.querySelector("#lista-pedidos");   
        // console.log(pedidos)
        
        pedidos.forEach(pedido => {
            // const divPedido = document.createElement("div");
            const ul = document.createElement("ul");

            const liId = document.createElement("li");
            liId.innerHTML = "<strong>Número do pedido: </strong>" + pedido.idPedido;
            
            const liCliente = document.createElement("li");
            liCliente.innerHTML = "<strong>Cliente: </strong>" + pedido.cliente;

            const liComida = document.createElement("li");
            liComida.innerHTML = "<strong>Tamanho da pizza: </strong>" + pedido.comida;

            const liBebida = document.createElement("li");
            liBebida.innerHTML = "<strong>Bebida: </strong>" + pedido.bebida;

            const liValor = document.createElement("li");
            liValor.innerHTML = "<strong>Valor: </strong>" + "R$" + pedido.valor ;

            const liData = document.createElement("li");
            liData.innerHTML = "<strong>Data: </strong>" + pedido.dataPedido;

            const hr = document.createElement("hr");

            ul.append(liId, liCliente, liComida, liBebida, liValor, liData);
            // divPedido.appendChild(ul);
            divPedidos.append(ul, hr);
        });
}

export { listarPedidos }