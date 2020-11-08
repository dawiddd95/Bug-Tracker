export default {
   // Definiujemy wszystkie Query dla projektów
   Query: {
      // Definiujemy Query allProjects ze schemy projects.js
      // (parent, args, context) 
      // parent zawsze piszemy
      // args możemy poddać destrukturyzacji np: jeśli potrzebujemy tylko id w resolverze to napiszemy zamiast args to {id}
      // context możemy poddać destrukturyzacji, będziemy robić to często. Najczęściej będzie to {models, userId}
      // args to jest to co przekazujemy w argumencie zapytania GraphQL np: getProject(id: Int!): Project i to id
      // context to jest to co przekazujemy w kontekście (context: {} w server.js)
      // piszemy : async (parent, {}, {}) jeśli w ciele resolvera musimy użyć await
      allProjects: (parent, {name, description}, {models}) => {
         return models.Project.findAll({
            // Używamy tego where ponieważ chcemy zwrócić wszystkie
            // ale też chcemy filtrować, żeby zwrócić wszystkie o podanym name lub podanym description lub po podanych obu
            where: {
               name,
               description
            }
         });
      },

      getProject: (parent, {id}, {models}) => {
         return models.Project.findOne({
            where: {
               id
            }
         });
      },
   },

   // Definiujemy wszystkie mutacje
   Mutation: {
      createProject: (parent, {name, description}, {models}) => {
         models.Project.create({name, description});
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