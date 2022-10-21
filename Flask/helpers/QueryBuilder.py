class QueryBuilder:

    @staticmethod
    def select(table):
       return 'SELECT * FROM {0}'.format(table)

    @staticmethod
    def update(table):
       return 'SELECT * FROM {0}'.format(table)

    @staticmethod
    def post(table):
       return 'INSERT INTO {tableName} VALUES %r;'

    @staticmethod
    def selectByID(table, id):
        return 'SELECT * FROM {0} WHERE id_clientes=({1})'.format(table, id)

    @staticmethod
    def selectByCPF(table, column, cpf):
        return """
            SELECT * FROM {tableName} 
            WHERE {column}='{value}'
        """.format(tableName=table, column=column, value=cpf)