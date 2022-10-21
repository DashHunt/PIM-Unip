from os.path import join, dirname
from dotenv import load_dotenv
import os

class Auth(object):
    def __new__(self, headers, path):
        dotenv_path = join(dirname(path), '.env')
        load_dotenv(dotenv_path)

        if headers.get('X-Header-Token') == os.environ.get('API_KEY'):
            return True
        else:
            return False