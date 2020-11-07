export default `

   type Comment {
      id: Int!
      content: String!
      createdAt: String!
      updatedAt: String!
      ticketId: Int!
      authorId: Int!
   }

   extend type Mutation {
      createComment(
         content: String!
         ticketId: Int!
         authorId: Int!
      ): CommentSimple
      
      updateComment(
         id: Int!
         content: String!
      ): CommentSimple

      deleteComment(id: Int!): Int
   } 
`