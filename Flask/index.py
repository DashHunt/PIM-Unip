from flask import Flask
from flask_cors import CORS

from pimBackend.Routes import apiPIM

app = Flask(__name__)
CORS(app)

app.register_blueprint(apiPIM, url_prefix='/pim')

if __name__ == '__main__':
    app.run(debug=True)