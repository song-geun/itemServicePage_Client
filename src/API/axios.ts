import axios from "axios"
export const instance : any = 
    axios.create({
    baseURL : 'http://127.0.0.1:8080/',
    headers : {
        accept: 'application/json',"Content-Type": `application/json`,
    }});

export default instance;