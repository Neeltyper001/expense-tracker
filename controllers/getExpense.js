import { STRAPI_URL } from "../app.js"
import axios from "axios"

export const getExpense = async (req, res)=>{
    try{
        const getResp = await axios.get(STRAPI_URL);
        res.status(200).json(getResp.data);
    }catch(error){
        res.status(500).json(error)
    }
}

