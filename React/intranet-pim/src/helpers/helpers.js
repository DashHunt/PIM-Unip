import routesBR from '../language/br/routes.json'
import routesUS from '../language/us/routes.json'
import stringsBR from '../language/br/strings.json'
import stringsUS from '../language/us/strings.json'

const lang = localStorage.getItem('language')

const selectRoutes = () => {
    switch(lang){
        case 'br': return routesBR
        case 'us': return routesUS
        default: return routesBR
    }
}

const selectStrings = () => {
    switch(lang){
        case 'br': return stringsBR
        case 'us': return stringsUS
        default: return stringsBR
    }
}

export const switchLanguage = (lang) => {
    localStorage.setItem('language', lang)
    document.location.href = '/PIM'
}

export const routes = selectRoutes()
export const strings = selectStrings()