from dotenv import load_dotenv
import psycopg2
import os

from helpers.Config import Config

class DatabasePSTGRES:
    def __init__(self):
        load_dotenv()
        self.password = os.getenv('DATABASE_PASSWORD')
        self.url = os.getenv('DATABASE_URL')
        self.user = os.getenv('DATABASE_USER')
        self.port = os.getenv('DATABASE_PORT')

    def DatabaseConnect(self):
        try:
            conn = psycopg2.connect(Config)

            cur = conn.cursor()
            
            # execute a statement
            print('PostgreSQL database version:')
            cur.execute('SELECT version()')

            db_version = cur.fetchone()
            print(db_version)
        except (Exception, psycopg2.DatabaseError) as error:
            print(error)
