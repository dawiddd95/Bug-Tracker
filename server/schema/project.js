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

   type ProjectShort {
      id: Int!
      name: String!
      description: String!
      createdAt: String!
      updatedAt: String!
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
      ): ProjectShort!
      
      updateProject(
         id: Int!
         name: String
         description: String
      ): [Int!]
   }
`