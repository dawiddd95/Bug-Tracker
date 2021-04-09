import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

import signupRoute from './routes/signup'
import signinRoute from './routes/signin'
import listProjectsRoute from './routes/listProjects'
import newProject from './routes/newProject'
import getProject from './routes/getProject'
import editProject from './routes/editProject'

dotenv.config();   

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(signupRoute)
app.use(signinRoute)
app.use(listProjectsRoute)
app.use(newProject)
app.use(getProject)
app.use(editProject)

app.listen(5000, () => console.log('Now browse to localhost:5000'))