import express from 'express';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.get('/api/users', checkToken, async (req, res) => { 
   const users  = await models.User.findAll();

   res.json({data: users});
})

export default router;