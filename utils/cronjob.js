import cron from 'node-cron'
import axios from 'axios';
import { STRAPI_URL } from "../app.js";

// logic for the cron job
/** 
 * 1. Determining what is the frequency of updating expense
 * 2. Calculate the cumulative expense for the required frequency
 * 3. Update the amount with the new amount
 */

// method for updating the amount
const incrementAmountByFrequency = (amount, base, frequency) => {
    switch (frequency) {
      case 'Daily':
        return amount + base;
      case 'Weekly':
        return amount + base * 7;
      case 'Monthly':
        return amount + base * 30;
      case 'Quarterly':
        return amount + base * 90;
      case 'Yearly':
        return amount + base * 365;
      default:
        return amount;
    }
  };
  
  // method for updating the amount
  const updateRecurringExpenses = async () => {
    try {
      const response = await axios.get(STRAPI_URL);
      const expenses = response.data.data;
  
      for (let expense of expenses) {
        const { id, attributes } = expense;
        const { Amount, Base, Frequency } = attributes;
  
        if (Frequency !== 'One-Time') {
          const newAmount = incrementAmountByFrequency(Amount, Base, Frequency);
          await axios.put(`${STRAPI_URL}/${id}`, {
            data: { Amount: newAmount },
          });
        }
      }
    } catch (error) {
      console.error('Error updating recurring expenses:', error.message);
    }
  };
  
  // method for starting cronjob scheduler
  export const startCronJobs = () => {
    cron.schedule('0 0 * * *', updateRecurringExpenses, {
      scheduled: true,
      timezone: "UTC"
    });
    console.log('Cron job scheduled to run daily at midnight UTC');
  };