
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
    await client.query("INSERT INTO inline.usuario VALUES ('Frank Silverio', 'cliente cadastrado', 'frank@uol.com', 'B28AJBBK28991SIOFG'), ('Emerson Lake Palmer', 'cliente cadastrado', 'emerson@elp.com', 'B28AJBBK28991SIOFG')");
    await client.query("INSERT INTO inline.cliente VALUES (1, '987654321', '-'), (2, '987654322', '-')")
    await client.query("INSERT INTO inline.cliente_cadastrado VALUES ('frank@uol.com', 1), ('emerson@elp.com', 2)");
}

async function insert_empresas_estabelecimentos () {
    await client.query("INSERT INTO inline.usuario VALUES ('Fanfa Bar & Snacks', 'empresa', 'fanfa@fanfa.com', 'B28AJBBK28991SIOFG'), ('Fanfa Faria Lima', 'estabelecimento', 'fanfafa@fanfa.com', 'B28AJBBK28991SIOFG')");
    await client.query("INSERT INTO endereco VALUES (1, 'SP', 'São Paulo', 'Rua do Matagal', 10, 'B5'), (2, 'SP', 'São Paulo', 'Av. Faria Lima', 10, 'A113')");
    await client.query("INSERT INTO inline.empresa VALUES ('fanfa@fanfa.com', '234152251', 1)");
    await client.query("INSERT INTO inline.estabelecimento VALUES ('fanfafa@fanfa.com', 'fanfa@fanfa.com', 2, '0S0E')");
}

async function insert_avaliacao () {
    await client.query("INSERT INTO inline.avaliacao VALUES (1, 4, 'Muito bom, mas pode ser melhor', 'fanfafa@fanfa.com', 'emerson@elp.com')");
    await client.query("INSERT INTO inline.avaliacao VALUES (2, 5, 'Excelente', 'fanfafa@fanfa.com', 'frank@uol.com')");
}

async function remove_avaliacao () {
    await client.query("DELETE FROM inline.avaliacao WHERE id = 2");
}

async function update_endereco () {
    await client.query("UPDATE inline.usuario SET nome='Faria Fanfa' WHERE email='fanfafa@fanfa.com'");
}

async function selects () {
    console.log('Todas as avaliações:');
    console.log((await client.query("SELECT * FROM inline.avaliacao")).rows);
    console.log('Usuários: ')
    console.log((await client.query("SELECT * FROM inline.usuario WHERE tipo='cliente cadastrado'")).rows);
    console.log('Todas as estrelas e comentários das avaliações, com o nome dos usuários e das empresas: ');
    console.log((await client.query("SELECT uc.nome AS Cliente, ue.nome AS Estabelecimento, a.estrelas AS Estrelas, a.comentario AS Comentario FROM inline.usuario AS uc, inline.avaliacao AS a, inline.usuario AS ue WHERE a.email_cliente = uc.email AND a.email_estabelecimento = ue.email;")).rows);
}

async function connect_and_insert () {
    await client.connect();
    await clean_and_create_db();
    await insert_clientes_cadastrados();
    await insert_empresas_estabelecimentos();
    await insert_avaliacao();
    await remove_avaliacao();
    await update_endereco();
    await selects();
    client.end();
}


connect_and_insert();
