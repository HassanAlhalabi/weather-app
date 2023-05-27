import { useQuery } from "react-query";
import { useAxios } from "./useAxios";


export const useGet = (path: string)  => {

    const axios = useAxios();

    return useQuery([path], () => axios.get(path))

}