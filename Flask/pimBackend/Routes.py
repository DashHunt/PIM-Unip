import json
from attr import s
from flask import Flask, Blueprint, request, jsonify
import os

from helpers.Auth import Auth

from pimBackend.functions.HelloWorld import HelloWorld
from pimBackend.functions.Clientes import Clientes
from pimBackend.functions.Solicitacoes import Solicitacoes
from pimBackend.functions.Fipe import Fipe

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

#GET Solicitacoes
@apiPIM.route("/getSolicitacoes", methods=['GET'])
def routeGetSolicitacoes():
    if Auth(request.headers, "pimBackend/"):
        return Solicitacoes().getSolicitacoes()
    else:
        return errorMessage

#POST solicitacoes
@apiPIM.route("/postSolicitacoes", methods=['POST'])
def routePostSolicitacoes():
    data = request.get_json()

    if Auth(request.headers, "pimBackend/"):
        return Solicitacoes().postSolicitacoes(data)
    else:
        return errorMessage

#GET Fipe
@apiPIM.route("/getFipe", methods=['GET', 'POST'])
def routeGetFipe():
    if Auth(request.headers, "pimBackend/"):
        return Fipe().getFipe()
    else:
        return errorMessage

#POST fipe
@apiPIM.route("/postFipe", methods=['POST'])
def routePostFipe():
    data = request.get_json()

    if Auth(request.headers, "pimBackend/"):
        return Fipe().postFipe(data)
    else:
        return errorMessage

#GET Solicitacoes Where Data Exclusão Not Null
@apiPIM.route("/getSolicitacoesWhereDataExcNotNull", methods=['GET', 'POST'])
def routeGetSolicitacoesWhereDataExcNotNull():
    if Auth(request.headers, "pimBackend/"):
        return Solicitacoes().getSolicitacoesWhereDataExcNotNull()
    else:
        return errorMessage

#DELETE solicitacoes
@apiPIM.route("/deleteSolicitacoes", methods=['POST'])
def routeDeleteSolicitacoes():
    data = request.get_json()

    if Auth(request.headers, "pimBackend/"):
        return Solicitacoes().deleteSolicitacoes(data)
    else:
        return errorMessage