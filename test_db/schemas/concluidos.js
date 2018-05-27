export function concluidos(Schema) {
	return new Schema({
	  id_usuario: String,
	  distancia: String,
    data_hora_entrada: String,
    preferencial: Boolean,
    premium: Boolean,
    posicao: Number,
    data_hora_saida: String,
    desistencia_ou_atendido: String
	}, { timestamps	: { updatedAt: 'updated_at', createdAt: 'created_at' } });
}
