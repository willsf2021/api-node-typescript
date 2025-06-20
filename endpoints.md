# Endpoints

### v1

### **Cidades** (Privado)

- GET /cidades _Busca uma lista de cidades, com paginação e filtro por nome_
- POST /cidades _Cria uma nova cidade_
- GET /cidades/:id _Busca apenas uma cidade pelo seu id_
- PUT /cidades/:id _Atualiza uma cidade pelo seu id_
- DELETE /cidades/:id _Apaga uma cidade pelo seu id_

### **Pessoas** (Privado)

- GET /pessoas _Busca uma lista de pessoas, com paginação e filtro por nome_
- POST /pessoas \_Cria uma nova pessoa
- GET /pessoas/:id _Busca apenas uma pessoa pelo seu id_
- PUT /pessoas/:id _Atualiza uma pessoa pelo seu id_
- DELETE /pessoas/:id _Apaga uma pessoa pelo seu id_

### **Login** (Público)

- POST /entrar _Permite um usuário existente no sistema gerar um token para acessar os endpoints privados_
- POST /cadastrar _Permite criar um novo usuário_
