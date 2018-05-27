export function fila_agendada(Schema) {
	return new Schema({
    agendamentos:[{type: Schema.Types.ObjectId, ref: 'agendamentos'}],
    agendamentos_concluidos:[{type: Schema.Types.ObjectId, ref: 'agendamentos_concluidos'}],
	}, { timestamps	: { updatedAt: 'updated_at', createdAt: 'created_at' } });
}
