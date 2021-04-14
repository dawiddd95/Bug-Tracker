import types from './types';

const addFetchedUsers = item => ({
   type: types.FETCH_USERS, item
})

const loggedUser = item => ({
   type: types.LOGGED_USER, item
})

const addUser = item => ({
   type: types.ADD_USER, item
})

const editUser = item => ({
   type: types.EDIT_USER, item
})

const deleteUser = item => ({
   type: types.DELETE_USER, item
})

const isFilterUser = item => ({
   type: types.IS_FILTER, item
})

const filterUsers = item => ({
   type: types.FILTER_USERS, item
})


export default {
   addFetchedUsers,
   loggedUser,
   addUser,
   editUser,
   deleteUser,
   isFilterUser,
   filterUsers
}
