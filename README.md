<a name="languages"></a>
# Teste Backend Node.js - Anota AI

<a id="pt-readme"></a>
### Português | [English](#en-readme)
Teste técnico para vaga Analista Desenvolvedor(a) Backend Node.js da Anota AI.

<a name="pt-menu"></a>
- [Requisitos Básicos](#requisitos)
- [Instruções Gerais](#instrucoes)
- [Scripts Disponíveis](#pt-scripts)
- [Funcionalidades](#funcionalidades)
- [Bibliotecas e Frameworks](#bibliotecas)
- [Documentação](https://documenter.getpostman.com/view/13242412/Tz5p6dMa)

<a id="requisitos"></a>
## Requisitos Básicos:
* Git
* Node
* Typescript
* MySQL

<a id="instrucoes"></a>
## Instruções Gerais:
* Clone esse repositório no diretório de sua escolha com o comando `git clone <url>`.
* Abra o projeto na sua IDE favorita.
* Rode o comando `npm install` **ou** `npm i` para instalar as dependências do projeto.
* Crie um arquivo `.env` na pasta raíz do projeto com as informaçoes do seu banco de dados (foi utilizado o MySQL):
```
# Database
DB_HOST = host do banco de dados
DB_USER = user do banco de dados
DB_PASSWORD = senha
DB_NAME = nome do banco de dados
```

<a id="pt-scripts"></a>
## Scripts Disponíveis:
* `npm run tables` para criar as tabelas.
* `npm run test` para rodar os cases de teste.
* `npm runs start` para iniciar a aplicação.
* `npm run dev` para iniciar a aplicação com hot reload.

<a id="funcionalidades"></a>
## Funcionalidades:
* Adicionar produto
* Atribuir ou editar categoria de um produto
* Listar todos os produtos
* Filtrar produtos por nome o categoria
* Atualizar produto
* Deletar produto

<a id="bibliotecas"></a>
## Bibliotecas e Frameworks:
* cors
* express
* knex
* mysql
* dotenv
* uuid
* jest

---

<a id="en-readme"></a>
### [Português](#pt-readme) | English
Back-end structure of the Full Stack Project developed at Labenu School bootcamp.
An API with basic features of an music streaming website.

<a name="pt-menu"></a>
- [Minimum Requirements](#requirements)
- [Instructions](#instructions)
- [Available Scripts](#scripts)
- [Features](#features)
- [Libs and Frameworks](#libs)
- [Documentation](https://documenter.getpostman.com/view/13242412/Tz5p6dMa)

<a id="requirements"></a>
## Minimum Requirements:
* Git
* Node
* Typescript
* MySQL

<a id="instructions"></a>
## Instructions:
* Clone this repository in a directory of your choice running `git clone <url>` command.
* Open the project on your favorite IDE.
* Run the `npm install` command **or** `npm i` to install all the dependencies.
* On the root directory of the project, create a `.env` file with your environment variables:
```
# Database
DB_HOST = database host
DB_USER = database user name
DB_PASSWORD = user password
DB_NAME = database name

```

<a id="scripts"></a>
## Available Scripts:
* `npm run tables` to create tables.
* `npm run test` to run test cases.
* `npm run start` to run the application.
* `npm run dev` to start the application with hot reload.

<a id="features"></a>
## Features:
* Register product
* Associate ou edit a product category
* Access the list of all products
* Filter products by name or category
* Update product data
* Delete product

<a id="libs"></a>
## Libs and Frameworks:
* cors
* express
* knex
* mysql
* dotenv
* uuid
* jest