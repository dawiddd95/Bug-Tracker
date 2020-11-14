import models from '../db/models'


export const createTicket = async (title, description, developerId, priority, projectId, userId) => {
   const user = await models.User.findOne({
      where: {
         id: userId
      }
   });

   if(user.projectId !== projectId) {
      throw new Error('Only assigned user to this project is allowed to made this operation');
   }

   return models.Ticket.create({
      title, 
      description, 
      developerId, 
      priority, 
      projectId,
      submitterId: userId
   });
}