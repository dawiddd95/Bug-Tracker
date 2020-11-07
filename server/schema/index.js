import userSchema from './user';
import commentSchema from './comment';
import ticketSchema from './ticket';
import projectSchema from './project';

const linkSchema = `
   type Query {
      _: Boolean
   }
   type Mutation {
      _: Boolean
   }
`;

export default [linkSchema, userSchema, commentSchema, ticketSchema, projectSchema];