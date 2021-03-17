import models from '../db/models'

export const createProject = async (name, description, userId) => {
   const project = await models.Project.create({name, description});

   models.User.update({projectId: project.id}, {
      where: {
         id: userId
      }
   });

   return project;
}