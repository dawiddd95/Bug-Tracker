import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

import signupRoute from './routes/signup'
import signinRoute from './routes/signin'

dotenv.config();   

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(signupRoute)
app.use(signinRoute)

app.listen(5000, () => console.log('Now browse to localhost:5000'))