import { STRAPI_URL } from "../app.js"
import axios from "axios"
const createExpense = async (req, res)=>{
    try {        
        const {Date,Amount,Description,Frequency,Base} = req.body;
        console.log(Date)
        console.log(Amount)
        console.log(Description)
        console.log(Frequency)
        console.log(Base)
        const createResp = await axios.post('http://strapi.koders.in/api/expenses',{data: {Date,Amount, Description, Frequency, Base}})
        console.log(createResp)
        res.status(201).json(createResp.data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
export default createExpense