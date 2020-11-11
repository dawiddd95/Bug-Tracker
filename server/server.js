import {ApolloServer} from 'apollo-server'
import DataLoader from 'dataloader'

import typeDefs from './schema'
import resolvers from './resolvers'
import models from './db/models'
import {batchXXXX} from './services/dataLoaders'

const server = new ApolloServer({
   typeDefs,
   resolvers,
   context: {
      models,
      loaders: { 
         agency: new DataLoader(keys => batchAgencies(keys, models)),
      },
   }
});

//w playground wpisujemy http://localhost:4000
server.listen().then(({ url }) => {
   console.log(`🚀  Server ready at ${url}`);
});

