import { STRAPI_URL } from "../app.js"
import axios from "axios"
const deleteExpense = async (req, res)=>{
    try {
        const id = req.params.id; 
        const deleteResp = await axios.delete(`${STRAPI_URL}/${id}`);
        res.status(200).json(deleteResp.data); 
    } catch (error) {   
            if(error.toString().includes("404")) {
                res.status(404).json(error.message)
            }
            else{
                res.status(500).json(error.message); 
            }
    }
}
export default deleteExpense