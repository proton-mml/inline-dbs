
# Introdução

Esse repositório consiste no conjunto de código relativo ao DB do projeto inline.
Aqui se encontra o script de criação do BD relacional (`criacao_script.sql`), e o
modulo do node para testes iniciais no BD relacional e NoSQL (PostgreSQL e MongoDB,
respectivamente).

## Rodando o test_db
Clone e entre no repositório `test_db`:
```
git clone https://github.com/proton-mml/inline-dbs
cd test_db
```
Construa as dependencias:
```
npm install
```
Incialize as variaveis de ambiente:
```
export PGUSER=...
export PGPORT=...
export PGHOST=...
export PGPASSWORD=...
export PGDATABASE=...
```
Rode:
```
npm start
```

