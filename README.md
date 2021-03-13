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
- [Endpoints](#endpoints)
- [Bibliotecas e Frameworks](#bibliotecas)

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

<a id="endpoints"></a>
## ENDPOINTS 

* ### Base URL: `http://localhost:3003`

* ### createProduct
  * Método: POST
  * Path: `/product`
  * Body:
    ```json
    {
      "title": "Headset",
      "description": "Headset gamer",
      "price": 100,
      "category": "Tecnologia"
    }
    ```
    
  * Body de Resposta: (retornar um erro se algum campo estiver faltando)
    ```json
    {
      "id": "3b0eba82-98a2-4eeb-9b3a-9f518e727a0f",
      "title": "Headset",
      "description": "Headset gamer",
      "price": 100,
      "category": "Tecnologia"
    }
    ```

* ### editCategory
  * Método: PUT
  * Path: `/product/category/:productId`
  * Body:
    ```json
    {
      "category": "Tecnologia Alterada"
    }
    ```
    
  * Resposta:
    ```
    Product category was updated successfuly
    ``` 


* ### editProduct
  * Método: PUT
  * Path: `/product/:productId`
  * Body:
    ```json
    {
      "title": "Computador Alterado",
      "description": "PC top!",
      "price": 13700,
      "category": "Tecnologia"
    }
    ```
    
  * Resposta: (precisa passar ao menos uma propriedade para alterar)
    ```
    Product updated successfuly
    ```
    
  
* ### getAllProducts
  * Método: GET
  * Path: `/product/all`
  * Body de Resposta:
    ```json
    [
      {
        "id": "3b0eba82-98a2-4eeb-9b3a-9f518e727a0f",
        "title": "Headset com preço alterado",
        "description": "Headset gamer",
        "price": 200,
        "category": "Tecnologia Alterada"
      },
      {
        "id": "d13ff91f-ffed-42e9-90cb-603eece0215b",
        "title": "Computador",
        "description": "PC top!",
        "price": 13000,
        "category": "Tecnologia"
      },
      {
        "id": "e0dd23ba-8f10-402d-9532-2aa1c35168ad",
        "title": "Maca",
        "description": "Maca para tatuagem",
        "price": 300,
        "category": "Tecnologia"
      }
    ]
    ```  

* ### getProductsByNameOrCategory
  * Método: GET
  * Path: `/product/search`
  * Query Params: `name` ou `category`
  * Body de Resposta:
    ```json
    [
      {
        "id": "3b0eba82-98a2-4eeb-9b3a-9f518e727a0f",
        "title": "Headset com preço alterado",
        "description": "Headset gamer",
        "price": 200,
        "category": "Tecnologia Alterada"
      },
      {
        "id": "d13ff91f-ffed-42e9-90cb-603eece0215b",
        "title": "Computador",
        "description": "PC top!",
        "price": 13000,
        "category": "Tecnologia"
      }
    ]
    ```


* ### removeProduct
  * Método: DELETE
  * Path: `/product/:productId`
  * Body de Resposta: (retornar um erro se encontrar o produto)
    ```
    Product removed successfuly
    ```

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
Backend Analyst Candidate from Anota AI.

<a name="pt-menu"></a>
- [Minimum Requirements](#requirements)
- [Instructions](#instructions)
- [Available Scripts](#scripts)
- [Features](#features)
- [Endpoints](#endpoints)
- [Libs and Frameworks](#libs)

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