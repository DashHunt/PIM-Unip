from os.path import join, dirname
from dotenv import load_dotenv
import os

class Auth(object):
    def __new__(self, headers, path, typeOfRequest=''):
        dotenv_path = join(dirname(path), '.env')
        load_dotenv(dotenv_path)

        if typeOfRequest == 'query':
            if headers.get('X-Header-Token') == os.environ.get('API_KEY') and headers.get('X-Header-Token-Query') == os.environ.get('QUERY_KEY'):
                return True
            return False
        else:
            if headers.get('X-Header-Token') == os.environ.get('API_KEY'):
                return True
            return False


        