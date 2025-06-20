# Modelo Lógico do Banco de Dados

## Tabela: Cidade

Tabela usada para guardar as cidades que serão usadas no relacionamento com a tabela `Pessoa`.

| Campo | Tipo   | Restrições                   |
| ----- | ------ | ---------------------------- |
| id    | number | PK, required, auto increment |
| nome  | string | required, max(150), index    |

---

## Tabela: Pessoa

Tabela usada para guardar as pessoas cadastradas no sistema.

| Campo        | Tipo   | Restrições                         |
| ------------ | ------ | ---------------------------------- |
| id           | number | PK, required, auto increment       |
| nomeCompleto | string | required, index                    |
| email        | string | required, unique                   |
| cidadeId     | number | required, FK (referência à Cidade) |

**Relacionamento:**

- `cidadeId` é uma chave estrangeira (FK) que referencia o campo `id` da tabela `Cidade`.
- Relacionamento 1:1 entre Pessoa e Cidade.

---

## Tabela: Usuario

Tabela usada para armezanar os usuários do sistema que serão usados para fazer o login.

| Campo | Tipo   | Restrições                   |
| ----- | ------ | ---------------------------- |
| id    | number | PK, required, auto increment |
| nome  | string | required, min(3)             |
| email | string | required, unique, min(5)     |
| senha | string | required, min(6)             |
