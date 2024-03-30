<?php
    require_once("../models/funcoesUtil.php");
    
    $con = getConexao();
    
    try{
        $sql = "SELECT idPedido, cliente, DATE_FORMAT(dataPedido, '%d/%m/%Y') AS dataPedido, valor, comida, bebida FROM pedidos";
        
        $ps = $con->prepare($sql);

        $ps->execute();

        $pedidos = $ps->fetchAll(PDO::FETCH_ASSOC);

        if(count($pedidos) > 0){
            respostaJson(false, "Pedidos listados com sucesso!", $pedidos);
        }else{
            respostaJson(true, "Nenhum pedido foi encontrado no banco de dados");
        }
    }catch (PDOException $erro){
        respostaJson(true, $erro->getMessage());
    }
?>