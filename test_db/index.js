
//Exemplo inicial (modificado) do site do node-postgres. Apenas conecta no BD e imprime o
// primeiro usuário da tabela de usuários.

//Não consegui fazer funcionar ainda com await, vejam os exemplos em
// https://node-postgres.com/features/connecting

const fs = require('fs');
const { Client } = require('pg');

const client = new Client();

async function clean_and_create_db () {
    const create_script = fs.readFileSync('./criacao_bd.sql', 'utf8');
    await client.query('DROP SCHEMA inline CASCADE');
    await client.query(create_script);
}

async function insert_usuarios () {
    await client.query("INSERT INTO inline.usuario VALUES ('Frank Silverio', 'cliente cadastrado', 'frank@uol.com', 'B28AJBBK28991SIOFG')");
}

async function connect_and_insert () {
    await client.connect();
    await clean_and_create_db();
    await insert_usuarios();
    client.end();
}


connect_and_insert();
