import {combineResolvers} from 'graphql-resolvers';
import {hasRoleSubmitter, isAuthenticated, isAssign, isTicketAuthor} from './auth';

export default {

   Query: {
      // To musi być serwis, w ifie będzie sprawdzać jaką ma rolę i wtedy zwraca wszystkie na podstawie developerId lub submitterId lub projectId jeśli to projectLeader lub admin
      allTickets: combineResolvers(isAuthenticated, isAssign, (parent, args, {models}) => 
         models.Ticket.findAll({where: args})
      ),

      getTicket: combineResolvers(isAuthenticated, isAssign, (parent, {id}, {models}) => 
         models.Ticket.findOne({
            where: {
               id
            }
         })
      ),
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