
//Exemplo inicial (modificado) do site do node-postgres. Apenas conecta no BD e imprime o
// primeiro usuário da tabela de usuários.

//Não consegui fazer funcionar ainda com await, vejam os exemplos em
// https://node-postgres.com/features/connecting

const { Client } = require('pg');
const client = new Client();

client.connect();

client.query('SET search_path TO inline; SELECT * FROM usuario', (err, res) => {
  console.log(err ? err.stack : res[1].rows[0]);
  client.end();
});
