DROP SCHEMA IF EXISTS inline CASCADE;
CREATE SCHEMA inline;

SET search_path TO inline;

-- TURMA MELHORA ISSO
CREATE TYPE prioridade_t AS ENUM ('semprioridade',
                                  'idoso',
                                  'deficientes');

-- VARCHAR OU CHAR????

CREATE TABLE usuario (
   nome varchar(50),
   tipo varchar(20),
   email varchar(50),
   senha varchar(50),
   PRIMARY KEY (email)
);

CREATE TABLE empresa (
   email varchar(50),
   cnpj varchar(50),
   id_endereco int,
   PRIMARY KEY (email)
);

CREATE TABLE estabelecimento (
   email varchar(50),
   email_empresa varchar(50),
   id_endereco int
);

CREATE TABLE cliente_cadastrado (
   email varchar(50),
   id_cliente int,
   posicao_gps varchar(50)
);

CREATE TABLE cliente (
   id int,
   telefone_celular varchar(30),
   tipo_prioridade prioridade_t
);

CREATE TABLE cliente_nao_cadastrado (
   id_cliente int,
   nome varchar(50)
);

CREATE TABLE cliente_premium (
   email varchar(50),
   numero varchar(30),
   codigo_seguranca int,
   validade date
);

CREATE TABLE avaliacao (
   id int,
   estrelas int,
   comentario text,
   email_estabelecimento varchar(50),
   email_cliente varchar(50)
);

CREATE TABLE servico_premium (
   email_cliente varchar(50),
   discriminacao text,
   timestamp_aquisicao date,
   valor float,
   id int
);

CREATE TABLE servico_credito (
   id_servico int,
   credito int
);

CREATE TABLE servico_mensalidade (
   id_servico int,
   data_termino date,
   dia_cobranca date
);

CREATE TABLE hora_dia_funcionamento (
   email_estabelecimento varchar(50),
   dia_semana varchar(3),
   hora_inicio time,
   hora_fim time
);

CREATE TABLE endereco (
   id int,
   estado varchar(2),
   cidade varchar(50),
   logradouro varchar(100),
   numero int,
   complemento varchar(10)
);
