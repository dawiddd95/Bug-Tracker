import express from 'express';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.get('/api/user/tickets', checkToken, async (req, res) => { 
   const tickets  = await models.Ticket.findAll();

   res.json({data: tickets});
})

export default router;