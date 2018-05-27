export function fila_cronologica(Schema) {
	return new Schema({
	  aceita_premium: Boolean,
	  aceita_preferencial: Boolean,
    entradas:[{type: Schema.Types.ObjectId, ref: 'entradas'}],
    concluidos:[{type: Schema.Types.ObjectId, ref: 'concluidos'}],
	}, { timestamps	: { updatedAt: 'updated_at', createdAt: 'created_at' } });
}
