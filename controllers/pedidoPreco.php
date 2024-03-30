<?php
    require_once("../models/funcoesUtil.php");

    $con = getConexao();

    $pedidoPost = file_get_contents("php://input");
    $pedido = json_decode($pedidoPost, true);

    try{
        $sql = "SELECT produtos.produto AS produto, precos.preco AS preco FROM produtos JOIN precos
                WHERE produtos.idPreco = precos.idPreco && (produto = ? || produto = ?)
            ";

        $ps = $con->prepare($sql);
        $ps->bindParam(1, $pedido["comida"]);
        $ps->bindParam(2, $pedido["bebida"]);

        $ps->execute();

        $precos = $ps->fetchAll(PDO::FETCH_ASSOC);

        respostaJson(false, "Preços listados com sucesso!!", $precos);
    }catch(PDOException $erro){
        respostaJson(true, $erro->getMessage());
    }

?>