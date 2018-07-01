/*--------------------------------------------------------------------------------
--                               Populando o DB                               --
--------------------------------------------------------------------------------*/

db.filas.insertMany([
    {
        "id_estabelecimento": "fanfafa@fanfa.com",
        "data_hora_inicio": new Date("2018-02-02T11:30:00"),
        "data_hora_fim": new Date("2020-02-02T17:00:00"),
        "tamanho": 0,
        "cronologica": {
            "aceita_premium": false,
            "aceita_preferencial": true,
            "entradas": [],
            "concluidos": []
        }
    },
    {
    	"id_estabelecimento": "fanfafa@fanfa.com",
    	"data_hora_inicio": new Date("2018-02-02T11:30:00"),
        "data_hora_fim": new Date("2018-02-02T17:00:00"),
        "tamanho": 0,
        "cronologica": {
            "aceita_premium": false,
            "aceita_preferencial": true,
            "entradas": [],
            "concluidos": [
                {
                    "id_cliente": 1,
                    "distancia": "0",
                    "data_hora_entrada": new Date("2018-02-02T12:00:00"),
                    "preferencial": false,
                    "premium": false,
                    "posicao": 0,
                    "data_hora_saida":  new Date("2018-02-02T12:05:00"),
                    "desistencia_ou_atendido": "atendido",
                },
                {
                    "id_cliente": 2,
                    "distancia": "0",
                    "data_hora_entrada": new Date("2018-02-02T12:00:00"),
                    "preferencial": false,
                    "premium": false,
                    "posicao": 0,
                    "data_hora_saida":  new Date("2018-02-02T12:05:00"),
                    "desistencia_ou_atendido": "atendido",
                },
                {
                    "id_cliente": 3,
                    "distancia": "0",
                    "data_hora_entrada": new Date("2018-02-02T12:00:00"),
                    "preferencial": true,
                    "premium": false,
                    "posicao": 1,
                    "data_hora_saida":  new Date("2018-02-02T12:10:00"),
                    "desistencia_ou_atendido": "desistencia",
                },
            ]
        }
    },
    {
    	"id_estabelecimento":"fanfapa@fanfa.com",
        "data_hora_inicio": new Date("2018-06-29T6:00:00"),
        "data_hora_fim": new Date("2019-06-29T19:00:00"),
        "tamanho": 3,
        "cronologica": {
            "aceita_premium": false,
            "aceita_preferencial": true,
            "concluidos": [
                {
                    "id_cliente": 1,
                    "distancia": "0",
                    "data_hora_entrada": new Date("2018-06-02T7:00:00"),
                    "preferencial": false,
                    "premium": false,
                    "posicao": 1,
                    "data_hora_saida": new Date("2018-06-02T07:50:00"),
                    'desistencia_ou_atendido': "atendido"
                }
            ],
            "entradas": [
                {
                    "id_cliente": 2,
                    "distancia": "0",
                    "data_hora_entrada": new Date("2018-06-02T7:00:00"),
                    "preferencial": false,
                    "premium": false,
                    "posicao": 0,
                },
                {
                    "id_cliente": 3,
                    "distancia": "0",
                    "data_hora_entrada": new Date("2018-06-02T7:10:00"),
                    "preferencial": true,
                    "premium": false,
                    "posicao": 1,
                },
                {
                    "id_cliente": 4,
                    "distancia": "0",
                    "data_hora_entrada": new Date("2018-06-02T8:00:00"),
                    "preferencial": false,
                    "premium": false,
                    "posicao": 2,
                },
            ]
        }
    },
    {
    	"id_estabelecimento":"fanfapa@fanfa.com",
        "data_hora_inicio": new Date("2017-03-29T06:00:00"),
        "data_hora_fim": new Date("2020-03-29T15:59:59"),
        "tamanho": 2,
        "agendada": {
            "agendamentos_concluidos": [
                {
                    "id_cliente": 5,
                    "data_hora_agendada": new Date("2018-01-02T7:00:00"),
                    "data_hora_criacao": new Date("2017-11-02T20:00:00"),
                    'desistencia_ou_atendido': "atendido"
                }
            ],
            "agendamentos": [
                {
                    "id_cliente": 2,
                    "data_hora_agendada": new Date("2018-07-03T7:00:00"),
                    "data_hora_criacao": new Date("2017-12-02T21:00:00"),
                },
                {
                    "id_cliente": 1,
                    "data_hora_agendada": new Date("2018-08-02T6:00:00"),
                    "data_hora_criacao": new Date("2018-07-02T10:00:00"),
                }
            ]
        }
    },
]);
