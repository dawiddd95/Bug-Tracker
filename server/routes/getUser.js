import express from 'express';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.get('/api/user/:id', checkToken, async (req, res) => { 
   const {id} = req.params;

   const user = await models.User.findOne({ where: {id} })

   if(!user) return res.status(404).send('Sorry, resource does not exist')

   res.json({user})
})

export default router;