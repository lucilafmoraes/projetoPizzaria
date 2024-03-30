<?php
    require_once("../models/funcoesUtil.php");
    
    $con = getConexao();

    $dadosPedidoPost = file_get_contents("php://input");
    $dadosPedido = json_decode($dadosPedidoPost, true);

    if(empty($dadosPedido)){
        respostaJson(true, "Nenhum valor recebido para inserção");
    }
    try{
        $sql = "INSERT INTO pedidos(cliente, dataPedido, valor, comida, bebida)
                VALUES(?, ?, ?, ?, ?)";

        $ps = $con->prepare($sql);
        $ps->bindParam(1, $dadosPedido["cliente"]);
        $ps->bindParam(2, $dadosPedido["dataPedido"]);
        $ps->bindParam(3, $dadosPedido["valor"]);
        $ps->bindParam(4, $dadosPedido["comida"]);
        $ps->bindParam(5, $dadosPedido["bebida"]);

        $ps->execute();

        respostaJson(false, "Pedido de número ".$con->lastInsertId()." inserido com sucesso!");
    }
    catch(PDOException $erro){
        respostaJson(true, $erro->getMessage());
    }
?>