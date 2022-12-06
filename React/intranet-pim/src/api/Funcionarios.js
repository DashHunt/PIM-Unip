import axios from 'axios'
import {ApiServer} from '../server/server'

export default class FuncionariosAPI{
    constructor(){
        this.Flag = 'Funcionarios'
        this.axiosInstance = new axios.create({
            timeout: 100000000,
            baseURL: ApiServer(),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            }
        })
    }

    validateLogin(email, senha){
        const config = {
            method: 'GET',
            url: ApiServer() + '/getFuncionarios',
            params: {
                email,
                senha
            }
        }
        return this.axiosInstance(config)
    }
}
