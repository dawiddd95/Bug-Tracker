import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

import signupRoute from './routes/signup'
import signinRoute from './routes/signin'
import listProjectsRoute from './routes/listProjects'
import listTicketsRoute from './routes/listTickets'
import listUsersRoute from './routes/listUsers'
import newProjectRoute from './routes/newProject'
import newTicketRoute from './routes/newTicket'
import getProjectRoute from './routes/getProject'
import getTicketRoute from './routes/getTicket'
import editProjectRoute from './routes/editProject'
import editTicketRoute from './routes/editTicket'
import searchProjectRoute from './routes/searchProjects'
import deleteProjectRoute from './routes/deleteProject'
import editUserRoute from './routes/editUser'
import deleteUserRoute from './routes/deleteUser'
import editPasswordRoute from './routes/editUser'
import newCommentRoute from './routes/newComment'
import deleteTicketRoute from './routes/deleteTicket'

dotenv.config();   

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(signupRoute)
app.use(signinRoute)
app.use(listProjectsRoute)
app.use(listTicketsRoute)
app.use(newProjectRoute)
app.use(newTicketRoute)
app.use(getProjectRoute)
app.use(getTicketRoute)
app.use(editProjectRoute)
app.use(editTicketRoute)
app.use(searchProjectRoute)
app.use(deleteProjectRoute)
app.use(listUsersRoute)
app.use(editUserRoute)
app.use(deleteUserRoute)
app.use(editPasswordRoute)
app.use(newCommentRoute)
app.use(deleteTicketRoute)


app.listen(5000, () => console.log('Now browse to localhost:5000'))