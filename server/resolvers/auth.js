import skip from 'graphql-resolvers'
import models from '../db/models'

export const isAuthenticated = (parent, args, {userId}) => {
   if(userId) {
      skip
   } else {
      throw new Error('Unauthorized')
   }
}

export const isAssign = async (parent, {id}, {userId}) => {
   // move this to middleware possibly
   // czy pobierać projectId w middleware, używane to jest wszędzie gdzie używamy isAssign
   const user = await models.User.findOne({ 
      where: {
         id: userId
      }
   })

   if(id === user.projectId) {
      skip
   } else {
      throw new Error('Only assigned user to this project is allowed to made this operation');
   }
}

export const hasRoleAdmin = (parent, args, {userRole}) => {
   if(userRole === 'Admin') {
      skip
   } else {
      throw new Error('Not Allowed')
   }
}

export const hasRoleProjectLeader = (parent, args, {userRole}) => {
   if(userRole === 'ProjectLeader') {
      skip
   } else {
      throw new Error('Not Allowed')
   }
}