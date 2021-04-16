import express from 'express';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.patch('/api/users/profile', checkToken, async (req, res) => { 
   const {id, email, name, surname} = req.body;

   const userUpdate = await models.User.update({name, surname, email}, {where: {id} })
   if(!userUpdate) return res.status(404).send('Sorry, resource does not exist')

   const user = await models.User.findOne({ where: {id}})
   if(!user) return res.status(404).send('Sorry, resource does not exist')

   res.json({id: user.id, email: user.email, name: user.name, surname: user.surname, type: user.type})
})

export default router;