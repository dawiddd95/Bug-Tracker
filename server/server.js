import {ApolloServer} from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './db/models';

const server = new ApolloServer({
   typeDefs,
   resolvers,
   context: {
      models
   }
});

//w playground wpisujemy localhost:4000
server.listen().then(({ url }) => {
   console.log(`🚀  Server ready at ${url}`);
});