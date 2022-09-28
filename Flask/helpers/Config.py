from dotenv import load_dotenv
import os

def Config():
    load_dotenv()

    password = os.getenv('DATABASE_PASSWORD')
    name = os.getenv('DATABASE_NAME')
    url = os.getenv('DATABASE_URL')
    user = os.getenv('DATABASE_USER')
    port = os.getenv('DATABASE_PORT')

    return {url, name, user, password}
