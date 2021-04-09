import express from 'express';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();

router.patch('/api/user/projects/:id/edit', checkToken, async (req, res) => { 
   const {id} = req.params;
   const {name, desc} = req.body;

   const project = await models.Project.update({name, description: desc}, {where: {id} })
   if(!project) return res.status(404).send('Sorry, resource does not exist')

   const updated = await models.Project.findOne({ where: {id}})
   if(!updated) return res.status(404).send('Sorry, resource does not exist')

   res.json({project: updated})
})

export default router;