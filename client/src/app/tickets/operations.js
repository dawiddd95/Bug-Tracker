import axios from 'axios';
import { ticketsApi } from 'utils/api';
import actions from './actions';

const fetchTickets = async () => {
   const response = await axios.get(ticketsApi);
   return response.data;
}

export const getAllTickets = () => 
   async (dispatch) => {
      const tickets = await fetchTickets();
      const { data } = tickets;

      dispatch(actions.addFetchedTickets(data));
   }
