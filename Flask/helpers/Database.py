from flask import jsonify
from dotenv import load_dotenv
from os.path import dirname, join
import os
import psycopg2

class DatabasePSTGRES(object):
    def __init__(self, path, databaseName='postgres'):
        dotenv_path = join(dirname(path), '.env')
        load_dotenv(dotenv_path)
        self.host = 'localhost'
        self.user = os.environ.get('DATABASE_USER')
        self.password = os.environ.get('DATABASE_PASSWORD')
        self.port = os.environ.get('DATABASE_PORT')
        self.database = databaseName

    def ConnectToPostgreSQL(self):
        conn = psycopg2.connect(
            host=self.host,
            database=self.database,
            user=self.user,
            password=self.password
        )

        return conn

    @staticmethod
    def ExecuteCommand(connection, commandToExecute, valuesToReplace={}):
        cursor = connection.cursor()

        try:
            cursor.execute(commandToExecute, valuesToReplace)
        except Exception as errorMsg:
            return "POSTGRES Error: {}".format(str(errorMsg))
        connection.commit()
        try:
            data = cursor.fetchall()
            cursor.close()
            return data
        except:
            return {'status': True}

    @staticmethod
    def CloseConnection(connection):
        try:
            connection.close()
        except:
            pass


