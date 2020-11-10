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