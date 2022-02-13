<p align="center">
  <img src="../.github/semana01.png" alt="Implementando uma API REST">
</p>

# Índice
[Banco de Dados da Aplicação](#id1)<br>
[Cadastro de receita](#id2)<br>
[Listagem de receitas](#id3)<br>
[Detalhamento de receita](#id4)<br>
[Atualização de receita](#id5)<br>
[Exclusão de receita](#id6)<br>
[Cadastro de despesa](#id7)<br>
[Listagem de despesas](#id8)<br>
[Detalhamento de despesa](#id9)<br>
[Atualização de despesa](#id10)<br>
[Exclusão de despesa](#id11)<br>
[Testes da API](#id12)<br>

<br>

<div id="id1"></div>

## 📝 Banco de Dados da Aplicação

📎 Cadastro de receitas:
  - id
  - descricao
  - valor
  - data

📎 Cadastro de despesas:
  - id
  - descrição
  - valor
  - data
<br>

<div id="id2"></div>

## 📝 Cadastro de receita

📎 A API deve possuir um endpoint para o cadastro de receitas, sendo que ele deve aceitar requisições do tipo **POST** para a URI `/receitas`.

📎 Os dados da receita(descrição, valor e data) devem ser enviados no corpo da requisição, no formato `JSON`.

### 📎 Regras de negócio
  * Todas as informações da receita são obrigatórias
  * A API não deve permitir o cadastro de receitas duplicadas(contendo a mesma descrição, dentro do mesmo mês)
<br>

<div id="id3"></div>

## 📝 Listagem de receitas

📎 A API deve possuir um endpoint para a listagem de todas as receitas, sendo que ele deve aceitar requisições do tipo **GET** para a URI `/receitas`.

📎 Os dados das receitas(descrição, valor e data) devem ser devolvidos no corpo da resposta, no formato `JSON`.
<br>

<div id="id4"></div>

## 📝 Detalhamento de receita

📎 A API deve possuir um endpoint para exibir os detalhes de uma determinada receita, sendo que ele deve aceitar requisições do tipo **GET** para a URI `/receitas/{id}`.

📎 Os dados da receita(descrição, valor e data) devem ser devolvidos no corpo da resposta, no formato `JSON`.
<br>

<div id="id5"></div>

## 📝 Atualização de receita

📎 A API deve possuir um endpoint para a atualização dos dados de uma determinada receita, sendo que ele deve aceitar requisições do tipo **PUT** para a URI `/receitas/{id}`.

### 📎 As mesmas regras de negócio do cadastro de uma receita devem ser realizadas também na atualização dela.
<br>

<div id="id6"></div>

## 📝 Exclusão de receita

📎 A API deve possuir um endpoint para a exclusão de uma determinada receita, sendo que ele deve aceitar requisições do tipo **DELETE** para a URI `/receitas/{id}`.

<br>

<div id="id7"></div>

## 📝 Cadastro de despesa
📎 A API deve possuir um endpoint para o cadastro de despesas, sendo que ele deve aceitar requisições do tipo **POST** para a URI `/despesas`.

📎 Os dados da despesa(descrição, valor e data) devem ser enviados no corpo da requisição, no formato `JSON`.

### 📎 Regras de negócio
  * Todas as informações da despesa são obrigatórias
  * A API não deve permitir o cadastro de depesas duplicadas(contendo a mesma descrição, dentro do mesmo mês)
<br>

<div id="id8"></div>

## 📝 Listagem de despesas
📎 A API deve possuir um endpoint para a listagem de todas as despesas, sendo que ele deve aceitar requisições do tipo **GET** para a URI `/despesas`.

📎 Os dados das despesas(descrição, valor e data) devem ser devolvidos no corpo da resposta, no formato `JSON`.
<br>

<div id="id9"></div>

## 📝 Detalhamento de despesa
📎 A API deve possuir um endpoint para exibir os detalhes de uma determinada despesa, sendo que ele deve aceitar requisições do tipo **GET** para a URI `/despesas/{id}`.

📎 Os dados da despesa(descrição, valor e data) devem ser devolvidos no corpo da resposta, no formato `JSON`.
<br>

<div id="id10"></div>

## 📝 Atualização de despesa
📎 A API deve possuir um endpoint para a atualização dos dados de uma determinada despesa, sendo que ele deve aceitar requisições do tipo **PUT** para a URI `/despesas/{id}`.

### 📎 As mesmas regras de negócio do cadastro de uma despesa devem ser realizadas também na atualização dela.
<br>

<div id="id11"></div>

## 📝 Exclusão de despesa
📎 A API deve possuir um endpoint para a exclusão de uma determinada despesa, sendo que ele deve aceitar requisições do tipo **DELETE** para a URI `/despesas/{id}`.
<br>

<div id="id12"></div>

## 📝 Testes da API
📎 Os testes das funcionalidades da API podem ser realizados em algum ferramenta de testes de API, como o Postman ou Insomnia

  * [Postman](https://www.postman.com/)
  * [Insomnia](https://insomnia.rest/)

<br>


[<img src="../.github/voltar.png" width="50"/>](../README.md)