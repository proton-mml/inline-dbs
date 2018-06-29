--------------------------------------------------------------------------------
--                               Populando o DB                               --
--------------------------------------------------------------------------------

DELETE FROM inline.avaliacao;
DELETE FROM inline.cliente;
DELETE FROM inline.cliente_cadastrado;
DELETE FROM inline.cliente_nao_cadastrado;
DELETE FROM inline.cliente_premium;
DELETE FROM inline.empresa;
DELETE FROM inline.endereco;
DELETE FROM inline.estabelecimento;
DELETE FROM inline.hora_dia_funcionamento;
DELETE FROM inline.servico_credito;
DELETE FROM inline.servico_mensalidade;
DELETE FROM inline.servico_premium;

-- Clientes cadastrados
INSERT INTO inline.usuario
VALUES ('Frank Silverio', 'cliente cadastrado', 'frank@uol.com', '$2a$10$tHuWTwPhVyvYEshMAlxgdeO.hv1efK1sHpDfb9fx55jeTz8N4RnIe'), --senha = senha
       ('Emerson Lake Palmer', 'cliente cadastrado', 'emerson@elp.com', '$2a$10$tHuWTwPhVyvYEshMAlxgdeO.hv1efK1sHpDfb9fx55jeTz8N4RnIe'), --senha = senha
       ('Eloy de Lima', 'cliente cadastrado', 'eloy@eloy.com', '$2a$10$xqsyrJdzGegqOlHewjtxwOrTuzARSY/g5N6xg0aT3zVrysPkI.3KG'), --senha = senhateste
       ('Aurélio Dicionário', 'cliente cadastrado', 'aurelio@abc.de', '$2a$10$xqsyrJdzGegqOlHewjtxwOrTuzARSY/g5N6xg0aT3zVrysPkI.3KG'), --senha = senhateste
       ('Aarão Antonio', 'cliente cadastrado', 'aaa@aaa.aa', '$2a$10$PxwwCwWjr.eSvdibCVGFPuYXLLXUBMXUjwJ8kPj3wNV651RT/PgNq'); --senha = aa
       

INSERT INTO inline.cliente(telefone_celular, tipo_prioridade)
VALUES ('987654321', '-'),
       ('987654322', '-'),
       ('987654323', 'aposentado'),
       ('987654324', '-'),
       ('987654325', '-');

INSERT INTO inline.cliente_cadastrado
VALUES ('frank@uol.com', 1),
       ('emerson@elp.com', 2),
       ('eloy@eloy.com', 3),
       ('aurelio@abc.de', 4),
       ('aaa@aaa.aa', 5);

-- Empresas e estabelecimentos
INSERT INTO inline.usuario
VALUES ('Fanfa Bar & Snacks', 'empresa', 'fanfa@fanfa.com', '$2a$10$xqsyrJdzGegqOlHewjtxwOrTuzARSY/g5N6xg0aT3zVrysPkI.3KG'), --senha = senha
       ('Fanfa Faria Lima', 'estabelecimento', 'fanfafa@fanfa.com', '$2a$10$xqsyrJdzGegqOlHewjtxwOrTuzARSY/g5N6xg0aT3zVrysPkI.3KG'), --senha = senha
       ('Fanfa Paulista', 'estabelecimento', 'fanfapa@fanfa.com', '$2a$10$xqsyrJdzGegqOlHewjtxwOrTuzARSY/g5N6xg0aT3zVrysPkI.3KG'), --senha = senhateste
       ('Fanfa Sprife', 'estabelecimento', 'sprife@fanfa.com', '$2a$10$xqsyrJdzGegqOlHewjtxwOrTuzARSY/g5N6xg0aT3zVrysPkI.3KG'), --senha = senhateste
       ('Sujinhos', 'empresa', 'suj@suj.com', '$2a$10$PxwwCwWjr.eSvdibCVGFPuYXLLXUBMXUjwJ8kPj3wNV651RT/PgNq'), --senha = aa
       ('Immundos Vila Carrão', 'estabelecimento', 'im@suj.com', '$2a$10$PxwwCwWjr.eSvdibCVGFPuYXLLXUBMXUjwJ8kPj3wNV651RT/PgNq'), --senha = aa
       ('Abjettos Higienópolis', 'estabelecimento', 'ab@suj.com', '$2a$10$PxwwCwWjr.eSvdibCVGFPuYXLLXUBMXUjwJ8kPj3wNV651RT/PgNq'); --senha = aa

INSERT INTO inline.endereco(estado, cidade, logradouro, numero, complemento)
VALUES ('SP', 'São Paulo', 'Rua do Matagal',         10, 'B5'),
       ('SP', 'São Paulo', 'Av. Faria Lima',         100, 'A113'),
       ('SP', 'São Paulo', 'Av. Paulista',           110, 'CEC'),
       ('SP', 'São Paulo', 'Rua Java',               130, ''),
       ('SP', 'São Paulo', 'Av. Supernova',          140, 'A113'),
       ('SP', 'São Paulo', 'Av. Conselheiro Carrão', 150, 'A113'),
       ('SP', 'São Paulo', 'Av. Angélica',           151, 'A113');

INSERT INTO inline.empresa
VALUES ('fanfa@fanfa.com', '234152251', 1),
       ('suj@suj.com',     '213423455', 2);

INSERT INTO inline.estabelecimento
VALUES ('fanfafa@fanfa.com', 'fanfa@fanfa.com', 1, '0S0E'),
       ('fanfapa@fanfa.com', 'fanfa@fanfa.com', 2, '1S2W'),
       ('im@suj.com', 'suj@suj.com', 3, '3N4E'),
       ('ab@suj.com', 'suj@suj.com', 4, '7N7W'),
       ('sprife@fanfa.com', 'fanfa@fanfa.com', 5, '1S3W');

INSERT INTO inline.hora_dia_funcionamento
VALUES ('fanfafa@fanfa.com', 'seg', '16:00:00', '20:00:00'),
       ('fanfapa@fanfa.com', 'ter', '16:00:00', '20:00:00'),
       ('sprife@fanfa.com',  'qua', '16:00:00', '20:00:00'),
       ('im@suj.com',       'qui', '16:00:00', '20:00:00'),
       ('ab@suj.com',      'sex', '16:00:00', '20:00:00');

-- Avaliação
INSERT INTO inline.avaliacao(estrelas, comentario, email_estabelecimento, email_cliente)
VALUES (4, 'Muito bom, mas pode ser melhor', 'fanfafa@fanfa.com', 'emerson@elp.com'),
       (5, 'Excelente', 'fanfafa@fanfa.com', 'frank@uol.com'),
       (0, 'Esses caras deviam ter vergonha de existir', 'fanfapa@fanfa.com', 'aurelio@abc.de'),
       (5, 'Achei ruim, 5 estrelas', 'fanfapa@fanfa.com', 'aaa@aaa.aa'),
       (1, 'Achei pouco didático', 'im@suj.com', 'eloy@eloy.com'),
       (3, 'Regular', 'sprife@fanfa.com', 'eloy@eloy.com'),
       (2, 'Fraco', 'ab@suj.com', 'frank@uol.com'),
       (4, 'Daora', 'im@suj.com', 'aaa@aaa.aa'),
       (5, 'Bem melhor que a unidade Sprife', 'fanfafa@fanfa.com', 'eloy@eloy.com');

--------------------------------------------------------------------------------
--                            Testes de Consultas                             --
--------------------------------------------------------------------------------

SELECT * FROM inline.avaliacao;

SELECT * FROM inline.usuario WHERE tipo='cliente cadastrado';

SELECT uc.nome      AS Cliente,
       ue.nome      AS Estabelecimento,
       a.estrelas   AS Estrelas,
       a.comentario AS Comentario
FROM inline.usuario   AS uc,
     inline.avaliacao AS a,
     inline.usuario   AS ue
WHERE a.email_cliente = uc.email AND
      a.email_estabelecimento = ue.email;
