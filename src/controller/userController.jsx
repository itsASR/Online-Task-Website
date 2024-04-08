/* eslint-disable no-unused-vars */
import axios from 'axios';
import { api } from '../config/api';

export const GetPlanDetails = async() => {
    try {
        const response = await axios.post(`${api.API_URL}user/get-plans`);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
};
  

  