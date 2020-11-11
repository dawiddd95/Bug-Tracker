import {combineResolvers} from 'graphql-resolvers';

import {createUser, loginUser} from '../services/user';
import {isAuthenticated} from './auth';

export default {
   Query: {
      users: (parent, args, {models}) => {
         return models.User.findAll({where: args});
      },

      getUser: (parent, {id}, {models}) => {
         return models.User.findOne({
            where: {
               id
            }
         });
      },
   },

   Mutation: {
      createUser: (parent, {name, surname, email, password}, {models}) => {
         return createUser(name, surname, email, password);
      },

      loginUser: (parent, {email, password}, {models}) => {
         return loginUser(email, password);
      },

      updateUser: (parent, {id, name, surname, email, type, active}, {models}) => {
         return models.User.update({name, surname, email, password, type, active}, {where: {id}});
      },

      updateUserPassword: (parent, {id, password}, {models}) => {
         return models.User.update({password}, {where: {id}});
      }
   }
}