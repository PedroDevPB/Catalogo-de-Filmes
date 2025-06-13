# 🎬 Catálogo de Filmes

Projeto completo de um sistema web para listagem, categorização e gerenciamento de filmes, com funcionalidades de autenticação de usuários, persistência local (via arquivos JSON) e documentação interativa com Swagger.


## 📁 Estrutura do Projeto

```
Catalogo-de-Filmes/
├── Back-end/
│   ├── app.js
│   ├── swagger.js
│   ├── controllers/
│   ├── data/
│   ├── models/
│   ├── routes/
│   └── package.json
├── Front-end/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── categorias.html
│   ├── css/
│   ├── script.js
│   ├── scriptLogin.js
│   ├── scriptRegister.js
│   └── validationUser.js
```

## 🚀 Funcionalidades

### Front-end

- Página inicial com destaque de filmes.
- Cadastro e login de usuários com validação.
- Listagem de filmes por categoria com agrupamento.
- Interface simples e responsiva.
![image](https://github.com/user-attachments/assets/ac2a0166-5f19-4d8c-8275-47ddcda6d16d)


### Back-end (Node.js + Express)

- API RESTful com rotas para:
  - Cadastro de usuários
  - Listagem de usuários
  - Atualização (`PUT`) e remoção (`DELETE`) por e-mail
  - Listagem de filmes e consulta por ID
- Armazenamento em arquivos `.json`
- Documentação interativa com Swagger (`/api-docs`)
![image](https://github.com/user-attachments/assets/fc72b089-b112-43d6-b5eb-479b0ceb7db9)


### Swagger

Disponível em:

```
http://localhost:3000/api-docs
```

Documenta todas as rotas da API com base nas anotações JSDoc dos arquivos de rota.

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/PedroDevPB/Catalogo-de-Filmes.git
cd Catalogo-de-Filmes/Back-end
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
node app.js
```

4. Acesse o front-end abrindo os arquivos `.html` diretamente no navegador.

## 🧪 Rotas da API

| Método | Endpoint           | Descrição                          |
|--------|--------------------|------------------------------------|
| GET    | /usuarios          | Lista todos os usuários            |
| POST   | /usuarios          | Cadastra novo usuário              |
| PUT    | /usuarios/:email   | Atualiza nome/senha do usuário     |
| DELETE | /usuarios/:email   | Remove usuário pelo e-mail         |
| GET    | /filmes            | Lista todos os filmes              |
| GET    | /filmes/:id        | Retorna filme por ID               |

![image](https://github.com/user-attachments/assets/da7bd03a-0f73-4c4c-a3bd-22f21913c703)

## 🛠️ Tecnologias

- Node.js
- Express
- HTML5, CSS3 e JavaScript
- Swagger UI
