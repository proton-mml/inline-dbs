import faker from 'faker';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { fila } from './schemas/fila';

faker.locale = "pt_BR";

const mongoUrl =  process.env.MONGO_URL || 'mongodb://localhost/cool_db';
let Fila = {}

init();
async function init() {
	const Schema = mongoose.Schema;
	mongoose.connect(mongoUrl);
	console.log('You are connected to mongodb at:\n' + mongoUrl);
	mongoose.set('debug', true);
  Fila = mongoose.model('fila', fila(Schema));
  await deleteDataFromCollection (Fila); // Remoção
  await populate(); // Inserção e alteração
  await deleteDataFromCollection (Fila); // Remoção
  await populate(); // Inserção e alteração
  await todasAsFilasPremium(); // Alteração
  await todasAsFilasPreferenciais(); // Alteração
  await consultaFilaMaior(10); //Seleção
  await consultaFilaMenor(10); //Seleção
  await finishConnection();

}
async function consultaFilaMaior(num) {
  await console.log(Fila.find ({"tamanho": {$gt: num}}));
}
async function consultaFilaMenor(num) {
  await console.log(Fila.find ({"tamanho": {$lt: num}}));
}
async function todasAsFilasPreferenciais() {
  await Fila.update ({}, {$set: {
    "filas_cronologicas.0.aceita_preferencial":  true
  }});
}
async function todasAsFilasPremium() {
  await Fila.update ({}, {$set: {
    "filas_cronologicas.0.aceita_premium":  true
  }});
}
async function deleteDataFromCollection(Model) {
	console.log('Dropping collection...');
	const remove = await Model.remove({});
	console.log('Collection dropped');
}
function users(batch) {
  return {
    id: faker.random.uuid(),
    entrada: faker.date.between('2018-01-01', '2018-05-05'),
    saida: faker.date.between('2018-01-01', '2018-05-05'),
    gps: Number(faker.random.number ({min: 10, max: 10000})),
    posicao: faker.random.number ({min: 1, max: batch})
  };
}

async function populate() {
  var numEstabecimentos = faker.random.number ({min: 1, max: 1});
  for (var k = 0; k < numEstabecimentos; k++) {
    var estabelecimento_id = faker.random.uuid();
    var fila = await Fila.create(filaData(estabelecimento_id, faker.random.number ({min: 5, max: 100})));
    var fila_id = new mongoose.mongo.ObjectId(fila._id);
    var batch = faker.random.number ({min: 1, max: 5});
    for (var i = 0; i < batch; i++) {
      var user_data = usuariosData(users(batch));
      const update = {
        entradas:  user_data.filas_cronologicas.entradas,
        concluidos: user_data.filas_cronologicas.concluidos ? user_data.filas_cronologicas.concluidos :[],
        agendamentos: user_data.filas_agendadas ? user_data.filas_agendadas.agendamentos:  [],
        agendamentos_concluidos: user_data.filas_agendadas ? user_data.filas_agendadas.agendamentos_concluidos: []
      };
      await Fila.update ({_id: fila_id}, {$push: {
        "filas_cronologicas.0.entradas":  update.entradas,
        "filas_cronologicas.0.concluidos":  update.concluidos,
        "filas_agendadas.0.agendamentos": update.agendamentos,
        "filas_agendadas.0.agendamentos_concluidos": update.agendamentos_concluidos
      }},
    {safe: true, upsert: true})
    }
  }
}


function usuariosData(currentUser) {
  const pref = faker.random.arrayElement([true, false]);
  const prem = faker.random.arrayElement([true, false]);
  return {
    filas_cronologicas: {
      entradas:{
    	  id_usuario: currentUser.id,
    	  distancia: currentUser.gps,
        data_hora_entrada: currentUser.entrada,
        preferencial: pref,
        premium: prem,
        posicao: currentUser.posicao
  	   },
      concluidos: faker.random.objectElement({
        zero: undefined ,one: {
        id_usuario: currentUser.id,
        distancia: currentUser.gps,
        data_hora_entrada: currentUser.entrada,
        preferencial: pref,
        premium: prem,
        posicao: currentUser.posicao,
        data_hora_saida: currentUser.saida,
        desistencia_ou_atendido: faker.random.arrayElement(["atendido", "desistencia"])
    	}
    }),
    },
    filas_agendadas:faker.random.objectElement({
      zero: undefined ,one: {
	    agendamentos:{
			  id_usuario: currentUser.id,
		    data_hora_agendada: currentUser.entrada,
		    data_hora_criacao: faker.date.between('2018-01-01', currentUser.entrada),
			},
	    agendamentos_concluidos:{
			  id_usuario: currentUser.id,
		    data_hora_agendada: currentUser.entrada,
		    data_hora_criacao: faker.date.between('2018-01-01',currentUser.entrada),
		    desistencia_ou_atendido: faker.random.arrayElement(["atendido", "desistencia"])
			}
		}})
  };
}

function filaData(id_estabelecimento, total_fila) {
  return {
  	  id_estabelecimento: id_estabelecimento,
  	  id_fila: faker.random.uuid(),
      data_hora_inicio: faker.date.between('2018-01-01', '2018-05-31').toString(),
      data_hora_fim: faker.date.between('2018-05-31', '2018-06-31').toString(),
      tamanho: total_fila,
      filas_cronologicas: [{
        aceita_premium: faker.random.arrayElement([true, false]),
        aceita_preferencial: faker.random.arrayElement([true, false]),
        entradas: []
      }],
      filas_agendadas:[{
        agendamentos:[],
        agendamentos_concluidos: []
      }]
	};
}
async function finishConnection() {
	mongoose.connection.close(function () {
			 console.log('Mongodb connection disconnected');
			 console.log('Exiting script');
		 });
}
