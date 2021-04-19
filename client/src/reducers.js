import { combineReducers } from 'redux';
import projects from './app/projects';
import tickets from './app/tickets';
import users from './app/users';
import comments from './app/comments';

/* eslint-disable */
const appReducer = combineReducers({
   projects,
   tickets,
   users,
   comments
})

// reset redux store
const rootReducer = (state, action) => {
   if(action.type === 'RESET_STORE') state = undefined;
   return appReducer(state, action);
}
/* eslint-enable */

export default rootReducer;