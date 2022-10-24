/*
    Author: Arthur Coutinho
    Description: Database creation in PostgreSQL
*/

CREATE TABLE perfil_site (
	ID_cliente SERIAL PRIMARY KEY,
	CPF varchar(16),
	email varchar(50),
	primeiro_nome varchar(50),
	senha varchar(12),
	sobrenome varchar(50)
);

CREATE TABLE fipe (
	id_carro integer PRIMARY KEY,
	marca varchar(50),
	modelo varchar(50),
	ano varchar(50),
	tipo varchar(50),
	valor varchar(50)
);

CREATE TABLE uploads (
	ID_anexo SERIAL PRIMARY KEY,
	anexo_caminho varchar(100),
	anexo_nome varchar(50),
	FK_ID_cliente INTEGER,
	FOREIGN KEY (FK_ID_cliente) 
		REFERENCES perfil_site(ID_cliente)
);

CREATE TABLE codigo_registro (
	ID_anexo SERIAL PRIMARY KEY,
	codigo varchar(100),
	FK_ID_cliente INTEGER,
	FOREIGN KEY (FK_ID_cliente) 
		REFERENCES perfil_site(ID_cliente)
);

CREATE TABLE solicitacao_proposta (
	ID_solicitacao SERIAL PRIMARY KEY,
	RG varchar(15),
	RG_data_emissao varchar(100),
	RG_uf varchar(2),
	endereco_logradouro varchar(100),
	endereco_numero varchar(100),
	endereco_bairro varchar(100),
	endereco_cep varchar(100),
	endereco_estado varchar(2),
	data_nascimento varchar(11),
	CNH varchar(100),
	CNH_data_emissao varchar(100),
	genero varchar(1),
	data_cadastro varchar(100),
	data_modificacao varchar(100),
	data_exclusao varchar(100),
	data_apolice varchar(100),
	status varchar(2),
	FK_ID_cliente INTEGER,
	FOREIGN KEY (FK_ID_cliente) 
		REFERENCES perfil_site(ID_cliente)
);

CREATE TABLE coberturas (
	ID_cobertura SERIAL PRIMARY KEY,
	descricao varchar(100),
	valor varchar(100),
	FK_ID_solicitacao INTEGER,
	FOREIGN KEY (FK_ID_solicitacao) 
		REFERENCES solicitacao_proposta(ID_solicitacao)
);

CREATE TABLE telefones (
	ID_telefone SERIAL PRIMARY KEY,
	telefone varchar(15),
	FK_ID_solicitacao INTEGER,
	FOREIGN KEY (FK_ID_solicitacao) 
		REFERENCES solicitacao_proposta(ID_solicitacao)
);

CREATE TABLE funcionarios (
	ID_funcionario SERIAL PRIMARY KEY,
	data_cadastro varchar(100),
	data_desligamento varchar(100),
	email varchar(100),
	senha varchar(12),
	sobrenome varchar(100),
	status varchar(10),
	username varchar(100)
);







