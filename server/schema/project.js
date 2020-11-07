export default `

   type Project {
      id: Int!
      name: String!
      description: String!
      team: [User]!
      tickets: [Ticket]!
   }

   extend type Query {
      allProjects (
         name: String
         description: String
      ): [Ticket]!

      getProject(id: Int!): Project
   }


   extend type Mutation {
      createProject(
         name: String!
         description: String!
      ): Project
      
      updateProject(
         id: Int!
         name: String!
         description: String!
      ): Project
      
      deleteProject(id: Int!): Int
   }
`