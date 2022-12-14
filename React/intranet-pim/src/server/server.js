import {routes} from '../helpers/helpers'

export function ApiServer(){
    if(mode() === 'local'){
        return process.env.REACT_APP_API_KEY
    }

    return process.env.REACT_APP_PROD
}

export function NodeServiceServer(){
    if(mode() === 'local'){
        return process.env.REACT_APP_NODE_API
    }

    return process.env.REACT_APP_NODE_API_PROD
}

export function CEPApi(){
    return process.env.REACT_APP_CEP_API
}

function mode(){
    const url = new URL(document.location.href)
    const prefix = url.hostname.substring(0, 2)

    if(prefix === '19'){
        return 'prod'
    }

    return 'local'
}