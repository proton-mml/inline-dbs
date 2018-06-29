--------------------------------------------------------------------------------
--                               Populando o DB                               --
--------------------------------------------------------------------------------

-- Clientes cadastrados
INSERT INTO inline.usuario
VALUES ('Frank Silverio', 'cliente cadastrado', 'frank@uol.com', 'B28AJBBK28991SIOFG'),
       ('Emerson Lake Palmer', 'cliente cadastrado', 'emerson@elp.com', 'B28AJBBK28991SIOFG');

INSERT INTO inline.cliente(telefone_celular, tipo_prioridade)
VALUES ('987654321', '-'),
       ('987654322', '-');

INSERT INTO inline.cliente_cadastrado
VALUES ('frank@uol.com', 1),
       ('emerson@elp.com', 2);


-- Empresas e estabelecimentos
INSERT INTO inline.usuario
VALUES ('Fanfa Bar & Snacks', 'empresa', 'fanfa@fanfa.com', 'B28AJBBK28991SIOFG'),
       ('Fanfa Faria Lima', 'estabelecimento', 'fanfafa@fanfa.com', 'B28AJBBK28991SIOFG');

INSERT INTO inline.endereco(estado, cidade, logradouro, numero, complemento)
VALUES ('SP', 'São Paulo', 'Rua do Matagal', 10, 'B5'),
       ('SP', 'São Paulo', 'Av. Faria Lima', 10, 'A113');

INSERT INTO inline.hora_dia_funcionamento VALUES ('fanfafa@fanfa.com', 'seg', '16:00:00', '20:00:00');

INSERT INTO inline.empresa
VALUES ('fanfa@fanfa.com', '234152251', 1);

INSERT INTO inline.estabelecimento
VALUES ('fanfafa@fanfa.com', 'fanfa@fanfa.com', 2, '0S0E');

-- Avaliação
INSERT INTO inline.avaliacao(estrelas, comentario, email_estabelecimento, email_cliente)
VALUES (4, 'Muito bom, mas pode ser melhor', 'fanfafa@fanfa.com', 'emerson@elp.com'),
       (5, 'Excelente', 'fanfafa@fanfa.com', 'frank@uol.com');


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
