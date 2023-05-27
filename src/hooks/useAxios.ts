import axios from "axios"
import { X_RAPIDAPI_HOST } from "../constants"

export const useAxios = () => {

    const axiosClient = axios.create({
        baseURL: X_RAPIDAPI_HOST,
        timeout: 1000,
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_X_RAPIDAPI_KEY ,
            'X-RapidAPI-Host': X_RAPIDAPI_HOST
    }})
      

    return axiosClient

}