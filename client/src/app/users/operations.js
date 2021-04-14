import axios from 'axios';
import { usersApi } from 'utils/api';
import actions from './actions';

const fetchUsers = async () => {
   const response = await axios.get(usersApi);
   return response.data;
}

export const getAllUsers = () => 
   async (dispatch) => {
      const users = await fetchUsers();
      const { data } = users;

      dispatch(actions.addFetchedUsers(data));
   }
