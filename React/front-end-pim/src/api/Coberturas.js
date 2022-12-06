import axios from 'axios'
import {ApiServer} from '../server/server'

export default class CoberturasAPI{
    constructor(){
        this.Flag = 'Coberturas'
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
            url: ApiServer() + '/postCoberturas',
            data: data
        }
        return this.axiosInstance(config)
    }
}
