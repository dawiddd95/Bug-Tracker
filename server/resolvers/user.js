import {combineResolvers} from 'graphql-resolvers';

import {createUser, loginUser, assignProject} from '../services/user';
import {hasRoleAdmin, hasRoleProjectLeader, isAuthenticated} from './auth';


export default {
   Query: {
      me: combineResolvers(isAuthenticated, (parent, args, {models, userId}) => 
         models.User.findOne({where: {id: userId}})
      ),

      users: combineResolvers(isAuthenticated, hasRoleAdmin, (parent, args, {models, userRole}) => 
         models.User.findAll({where: args})
      ),

      getUser: combineResolvers(isAuthenticated, hasRoleAdmin, (parent, {id}, {models}) => 
         models.User.findOne({
            where: {
               id
            }
         })
      ),
   },

   Mutation: {
      createUser: (parent, {name, surname, email, password}, {models}) => {
         return createUser(name, surname, email, password);
      },

      loginUser: (parent, {email, password}, {models}) => {
         return loginUser(email, password);
      },

      updateUser: combineResolvers(isAuthenticated, hasRoleAdmin, (parent, {id, name, surname, email, type, active}, {models}) => 
         models.User.update({name, surname, email, type, active}, {where: {id}})
      ),

      updateUserPassword: combineResolvers(isAuthenticated, hasRoleAdmin, (parent, {id, password}, {models}) => 
         models.User.update({password}, {where: {id}})
      ),

      assignProject: combineResolvers(isAuthenticated, hasRoleProjectLeader, (parent, {id, projectId}, {models}) => 
         assignProject(id, projectId)
      )
   }
}