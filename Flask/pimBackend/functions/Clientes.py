from flask import jsonify
from helpers.Database import DatabasePSTGRES
from helpers.QueryBuilder import QueryBuilder

class Clientes:
    def __init__(self):
        self.database = DatabasePSTGRES(__file__)
        self.query = QueryBuilder()

    def getClientes(self):
        query = self.query.select('perfil_site')

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
        columns = """id_cliente, cpf, email, primeiro_nome, senha, sobrenome"""
        
        queryValues = (
            data['id_cliente'],
            data['cpf'],
            data['email'],
            data['primeiro_nome'],
            data['senha'],
            data['sobrenome']
        )

        print(queryValues)

        query = self.query.post('perfil_site', columns, queryValues)

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)