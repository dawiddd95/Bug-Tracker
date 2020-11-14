export default `

   type Project {
      id: Int!
      name: String!
      description: String!
      createdAt: String!
      updatedAt: String!
      users: [User]!
      tickets: [Ticket]!
   }

   extend type Query {
      allProjects (
         id: Int
         name: String
         description: String
      ): [Project!]!

      getProject(id: Int!): Project
   }

   extend type Mutation {
      createProject(
         name: String!
         description: String!
      ): Project
      
      updateProject(
         id: Int!
         name: String
         description: String
      ): [Int!]
      
      deleteProject(id: Int!): Int!
   }
`