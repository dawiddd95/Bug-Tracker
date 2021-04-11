import types from './types';

const addFetchedTickets = item => ({
   type: types.FETCH_TICKETS, item
})

const addTicket = item => ({
   type: types.ADD_TICKET, item
})

const editTicket = item => ({
   type: types.EDIT_TICKET, item
})

const deleteTicket = item => ({
   type: types.DELETE_TICKET, item
})

const isFilterTicket = item => ({
   type: types.IS_FILTER, item
})

const filterTickets = item => ({
   type: types.FILTER_TICKETS, item
})


export default {
   addFetchedTickets,
   addTicket,
   editTicket,
   deleteTicket,
   isFilterTicket,
   filterTickets
}
