from flask import jsonify
from helpers.Database import DatabasePSTGRES
from helpers.QueryBuilder import QueryBuilder

class Clientes:
    def __init__(self):
        self.database = DatabasePSTGRES(__file__)
        self.query = QueryBuilder()

    def getClientes(self):
        query = self.query.select('clientes')

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)

    def getClientesByID(self, id):
        if not id:
            return jsonify('Necessário fornecimento de id')

        query = self.query.selectByID('clientes', id)

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)

    def getClientesByCPF(self, cpf):
        query = self.query.selectByCPF('clientes', 'cpf', cpf)

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)

    def postClientes(self, data):
        columns = """id_clientes, cpf, nome, rg, rg_data_emissao, rg_uf, endereco_lougradouro, endereco_numero, 
        endereco_bairro, endereco_cep, endereco_estado, data_nascimento, cnh_numero, cnh_data_emissao, 
        genero, telefone1, telefone2"""
        
        queryValues = (
            data['id_clientes'],
            data['cpf'],
            data['nome'],
            data['rg'],
            data['rg_data_emissao'],
            data['rg_uf'],
            data['endereco_lougradouro'],
            data['endereco_numero'],
            data['endereco_bairro'],
            data['endereco_cep'],
            data['endereco_estado'],
            data['data_nascimento'],
            data['cnh_numero'],
            data['cnh_data_emissao'],
            data['genero'],
            data['telefone1'],
            data['telefone2'],
        )

        print(queryValues)

        query = self.query.post('clientes', columns, queryValues)

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)