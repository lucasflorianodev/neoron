<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Esta é uma API RESTful para gerenciamento de voos, construída com Nest.js e TypeORM, utilizando o PostgreSQL como banco de dados. A API permite criar, listar, atualizar e excluir voos, bem como validar as regras de negócio necessárias, como diferença mínima de tempo entre voos.

## Tecnologias Utilizadas

- Nest.js: Um framework para construir aplicações Node.js escaláveis e eficientes.
- TypeORM: Um ORM para manipulação de banco de dados, usado aqui para integração com o PostgreSQL.
- PostgreSQL: Banco de dados relacional para armazenamento de informações dos voos.
- Node.js: Ambiente de execução para JavaScript no backend.
- TypeScript: Linguagem principal utilizada na aplicação, fornecendo tipagem estática.

## Requisitos

- Node.js (versão 14+)
- npm (versão 6+)
- PostgreSQL (versão 12+)

## Configuração e Instalação

```bash
git clone https://github.com/seu-usuario/flight-management-api.git
cd flight-management-api
```

## Instalar as Dependências

```bash
npm install
```

## Configurar Banco de dados

```bash
CREATE DATABASE flight_db;
CREATE USER flight_user WITH PASSWORD '1502';
GRANT ALL PRIVILEGES ON DATABASE flight_db TO flight_user;
```

## Configurar Variáveis de Ambiente
```env
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=flight_user
DB_PASSWORD=1502
DB_DATABASE=flight_db
```

## Rodar Aplicação
```bash
npm run start:dev
```

<h1> Endpoints da API <h1>

## Criando um Novo Voo

- URL: /flights
- Método: POST
- Corpo da Requisição (JSON):
```JSON
{
  "origin": "São Paulo, BR",
  "destination": "Rio de Janeiro, BR",
  "date": "2024-09-15T14:30:00"
}
```
- Resposta de Sucesso (201 Created):
```JSON
{
  "id": 1,
  "code": "A1B2C",
  "origin": "São Paulo, BR",
  "destination": "Rio de Janeiro, BR",
  "date": "2024-09-15T14:30:00"
}
```
## Listar todos os Voos

- URL: /flights
- Método: GET
- Resposta de Sucesso (200 OK):

```JSON
[
  {
    "id": 1,
    "code": "A1B2C",
    "origin": "São Paulo, BR",
    "destination": "Rio de Janeiro, BR",
    "date": "2024-09-15T14:30:00"
  }
]
```

## Atualizar um Voo Existente

- URL: /flights/:id
- Método: PUT
- Corpo da Requisição (JSON):
```JSON
{
  "origin": "São Paulo, BR",
  "destination": "Brasília, BR",
  "date": "2024-09-16T10:00:00"
}
```
- Resposta de Sucesso (200 OK):
```JSON
{
  "id": 1,
  "code": "A1B2C",
  "origin": "São Paulo, BR",
  "destination": "Brasília, BR",
  "date": "2024-09-16T10:00:00"
}
```

- URL: /flights/:id
- Método: DELETE
- Resposta de Sucesso (204 No Content): O voo é excluído com sucesso e não há conteúdo na resposta.

## Regras de Negócios
- 1. Diferença Mínima Entre Voos: Não podem existir dois voos com menos de 30 minutos de diferença entre eles.
- 2. Voo Único por Destino e Dia: Não podem existir dois voos para o mesmo destino no mesmo dia.

## Estrutura do Projeto

```ruby
flight-management-api/
│
├── src/
│   ├── app.module.ts            # Módulo principal da aplicação
│   ├── flight/
│   │   ├── flight.module.ts     # Módulo de voos
│   │   ├── flight.service.ts    # Lógica de negócios e interações com o banco de dados
│   │   ├── flight.controller.ts # Definição dos endpoints da API
│   │   ├── flight.entity.ts     # Definição da entidade Flight para o TypeORM
│   ├── main.ts                  # Arquivo principal para iniciar a aplicação
│
├── .env                         # Arquivo de configuração do banco de dados
├── package.json                 # Arquivo de dependências do projeto
├── README.md                    # Documentação da API
└── ...
```


## Comandos Úteis
- Rodar Aplicação em modo de desinvolvimento:
```bash
npm run start:dev
```
- Build de Aplicações:
```bash
npm run build
```
- Rodar a Aplicação em Produção:
```bash
npm run start:prod
```
## Contribuindo

- 1. Faça um fork do repositório.
- 2. Crie uma nova branch para as suas alterações (git checkout -b minha-feature).
- 3. Faça commit das suas alterações (git commit -am 'Adicionando nova feature').
- 4. Faça push para a branch (git push origin minha-feature).
- 5. Abra um Pull Request.

- Autor - [Lucas Floriano da Silva](https://www.linkedin.com/in/lucas-floriano-da-silva/)
- Instagram - [@lucas___floriano](https://www.instagram.com/lucas___floriano?igsh=emlxbDRhdWcwOXp1)

## Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
