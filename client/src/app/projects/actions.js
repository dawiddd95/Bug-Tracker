import types from './types';

// becouse it will be reused in ticket in select to assign ticket to project

const addFetchedProjects = item => ({
   type: types.FETCH_PROJECTS, item
})

const addProject = item => ({
   type: types.ADD_PROJECT, item
})

const editProject = item => ({
   type: types.EDIT_PROJECT, item
})

const deleteProject = item => ({
   type: types.DELETE_PROJECT, item
})

const isFilterProject = item => ({
   type: types.IS_FILTER, item
})

const filterProjects = item => ({
   type: types.FILTER_PROJECTS, item
})


export default {
   addFetchedProjects,
   addProject,
   editProject,
   deleteProject,
   isFilterProject,
   filterProjects
}
