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
               // Jeśli przekazujemy args zamiast destrukturyzacji do resolvera to tutaj musimy zamiast id wpisać id: args.id
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