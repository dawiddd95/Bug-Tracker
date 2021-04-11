import produce from 'immer';
import types from './types';


const INITIAL_STATE = {
   tickets: [],
   isFilter: false,
   filterTickets: [],
}

/* eslint-disable */
const ticketsReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.FETCH_TICKETS: 
         return produce(state, draftState => {
            draftState.tickets = action.item
         })

      case types.ADD_TICKET:
         return produce(state, draftState => {
            draftState.tickets = draftState.tickets.concat(action.item)
         })

      case types.EDIT_TICKET:
         return produce(state, draftState => {
            draftState.tickets = draftState.tickets.filter(ticket => ticket.id !== action.item.id)
            draftState.tickets = draftState.tickets.concat(action.item)
         })

      case types.DELETE_TICKET:
         return produce(state, draftState => {
            draftState.tickets = draftState.tickets.filter(ticket => 
               !action.item.includes(ticket.id))
         })

      case types.IS_FILTER:
         return produce(state, draftState => {
            draftState.isFilter = action.item
         })

      case types.FILTER_TICKETS:
         return produce(state, draftState => {
            draftState.filterTickets = action.item
         })


      default:
         return state;
   }
}
/* eslint-enable */

export default ticketsReducer;