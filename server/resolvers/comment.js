export default {   
   
   Mutation: {
      createComment: (parent, {content, ticketId, authorId}, {models}) => {
         return models.Comment.create({
            content, 
            ticketId, 
            authorId
         });
      },

      updateComment: (parent, {id, content}, {models}) => {
         return models.Comment.update({content}, {
            where: {
               id
            }
         });
      },

      deleteComment: (parent, {id}, {models}) => {
         return models.Comment.destroy({
            where: {
               id
            }
         });
      }
   }
}