# Flight Management System ✈️

Este é um sistema completo de gerenciamento de voos, composto por um back-end construído com Nest.js e TypeORM, e um front-end desenvolvido em React com Ant Design. O sistema permite que os usuários realizem operações como criar, listar, atualizar e excluir voos, integrando-se a um banco de dados PostgreSQL.

## 🌐 Tecnologias Utilizadas

## Backend

- Nest.js: Framework de desenvolvimento para Node.js, focado em escalabilidade e desempenho.
- TypeORM: ORM para manipulação e interação com o banco de dados PostgreSQL.
- PostgreSQL: Banco de dados relacional utilizado para armazenar as informações dos voos.
- TypeScript: Linguagem principal para garantir um código mais seguro e com tipagem estática.

## Frontend

- React: Biblioteca JavaScript para construir interfaces de usuário.
- Ant Design: Biblioteca de componentes para construir uma interface moderna e responsiva.
- Axios: Cliente HTTP para realizar requisições à API.
- Vite: Ferramenta de build rápida para desenvolvimento em React.

## 🎯 Funcionalidades Principais

- Criar voos: O usuário pode adicionar voos especificando origem, destino e data/hora.
- Listar voos: Exibe todos os voos cadastrados.
- Validações:
1. Os voos precisam ter pelo menos 30 minutos de diferença entre eles.
2. Não é permitido cadastrar dois voos para o mesmo destino no mesmo dia.
- Atualizar e excluir voos (futuras implementações): O sistema pode ser expandido para incluir funcionalidades adicionais, como edição e exclusão de voos.

## 🗂️ Estrutura do Repositório

```bash
flight-management-system/
│
├── flight-management-api/           # Backend (API) com Nest.js e TypeORM
│   ├── src/
│   └── ...
│
├── flight-management-frontend/      # Frontend com React e Ant Design
│   ├── src/
│   └── ...
│
├── README.md                        # Documentação do projeto
└── ...
```

## ⚙️ Configuração do Projeto

## Pré-requisitos

- Node.js (versão 14+)
- npm (versão 6+)
- PostgreSQL (versão 12+)

## Back-end (API)

- Navegue até o diretório do back-end:
```bash
cd flight-management-api
```

- Navegue até o diretório do back-end:
```bash
npm install
```

- Navegue até o diretório do back-end:
```sql
CREATE DATABASE flight_db;
CREATE USER flight_user WITH PASSWORD '1502';
GRANT ALL PRIVILEGES ON DATABASE flight_db TO flight_user;
```

- Configure o arquivo .env no diretório flight-management-api com as informações do banco de dados:
```env
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=flight_user
DB_PASSWORD=1502
DB_DATABASE=flight_db
```

- Inicie o servidor:
```env
npm run start:dev
```

- A API estará disponível em http://localhost:3000.

## Front-end

- Navegue até o diretório do front-end:
```bash
cd flight-management-frontend
```

- Instale as dependências:
```bash
npm install
```

- Certifique-se de que o front-end está configurado para se conectar à API. No arquivo FlightForm.jsx e FlightList.jsx no diretório src/components/, ajuste a URL da API se necessário:
```javascript
const API_URL = 'http://localhost:3000/flights';
```

- Acesse a aplicação no navegador em http://localhost:5173.

## 🚀 Próximos Passos e Melhorias

- Implementar edição e exclusão de voos: Adicionar componentes e funcionalidades para editar e excluir voos já cadastrados.
- Melhorar validações no front-end: Incluir validações mais avançadas para os formulários.
- Autenticação de usuários: Implementar autenticação para diferentes níveis de acesso (admin, usuário comum).
- Deploy em produção: Configurar um servidor para hospedar o front-end e o back-end, e utilizar um banco de dados em nuvem.

## 📚 Documentação da API

- Os principais endpoints da API são:

## Criar Voo:
- URL: POST /flights
- Corpo:

```json
{
  "origin": "São Paulo, BR",
  "destination": "Rio de Janeiro, BR",
  "date": "2024-09-15T14:30:00"
}
```

## Listar Voos:
- URL: POST /flights

## Atualizar Voos:
- URL: POST /flights
- Corpo:

```json
{
  "origin": "São Paulo, BR",
  "destination": "Brasília, BR",
  "date": "2024-09-16T10:00:00"
}
```

## Excluir Voos:
- URL: DELETE /flights

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo LICENSE para mais informações.
