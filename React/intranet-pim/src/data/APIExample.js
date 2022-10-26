import axios from 'axios'
import {ApiServer} from '../server/server'

export default class APIExample{
    constructor(){
        this.Flag = 'CEP'
        this.axiosInstance = new axios.create({
            timeout: 100000000,
            baseURL: ApiServer(),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
                'X-Header-Token': process.env.REACT_APP_X_HEADER_TOKEN,
                'X-Header-Token-Query': process.env.REACT_APP_X_HEADER_TOKEN_QUERY
            }
        })
    }

    get(cep){
        const config = {
            method: 'GET',
            url: ApiServer() + '/apiExample'
        }
        return this.axiosInstance(config)
    }
}
