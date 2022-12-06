import axios from 'axios'
import {ApiServer} from '../server/server'

export default class SolicitacoesAPI{
    constructor(){
        this.Flag = 'Solicitacoes'
        this.axiosInstance = new axios.create({
            timeout: 100000000,
            baseURL: ApiServer(),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            }
        })
    }

    get(){
        const config = {
            method: 'GET',
            url: ApiServer() + '/getCoberturas'
        }
        return this.axiosInstance(config)
    }
    post(data){
        const config = {
            method: 'POST',
            url: ApiServer() + '/postSolicitacoes',
            data: data
        }
        return this.axiosInstance(config)
    }
}
