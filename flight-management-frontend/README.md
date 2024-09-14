<h1>Flight Management Front-End<h1>

## Descrição
Este é o front-end da aplicação de gerenciamento de voos, construída com React e Ant Design. O projeto se integra com a API backend construída com Nest.js e TypeORM para gerenciar os voos em um banco de dados PostgreSQL.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construir interfaces de usuário.
- Ant Design: Biblioteca de componentes de UI para React.
- Axios: Biblioteca para realizar requisições HTTP à API.
- Vite: Ferramenta para criar e configurar projetos React com alta performance.
- JavaScript (ES6+): Linguagem de programação utilizada.

## Requisitos

- Node.js (versão 14+)
- npm (versão 6+)
- A API backend de gerenciamento de voos rodando localmente ou em um servidor.

# Instalação

## Configuração e Instalação

```bash
git clone https://github.com/seu-usuario/flight-management-frontend.git
cd flight-management-frontend
```

## Instalar as Dependências

```bash
npm install
```

## Configurar a URL da API Back-end

```bash
// Em FlightForm.jsx e FlightList.jsx
const API_URL = 'http://localhost:3000/flights';
```

## Executar o Projeto

```bash
npm run dev
```

## Estrutura do Projeto

```bash
flight-management-frontend/
│
├── public/                  # Arquivos públicos
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── FlightForm.jsx   # Formulário para criar voos
│   │   ├── FlightList.jsx   # Lista de voos
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Ponto de entrada do aplicativo
├── package.json             # Configurações e dependências do projeto
└── README.md                # Documentação do projeto
```

# Componentes Principais

## FlightForm.jsx

- Descrição: Componente responsável por criar novos voos. Ele utiliza componentes do Ant Design para construir o formulário e o Axios para enviar os dados à API backend.
- Funcionalidades:
- 1. Campos para inserir a origem, destino e data/hora do voo.
- 2. Envia uma requisição POST para a API quando o formulário é submetido.
 
## FlightList.jsx

- Descrição: Componente responsável por listar os voos existentes. Faz uma requisição GET à API backend para buscar os dados dos voos.
- Funcionalidades:
- 1. Exibe os voos em uma tabela utilizando o componente Table do Ant Design.
- 2. Atualiza automaticamente a lista de voos ao inicializar.

## Endpoints da API Utilizada

- Criar Voo: URL: POST /flights Descrição: Envia os dados do formulário para a API para criar um novo voo.
- Listar Voos: URL: GET /flights Descrição: Busca todos os voos disponíveis e os exibe na tabela.

##Personalização

- Estilo: O projeto usa o Ant Design para a estilização dos componentes. Você pode customizar os estilos importando o CSS global do Ant Design ou criando um tema customizado.
- API URL: Para apontar o front-end para um endereço de API diferente, basta atualizar a variável API_URL nos componentes.

## Próximos Passos

- Implementar Funcionalidades Adicionais: Adicionar um formulário para editar os voos existentes. Adicionar a funcionalidade de excluir voos.
- Gerenciamento de Estado: Utilizar o Context API ou uma biblioteca como Redux para gerenciar o estado global da aplicação.
- Validação Avançada: Implementar validações mais avançadas nos formulários (por exemplo, verificar se a data do voo é válida).

# Comandos Úteis

## Rodar em modo de desenvolvimento:
```bash
npm run dev
```

## build para produção:
```bash
npm run build
```

## Licença
Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para mais informações.
