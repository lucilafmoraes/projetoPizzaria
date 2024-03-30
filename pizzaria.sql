CREATE DATABASE pizzaria;
USE pizzaria;

CREATE TABLE pedidos(
	idPedido int AUTO_INCREMENT PRIMARY KEY,
    cliente varchar(255),
    dataPedido date,
    valor float,
    comida varchar(255),
    bebida varchar(255)
);

CREATE TABLE produtos(
    idProduto int AUTO_INCREMENT PRIMARY KEY,
    idPreco int,
    produto varchar(255),

    FOREIGN KEY (idPreco) REFERENCES precos(idPreco)
);

CREATE TABLE precos(
    idPreco int AUTO_INCREMENT PRIMARY KEY,
    preco float
);

INSERT INTO precos(idPreco, preco)
VALUES
    (1, 40.00),
    (2, 30.00),
    (3, 20.00),
    (4, 10.00),
    (5, 8.00);

INSERT INTO produtos(produto, idPreco)
VALUES
    ("Pizza G", 1),
    ("Pizza M", 2),
    ("Pizza P", 3),
    ("Suco", 4),
    ("Coca-cola", 5),
    ("Guaraná", 5);

