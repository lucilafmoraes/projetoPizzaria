  <?php
    function getConexao():PDO{
        $DSN = 'mysql:dbname=pizzaria;host=localhost;charset=utf8';

        try{
            $pdo = new PDO($DSN,'root','',[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
        }catch(PDOException $error){
            die("ERRO AO CONECTAR COM O BANCO DE DADOS {$error->getMessage()}");
        }
        
        return $pdo;
    }

    function respostaJson(bool $erro, string $msg, array $dados=null){
        header("Content-Type:application/json;charset=utf-8");
        die(json_encode(["erro" => $erro, "msg" => $msg, "dados" => $dados]));
    }
?>