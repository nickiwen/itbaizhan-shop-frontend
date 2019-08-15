import { INITCITY,UPDATECITY } from "../constants/city"

export function initCity(data){
    return{
        type:INITCITY,
        data
    }
}

export function updateCity(data){
    return{
        type:UPDATECITY,
        data
    }
}