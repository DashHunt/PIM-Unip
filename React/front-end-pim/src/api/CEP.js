import axios from 'axios'
import {ApiServer, CEPApi} from '../server/server'

export default class CEP{
    constructor(){
        this.Flag = 'CEP'
        this.axiosInstance = new axios.create({
            timeout: 100000000,
            baseURL: CEPApi(),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            }
        })
    }   

    get(cep){
        const config = {
            method: 'GET',
            url: CEPApi() + `${cep}/json`
        }
        return this.axiosInstance(config)
    }
}
