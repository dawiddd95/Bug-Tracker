import {combineResolvers} from 'graphql-resolvers';
import {isAuthenticated} from './auth';
import userService from '../services/user';

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
         return userService.createUser(name, surname, email, password);
      },

      loginUser: (parent, {email, password}, {models}) => {
         return userService.loginUser(email, password);
      },

      updateUser: (parent, {id, name, surname, email, password, key, active}, {models}) => {
         models.User.update({name, surname, email, password, key, active}, {where: {id}});
      }
   }
}