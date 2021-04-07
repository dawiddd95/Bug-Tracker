import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import models from '../db/models';

const router = express.Router();

router.post('/api/auth/signin', async (req, res) => {
   const {email, password} = req.body;

   const user = await models.User.findOne({where: {email} });
   if(!user) return res.json({success: false, msg: 'Wrong user or password', token: null});

   const passwordIsValid = await bcrypt.compare(password, user.password);
   if(!passwordIsValid) return res.json({success: false, msg: 'Wrong user or password', token: null}); 

   const token = jwt.sign({
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email, 
      // roles: ['all']
   }, process.env.TOKEN_SECRET);

   res.cookie('token', token, { httpOnly: true }).json({success: true, msg: ''}).status(200);
})


export default router;