import {combineResolvers} from 'graphql-resolvers';
import {hasRoleSubmitter, isAuthenticated, isTicketAuthor} from './auth';

export default {

   Query: {
      allTickets: combineResolvers(isAuthenticated, async (parent, args, {models}) => 
         models.Ticket.findAll({where: args})
      ),

      getTicket: combineResolvers(isAuthenticated, async (parent, {id}, {models, userId}) => {
         const ticket = await models.Ticket.findOne({ where: {id} })
         const user = await models.User.findOne({ where: {id: userId} })

         if(ticket.projectId === user.projectId) {
            return ticket;
         } else {
            throw new Error('Only assigned user to this project is allowed to made this operation');
         }
      }),
   },

   Ticket: {
      submitter: async (ticket, args, { loaders }) => await loaders.user.load(ticket.submitterId),

      developer: async (ticket, args, { loaders }) => await loaders.user.load(ticket.developerId),

      project: async (ticket, args, { loaders }) => await loaders.project.load(ticket.projectId),

      comments: (ticket, args, {models}) => {
         return models.Comment.findAll({
            where: {
               ticketId: ticket.id 
            }
         });
      }
   },

   Mutation: {
      createTicket: combineResolvers(
         isAuthenticated, hasRoleSubmitter, 
         (parent, {title, description, developerId, priority, projectId}, {models, userId}) => 
            createTicket(title, description, developerId, priority, projectId, userId)
      ),

      updateTicket: combineResolvers(
         isAuthenticated, hasRoleSubmitter, isTicketAuthor,
         (parent, args, {models, userId}) => 
            models.Ticket.update(args, {
               where: {
                  id: args.id
               }
            })
      ),

      deleteTicket: combineResolvers(
         isAuthenticated, hasRoleSubmitter, isTicketAuthor, 
         (parent, args, {models, userId}) => 
            models.Ticket.destroy({
               where: {
                  id: args.id
               }
            })
      )
   }
}