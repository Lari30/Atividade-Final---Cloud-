# Trabalho Final - Aplicação Node.js com MySQL

## Descrição da atividade

Este projeto foi desenvolvido como atividade final da disciplina.  
O objetivo foi criar uma aplicação simples em **Node.js** rodando em uma máquina virtual e um banco de dados **MySQL** rodando em outra máquina virtual.

A aplicação se conecta ao banco de dados, consulta a tabela de músicas e retorna a lista de músicas cadastradas.

---

## Objetivo

A proposta da atividade foi:

- subir uma aplicação **Node.js** em uma VM
- instalar e configurar o **MySQL** em outra VM
- criar um banco de dados chamado **atividadefinal**
- criar uma tabela chamada **musica**
- inserir algumas músicas preferidas
- fazer a aplicação listar essas músicas
- entregar o código-fonte e o IP da aplicação em execução

---

## Estrutura do projeto

Este projeto contém os seguintes arquivos principais:

- `index.js` → arquivo principal da aplicação
- `db.js` → arquivo de conexão com o banco de dados
- `package.json` → arquivo gerado pelo Node com as dependências do projeto

---

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- mysql2
- Git / GitHub
- Visual Studio Code

---

## Criação do banco de dados

No MySQL foi criado o banco de dados:

```sql
CREATE DATABASE atividadefinal;
