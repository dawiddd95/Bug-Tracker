import {combineResolvers} from 'graphql-resolvers';

import {createUser, loginUser} from '../services/user';
import {hasRole, isAuthenticated} from './auth';

export default {
   Query: {
      me: combineResolvers(isAuthenticated, (parent, args, {models, userId}) =>  
         models.User.findOne({where: {id: userId}})
      ),

      users: combineResolvers(isAuthenticated, hasRole, (parent, args, {models, userRole}) => 
         models.User.findAll({where: args})
      ),

      getUser: combineResolvers(isAuthenticated, (parent, {id}, {models}) => 
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

      updateUser: combineResolvers(isAuthenticated, (parent, {id, name, surname, email, type, active}, {models}) => 
         models.User.update({name, surname, email, type, active}, {where: {id}})
      ),

      updateUserPassword: combineResolvers(isAuthenticated, (parent, {id, password}, {models}) => 
         models.User.update({password}, {where: {id}})
      )
   }
}