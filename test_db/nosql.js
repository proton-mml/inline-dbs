import faker from 'faker';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { agendamentos_concluidos } from './schemas/agendamentos_concluidos';
import { agendamentos } from './schemas/agendamentos';
import { concluidos } from './schemas/concluidos';
import { entradas } from './schemas/entradas';
import { fila_agendada } from './schemas/fila_agendada';
import { fila_cronologica } from './schemas/fila_cronologica';
import { fila } from './schemas/fila';

faker.locale = "pt_BR";

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/cool_db';
let Fila = {}
let FilaCronologica = {}
let FilaAgendada = {}
let Entradas = {}
let Concluidos = {}
let Agendamentos = {}
let AgendamentosConcluidos = {}

init();
async function init() {
	const Schema = mongoose.Schema;
	mongoose.connect(mongoUrl);
	console.log('You are connected to mongodb at:\n' + mongoUrl);
	mongoose.set('debug', true);
  Fila = mongoose.model('fila', fila(Schema));
  FilaCronologica = mongoose.model('fila_cronologica', fila_cronologica(Schema));
  FilaAgendada = mongoose.model('fila_agendada', fila_agendada(Schema));
  Entradas = mongoose.model('entradas', entradas(Schema));
  Concluidos = mongoose.model('concluidos', concluidos(Schema));
  Agendamentos = mongoose.model('agendamentos', agendamentos(Schema));
  AgendamentosConcluidos = mongoose.model('agendamentos_concluidos', agendamentos_concluidos(Schema));

  await populate();

}

async function populate() {
  
}

function finishConnection() {
	mongoose.connection.close(function () {
			 console.log('Mongodb connection disconnected');
			 console.log('Exiting script');
		 });
}
