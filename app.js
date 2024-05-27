import express from 'express'

const app = express();
const PORT_NUM = 8000;

app.use('/',(req,res)=>{
    console.log("The app is running live at 5500")
    res.status(200).json("The app is running live at 5500")
})

app.listen(PORT_NUM,()=>{
    console.log('... starting the app');
})