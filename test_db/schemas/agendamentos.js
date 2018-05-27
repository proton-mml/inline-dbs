export function agendamentos(Schema) {
	return new Schema({
	  id_usuario: String,
    data_hora_agendada: String,
    data_hora_criacao: String
	}, { timestamps	: { updatedAt: 'updated_at', createdAt: 'created_at' } });
}
