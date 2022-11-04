class QueryBuilder:

    @staticmethod
    def select(table):
       return 'SELECT * FROM {0}'.format(table)

    @staticmethod
    def update(table):
       return 'SELECT * FROM {0}'.format(table)

    @staticmethod
    def post(table, columns, queryValues):
       return """INSERT INTO {tableName}({columns})
	    VALUES {values};
       """.format(tableName=table, columns=columns, values=queryValues)

    @staticmethod
    def delete(table, columns, queryValues, fk_id_cliente):
       return """INSERT INTO {tableName}({columns})
	    VALUES {values} WHERE fk_id_cliente=({id_cliente});
       """.format(tableName=table, columns=columns, values=queryValues, id_cliente=fk_id_cliente)

    @staticmethod
    def selectByID(table, id):
        return 'SELECT * FROM {0} WHERE id_clientes=({1})'.format(table, id)

    @staticmethod
    def selectByCPF(table, column, cpf):
        return """
            SELECT * FROM {tableName} 
            WHERE {column}='{value}'
        """.format(tableName=table, column=column, value=cpf)

    @staticmethod
    def selectWhereDataExcNotNull(table):
        return 'SELECT * FROM {0} WHERE data_exclusao<>""'.format(table)
