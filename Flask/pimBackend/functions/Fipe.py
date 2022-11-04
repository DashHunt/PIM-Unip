from flask import jsonify
from helpers.Database import DatabasePSTGRES
from helpers.QueryBuilder import QueryBuilder

class Fipe:
    def __init__(self):
        self.database = DatabasePSTGRES(__file__)
        self.query = QueryBuilder()

    def getFipe(self):
        query = self.query.select('fipe')

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)

    def postFipe(self, data):
        columns = """id_carro, marca, modelo, ano, tipo, valor"""
        
        queryValues = (
            data['id_carro'],
            data['marca'],
            data['modelo'],
            data['ano'],
            data['tipo'],
            data['valor']
        )

        print(queryValues)

        query = self.query.post('fipe', columns, queryValues)

        result = self.database.ExecuteCommand(self.database.ConnectToPostgreSQL(), query)
        return jsonify(result)