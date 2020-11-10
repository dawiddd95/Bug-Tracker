<<<<<<< HEAD
import {createUser} from '../services/user';
=======
import userService from '../services/user';
>>>>>>> tickets-feature

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
         return userService.loginUser(email, password);
      },

      updateUser: (parent, {id, name, surname, email, password, key, active}, {models}) => {
         return models.User.update({name, surname, email, password, key, active}, {where: {id}});
      }
   }
}