export default {

   Query: {
      allProjects: (parent, args, {models}) => {
         return models.Project.findAll({where: args});
      },

      getProject: (parent, {id}, {models}) => {
         return models.Project.findOne({
            where: {
               id
            }
         });
      },
   },

   Mutation: {
      createProject: (parent, {name, description}, {models}) => {
         return models.Project.create({name, description});
      },

      updateProject: (parent, {id, name, description}, {models}) => {
         return models.Project.update({name, description}, {
            where: {
               id
            }
         });
      },

      deleteProject: (parent, {id}, {models}) => {
         return models.Project.destroy({
            where: {
               id
            }
         })
      }
   }
}