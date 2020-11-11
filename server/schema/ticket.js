export default `

   type Ticket {
      id: Int!
      title: String!
      description: String!
      status: TicketStatus!
      priority: TicketPriority!
      createdAt: String!
      updatedAt: String!
      submitterId: Int!
      submitter: User!
      developerId: Int!
      developer: User!
      projectId: Int!
      project: Project!
      comments: [Comment]!
   }

   enum TicketStatus {
      new
      ongoing
      done
      blocked
      rejected
   }

   enum TicketPriority {
      low
      normal
      high
   }

   extend type Query {
      allTickets (
         id: Int,
         title: String,
         description: String,
         status: TicketStatus,
         submitterId: Int,
         developerId: Int
         projectId: Int
         priority: TicketPriority
      ): [Ticket]!

      getTicket(id: Int!): Ticket
   }

   extend type Mutation {
      createTicket(
         title: String!
         description: String!
         submitterId: Int!
         developerId: Int
         priority: TicketPriority!
         projectId: Int!
      ): Ticket
      

      updateTicket(
         id: Int!
         title: String
         description: String
         status: TicketStatus
         priority: TicketPriority
         developerId: Int
      ): [Int]
      
      deleteTicket(id: Int!): Int!
   }
`