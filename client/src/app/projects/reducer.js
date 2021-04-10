import produce from 'immer';
import types from './types';


const INITIAL_STATE = {
   projects: [],
   isFilter: false,
   filterProjects: [],
}

/* eslint-disable */
const projectsReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_PROJECTS: 
         return produce(state, draftState => {
            draftState.projects = action.item
         })

      case types.ADD_PROJECT:
         return produce(state, draftState => {
            draftState.projects = draftState.projects.concat(action.item)
         })

      case types.EDIT_PROJECT:
         return produce(state, draftState => {
            draftState.projects = draftState.projects.filter(project => project.id !== action.item.id)
            draftState.projects = draftState.projects.concat(action.item)
         })

      case types.DELETE_PROJECT:
         return produce(state, draftState => {
            draftState.projects = draftState.projects.filter(project => 
               !action.item.includes(project.id))
         })

      case types.IS_FILTER:
         return produce(state, draftState => {
            draftState.isFilter = action.item
         })

      case types.FILTER_PROJECTS:
         return produce(state, draftState => {
            draftState.filterProjects = action.item
         })


      default:
         return state;
   }
}
/* eslint-enable */

export default projectsReducer;