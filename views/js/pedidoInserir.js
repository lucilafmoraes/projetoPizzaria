import { fazFetch } from "./funcoesUtil.js";
import { valorPedido } from "./calculaValorPedido.js";

document.getElementById("enviarPedido").addEventListener("click", async function(event){
    event.preventDefault();
    const cliente = document.querySelector("#nome").value;
    const comida = document.querySelector("#comida").value;
    const bebida = document.querySelector("#bebida").value;
    
    if(comida !== "Comidas" && bebida !== "Bebidas"){
        const pedido = {
            "cliente": cliente,
            "comida": comida,
            "bebida": bebida,
            "valor": await valorPedido({"comida": comida, "bebida": bebida}),
            "dataPedido": new Date().toISOString().slice(0,10)
        }
        // console.log(pedido)
        inserirPedidosBd(pedido);
    }
    else{
        alert("Preencha todos os campos");
    }
});

async function inserirPedidosBd(pedido){
    await fazFetch("POST", "../../controllers/pedidoInserir.php", pedido)
    .then(resposta => {
        alert(resposta.msg);
        window.location.href = "../templates/index.html";
    })
}


