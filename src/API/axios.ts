import axios from "axios"
export const instance : any = 
    axios.create({
    baseURL : 'http://192.168.219.100:8080/',
    headers : {
        accept: 'application/json',"Content-Type": `application/json`,
    }});

export default instance;