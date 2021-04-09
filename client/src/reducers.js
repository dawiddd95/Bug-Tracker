import { combineReducers } from 'redux';
import projects from './app/projects';

/* eslint-disable */
const appReducer = combineReducers({
   projects
})

// reset redux store
const rootReducer = (state, action) => {
   if(action.type === 'RESET_STORE') state = undefined;
   return appReducer(state, action);
}
/* eslint-enable */

export default rootReducer;