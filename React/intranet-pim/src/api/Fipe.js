import axios from 'axios'
import {ApiServer} from '../server/server'

export default class FipeAPI{
    constructor(){
        this.Flag = 'Fipe'
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
            url: ApiServer() + '/getFipe'
        }
        return this.axiosInstance(config)
    }

    getCarro(id){
        const config = {
            method: 'GET',
            url: ApiServer() + '/getFipe',
            params: {idCarro: id}
        }
        return this.axiosInstance(config)
    }
}
