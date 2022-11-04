from flask import jsonify
from helpers.Database import DatabasePSTGRES
from helpers.QueryBuilder import QueryBuilder

class Solicitacoes:
    def __init__(self):
        self.database = DatabasePSTGRES(__file__)
        self.query = QueryBuilder()

    def getSolicitacoes(self):
        query = self.query.select('solicitacao_proposta')

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)

    def postSolicitacoes(self, data):
        columns = """id_solicitacao, rg, rg_data_emissao, rg_uf, endereco_logradouro, endereco_numero, 
        endereco_bairro, endereco_cep, endereco_estado, data_nascimento, cnh, cnh_data_emissao, 
        genero, data_cadastro, data_modificacao, data_exclusao, data_apolice, status, fk_id_cliente"""
        
        queryValues = (
            data['id_solicitacao'],
            data['rg'],
            data['rg_data_emissao'],
            data['rg_uf'],
            data['endereco_logradouro'],
            data['endereco_numero'],
            data['endereco_bairro'],
            data['endereco_cep'],
            data['endereco_estado'],
            data['data_nascimento'],
            data['cnh'],
            data['cnh_data_emissao'],
            data['genero'],
            data['data_cadastro'],
            data['data_modificacao'],
            data['data_exclusao'],
            data['data_apolice'],
            data['status'],
            data['fk_id_cliente']
        )

        print(queryValues)

        query = self.query.post('solicitacao_proposta', columns, queryValues)

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)

    def getSolicitacoesWhereDataExcNotNull(self):
        query = self.query.selectWhereDataExcNotNull('solicitacao_proposta')

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)

    def deleteSolicitacoes(self, data):
        columns = """data_exclusao, fk_id_cliente"""
        
        queryValues = (
            data['data_exclusao'],
            data['fk_id_cliente']
        )

        print(queryValues)

        query = self.query.delete('solicitacao_proposta', 'data_exclusao', queryValues, 'fk_id_cliente')

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)