export default `

   type Ticket {
      id: Int!
      title: String!
      description: String!
      status: TicketStatus!
      priority: TicketPriority!
      createdAt: String!
      updatedAt: String!
      submitter: User!
      developer: User
      project: Project!
      comments: [Comment]!
   }

   type TicketSimple {
      id: Int!
      title: String!
      description: String!
      status: TicketStatus!
      submitterId: Int!
      developerId: Int
      priority: TicketPriority!
      submitter: User!
      developer: User
      projectId: Int!
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
      ): TicketSimple
      

      updateTicket(
         id: Int!
         title: String
         description: String
         status: TicketStatus
         priority: TicketPriority
         developerId: Int
      ): TicketSimple
      
      deleteTicket(id: Int!): Int
   }
`