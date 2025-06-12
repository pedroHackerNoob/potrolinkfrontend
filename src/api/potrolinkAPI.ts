import api from "../config/axios.ts";
import {isAxiosError} from "axios";

export async function getUser() {
    try {
        const {data} = await api(`/user`)
        localStorage.setItem('AUTH_TOKEN', data.token)
        console.log(data)
    }catch (error) {
        if(isAxiosError(error) && error.response){
            console.log(error.response.data.error)
            console.log(error.response.data.error)
        }
    }
}