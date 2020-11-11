export default `

   type Comment {
      id: Int!
      content: String!
      createdAt: String!
      updatedAt: String!
      ticketId: Int!
      ticket: Ticket!
      authorId: Int!
      author: User!
   }

   extend type Mutation {
      createComment(
         content: String!
         ticketId: Int!
         authorId: Int!
      ): Comment
      
      updateComment(
         id: Int!
         content: String!
      ): [Int]

      deleteComment(id: Int!): Int!
   } 
`