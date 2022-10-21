from flask import jsonify


class HelloWorld:
    def getHelloWorld():
        return jsonify('Hello World from another function')