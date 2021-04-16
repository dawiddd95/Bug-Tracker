import express from 'express';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.get('/api/user/tickets/:id', checkToken, async (req, res) => { 
   const {id} = req.params;

   const ticket = await models.Ticket.findOne({ 
        include: [
            {
                model: models.Comment, 
                as: 'comments', 
                include: [{
                    model: models.User,
                    as: 'author'
                }]
            },
        ],
        where: {id} 
   })

   if(!ticket) return res.status(404).send('Sorry, resource does not exist')

   res.json({ticket})
})

export default router;