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

export const isTicketAuthor = async (parent, args, {userId}) => {
   if(args.submitterId === userId) {
      skip
   } else {
      throw new Error('Only Ticket author is allowed to made this operation');
   }
}

export const isCommentAuthor = async (parent, args, {userId}) => {
   const comment = await models.Comment.findOne({ where: {id: args.id} })

   if(comment.authorId === userId) {
      skip
   } else {
      throw new Error('Only Comment author is allowed to made this operation');
   }
}


export const hasRoleSubmitter = (parent, args, {userRole}) => {
   if(userRole === 'Submitter') {
      skip
   } else {
      throw new Error('Not Allowed')
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