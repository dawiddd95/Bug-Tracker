import axios from 'axios';
import { projectsApi } from 'utils/api';
import actions from './actions';

const fetchProjects = async () => {
   const response = await axios.get(projectsApi);
   return response.data;
}

export const getAllProjects = () => 
   async (dispatch) => {
      const projects = await fetchProjects();
      const { data } = projects;

      dispatch(actions.addFetchedProjects(data));
   }
