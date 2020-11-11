import {ApolloServer} from 'apollo-server'
import DataLoader from 'dataloader'

import typeDefs from './schema'
import resolvers from './resolvers'
import models from './db/models'
import {batchTickets, batchUsers, batchProjects} from './services/dataLoaders'

const server = new ApolloServer({
   typeDefs,
   resolvers,
   context: {
      models,
      loaders: { 
         ticket: new DataLoader(keys => batchTickets(keys, models)),
         user: new DataLoader(keys => batchUsers(keys, models)),
         project: new DataLoader(keys => batchProjects(keys, models))
      },
   }
});

//w playground wpisujemy http://localhost:4000
server.listen().then(({ url }) => {
   console.log(`🚀  Server ready at ${url}`);
});

