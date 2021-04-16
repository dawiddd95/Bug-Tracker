import express from 'express';
import Sequelize from 'sequelize';

import models from '../db/models';
import checkToken from '../services/checkToken';

const router = express.Router();
const Op = Sequelize.Op;

router.delete('/api/user/projects/:id', checkToken, async (req, res) => { 
   const id = parseInt(req.params.id, 10);

   try {
      await models.Ticket.destroy({where: {projectId: id}})

      models.Project.destroy({
         include: [
            {model: models.Ticket, as: 'tickets'},
         ],
         where: {id}
      })

      res.json({success: true, error: null})
   } catch(err) {
      res.status(400).send(err)
   }
})

export default router;