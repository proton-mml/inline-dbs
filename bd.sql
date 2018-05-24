DROP SCHEMA IF EXISTS inline CASCADE;
CREATE SCHEMA inline;

SET search_path TO inline;

CREATE TYPE prioridade_t AS ENUM ('-',
                                  'aposentado',
                                  'deficiente',
                                  'idoso',
                                  'gestante',
                                  'obeso',
                                  'criança de colo');

CREATE TYPE usuario_t AS ENUM ('empresa',
                               'estabelecimento',
                               'cliente cadastrado');

CREATE TYPE servico_t AS ENUM ('credito', 'mensalidade');


CREATE TABLE endereco (
   id int,
   estado varchar(2)        NOT NULL,
   cidade varchar(50)       NOT NULL,
   logradouro varchar(100)  NOT NULL,
   numero int               NOT NULL,
   complemento varchar(10),
   PRIMARY KEY (id)
);

CREATE TABLE usuario (
   nome varchar(50)  NOT NULL,
   tipo usuario_t    NOT NULL,
   email varchar(50),
   senha varchar(50) NOT NULL,
   PRIMARY KEY (email)
);

CREATE TABLE empresa (
   email varchar(50),
   cnpj varchar(50) NOT NULL,
   id_endereco int NOT NULL,
   PRIMARY KEY (email),
   FOREIGN KEY (email) REFERENCES usuario ON DELETE CASCADE,
   FOREIGN KEY (id_endereco) REFERENCES endereco ON DELETE RESTRICT
);

CREATE TABLE estabelecimento (
   email varchar(50),
   email_empresa varchar(50) NOT NULL,
   id_endereco int NOT NULL,
   posicao_gps varchar(50) NOT NULL,
   PRIMARY KEY (email),
   FOREIGN KEY (email) REFERENCES usuario ON DELETE CASCADE,
   FOREIGN KEY (email_empresa) REFERENCES empresa ON DELETE CASCADE,
   FOREIGN KEY (id_endereco) REFERENCES endereco ON DELETE RESTRICT
);

CREATE TABLE cliente (
   id int,
   telefone_celular varchar(30),
   tipo_prioridade prioridade_t,
   PRIMARY KEY (id)
);

-- FAZER TRIGGER PARA DELETAR CLIENTE
CREATE TABLE cliente_cadastrado (
   email varchar(50),
   id_cliente int,
   PRIMARY KEY (email),
   FOREIGN KEY (email)      REFERENCES usuario ON DELETE CASCADE,
   FOREIGN KEY (id_cliente) REFERENCES cliente ON DELETE RESTRICT
);

-- FAZER TRIGGER PARA DELETAR CLIENTE
CREATE TABLE cliente_nao_cadastrado (
   id_cliente int,
   nome varchar(50),
   PRIMARY KEY (id_cliente),
   FOREIGN KEY (id_cliente) REFERENCES cliente ON DELETE CASCADE
);

CREATE TABLE cliente_premium (
   email varchar(50),
   numero_cartao varchar(30)   NOT NULL,
   codigo_seguranca_cartao int NOT NULL,
   data_vencimento_cartao date NOT NULL,
   PRIMARY KEY (email),
   FOREIGN KEY (email) REFERENCES cliente_cadastrado ON DELETE CASCADE
);

CREATE TABLE avaliacao (
   id int,
   estrelas int                        NOT NULL CHECK (estrelas >= 0 AND estrelas <= 5),
   comentario text,
   email_estabelecimento varchar(50)   NOT NULL,
   email_cliente varchar(50)           NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (email_estabelecimento) REFERENCES estabelecimento    ON DELETE CASCADE,
   FOREIGN KEY (email_cliente)         REFERENCES cliente_cadastrado ON DELETE CASCADE
);

CREATE TABLE servico_premium (
   email_cliente varchar(50),
   discriminacao servico_t  NOT NULL,
   timestamp_aquisicao date NOT NULL,
   valor float              NOT NULL,
   id int,
   PRIMARY KEY (id),
   FOREIGN KEY (email_cliente) REFERENCES cliente_cadastrado ON DELETE RESTRICT
);

CREATE TABLE servico_credito (
   id_servico int,
   credito int NOT NULL,
   PRIMARY KEY (id_servico),
   FOREIGN KEY (id_servico) REFERENCES servico_premium ON DELETE CASCADE
);

CREATE TABLE servico_mensalidade (
   id_servico int,
   data_termino date NOT NULL,
   dia_cobranca date NOT NULL,
   PRIMARY KEY (id_servico),
   FOREIGN KEY (id_servico) REFERENCES servico_premium ON DELETE CASCADE
);

CREATE TABLE hora_dia_funcionamento (
   email_estabelecimento varchar(50),
   dia_semana char(3),
   hora_inicio time,
   hora_fim time,
   FOREIGN KEY (email_estabelecimento) REFERENCES estabelecimento ON DELETE CASCADE
);
