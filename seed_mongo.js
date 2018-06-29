/*--------------------------------------------------------------------------------
--                               Populando o DB                               --
--------------------------------------------------------------------------------*/

db.filas.insertMany([
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
                    "id_usuario": "eloy@eloy.com",
                    "distancia": "0m",
                    "data_hora_entrada": new Date("2018-02-02T12:00:00"),
                    "preferencial": true,
                    "premium": false,
                    "posicao": 0,
                    "data_hora_saida":  new Date("2018-02-02T12:05:00"),
                    "desistencia_ou_atendido": "atendido",
                },
                {
                    "id_usuario": 'aurelio@abc.de',
                    "distancia": "0m",
                    "data_hora_entrada": new Date("2018-02-02T12:00:00"),
                    "preferencial": false,
                    "premium": false,
                    "posicao": 0,
                    "data_hora_saida":  new Date("2018-02-02T12:05:00"),
                    "desistencia_ou_atendido": "atendido",
                },
                {
                    "id_usuario": 'aaa@aaa.aa',
                    "distancia": "3m",
                    "data_hora_entrada": new Date("2018-02-02T12:00:00"),
                    "preferencial": false,
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
        "data_hora_inicio": new Date("2018-06-29T06:00:00"),
        "data_hora_fim": new Date("2018-06-29T19:00:00"),
        "tamanho": 3,
        "cronologica": {
            "aceita_premium": false,
            "aceita_preferencial": true,
            "concluidos": [
                {
                    "id_usuario": 'aaa@aaa.aa',
                    "distancia": "0m",
                    "data_hora_entrada": new Date("2018-06-02T07:00:00"),
                    "preferencial": false,
                    "premium": false,
                    "posicao": 1,
                    "data_hora_saida": new Date("2018-06-02T07:50:00"),
                    'desistencia_ou_atendido': "atendido"
                }
            ],
            "entradas": [
                {
                    "id_usuario": "eloy@eloy.com",
                    "distancia": "1km",
                    "data_hora_entrada": new Date("2018-06-02T07:00:00"),
                    "preferencial": false,
                    "premium": false,
                    "posicao": 0,
                },
                {
                    "id_usuario": 'aurelio@abc.de',
                    "distancia": "10m",
                    "data_hora_entrada": new Date("2018-06-02T07:10:00"),
                    "preferencial": false,
                    "premium": false,
                    "posicao": 1,
                },
                {
                    "id_usuario": 'emerson@elp.com',
                    "distancia": "3m",
                    "data_hora_entrada": new Date("2018-06-02T08:00:00"),
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
        "tamanho": 3,
        "agendada": {
            "agendamentos_concluidos": [
                {
                    "id_usuario": 'aaa@aaa.aa',
                    "data_hora_agendada": new Date("2018-01-02T07:00:00"),
                    "data_hora_criacao": new Date("2017-11-02T20:00:00"),
                    'desistencia_ou_atendido': "atendido"
                }
            ],
            "agendamentos": [
                {
                    "id_usuario": 'emerson@elp.com',
                    "data_hora_agendada": new Date("2018-07-03T07:00:00"),
                    "data_hora_criacao": new Date("2017-12-02T21:00:00"),
                },
                {
                    "id_usuario": 'aurelio@abc.de',
                    "data_hora_agendada": new Date("2018-08-02T06:00:00"),
                    "data_hora_criacao": new Date("2018-07-02T10:00:00"),
                }
            ]
        }
    },
]);

/*--------------------------------------------------------------------------------
--                            Testes de Consultas                             --
--------------------------------------------------------------------------------*/
