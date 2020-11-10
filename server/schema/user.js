export default `

   type User {
      id: Int!
      name: String
      surname: String
      email: String!
      type: UserTypeExtended!
      active: Boolean!
   }

   enum UserType {
      Admin 
      ProjectLeader 
      Developer 
      Submitter
   }

   enum UserTypeExtended {
      Admin 
      ProjectLeader 
      Developer 
      Submitter
      User
   }
   
   type AuthenticatedUser {
      token: String!
      user: User!
   }

   extend type Query {
      me: User
      
      users (
         id: Int,
         email: String,
         name: String,
         surname: String,
         type: UserTypeExtended,
         active: Boolean
      ): [User]!
      
      getUser(id: Int!): User
   }

   extend type Mutation {
      createUser(
         name: String!
         surname: String!
         email: String!
         password: String!
         repeatPassword: String!
      ): User

      loginUser(
         email: String!
         password: String!
      ): AuthenticatedUser

      updateUser(
         id: Int!
         name: String
         surname: String
         email: String
         type: UserType
         active: Boolean
      ): User

      updateUserPassword(
         id: Int!
         password: String!
         repeatPassword: String!
      ): User
   }
`