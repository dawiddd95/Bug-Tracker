import jwt from 'jsonwebtoken';


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

// getUserRoleMiddleware