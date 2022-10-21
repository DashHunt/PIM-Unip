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
        query = self.query.selectByID('clientes', id)

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)

    def getClientesByCPF(self, cpf):
        query = self.query.selectByCPF('clientes', 'cpf', cpf)

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)

    def postClientes(self, cpf):
        query = self.query.selectByCPF('clientes', 'cpf', cpf)

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)