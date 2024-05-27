import express from 'express';
import createExpense from '../controllers/createExpense.js';
import deleteExpense from '../controllers/deleteExpense.js';
import {getExpense} from '../controllers/getExpense.js';
import { getSingleExpense } from '../controllers/getSingleExpense.js';
import updateExpense from '../controllers/updateExpense.js';

const appRouter = express.Router();

// # Getting expenses route
appRouter.get('/api/v1/expenses',getExpense)
appRouter.get('/api/v1/expenses/:id',getSingleExpense)
appRouter.post('/api/v1/expenses',createExpense)
appRouter.put('/api/v1/expenses/:id',updateExpense)
appRouter.delete('/api/v1/expenses/:id',deleteExpense)


export default appRouter