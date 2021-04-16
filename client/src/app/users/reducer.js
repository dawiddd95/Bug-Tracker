import produce from 'immer';
import types from './types';


const INITIAL_STATE = {
   users: [],
   loggedUser: {},
}

/* eslint-disable */
const usersReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_USERS: 
         return produce(state, draftState => {
            draftState.users = action.item
         })

      case types.LOGGED_USER:
         return produce(state, draftState => {
            draftState.loggedUser = action.item
         })

      case types.ADD_USER:
         return produce(state, draftState => {
            draftState.users = draftState.users.concat(action.item)
         })

      case types.EDIT_USER:
         return produce(state, draftState => {
            draftState.users = draftState.users.filter(user => user.id !== action.item.id)
            draftState.users = draftState.users.concat(action.item)
         })

      case types.DELETE_USER:
         return produce(state, draftState => {
            draftState.users = draftState.users.filter(user => 
               !action.item.includes(user.id))
         })

      default:
         return state;
   }
}
/* eslint-enable */

export default usersReducer;