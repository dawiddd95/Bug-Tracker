import {combineResolvers} from 'graphql-resolvers';
import {hasRoleProjectLeader, isAuthenticated, isAssign} from './auth';
import {createProject, deleteProject} from '../services/project';

export default {

   Query: {
      allProjects: combineResolvers(isAuthenticated, (parent, args, {models}) => 
         models.Project.findAll({where: args})
      ),

      getProject: combineResolvers(isAuthenticated, isAssign, (parent, {id}, {models}) => 
         models.Project.findOne({
            where: {
               id
            }
         })
      ),
   },


   Project: {
      users: (project, args, {models}) => {
         return models.User.findAll({
            where: {
               projectId: project.id 
            }
         });
      },

      tickets: (project, args, {models}) => {
         return models.Ticket.findAll({
            where: {
               projectId: project.id 
            }
         });
      },
   },


   Mutation: {
      createProject: combineResolvers(isAuthenticated, hasRoleProjectLeader, (parent, {name, description}, {models, userId}) => 
         createProject(name, description, userId)
      ),

      updateProject: combineResolvers(isAuthenticated, hasRoleProjectLeader, isAssign, (parent, {id, name, description}, {models}) => 
         models.Project.update({name, description}, {
            where: {
               id
            }
         })
      ),

      deleteProject: combineResolvers(isAuthenticated, hasRoleProjectLeader, isAssign, (parent, {id}, {models, userId}) => 
         deleteProject(id, userId)
      )
   }
}