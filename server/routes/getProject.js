import express from 'express';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.get('/api/user/projects/:id', checkToken, async (req, res) => { 
   const {id} = req.params;

   const project = await models.Project.findOne({ 
      include: [
         {model: models.Ticket, as: 'tickets'},
      ],
      where: {id} 
   })

   if(!project) return res.status(404).send('Sorry, resource does not exist')

   res.json({project})
})

export default router;