import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
import DataLoader from 'dataloader'
import {makeExecutableSchema} from 'graphql-tools'

import typeDefs from './schema'
import resolvers from './resolvers'
import models from './db/models'
import {batchTickets, batchUsers, batchProjects} from './services/dataLoaders'
import {getUserIdMiddleware, getUserRoleMiddleware} from './services/user'


const schema = makeExecutableSchema({
   typeDefs,
   resolvers,  
})

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(getUserIdMiddleware)
app.use(getUserRoleMiddleware)
app.use('/graphql', graphqlHTTP( req => ({
   schema,
   context: {
      models,
      userId: req.userId,
      userRole: req.userRole,
      loaders: { 
         ticket: new DataLoader(keys => batchTickets(keys, models)),
         user: new DataLoader(keys => batchUsers(keys, models)),
         project: new DataLoader(keys => batchProjects(keys, models))
      },
   }, 
   graphiql: true,
})))

app.listen(5000, () => console.log('Now browse to localhost:5000/graphql'))