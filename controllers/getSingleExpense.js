import { STRAPI_URL } from "../app.js"
import axios from "axios"

export const getSingleExpense = async (req, res)=>{
    try{
        console.log(STRAPI_URL)
        const id = req.params.id        
        const getResp = await axios.get(`${STRAPI_URL}/${id}`);        
        res.status(200).json(getResp.data);
    }catch(error){
        if(error.toString().includes("404")) {
            res.status(404).json(error.message)
        }
        else{
            res.status(500).json(error.message); 
        }
    }
}