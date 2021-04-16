import express from 'express';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.post('/api/admin/user', checkToken, async (req, res) => { 
   const {id, password} = req.body;

   console.log(id)
   console.log(password)

   const userUpdate = await models.User.update({password}, {where: {id} })
   if(!userUpdate) return res.status(404).send('Sorry, resource does not exist')

   res.json({success: true})
})

export default router;