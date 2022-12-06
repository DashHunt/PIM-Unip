import axios from 'axios'
import {ApiServer} from '../server/server'

export default class ClientesAPI{
    constructor(){
        this.Flag = 'Clientes'
        this.axiosInstance = new axios.create({
            timeout: 100000000,
            baseURL: ApiServer(),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            }
        })
    }

    getByID(id){
        const config = {
            method: 'GET',
            url: ApiServer() + '/getClientesById',
            params: {idCliente: id}
        }
        return this.axiosInstance(config)
    }

    get(){
        const config = {
            method: 'GET',
            url: ApiServer() + '/getClientes',
        }
        return this.axiosInstance(config)
    }

    update(data){
        const config = {
            method: 'POST',
            url: ApiServer() + '/putClientes',
            data: data
        }
        return this.axiosInstance(config)
    }

    post(data){
        const config = {
            method: 'POST',
            url: ApiServer() + '/postClientes',
            data: data
        }
        return this.axiosInstance(config)
    }
}
