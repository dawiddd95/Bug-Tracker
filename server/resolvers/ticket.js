export default {

   Query: {
      allTickets: (parent, args, {models}) => {
         return models.Ticket.findAll({where: args});
      },

      getTicket: (parent, {id}, {models}) => {
         return models.Ticket.findOne({
            where: {
               id
            }
         });
      },
   },

   Ticket: {
      submitter: (ticket, args, {models}) => {
         return models.User.findOne({
            where: {
               id: ticket.submitterId
            }
         });
      },

      developer: (ticket, args, {models}) => {
         return models.User.findOne({
            where: {
               id: ticket.developerId
            }
         });
      },

      project: (ticket, args, {models}) => {
         return models.Project.findOne({
            where: {
               id: ticket.projectId
            }
         });
      },

      comments: (ticket, args, {models}) => {
         return models.Comment.findAll({
            where: {
               ticketId: ticket.id 
            }
         });
      }
   },

   Mutation: {
      createTicket: (parent, args, {models}) => {
         return models.Ticket.create(args);
      },

      updateTicket: (parent, args, {models}) => {
         return models.Ticket.update(args, {
            where: {
               id: args.id
            }
         });
      },

      deleteTicket: (parent, {id}, {models}) => {
         return models.Ticket.destroy({
            where: {
               id
            }
         })
      }
   }
}