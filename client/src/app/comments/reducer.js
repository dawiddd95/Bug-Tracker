import produce from 'immer';
import types from './types';


const INITIAL_STATE = {
   comments: [],
}

/* eslint-disable */
const commentsReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_COMMENTS: 
         return produce(state, draftState => {
            draftState.comments = action.item
         })

      case types.ADD_COMMENT:
         return produce(state, draftState => {
            draftState.comments = draftState.comments.concat(action.item)
         })

      case types.EDIT_COMMENT:
         return produce(state, draftState => {
            draftState.comments = draftState.comments.filter(comment => comment.id !== action.item.id)
            draftState.comments = draftState.comments.concat(action.item)
         })

      case types.DELETE_COMMENT:
         return produce(state, draftState => {
            draftState.comments = draftState.comments.filter(comment => 
               !action.item.includes(comment.id))
         })

      default:
         return state;
   }
}
/* eslint-enable */

export default commentsReducer;