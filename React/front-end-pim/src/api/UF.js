import axios from 'axios'
import {ApiServer, CEPApi} from '../server/server'

export default class UF{
    constructor(){
        this.Flag = 'UF'
        this.axiosInstance = new axios.create({
            timeout: 100000000,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            }
        })
    }   

    get(){
        const config = {
            method: 'GET',
            url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
        }
        return this.axiosInstance(config)
    }
}
