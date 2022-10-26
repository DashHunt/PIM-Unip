import json
from attr import s
from flask import Flask, Blueprint, request, jsonify
import os

from helpers.Auth import Auth

from pimBackend.functions.HelloWorld import HelloWorld
from pimBackend.functions.Clientes import Clientes

apiPIM = Blueprint('/pim', __name__)

errorMessage = "Acess denied"

#GET hello World
@apiPIM.route("/getHelloWorld", methods=['GET'])
def routeGetHelloWorld():
    if Auth(request.headers, "pimBackend/"):
        return HelloWorld.getHelloWorld()
    else:
        return errorMessage

#GET clientes
@apiPIM.route("/getClientes", methods=['GET'])
def routeGetClientes():
    if Auth(request.headers, "pimBackend/"):
        return Clientes().getClientes()
    else:
        return errorMessage

#GET cliente by ID
@apiPIM.route("/getClientesID", methods=['GET'])
def routeGetClientesByID():
    id = request.args['id']

    if Auth(request.headers, "pimBackend/"):
        return Clientes().getClientesByID(id)
    else:
        return errorMessage

#GET cliente by CPF
@apiPIM.route("/getClientesCPF", methods=['GET'])
def routeGetClientesByCPF():
    data = request.get_json()

    if Auth(request.headers, "pimBackend/"):
        return Clientes().getClientesByCPF(data['cpf'])
    else:
        return errorMessage


#POST cliente
@apiPIM.route("/postCliente", methods=['POST'])
def routePostCliente():
    data = request.get_json()

    if Auth(request.headers, "pimBackend/"):
        return Clientes().postClientes(data)
    else:
        return errorMessage