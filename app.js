import express from 'express'
import appRouter from './routes/routes.js';
import { startCronJobs } from './utils/cronjob.js';
const app = express();
const PORT_NUM = 8000;
export const STRAPI_URL = "http://strapi.koders.in/api/expenses";

app.use(express.json());
app.use('/', appRouter);

startCronJobs();

app.listen(PORT_NUM,()=>{
    console.log('... starting the app');
})