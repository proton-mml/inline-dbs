export function entradas(Schema) {
	return new Schema({
	  id_usuario: String,
	  distancia: String,
    data_hora_entrada: String,
    preferencial: Boolean,
    premium: Boolean,
    posicao: Number
	}, { timestamps	: { updatedAt: 'updated_at', createdAt: 'created_at' } });
}
