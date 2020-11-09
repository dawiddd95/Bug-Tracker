export default {   
   // Definiujemy wszystkie mutacje
   Mutation: {
      createProject: (parent, args, {models}) => {
         return models.Project.create(args);
      },
   }
}