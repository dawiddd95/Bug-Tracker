import {combineResolvers} from 'graphql-resolvers';
import {isAuthenticated, isCommentAuthor} from './auth';

export default {   

   Comment: {
      author: async (comment, args, { loaders }) => await loaders.user.load(comment.authorId),
   },

   Mutation: {
      createComment: combineResolvers(isAuthenticated, (parent, {content, ticketId, authorId}, {models}) => {
         return models.Comment.create({
            content, 
            ticketId, 
            authorId
         });
      }),

      updateComment: combineResolvers(isAuthenticated, isCommentAuthor, (parent, {id, content}, {models}) => {
         return models.Comment.update({content}, {
            where: {
               id
            }
         });
      }),

      deleteComment: combineResolvers(isAuthenticated, isCommentAuthor, (parent, {id}, {models}) => {
         return models.Comment.destroy({
            where: {
               id
            }
         });
      })
   }
}