import { STRAPI_URL } from "../app.js"
import axios from "axios"
const updateExpense = async (req, res)=>{
    try {        
        const id = req.params.id;
        const {Date,Amount,Description,Frequency,Base} = req.body;
        const updateResp = await axios.put(`${STRAPI_URL}/${id}`,{data: {Date,Amount,Description,Frequency,Base}});
        res.status(200).json(updateResp.data);
    } catch (error) {
        if(error.toString().includes("404")) {
            res.status(404).json(error.message)
        }
        else{
            res.status(500).json(error.message); 
        }
    }
}
export default updateExpense