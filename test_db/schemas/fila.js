export function fila(Schema) {
	return new Schema({
	  id_estabelecimento: String,
	  id_fila: String,
    data_hora_inicio: String,
    data_hora_fim: String,
    tamanho: Number,
    filas_cronologicas:[{type: Schema.Types.ObjectId, ref: 'fila_cronologica'}],
    filas_agendadas: [{type: Schema.Types.ObjectId, ref: 'fila_agendada'}]
	}, { timestamps	: { updatedAt: 'updated_at', createdAt: 'created_at' } });
}
