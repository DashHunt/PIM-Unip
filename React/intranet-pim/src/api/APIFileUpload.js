import axios from 'axios'
import {ApiServer} from '../server/server'

export default class APIFileUpload{
    constructor(){
        this.Flag = 'File Upload'
        this.axiosInstance = new axios.create({
            timeout: 100000000,
            baseURL: ApiServer(),
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json; charset=UTF-8',
                'X-Header-Token': process.env.REACT_APP_X_HEADER_TOKEN,
                'X-Header-Token-Query': process.env.REACT_APP_X_HEADER_TOKEN_QUERY
            }
        })
    }

    upload(fileList, id){
        const fileData = new FormData();

        Array.from(fileList).forEach(file => {
            fileData.append("files", file)
        })

        const config = {
            method: 'POST',
            url: ApiServer() + '/uploadExample',
            data: fileData,
            params: {
                id: id
            }
        }
        return this.axiosInstance(config)
    }
}
