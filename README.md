# Avaliação - Sistema de Gestão de Policiais

Este projeto é composto por um backend (Node.js) e um frontend (Angular) para gerenciar informações de policiais. O objetivo é demonstrar conhecimentos em desenvolvimento web full stack, organização de código, integração entre frontend e backend, e boas práticas de programação.

## Estrutura do Projeto

- `backend/`: API REST em Node.js (Express) para gerenciar dados dos policiais.
- `front/`: Aplicação Angular para interface do usuário.

## Tecnologias Utilizadas

- **Backend:** Node.js, Express, MySQL2
- **Frontend:** Angular

## Como Instalar e Executar

### Pré-requisitos
- Node.js (recomendado v18+)
- npm (geralmente instalado junto com o Node.js)
- MySQL Server

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd avaliacao
```

### 2. Configurar o Banco de Dados

- Crie um banco de dados MySQL chamado `avaliacao`.
- Ajuste as configurações de conexão em `backend/src/database/modulemysql2.js` conforme seu ambiente (usuário, senha, host).
- Execute o script de criação de tabelas (caso fornecido).

### 3. Instalar dependências

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../front
npm install
```

### 4. Executar a aplicação

#### Backend
```bash
cd backend
npm start
```
O backend será iniciado em `http://localhost:3000` (ou porta configurada).

#### Frontend
```bash
cd front
npm start
```
Acesse a interface em `http://localhost:4200`.

## Como Usar

1. Acesse o frontend pelo navegador.
2. Utilize o formulário para cadastrar policiais.
3. Visualize, edite e exclua policiais cadastrados.
4. Todas as operações são integradas ao backend via API REST.

## Organização do Código

- **Backend:**
  - `controllers/`: Lógica das rotas.
  - `services/`: Regras de negócio.
  - `routes/`: Definição das rotas.
  - `database/`: Conexão com o MySQL.
  - `shared/`: Funções utilitárias (ex: validação de CPF).
- **Frontend:**
  - `components/`: Componentes de interface (formulário, lista, etc).
  - `services/`: Comunicação com a API.
  - `environments/`: Configurações de ambiente.

## Observações
- O projeto segue boas práticas de separação de responsabilidades.
- O código está comentado para facilitar a compreensão.
- Testes unitários podem ser executados via `npm test` em cada parte.
