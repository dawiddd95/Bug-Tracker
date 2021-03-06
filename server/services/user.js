import uuid from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import models from '../db/models'

const SECRET = uuid.v4()

const generateToken = user => {
   return jwt.sign({userId: user.id, userRole: user.type, assignProject: user.projectId}, SECRET)
}

export const createUser = async (name, surname, email, password) => {
   const active = true;
   const hashedPassword = await bcrypt.hash(password, 10);
   
   const user = await models.User.findOne({where: {email}});
   if(user) throw new Error('Email is already in usage');

   return models.User.create({ name, surname, email, password: hashedPassword, active });
}

export const loginUser = async (email, password) => {
   const user = await models.User.findOne({where: {email}})
   if(!user) throw new Error('Wrong user')

   const valid = await bcrypt.compare(password, user.password)
   if(!valid) throw new Error('Wrong password')

   if(!user.active) throw new Error('Wrong user or password')

   return { token: generateToken(user), user}
}

export const assignProject = async (id, projectId) => {
   const user = await models.User.findOne({where: {id}})

   if(user.projectId === null) {
      return models.User.update({projectId}, {where: {id}})
   }
}

export const getUserIdMiddleware = async (req) => {
   try {
      const token = req.headers.authorization
      if (token) {
         const { userId } = await jwt.verify(token, SECRET)
         req.userId = userId
      }
   } catch(err) {
      req.userId = null
   }
  
   req.next()
} 


export const getUserRoleMiddleware = async (req) => {
   try {
      const token = req.headers.authorization
      if (token) {
         const { userRole } = await jwt.verify(token, SECRET)
         req.userRole = userRole
      }
   } catch(err) {
      req.userRole = null
   }
  
   req.next()
}