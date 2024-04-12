# Spring security
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Angular](https://img.shields.io/badge/angular-FF0000.svg?style=for-the-badge&logo=angular&logoColor=white) <br>
Este projeto consiste em uma API Rest desenvolvida em Java com Spring Security, Flyway Migrations, JWT e MySQL, enquanto no frontend é utilizado Angular. O objetivo principal é realizar a autenticação de usuários com diferentes papéis, sendo ADMIN e USER, onde o ADMIN pode cadastrar e listar produtos, enquanto o USER pode apenas visualizar esses produtos.

## Funcionalidades
- Cadastro de usuários (login, senha, role)
- Login utilizando JWT para geração de tokens
- Autenticação de usuários
- Cadastro de produtos e listagem (ADMIN)
- Listagem de produtos (USER)

## Instalação do back-end
1. Clone o repositorio
```
https://github.com/felipeoliveir44/omniBank.git
```
2. Navegue até o diretório do projeto clonado:
```
cd backend
```
3. Utilize o Maven para compilar o projeto e baixar as dependências necessárias:
```
mvn clean install
```
4. Após concluir o processo de compilação e download das dependências, você pode iniciar o servidor Spring Boot usando o seguinte comando:
```
mvn spring-boot:run
```

## Instalação do front-end
1. Navegue ate sua pasta e utilize os comandos para o diretório do projeto e baixe as dependências
```
cd frontend
npm install
```
2. Após baixar as dependências, abra o terminal da sua IDE, utilize o seguinte comando para iniciar o servidor de desenvolvimento:
```
ng serve
```
3. Após iniciar o servidor, abra o navegador e acesse o seguinte endereço:
```
http://localhost:4200/
```

## Endpoint da API
A API fornece os seguintes endpoints: 

```markdown
POST /auth/cadastrar - Registrar um novo usuário (login, password, role).
POST /auth/login - Realizar o login (login, password)

POST /produto/cadastrar - Registrar um novo produto (nome, preco)
GET /produto/listar - Listar todos os produtos

```
