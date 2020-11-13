import {combineResolvers} from 'graphql-resolvers';
import {hasRoleProjectLeader, isAuthenticated, isLeader} from './auth';
import {createProject, deleteProject} from '../services/project';

export default {

   Query: {
      allProjects: (parent, args, {models}) => {
         return models.Project.findAll({where: args});
      },

      getProject: (parent, {id}, {models}) => {
         return models.Project.findOne({
            where: {
               id
            }
         });
      },
   },

   Mutation: {
      createProject: combineResolvers(isAuthenticated, hasRoleProjectLeader, (parent, {name, description}, {models, userId}) => 
         createProject(name, description, userId)
      ),

      updateProject: (parent, {id, name, description}, {models}) => {
         return models.Project.update({name, description}, {
            where: {
               id
            }
         });
      },

      deleteProject: combineResolvers(isAuthenticated, hasRoleProjectLeader, isLeader, (parent, {id}, {models, userId}) => 
         deleteProject(id, userId)
      )
   }
}