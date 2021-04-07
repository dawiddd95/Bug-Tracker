import express from 'express';
import {validationResult} from 'express-validator';
import uuid from 'uuid';
import bcrypt from 'bcrypt';

import models from '../db/models';
import {accountValidation} from '../services/validations/account';

const router = express.Router();

router.post('/api/auth/signup', accountValidation, async (req, res) => { 
   const {name, surname, email, password, type} = req.body;

   const active = true;
   const hashPassword = await bcrypt.hash(password, 10);

   const account = await models.User.findOne({where: {email}})
   if(account) return res.json({success: false, msg: 'Email is already in usage'})

   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(422).jsonp(errors.array());

   try {
      await models.User.create({ name, surname, email, password: hashPassword, type, active: true})

      res.json({success: true, msg: 'Sign up success. You can now Login to your account'})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;