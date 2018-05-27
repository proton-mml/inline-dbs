import faker from 'faker';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { fila } from './schemas/fila';

faker.locale = "pt_BR";

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/cool_db';
let Fila = {}

init();
async function init() {
	const Schema = mongoose.Schema;
	mongoose.connect(mongoUrl);
	console.log('You are connected to mongodb at:\n' + mongoUrl);
	mongoose.set('debug', true);
  Fila = mongoose.model('fila', fila(Schema));

  await populate();
  finishConnection();

}

async function populate() {

}

function filaData(id_estabelecimento) {
  return {
    id_estabelecimento: id_estabelecimento,
    id_fila: faker.random.uuid(),
    data_hora_inicio: faker.date.between('2018-01-01', '2018-06-31').toString(),
    data_hora_fim: 'none',
    tamanho: Number,
    filas_cronologicas:[{type: Schema.Types.ObjectId, ref: 'fila_cronologica'}],
    filas_agendadas: [{type: Schema.Types.ObjectId, ref: 'fila_agendada'}]
  };
}
function finishConnection() {
	mongoose.connection.close(function () {
			 console.log('Mongodb connection disconnected');
			 console.log('Exiting script');
		 });
}
