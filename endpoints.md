# API Endpoints

## v1

---

### Cidades (Privado)

Endpoints para gerenciar cidades:

- `GET /cidades`  
  Retorna uma lista de cidades com paginação e filtro por nome, filtro por id.

- `POST /cidades`  
  Cria uma nova cidade.

- `GET /cidades/:id`  
  Retorna os dados de uma cidade específica pelo ID.

- `PUT /cidades/:id`  
  Atualiza os dados de uma cidade específica pelo ID.

- `DELETE /cidades/:id`  
  Remove uma cidade específica pelo ID.

---

### Pessoas (Privado)

Endpoints para gerenciar pessoas:

- `GET /pessoas`  
  Retorna uma lista de pessoas com paginação e filtro por nome.

- `POST /pessoas`  
  Cria uma nova pessoa.

- `GET /pessoas/:id`  
  Retorna os dados de uma pessoa específica pelo ID.

- `PUT /pessoas/:id`  
  Atualiza os dados de uma pessoa específica pelo ID.

- `DELETE /pessoas/:id`  
  Remove uma pessoa específica pelo ID.

---

### Login (Público)

Endpoints de autenticação:

- `POST /entrar`  
  Gera um token de acesso para um usuário existente.

- `POST /cadastrar`  
  Cria um novo usuário.
