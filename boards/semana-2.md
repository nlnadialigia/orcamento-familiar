<p align="center">
  <img src="../.github/semana02.png" alt="Novas Funcionalidades">
</p>

# Índice
[Mudança no Banco de dados](#id1)<br>
[Categorização de despesas](#id2)<br>
[Busca de receitas](#id3)<br>
[Busca de despesas](#id4)<br>
[Listagem de receitas por mês](#id5)<br>
[Listagem de despesas por mês](#id6)<br>
[Resumo do mês](#id7)<br>
[Testes automatizados](#id8)<br>

<br>

<div id="id1"></div>

## 📝 Mudança no Banco de dados
📎 Atualizar o banco de dados para permitir o armazenamento da categoria de cada despesa.

<br>

<div id="id2"></div>

## 📝 Categorização de despesas
📎 Toda despesa deve possui uma **categoria**, devendo esta ser uma das seguintes opções:
* Alimentação
* Saúde
* Moradia
* Transporte
* Educação
* Lazer
* Imprevistos
* Outras

📎 Será necessário ajustar o endpoint de cadastro de despesas para receber essa nova informação.

### 📎 Regras de negócio
  * Ao cadastrar uma depesa, a informação da categoria é **opcional**
  * Se a categoria da despesa não for informada, a API deve atribuir automaticamente a categoria **Outras** à despesa

<br>

<div id="id3"></div>

## 📝 Busca de receitas
📎 A API deve possuir um endpoint para a busca de receitas pela descrição.

📎 O endpoint deverá ser o mesmo que o utilizado para listagem de receitas, devendo este ser alterado para incluir um parâmetro chamado descricao.

📎 Exemplos de como o endpoint deve funcionar a partir dessa mudança:
  * `GET /receitas` -> deve devolver todas as receitas
  * `GET /receitas?descricao=xpto` -> deve devolver todas as receitas cuja descrição contenha a palavra indicada no parâmetro descrição

<br>

<div id="id4"></div>

## 📝 Busca de despesas
📎 A API deve possuir um endpoint para a busca de despesas pela descrição.

📎 O endpoint deverá ser o mesmo que o utilizado para listagem de despesas, devendo este ser alterado para incluir um parâmetro chamado descricao.

📎 Exemplos de como o endpoint deve funcionar a partir dessa mudança:
  * `GET /despesas` -> deve devolver todas as receitas
  * `GET /despesas?descricao=xpto` -> deve devolver todas as despesas cuja descrição contenha a palavra indicada no parâmetro descrição

<br>

<div id="id5"></div>

## 📝 Listagem de receitas por mês
📎 A API deve possuir um endpoint para a listagem de todas as receitas de determinado mês, sendo que ele deve aceitar requisições do tipo GET para a URI `/receitas/{ano}/{mes}`.

📎 Os dados das receitas(descrição, valor e data) devem ser devolvidos no corpo da resposta, no formato `JSON`.

<br>

<div id="id6"></div>

## 📝 Listagem de despesas por mês
📎 A API deve possuir um endpoint para a listagem de todas as despesas de determinado mês, sendo que ele deve aceitar requisições do tipo GET para a URI `/despesas/{ano}/{mes}`.

📎 Os dados das despesas(descrição, valor, data e categoria) devem ser devolvidos no corpo da resposta, no formato `JSON`.

<br>

<div id="id7"></div>

## 📝 Resumo do mês

📎 A API deve possuir um endpoint para detalhar o resumo de determinado **mês**, sendo que ele deve aceitar requisições do tipo **GET** para a URI `/resumo/{ano}/{mes}`.

📎 Os dados do resumo devem ser devolvidos no corpo da resposta, no formato `JSON`.

### 📎 Regras de negócio

📎 O resumo do mês deve conter as seguintes informações:
* Valor total das receitas no mês
* Valor total das despesas no mês
* Saldo final no mês
* Valor total gasto no mês em cada uma das categorias

<br>

<div id="id8"></div>

## 📝 Testes automatizados
📎 Implementação de testes automatizados dos endpoints da API, para garantir que as regras de negócio e informações devolvidas por ela estejam funcionando conforme o esperado.

<br>

[<img src="../.github/voltar.png" width="50"/>](../README.md)