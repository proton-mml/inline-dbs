
# Introdução

Esse repositório consiste no conjunto de código relativo ao DB do projeto inline.
Aqui se encontra o script de criação do BD relacional (`criacao_script.sql`), e o
modulo do node para testes iniciais no BD relacional e NoSQL (PostgreSQL e MongoDB,
respectivamente).

## Rodando o test_db

Construa as dependencias:
```
npm build
```
Incialize as variaveis de ambiente:
```
export PGUSER=...
export PGPORT=...
export PGHOSTADDR=...
export PGPASSWORD=...
export PGDATABASE=...
```
Rode:
```
npm start
```

