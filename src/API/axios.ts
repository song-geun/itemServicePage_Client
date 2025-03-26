import axios from "axios"
export const instance : any = 
    axios.create({
    baseURL : 'http://localhost:8080/',
    headers : {
        accept: 'application/json',"Content-Type": `application/json`,
    }});

export default instance;