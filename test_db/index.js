
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

async function insert_clientes_cadastrados () {
    await client.query("INSERT INTO inline.usuario
                        VALUES ('Frank Silverio', 'cliente cadastrado', 'frank@uol.com', 'B28AJBBK28991SIOFG'),
                               ('Emerson Lake Palmer', 'cliente cadastrado', 'emerson@elp.com', 'B28AJBBK28991SIOFG')");

    // await client.query("INSERT INTO inline.cliente_cadastrado
    //                     VALUES ('frank@uol.com', 1),
    //                            (emerson@elp.com, 2)");
}

// async function insert_empresas () {
//     await client.query("INSERT INTO inline.usuario
//                         VALUES ('Fanfa Bar & Snacks', 'empresa', 'fanfa@fanfa.com', 'B28AJBBK28991SIOFG')");

//     await client.query("INSERT INTO endereco
//                         VALUES (1, 'SP', 'São Paulo', 'Rua do Matagal', 10, 'B5')");

//     await client.query("INSERT INTO inline.empresa
//                         VALUES ('fanfa@fanfa.com', '234152251', 1)");
// }

async function connect_and_insert () {
    await client.connect();
    await clean_and_create_db();
    await insert_clientes_cadastrados();
    await inser_empresas();
    client.end();
}

async function selectquery (sql) {
    await client.connect();
    const res = await client.query(sql);
    client.end();
    return res.rows;
}

connect_and_insert();

console.log(selectquery("SELECT * FROM inline.avaliacao"));
console.log(selectquery("SELECT * FROM inline.cliente WHERE tipo='cliente cadastrado'"));
console.log(selectquery("SELECT * FROM inline.usuario"));
selectquery('SELECT * 
             FROM inline.cliente INNER JOIN inline.cliente_cadastrado ON
                cliente.id = cliente_cadastrado.id_cliente');
