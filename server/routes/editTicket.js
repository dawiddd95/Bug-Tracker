import express from 'express';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.patch('/api/user/tickets/:id/edit', checkToken, async (req, res) => { 
   const {id} = req.params;
   const {title, desc, priority} = req.body;

   const ticket = await models.Ticket.update({title, description: desc, priority}, {where: {id} })
   if(!ticket) return res.status(404).send('Sorry, resource does not exist')

   const updated = await models.Ticket.findOne({ where: {id}})
   if(!updated) return res.status(404).send('Sorry, resource does not exist')

   res.json({ticket: updated})
})

export default router;