DROP SCHEMA IF EXISTS heroku_82de239a63b36ea;
CREATE SCHEMA IF NOT EXISTS heroku_82de239a63b36ea;

USE heroku_82de239a63b36ea;

CREATE TABLE Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  classe TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  FOREIGN KEY (userId) REFERENCES Users (id)
);

CREATE TABLE Products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  orderId INTEGER,
  FOREIGN KEY (orderId) REFERENCES Orders (id)
);

INSERT INTO
  Users (username, classe, level, password)
VALUES
  ("reigal", "Guerreiro", 10, "1dragaonoceu");

INSERT INTO
  Users (username, classe, level, password)
VALUES
  ("vyrion", "Inventor", 8, "pagandodividas");

INSERT INTO
  Users (username, classe, level, password)
VALUES
  ("yraa", "Ladina", 5, "valarmorg");

INSERT INTO
  Orders (userId)
VALUES
  (1);

INSERT INTO
  Orders (userId)
VALUES
  (3);

INSERT INTO
  Orders (userId)
VALUES
  (2);

INSERT INTO
  Products (name, amount)
VALUES
  ("Espada curta", "10 peças de ouro");

INSERT INTO
  Products (name, amount, orderId)
VALUES
  (
    "Escudo desnecessariamente grande",
    "20 peças de ouro",
    1
  );

INSERT INTO
  heroku_82de239a63b36ea.Products (name, amount, orderId)
VALUES
  ("Adaga de Aço Valírico", "1 peça de ouro", 2);

INSERT INTO
  heroku_82de239a63b36ea.Products (name, amount, orderId)
VALUES
  ("Engenhoca aleatória", "15 peças de ouro", 3);
